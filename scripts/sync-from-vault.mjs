import { cp, mkdir, readFile, readdir, rm } from "node:fs/promises"
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

if (!existsSync(sourceLib)) throw new Error(`找不到 vault lib/: ${sourceLib}`)

await rm(targetLib, { recursive: true, force: true })
await cp(sourceLib, targetLib, { recursive: true })
await rm(targetAttachments, { recursive: true, force: true })
await mkdir(targetAttachments, { recursive: true })
await rm(targetReports, { recursive: true, force: true })
await mkdir(targetReports, { recursive: true })

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

console.log(`同步 lib 頁面：${markdownFiles.length}`)
console.log(`同步引用圖片：${imageNames.size}`)
