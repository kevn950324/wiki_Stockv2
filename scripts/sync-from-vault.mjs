import { cp, mkdir, readFile, readdir, rm, stat } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const vaultRoot = path.resolve(process.argv[2] ?? "..")
const siteRoot = path.dirname(fileURLToPath(import.meta.url))
const sourceLib = path.join(vaultRoot, "lib")
const targetLib = path.join(siteRoot, "..", "content", "lib")
const sourceAttachments = path.join(vaultRoot, "data_base", "attachment")
const targetAttachments = path.join(siteRoot, "..", "content", "attachments")
const sourceReports = path.join(vaultRoot, "output")
const targetReports = path.join(siteRoot, "..", "content", "reports")
const sourceRawData = path.join(vaultRoot, "data_base", "Raw_data")
const targetRawData = path.join(siteRoot, "..", "content", "raw-data")
const sourceMemo = path.join(sourceRawData, "memo")
const maxPublishBytes = 100 * 1024 * 1024

if (!existsSync(sourceLib)) throw new Error(`找不到 vault lib/: ${sourceLib}`)

await rm(targetLib, { recursive: true, force: true })
await cp(sourceLib, targetLib, { recursive: true })
await rm(targetAttachments, { recursive: true, force: true })
await mkdir(targetAttachments, { recursive: true })
await rm(targetReports, { recursive: true, force: true })
await mkdir(targetReports, { recursive: true })
await rm(targetRawData, { recursive: true, force: true })
await mkdir(targetRawData, { recursive: true })

const markdownFiles = []
async function collect(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) await collect(fullPath)
    else if (entry.name.endsWith(".md")) markdownFiles.push(fullPath)
  }
}
await collect(targetLib)

const imageNames = new Set()
for (const file of markdownFiles) {
  const text = await readFile(file, "utf8")
  for (const match of text.matchAll(/!\[\[([^\]|#]+)(?:\|[^\]]*)?\]\]/g)) imageNames.add(match[1].trim())
}

if (existsSync(sourceAttachments)) {
  for (const name of imageNames) {
    const source = path.join(sourceAttachments, name)
    const report = path.join(sourceReports, name)
    if (existsSync(source)) await cp(source, path.join(targetAttachments, name))
    else if (existsSync(report)) await cp(report, path.join(targetReports, name))
  }
}

const rawPdfFiles = []
let skippedRawFiles = 0
async function collectRawPdfs(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) await collectRawPdfs(fullPath)
    else if (entry.name.toLowerCase().endsWith(".pdf")) {
      if ((await stat(fullPath)).size <= maxPublishBytes) rawPdfFiles.push(fullPath)
      else skippedRawFiles += 1
    }
  }
}

if (existsSync(sourceRawData)) {
  await collectRawPdfs(sourceRawData)
  for (const source of rawPdfFiles) {
    const relative = path.relative(sourceRawData, source)
    const target = path.join(targetRawData, relative)
    await mkdir(path.dirname(target), { recursive: true })
    await cp(source, target)
  }
}

const memoDocxFiles = []
async function collectMemoDocx(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) await collectMemoDocx(fullPath)
    else if (entry.name.toLowerCase().endsWith(".docx")) memoDocxFiles.push(fullPath)
  }
}

if (existsSync(sourceMemo)) {
  await collectMemoDocx(sourceMemo)
  for (const source of memoDocxFiles) {
    const relative = path.relative(sourceRawData, source)
    const target = path.join(targetRawData, relative)
    await mkdir(path.dirname(target), { recursive: true })
    await cp(source, target)
  }
}

console.log(`同步 lib 頁面：${markdownFiles.length}`)
console.log(`同步引用圖片：${imageNames.size}`)
console.log(`同步 Raw_data PDF：${rawPdfFiles.length}`)
console.log(`略過超過 100 MB 的 Raw_data 檔案：${skippedRawFiles}`)
console.log(`同步 memo DOCX：${memoDocxFiles.length}`)
