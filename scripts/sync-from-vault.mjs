import { copyFile, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import { randomUUID } from "node:crypto"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseArgs } from "node:util"

const { values, positionals } = parseArgs({
  options: { preview: { type: "boolean" } },
  allowPositionals: true,
})
if (positionals.length > 1) throw new Error("Usage: sync-from-vault.mjs [vault] [--preview]")
const vault = path.resolve(positionals[0] ?? "..")
const content = fileURLToPath(new URL("../content/", import.meta.url))
const manifest = path.join(vault, "proceed", "publish_preview.json")
const raw = "data_base/Raw_data"
const managed = new Set(["lib", "attachments", "reports", "raw-data"])
const privatePages = new Set([
  "lib/1.company/TW/7853_政美應用（興）.md",
  "lib/4.analyze/分析_政美應用先進封裝檢測與軟體轉型_20260904.md",
  "lib/5.schedule/時程_2026-2028政美應用催化劑.md",
])
const privateMarkers = ["政美應用", "memo_國泰證期_政美應用CallMemo_20260904"]

// All manifest paths are relative to the vault (source) or site content (destination).
function inside(root, relative) {
  const dest = path.resolve(root, relative)
  const rel = path.relative(root, dest)
  if (!rel || rel.split(path.sep)[0] === ".." || path.isAbsolute(rel)) {
    throw new Error(`Path outside ${root}: ${relative}`)
  }
  return dest
}

async function* files(root, prefix = "") {
  const entries = await readdir(path.join(root, prefix), { withFileTypes: true })
  entries.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
  for (const entry of entries) {
    const rel = path.posix.join(prefix, entry.name)
    if (entry.isDirectory()) yield* files(root, rel)
    else if (entry.isFile()) yield rel
    else throw new Error(`Unsupported file type: ${path.join(root, rel)}`)
  }
}

function sanitize(original) {
  if (!original.includes(" / 政美") && !privateMarkers.some((m) => original.includes(m))) return original
  return original.replaceAll(" / 政美", "").split(/\r?\n/)
    .filter((line) => !privateMarkers.some((marker) => line.includes(marker)))
    .join("\n").replace(/\n{2,}$/, "\n")
}

function downloadPage(source) {
  const name = path.posix.basename(source)
  const title = path.posix.basename(name, path.posix.extname(name))
  const kind = path.posix.extname(name).slice(1).toUpperCase()
  return `---
title: ${JSON.stringify(title)}
tags:
  - Raw_data
  - ${kind}
---

# ${title}

這是 Stock Wiki 公開原始資料索引頁。

- 類型：${kind}
- [下載原始檔案](./${encodeURI(name)})
`
}

const planned = new Map()
const generatedText = new Map()
const skipped = []
const retained = []
const removed = []
function add(category, source, destination, body) {
  inside(content, destination)
  if (planned.has(destination)) throw new Error(`Duplicate destination: ${destination}`)
  planned.set(destination, { category, source, destination, change: "新增" })
  if (body !== undefined) generatedText.set(destination, body)
}

const embeds = new Set()
for await (const source of files(vault, "lib")) {
  if (privatePages.has(source)) {
    skipped.push({ source, reason: "私人頁面" })
    continue
  }
  if (!source.endsWith(".md")) {
    add("知識庫隨附檔", source, source)
    continue
  }
  const original = await readFile(inside(vault, source), "utf8")
  const body = sanitize(original)
  add("知識頁", source, source, body === original ? undefined : body)
  for (const match of body.matchAll(/!\[\[([^\]|#]+)(?:\|[^\]]*)?\]\]/g)) embeds.add(match[1].trim())
}

for (const name of [...embeds].sort()) {
  const asset = inside(path.join(vault, "data_base", "attachment"), name)
  const report = inside(path.join(vault, "output"), name)
  if (existsSync(asset)) {
    const source = path.relative(vault, asset).split(path.sep).join("/")
    add("引用附件", source, path.posix.join("attachments", name))
    add("引用附件", source, name)
  } else if (existsSync(report)) {
    add("自製報告", path.posix.join("output", name), path.posix.join("reports", name))
  } else {
    skipped.push({ reference: name, reason: "找不到引用檔" })
  }
}

if (existsSync(path.join(vault, raw))) {
  for await (const source of files(vault, raw)) {
    const ext = path.posix.extname(source).toLowerCase()
    const memoDocx = ext === ".docx" && source.startsWith(`${raw}/memo/`)
    if (ext !== ".pdf" && !memoDocx) continue
    if (ext === ".pdf" && (await stat(inside(vault, source))).size > 25 * 1024 * 1024) {
      skipped.push({ source, reason: "PDF 超過 25 MiB" })
      continue
    }
    const destination = path.posix.join("raw-data", path.posix.relative(raw, source))
    add(memoDocx ? "原始資料 DOCX" : "原始資料 PDF", source, destination)
    add("原檔下載頁", source, destination + ".md", downloadPage(source))
  }
}

if (existsSync(content)) {
  for await (const destination of files(content)) {
    const entry = planned.get(destination)
    if (!entry) {
      if (managed.has(destination.split("/")[0])) removed.push(destination)
      else retained.push(destination)
      continue
    }
    const dest = inside(content, destination)
    const source = inside(vault, entry.source)
    const body = generatedText.get(destination)
    const size = body === undefined ? (await stat(source)).size : Buffer.byteLength(body)
    entry.change = "更新"
    if ((await stat(dest)).size === size) {
      const expected = body === undefined ? await readFile(source) : Buffer.from(body)
      if (expected.equals(await readFile(dest))) entry.change = "相同"
    }
  }
}

const entries = [...planned.values()]
const counts = {}
const changes = { 新增: 0, 更新: 0, 相同: 0 }
for (const { category, change } of entries) {
  counts[category] = (counts[category] ?? 0) + 1
  changes[change] += 1
}
const inventory = { sourceRoot: vault, destinationRoot: content, counts, changes, entries, removed, retained, skipped }
await mkdir(path.dirname(manifest), { recursive: true })
const temp = `${manifest}.${randomUUID()}.tmp`
try {
  await writeFile(temp, JSON.stringify(inventory, null, 2) + "\n", "utf8")
  await rename(temp, manifest)
} finally {
  await rm(temp, { force: true })
}

console.log(`發布清單 ${manifest}`)
console.table(counts)
console.log(`新增 ${changes.新增}，更新 ${changes.更新}，相同 ${changes.相同}`)
console.log(`同步目的檔 ${entries.length}，移除 ${removed.length}，網站既有保留 ${retained.length}，略過 ${skipped.length}`)
if (!values.preview) {
  for (const { source, destination, change } of entries) {
    if (change === "相同") continue
    const dest = inside(content, destination)
    await mkdir(path.dirname(dest), { recursive: true })
    if (generatedText.has(destination)) await writeFile(dest, generatedText.get(destination), "utf8")
    else await copyFile(inside(vault, source), dest)
  }
  for (const destination of removed) await rm(inside(content, destination))
}
