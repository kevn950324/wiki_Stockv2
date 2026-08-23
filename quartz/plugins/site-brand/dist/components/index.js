import { h } from "preact"

function rootPath(slug) {
  const depth = Math.max(0, (slug ?? "").split("/").filter(Boolean).length - 1)
  return depth === 0 ? "." : "..".repeat(depth).replace(/\.\./g, "../").replace(/\/$/, "")
}

const SiteBrandComponent = ({ fileData }) => {
  const root = rootPath(fileData?.slug)
  const link = (path) => `${root}/${path}`
  const items = [
    ["公司", "lib/1.company"],
    ["技術", "lib/2.tech"],
    ["供應鏈", "lib/3.supply_chain"],
    ["分析", "lib/4.analyze"],
    ["時程", "lib/5.schedule"],
  ]

  return h("div", { class: "site-brand" }, [
    h("a", { class: "site-brand-link", href: root, "aria-label": "回到 Stock LLM Wiki 首頁" }, [
      h("span", { class: "site-brand-logo", "aria-hidden": "true" }, "S"),
      h("span", { class: "site-brand-name" }, "Stock LLM Wiki"),
    ]),
    h("nav", { class: "site-nav", "aria-label": "主要導覽" },
      items.map(([label, path]) => h("a", { href: link(path), class: "site-nav-link" }, label)),
    ),
  ])
}

SiteBrandComponent.css = `
.site-brand { display: flex; align-items: center; gap: 1.4rem; width: 100%; }
.site-brand-link { display: inline-flex; align-items: center; gap: .55rem; color: var(--dark); text-decoration: none; white-space: nowrap; }
.site-brand-logo { display: grid; place-items: center; width: 2rem; height: 2rem; border-radius: .55rem; background: linear-gradient(135deg, #0e2f3a, #0e4d64); color: #f0b350; font-weight: 800; }
.site-brand-name { font-size: 1.04rem; font-weight: 800; letter-spacing: -.02em; }
.site-nav { display: flex; align-items: center; gap: .2rem; flex: 1; }
.site-nav-link { padding: .42rem .68rem; border-radius: .5rem; color: var(--gray); font-size: .88rem; font-weight: 700; text-decoration: none; }
.site-nav-link:hover { color: var(--secondary); background: color-mix(in srgb, var(--secondary) 9%, transparent); }
@media all and (max-width: 800px) { .site-brand { gap: .7rem; } .site-brand-name { display: none; } .site-nav { gap: 0; overflow-x: auto; } .site-nav-link { padding: .42rem .45rem; font-size: .78rem; } }
`

export const SiteBrand = () => SiteBrandComponent
