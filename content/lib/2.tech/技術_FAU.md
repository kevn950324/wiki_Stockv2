---
title: "技術_FAU"
tags:
  - 技術/FAU
  - 產業/光通訊
  - 環節/光通訊
maturity: mature
updated: 2026-08-30
aliases:
  - FAU
  - Fiber Attach Unit
  - Fiber Array Unit
  - 光纖接頭
  - DFAU
  - dFAU
  - Detachable Fiber Array Unit
  - 可拆卸式光纖陣列單元
  - MPC
  - Multi-Path Connector
  - CPO FAU
  - 天孚
  - 蘅東光
  - 光庫FAU
  - 36芯 FAU
  - 32芯 FAU
  - 保偏光纖 FAU
---

# 技術_FAU

## 定義

FAU（Fiber Attach Unit／Fiber Array Unit）是光模組與 CPO 光引擎中將單根或多根光纖精確對準光晶片端面的精密被動元件，負責光纖到光晶片之間的低損耗耦合。在普通可插拔光模組中，FAU 已是成熟器件；在 CPO 方案中，FAU 面對更高芯數、封裝相容性、插損與可維修性要求，成為量產良率的重要環節。

dFAU／DFAU 的官方全名是 **Detachable Fiber Array Unit（可拆卸式光纖陣列單元）**。它不是所有 CPO FAU 的統稱，而是能拆卸、重新插入的 FAU 介面；目的在於把光引擎驗證前移、改善組裝良率，並讓 CPO 具備現場維修性。固定式 FAU 與可拆卸式 dFAU 是兩種不同設計，不能用「CPO FAU 一律不可插拔」概括。

> [!warning] 名詞校正
> - 既有供應鏈訪談曾把 DFAU 展開為「Discrete FAU」，並把 CPO FAU 描述成固定式。
> - [[research_dFAU_Coherent_CPO_20260830]] 收錄的 Lightmatter 官方規格明確寫作 **Detachable fiber array unit (dFAU)**，且支援插拔與重新插入。
> - [[memo_Coherent毛利率_1.6T良率_OCS_DFAU專家觀點_日期不詳]] 又交替使用「DFU」與「DFAU」，只描述專案仍在投入、尚未產出，未提供結構或正式全名。
> - 因官方產品定義優先，本頁已校正全名；舊訪談中的「DFU／DFAU 良率」仍保留為原始 channel 用語，解讀時需確認其實際指固定式 FAU、可拆式 dFAU，或特定 MPC 方案。

## 圖解

![[報告_Semianalysis_CPO_20260102_010.png]]
*圖（SemiAnalysis，2026-01）：NPO（Near-Packaged Optics）架構剖面——FAU 標示於 PIC+EIC 光引擎（Optical Engine）與光纖陣列的對接界面。圖中呈現的是 FAU 的光學對準位置，不足以單憑剖面判定其為固定式或可拆式；dFAU 則是另以可重複插拔介面改善測試與維修性的設計。*

## 技術原理

### FAU 在光模組中的用量演進

| 速率 | FAU 方案 | 通道數 | 單只 FAU 價格 | 備註 |
|------|---------|--------|------------|------|
| 400G | 2 個 4ch FAU | 2×4 = 8ch | ~120–150 元 | 成熟方案 |
| 800G（DR8）| 3 個 FAU（2×4ch + 1×8ch）| 3×FAU | ~300 元（2025）→ ~200 元（2026E）| 主流 |
| 1.6T CPO | CPO 專用 FAU | 36ch（Spectrum X）| 300–400 元/個 | 有效供給緊缺 |
| 3.2T CPO | 下一代 DFAU | 高芯數 | 500–700 元/個 | 樣品驗證中 |

### CPO FAU 與 dFAU 方案

供應鏈訪談常把下列 CPO 光纖連接路線合稱為 DFAU；官方定義下，是否屬 dFAU 應以能否拆卸與重新插入判斷：

