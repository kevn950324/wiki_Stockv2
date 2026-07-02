import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/exportPdfButton.scss"

const ExportPdfButton: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button id="export-pdf-button" class={`export-pdf-button ${displayClass ?? ""}`}>
      匯出 PDF
    </button>
  )
}

ExportPdfButton.css = style
ExportPdfButton.afterDOMLoaded = `
  document.getElementById("export-pdf-button")?.addEventListener("click", () => window.print())
`

export default (() => ExportPdfButton) satisfies QuartzComponentConstructor
