import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { copyFile, mkdir, mkdtemp, readFile, readdir, rm, truncate, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"

test("preview and sync use the same file inventory", async (t) => {
  const vault = await mkdtemp(path.join(os.tmpdir(), "stock-wiki-preview-"))
  t.after(() => rm(vault, { recursive: true, force: true }))
  const site = path.join(vault, "site")
  const content = path.join(site, "content")
  const script = path.join(site, "scripts/sync-from-vault.mjs")
  async function put(relative, body) {
    const file = path.join(vault, relative)
    await mkdir(path.dirname(file), { recursive: true })
    await writeFile(file, body)
    return file
  }
  await mkdir(path.dirname(script), { recursive: true })
  await copyFile(new URL("./sync-from-vault.mjs", import.meta.url), script)
  const page = "lib/4.analyze/note.md"
  await put(page, "# note\n![[chart.png]]\n![[paper.pdf]]\n政美應用 ![[secret.png]]\n")
  await put("lib/1.company/TW/7853_政美應用（興）.md", "private")
  await put("lib/map.canvas", "{}")
  await put("data_base/attachment/chart.png", "chart")
  await put("output/paper.pdf", "report")
  await put("data_base/Raw_data/報告/original.PDF", "raw")
  await put("data_base/Raw_data/報告/private.docx", "excluded")
  await put("data_base/Raw_data/memo/event.docx", "memo")
  await truncate(await put("data_base/Raw_data/large.pdf", ""), 25 * 1024 * 1024 + 1)
  await put("site/content/data_base/old.pdf", "keep")
  await put("site/content/lib/old.md", "retire")
  await put("site/content/lib/map.canvas", "[]")

  async function run(...args) {
    const result = spawnSync(process.execPath, [script, vault, ...args], { encoding: "utf8" })
    assert.equal(result.status, 0, result.stderr)
    return JSON.parse(await readFile(path.join(vault, "proceed/publish_preview.json"), "utf8"))
  }
  const preview = await run("--preview")
  assert.deepEqual(await readdir(content), ["data_base", "lib"])
  assert.equal(await readFile(path.join(content, "lib/old.md"), "utf8"), "retire")
  assert.deepEqual(preview.retained, ["data_base/old.pdf"])
  assert.deepEqual(preview.removed, ["lib/old.md"])
  assert.equal(preview.skipped.length, 2)
  assert.deepEqual(preview.changes, { 新增: 8, 更新: 1, 相同: 0 })
  assert.deepEqual(await run(), preview)
  const actual = (await readdir(content, { recursive: true, withFileTypes: true }))
    .filter((f) => f.isFile())
    .map((f) => path.relative(content, path.join(f.parentPath, f.name)).split(path.sep).join("/"))
  const destinations = preview.entries.map((e) => e.destination)
  assert.deepEqual(new Set(destinations), new Set([
    page, "lib/map.canvas", "attachments/chart.png", "chart.png", "reports/paper.pdf",
    "raw-data/報告/original.PDF", "raw-data/報告/original.PDF.md",
    "raw-data/memo/event.docx", "raw-data/memo/event.docx.md",
  ]))
  assert.deepEqual(actual.sort(), [...destinations, ...preview.retained].sort())
  assert.equal(await readFile(path.join(content, page), "utf8"), "# note\n![[chart.png]]\n![[paper.pdf]]\n")
  assert.match(await readFile(path.join(content, "raw-data/報告/original.PDF.md"), "utf8"), /\(\.\/original\.PDF\)/)
  const repeat = await run()
  assert.deepEqual(repeat.removed, [])
  assert.deepEqual(repeat.changes, { 新增: 0, 更新: 0, 相同: 9 })
})