| 方案 | 廠商 | 特點 |
|------|------|------|
| MPC（Multi-Path Connector）| Senko（獨家）| 連接器本身整合凸面鏡，直接完成擴束；無中間橋接結構 |
| TeraMount | Molex（收購）| 金屬卡接件方案 |
| 玻璃載體方案 | 康寧（Corning）| 玻璃載體與晶片耦合，兩端金屬 PIN 對齊 |

Lightmatter vClick 是可明確核實的 dFAU 實例：採垂直擴束光介面、晶圓級被動對準，支援 mold-and-grind 封裝流程；官方規格為插損低於 1.5 dB、80 nm 以上頻寬及 50 次以上插拔循環，並整合 SENKO SEAT／MPC 連接技術。

NVIDIA Spectrum X：可插拔式 FAU，單個 OE 對應 36 芯 FAU；需 **32 個 FAU**/台機器。
NVIDIA Quantum X：固定式 FAU，對應 18 芯；僅幾千台規模（2025 計劃未交付）。

### 外置／內置光源的 FAU 辨識線索

[[memo_EML_InP_CW_ELS_NPO_CPO專家觀點_日期不詳]] 提供一組供應鏈辨識口徑：外置 ELS 配套多準備 36 芯 FAU，垂直耦合與邊緣耦合可用來區分不同 CPO／NPO 設計；另一種把 150／200mW CW 放在 NPO 光引擎內的方案則可能採 32 芯 FAU。這是 Coherent 相關專家對特定設計的描述，不是全產業統一規格，應與平台 BOM、耦合方式及 FAU 圖面交叉驗證。

| 光源形態 | 訪談中的 FAU 線索 | 光路含義 |
|----------|-------------------|----------|
| 外置 ELS | 36 芯、搭配保偏光纖；再依垂直／邊緣耦合區分平台 | 外部高功率 CW 經 PMF 傳至 PIC，光路較長、耦合損失較高 |
| 內置 NPO CW | 32 芯；150／200mW CW 直接放在 ASIC 鄰近光引擎 | 不需外置 ELS 的 PMF 路徑，成本與維修性取捨不同 |

## 關鍵參數 / 判斷指標

| 指標 | 意義 | 2026 觀察重點 |
|------|------|-------------|
| 1.6T FAU 供需缺口 | 量產節奏觀察 | 需求 800 萬只 vs 有效供給 ~700 萬只，缺口 **15%+** |
| CPO FAU 認證進度 | NVIDIA/Google 雙驗線 | NVIDIA ORT 已通過（口頭通知）；Google 2026 年 6 月前 2/4 階段通過 |
| V 槽/鍍膜 零部件 | 瓶頸關注點 | 鍍膜外包仍是 2026 主模式；mini 鍍膜線 2027 才量產 |
| CPO FAU 單價 | 上行週期 | 可插拔光模組 FAU 十幾 USD → CPO FAU 150–200 USD |
| 32／36 芯與耦合方式 | 反推內置／外置光源及 NPO／CPO 架構 | 規格不是一對一標準，需用平台 BOM 與樣品共同驗證 |
| PMF 耦合效率 | 外置光源的功率預算 | Coherent 相關專家估約 60%～70%，低於內置透鏡／隔離器直接耦合的 90%+；信心低 |
| 可重複插拔與插損 | dFAU 的維修性與光功率預算 | Lightmatter vClick 規格為 <1.5 dB、50+ 次插拔；量產需追蹤多次插拔後的一致性 |
| Coherent 相關專案產出 | 驗證 channel claim 是否進入收入階段 | 專家估計 2026Q4～2027Q1 小批量出貨；需公司公告與產品規格確認 |

## 技術瓶頸 / 風險

- **零部件短缺**：隔離片和透鏡是整體整合光源供應最緊缺的兩個環節；FAU 自身的 V 槽蓋板與鍍膜製程是卡脖子。
- **固定式與可拆式分流**：固定式 FAU 一旦通道故障可能牽連整板維修；dFAU 以可拆卸介面改善服務性，但新增的連接界面也需承擔插損、污染與重複插拔可靠度驗證。
- **NVIDIA/Google 規格差異**：尺寸不同（製程和通道數一致），雙驗認證周期延長。
- **1.6T 供需缺口**：2026 年 1.6T FAU 供需缺口率至少 **15%**，極端情形下需求 1,000 萬只（缺口擴大至 30%+）。

## 競爭格局

### Finisar（Coherent）供應體系

| 排名 | 廠商 | 特點 |
|------|------|------|
| 第一 | **天孚通信**（未建頁，中國）| 早期布局、產業鏈最完整 |
| 第二 | **蘅東光**（未建頁，中國）| 海外客戶多年深耕；能生產高芯數 2D 排列 FAU，快速擴產 |
| 第三 | **光庫科技**（未建頁，中國）| 聚焦國內及華為體系 |

Coherent 供應鏈中：蘅東光占 **約 40%** 份額（第二大）。

整合後 FAU 業務：光庫科技（含收購加華微捷 + 蘇州安捷訊）FAU 市場規模將超天孚。安捷訊 2025 年營收接近 8 億元，淨利率 21–22%。

## 關鍵廠商

| 環節 | 廠商 | 角色 |
|------|------|------|
| FAU 供應（全球第一）| 天孚通信（未建頁）| Finisar/Coherent 供應鏈，最完整 |
| FAU 供應（Coherent 40%）| 蘅東光（未建頁）| 高芯數 2D-FAU，擴產快 |
| FAU + TFLN + OCS | 光庫科技（未建頁）| 四大業務，TFLN＋OCS＋FAU 整合廠 |
| MPC 方案（獨家）| Senko（未建頁）| DFAU 連接器方案獨家方案 |
| CPO Shuffle Box | [[COHR.US(coherent)]] | 北美 CPO Shuffle Box（$3,000–5,000）及 FAU 模組 |
| 台灣 FAU / 光纖被動件 | [[3363_上詮（櫃）]] | FAU 台系供應商 |

## 相關技術

- [[技術_CPO]]（CPO 光引擎中 FAU 的角色）
- [[技術_光模塊]]（可插拔光模組 FAU 用量演進）
- [[技術_光互連]]（LPO/CPO/OCS 全景比較）

## 來源

- [[memo_无源光器件大厂调研_FAU_MMC_acecamptech_20260522]]（FAU 供需缺口、CPO FAU 認證、競爭格局、光纖供應）
- [[memo_光通信大厂调研_TFLN_CPO_OCS_acecamptech_20260417]]（DFAU 方案比較、Spectrum X/Quantum X FAU 規格、MPC/TeraMount/Corning 路線）
- [[memo_光通信大厂调研_CPO出货量_FAU_MPC方案_acecamptech_20260529]]（FAU 單價 150–200 USD、CPO FAU 架構、蘅東光地位）
- [[memo_EML_InP_CW_ELS_NPO_CPO專家觀點_日期不詳]] — Coherent 相關專家訪談，日期不詳（2026-08-30 收錄；32／36 芯 FAU、內外置光源、PMF 與耦合效率，信心低）
- [[research_dFAU_Coherent_CPO_20260830]] — Lightmatter／Coherent 官方資料，2026-03-17、2026-08-30 擷取（dFAU 正式全名、規格與 Coherent CPO 技術堆疊）
- [[memo_Coherent毛利率_1.6T良率_OCS_DFAU專家觀點_日期不詳]] — Coherent 相關專家訪談，日期不詳（DFU／DFAU 投入與小批量時程，名詞仍待產品規格確認）

## 相關頁面

- [[技術_COC光模組封裝]]
- [[技術_MPO]]
- [[技術_TFLN]]
- [[分析_CPO_NPO_XPO與409.6T光互連轉折]]
- [[分析_Coherent毛利率與1.6T良率爬坡]]
