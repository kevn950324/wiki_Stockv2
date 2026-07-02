---
title: "技術_CPO"
tags:
  - 技術/CPO
  - 產業/AI伺服器
  - 環節/光通訊
maturity: developing
updated: 2026-06-29
aliases:
  - CPO
  - Co-Packaged Optics
  - 共封裝光學
  - Optical Engine
  - 光引擎
  - OE
  - COUPE
  - TSMC COUPE
  - ELS
  - External Laser Source
  - 外部雷射源
  - FAU
  - Fiber Attach Unit
  - MRM
  - MZM
  - EAM
  - 微環調變器
  - LPO
  - NPO
  - Linear Pluggable Optics
  - TeraPHY
  - Photonic Fabric
  - Quantum-X Photonics
  - Spectrum-X Photonics
---

# 技術_CPO

## 定義

CPO（Co-Packaged Optics，共封裝光學）是把「光引擎（Optical Engine, OE）」直接封裝在 XPU 或交換器 ASIC 旁邊的互連技術。傳統可插拔光模組（transceiver）插在前面板的 cage 上，距離 ASIC 約 15–30 cm，訊號得先用長距（LR）SerDes 拉過去、再經模組內的 DSP 還原與轉光；CPO 把光引擎移到 ASIC 旁，省掉 DSP、改用低功耗短距 SerDes，較 DSP 可插拔光模組可省電 50% 以上（業界目標上看 80%）。

CPO 在 **scale-out（後端橫向擴展）** 提供選項，但真正的主戰場是 **scale-up（縱向擴展，GPU 對 GPU 高頻寬低延遲互連）**——銅互連的觸及距離只有約 2 公尺，限制了單一 scale-up 域的「world size」，光互連是突破機櫃邊界把 world size 做大的關鍵。SemiAnalysis 判斷 CPO 的 TAM 會由 scale-up 主導。

## 圖解

![[報告_Semianalysis_CPO_20260102_001.png]]
*圖（SemiAnalysis，2026-01）：CPO 概念——光引擎緊鄰 XPU/ASIC，省去 DSP 與長距 SerDes，較 DSP 光模組大幅降低每位元能耗。*

![[報告_Semianalysis_CPO_20260102_008.png]]
*圖（SemiAnalysis，2026-01）：CPO 系統內 PIC（光子）／EIC（電子）與光纖耦合的封裝關係示意。*

## 技術原理

**互連演進**：銅 →（co-packaged copper）→ DSP 光模組 → LPO（線性可插拔，去 DSP）→ CPO。每一步都在拿掉訊號鏈上的耗電元件。

![[報告_Semianalysis_CPO_20260102_014.png]]
*圖（SemiAnalysis，2026-01）：從 DSP-based transceiver 演進到 LPO 再到 CPO 的訊號鏈簡化。*

**封裝整合：TSMC COUPE（Compact Universal Photonic Engine）成為主流選項。** PIC（含調變器、波導、光偵測器）用成熟的 N65 製程（光元件不靠微縮、大尺寸反而更好）；EIC（驅動器、TIA、控制邏輯）用先進的 N7。兩顆 die 以 TSMC SoIC 無凸塊混合鍵合，在 iso-power 下較凸塊整合提供逾 23 倍的頻寬密度。採 COUPE 等於綁定 TSMC 製造的 PIC（TSMC 不替其他晶圓廠的 SiPho 晶圓做封裝）。Nvidia、Broadcom、Ayar Labs 等都把 COUPE 納入路線。

**調變器三選一（MZM／MRM／EAM）**：
- **MRM（微環）**：體積小、可直接做波長多工，但對溫度極敏感（約 70–90 pm/°C，2°C 漂移就可能讓共振失效），需加熱器穩定。Nvidia/TSMC 已能量產 200G MRM。
- **MZM（馬赫–曾德）**：最易實作、熱穩定佳，但體積大、需高電壓擺幅、耗電。
- **EAM（電吸收）**：體積小、熱容忍度高（可容忍瞬間 35°C），是 Celestial AI 的差異化選擇（GeSi EAM，C-band），但較難進入開放 chiplet 生態。

**外部雷射源（ELS）**：CPO 需較高功率的 CW DFB 雷射（每顆約 350 mW）。Nvidia Q3450 用 18 個 ELS 模組、每模組 8 顆 CW DFB chip。

**光纖耦合（FAU）**：邊緣耦合（edge coupling）vs 光柵耦合（grating coupling，GC）。GC 利於 2D 密度與晶圓級測試，TSMC COUPE 偏好 GC + MRM。

**頻寬擴展的多重向量**：更多光纖、WDM（波長多工）、更高階調變、提高 baud rate——這是 CPO 相對銅（只能靠更快 SerDes 硬拚）的結構優勢。

## 關鍵參數 / 判斷指標

| 指標 | 意義 | 觀察重點 |
|------|------|----------|
| 光引擎 attach 良率 | 每顆 OE 耦合後須完好（焊接基板無返工路徑） | 目前約 95%；量產經濟需 ~99.5%；32 顆 COUPE 下 95%^32 ≈ 1% 系統良率，99.5% 才達 ~85% |
| 插入損耗（insertion loss） | 吃掉光通道預算 | Spectrum 6 CPO 曾測得 4.5 dB，吃光整個通道預算 |
| 每 lane 速率 | 200G PAM4 為現階段主流 | MRM 能否穩定跑 200G |
| 每位元能耗（pJ/bit） | CPO 賣點 | 較 DSP 光模組省 >50%，目標 80% |
| 調變器熱穩定性 | 直接影響可靠度 | MRM 敏感、EAM 容忍度高 |

## 技術瓶頸 / 風險

- **系統級整合良率是主要關卡**：在 32 顆 COUPE 規模下，attach 良率複利效應使系統良率極低，且焊接式 OE 無返工路徑。
- **可靠度與可維修性**：Google 因可靠度疑慮短期不採 CPO。
- **時程下修風險**（見下方衝突 callout）。

> [!warning] 資訊衝突：CPO 量產時程（觀點演進）
> - [[報告_Semianalysis_CPO_20260102]]（報告日：2026-01-02）：結構性看多，scale-up CPO 自 2026 起放量（AWS/AMD/Feynman），scale-out 由 Nvidia/Broadcom 2025–2026 帶動；Celestial AI 在 Marvell 旗下估 2028 年底達 $1B run-rate。
> - [[報告_Semianalysis_CPOand800VDC_20260609]]（報告日：2026-06-09）：**重設預期**——「2027 CPO 預期太積極」，將下修 2026/2027 的 scale-out CPO 出貨；Spectrum 6 CPO（SN810/SN800）滑期逾兩季、4.5 dB 插損問題未解；市場估 2027 年產 7–10 萬台以上 scale-out CPO 交換器「過於積極」；scale-up CPO 仍自 2026 爬升，但 2028 的跳升「看起來樂觀」。
> - 狀態：同機構（作者群含 Nishball）半年後對自身積極時間表的下修，較新且含實測數字者可信度較高。

## 關鍵廠商

| 環節 | 廠商 | 角色 |
|------|------|------|
| 交換器 / GPU 平台 | [[NVDA.US(nvidia)]] | Quantum-X / Spectrum-X Photonics；首批 COUPE 產品 |
| 交換器 ASIC | [[AVGO.US(broadcom)]] | Humboldt→Bailly→Davisson；CPO 老將，未來轉 COUPE |
| 客製 ASIC / 光互連 | [[MRVL.US(marvell)]] | 收購 Celestial AI，切入 scale-up 光互連 |
| 封裝整合平台 | [[2330_台積電（市）]] | COUPE（PIC N65 + EIC N7，SoIC 混合鍵合） |
| 雷射 / ELS | [[LITE.US(lumentum)]] | Nvidia 首批 CPO ELS 預期主供應商 |
| FAU / 光纖被動件 | [[3363_上詮（櫃）]] | 光纖被動元件、FAU 相關 |
| CPO Insertion 3/4 ATE + 光學對準 | [[2360_致茂（市）]] | Insertion 1 驗證中、Insertion 3 ATE+光學對準切入確認、Insertion 4 FT/SLT 核心強項 |
| CPO Insertion 1-3 探針台 | [[6223_旺矽（櫃）]] | Insertion 1 驗證中、Insertion 2 雙面探針台認證中、Insertion 3 確認 |
| CPO Insertion 3 光通量檢測 | [[6710_汎銓（市）]] | IR-OM 光損偵測裝置，漏光偵測與精準定位 |
| CPO Insertion 2-3 光耦合設備 | [[6187_萬潤（市）]] | FAU 貼合 + 光耦合機台；UPH 聲稱優於主競 ficonTEC；3Q26 首現 CPO 業績（SRS 期中，信心：中）|
| CPO 自動光纖耦合設備（主供）| ficonTEC（飛控泰克，德國未上市）| 博通傳統首供；5 nm 級運動控制精度，單台約 $500 萬 USD，CPO 耦合良率 80–90%，交付周期 9–12 個月；產能瓶頸源於製造周期長、無法完全自動化；當前實質壟斷 CPO 耦合設備 |
| CPO 自動光纖耦合設備（第二供）| 科瑞技術（中國，未建頁）| 2026-01 小批量導入博通產線；當前精度亞微米級，良率約 60%（量產門檻需達 80%）；與 ficonTEC 存在約 2 年技術代際差距；博通引入邏輯：降成本 + 供應鏈安全，非技術不滿 |
| CPO 耦合設備（硅光方向）| ASMPT（新加坡上市，未建頁）| 技術水平接近 ficonTEC，主聚焦矽光工藝，尚未切入 CPO 賽道 |

CPO 純玩家（本次未建頁）：Ayar Labs（TeraPHY，UCIe 光 retimer chiplet）、Nubis（2025/10 被 Ciena 收購，MZM、2D 光纖陣列）、Celestial AI（被 Marvell 收購，EAM、Photonic Fabric）、Lightmatter（Passage M1000 光中介層）、Xscape Photonics（ChromX 可程式雷射）、Ranovus（Odin OE）、Scintil（LEAF Light）。整合測試端（未建頁）：GlobalFoundries、Tower、ASE/SPIL、[[AMKR.US(amkor)]]、Fabrinet、Keysight、Teradyne。

## CPO 光測試流程（Insertion 1-4）

CPO 測試隨製程展開，分為四個插入測試階段（Insertion 1-4），由終端驗證擴展嵌入全製造流程。光測試設備需求隨此轉型大幅增加（CPO ATE 320 萬 USD + 探針台 320 萬 USD = 系統合計 > 640 萬 USD，遠高於傳統電測試 5-300 萬 USD）。

![[光測試期中產業報告_008.png]]
*圖（SRS，2026）：CPO Insertion 1-4 測試全流程——從 PIC 晶圓級到 ASIC+OE 系統封裝後 FT/SLT，測試嵌入製造每個關鍵節點。*

| 階段 | 製程位置 | 測試目標 | 主要設備廠 | 台廠切入 |
|------|---------|---------|----------|---------|
| **Insertion 1** | PIC 鍵合前，晶圓級 | 基礎光學探測，篩檢裸粒性能 | Teradyne ATE、ficonTEC 探針台、Keysight | 致茂（ATE，驗證中）、旺矽（探針台，驗證中）|
| **Insertion 2** | EIC+PIC 鍵合後、切割前 | 光電轉換效率 + 雙面光電同測 | Teradyne/Advantest ATE、ficonTEC 探針台 | 旺矽（雙面探針台，認證中）|
| **Insertion 3** | 晶圓切割後、系統封裝前，Die Level | OE + FAU 整合功能驗證 | ATE + 光學對準 + 探針台 + 光通量檢測 | 致茂（ATE + 光學對準）、旺矽（探針台）、汎銓（光通量檢測）、[[6187_萬潤（市）]]（光耦合設備）|
| **Insertion 4** | ASIC + OE 系統封裝後 FT/SLT | 整機光電相容性 + 熱穩定性驗證 | ATE + Handler（3,000W 功耗）| 致茂（FT/SLT，核心強項）|

### Hybrid Bonding 良率與成本壓力

![[光測試期中產業報告_007.png]]
*圖（SRS，2026）：COUPE 異質整合難度大幅提升——Hybrid bonding 初期良率僅 35%，推動光測試成為良率控管關鍵（報廢成本每顆 OE 額外增加約 32 美元，佔系統 BOM 約 50%）。*

> [!warning] 重要數字（SRS 研究，信心：中）
> - Hybrid bonding 初期良率：~35%（量產門檻估 >80%）
> - 35% 良率假設下，每顆光學引擎額外增加約 **32 美元成本**（良品分攤報廢）
> - 單一良率損失佔系統 BOM 約 **50%**
> - 2026 年 OE 需求：121.6 萬顆；2027 年：783.9 萬顆（年增 **6.4 倍**）
> - CPO 2030 年滲透率目標：**35%**

### Quantum x800 Q3450 BOM

| 元件 | 數量 | 總價（USD）| 佔比 |
|------|------|-----------|------|
| FAU | 72 | $2,880 | 4% |
| 1.6T 光引擎（OE）| 72 | $4,680 | 7% |
| Substrate Interposer | 24 | $22,320 | 33% |
| Switch Chip | 4 | $3,200 | 5% |
| ELS | 18 | $6,300 | 9% |
| MPO 連接器、跳線 | 144 | $5,760 | 9% |
| Shuffle Box | 1 | $3,000 | 4% |
| Others | — | $18,800 | 29% |
| **合計** | — | **$66,940** | 100% |

（光引擎 OE + FAU 合計僅佔 11%，系統成本由運算晶片與先進封裝主導）

## CPO 設備生態

CPO 光纖耦合是整條光模塊產線台數最多、精度要求最高的環節（台數比例：1 台共晶 + 3 台固晶 + **16–20 台耦合**），貼片、耦合、測試合計佔整線價值約 90%。

### 耦合精度決定供給格局

| 設備類別 | 耦合精度 | 技術難度 | 國產化狀況 |
|---------|---------|---------|----------|
| 普通光模塊耦合 | 3–5 µm | 基準 | 較高（普莱信、猎奇等，紅海競爭）|
| **CPO 耦合** | **< 0.3 µm** | **約 10×** | **極低，ficonTEC 實質壟斷** |

### 設備投資規模估算

2026 年光模塊新增設備投資約 200–300 億元（基於 800G 出貨 6,000 萬支 + 1.6T 出貨 2,000 萬支）。

**設備需求三重乘數**（彈性遠大於出貨量）：
1. 新增產能（量的增加）
2. 精度升級→台數增加（1.6T 耦合時間 5–6 min vs 800G 約 4 min，同等出貨需多 25–50% 台數）
3. 單台設備價值量提升（CPO 耦合機 ~$500 萬 USD）

> [!info] 追蹤催化劑
> **2027 Broadcom CPO 出貨量 3–5 萬支**：是市場判斷 CPO 設備需求能否規模化的關鍵驗證節點。科瑞技術良率能否突破 80% 是觀察國產替代進展的前哨指標。

## 技術演進時程

```mermaid
gantt
    title CPO 導入節奏（SemiAnalysis 觀點）
    dateFormat YYYY
    section Scale-out（橫向）
    Nvidia Quantum/Spectrum CPO 試水溫 :active, 2025, 2027
    出貨低於市場預期（June note 下修）  :2026, 2028
    section Scale-up（縱向，TAM 主場）
    銅互連為主（NVLink）              :done, 2024, 2027
    scale-up CPO 起步                 :2026, 2028
    真正放量（AWS/AMD/Feynman）       :2028, 2030
    section Broadcom CPO 設備驗證
    科瑞技術導入博通產線（小批量）     :active, 2026, 2027
    CPO 出貨量驗證節點（3-5萬支）     :milestone, 2027, 2027
```

## NPO vs CPO 過渡期（2026–2028）

NPO（Near-Package Optics）是 2026–2027 年市場的主流過渡方案：

| 比較項目 | NPO | CPO |
|---------|-----|-----|
| 可維護性 | 較好（靠近芯片但仍可換）| 差（晶圓廠封裝後不可換）|
| 功耗降低 | 中等 | CPO 可低至 14–15 W（vs NPO 降幅 30%+）|
| 量產節點 | 2026–2027 主流 | 2028 年市場爆發預期 |
| 2026 CPO 價格 | — | 比 NPO 高 1.5–2 倍 |

**NVIDIA Spectrum X CPO 進展（2026Q2 調研）**：
- 計劃 2026 年 Q4 啟動量產流程，但仍面臨 DFAU 良率問題和外置光源燒毀端面問題
- Spectrum X 單台售價 ~10 萬 USD，較電交換機高 20–30%（差距 ≤50%）
- Spectrum X：可插拔式 FAU，單個 OE 對應 36 芯；1 台需 16 個外置光源（每個對應兩個 3.2T 光通路），使用 400 mW 激光器
- Quantum X：固定式 FAU，對應 18 芯；2025 計劃交付 2,000–3,000 台但至今未交付

**1.6T CPO 市場規模**（2026 年）：
- 全球 1.6T 光模塊出貨約 1,400–2,000 萬只
- 其中 CPO 滲透率從 10–15% 提升至 20%+，出貨量約 **300–400 萬只**

**Google CPO + OCS 組合採購計劃**（2026–2028）：

| 年份 | Google OCS 需求 | 備註 |
|------|---------------|------|
| 2026 | 2.5–3 萬台 | — |
| 2027 | 4–5 萬台 | — |
| 2028 | 8–10 萬台 | — |
| 合計 | **20 萬台**（3 年）| 2025-11 TPU v7 後德州 $400 億投資推動 |

Google CPO 態度：會採用但需等故障率極低後才大規模部署；每年給 Lumentum 光芯片 forecast 激進（每年翻倍）。

**3.2T NPO 訂單**：
- 谷歌計劃 2027 H2 採購 3.2T NPO，2027–2028 總需求 1,200 萬只
- AWS 配合 Trainium 4，2027 年 5 月起採購，2027–2028 總需求 1,000 萬只
- 3.2T NPO 光引擎單價 ~1,000 USD；配套 ELS 光源（每兩個光引擎一個）~430 USD

## 應用場景

- AI 叢集後端 scale-out 網路（Nvidia Quantum-X800 InfiniBand、Spectrum-X 乙太網）
- AI scale-up 縱向互連（取代/補足 NVLink 銅，擴大 world size）
- 客製 ASIC（hyperscaler）內部 scale-up fabric
- OCS 全光交換機（Google TPU Ironwood + 2026–2028 快速部署）

## 相關技術

- [[技術_800VDC供電架構]]（同屬 2026-06 多空重設的兩大題材）
- [[技術_HVLP銅箔]]（CPO/cableless 延後也影響 PCB 材料節奏）
- [[技術_ABF載板]]、[[技術_玻璃基板]]（先進封裝/基板同源材料鏈）

## 供應鏈

→ [[供應鏈_CPO]]

## 相關技術（補充）

- [[技術_TFLN]]（TFLN 調製器在 1.6T CPO 中的角色）
- [[技術_FAU]]（CPO FAU/DFAU 規格與供需）
- [[技術_光電芯片]]（CPO 光引擎中 PD/Driver/TIA 配置）
- [[技術_MPO]]（CPO 交換機中板 32 芯 MPO 連接）

## OCI 200G MSA（規則 #14 — 關係更新）

2026-03-11，**[[META.US(meta)]] + [[AVGO.US(broadcom)]] + [[AMD.US(amd)]]** 三方聯合發布 OCI（Optical Compute Interconnect）200G v1.0 MSA，以開放標準對抗 NVIDIA NVLink 封閉生態：

| 技術押注 | 規格 | 關鍵廠商 |
|---------|------|---------|
| ELSFP 外部雷射 | CW DFB，SMSR 30 dB，RIN −144 dB/Hz | [[LITE.US(lumentum)]]（主供候選）|
| MRR DWDM | 4λ 多路（需熱鎖定，[[技術_矽光子（SiPh）]]）| TSMC COUPE |
| 雙向單纖 | Group A 1308–1315 nm / Group B 1328–1335 nm | 省光纖路由 |
| NRZ×4λ | 212.5 Gbps（合計）| 低複雜度調變 |

速率梯：200G → 400G → 800G → 1.6T。詳見 [[技術_OCI]]。

## 1.6T 出貨節奏（規則 #14 — 生產節奏，W26 2026 更新）

| 指標 | 值 |
|------|----| 
| 2026 全球 1.6T 光模塊出貨 | **~850K 支**（+280% YoY）|
| GB300 NVL72 機櫃 2026 年出貨 | **~55K 台**（+129% YoY）|

## InP 基板供應鏈更新（規則 #14 — 供應鏈）

| 方向 | 狀態 |
|------|------|
| 中國 2026 首批 InP 基板出口 | 恢復 InP 基板受管控後的首批出口 |
| [[COHR.US(coherent)]] 德州 InP 廠 | 6 吋 InP 廠快速擴產，NVIDIA $20 億入股鎖定產能 |
| 台灣（聯亞光電等 InP 磊晶）| 布局 TSMC COUPE 上游，與 [[4971_IET-KY（市）]] 並列 |

## 來源

- [[報告_Semianalysis_CPO_20260102]]（CPO Book，2026-01-02）
- [[報告_Semianalysis_CPOand800VDC_20260609]]（CPO/800VDC 重設預期，2026-06-09）
- [[memo_光模块及CPO设备学习总结_acecamptech_20260416]]（設備生態、ficonTEC 壟斷格局、科瑞技術驗證進度、設備需求三重乘數）
- [[memo_光通信大厂调研_TFLN_CPO_OCS_acecamptech_20260417]]（TFLN CPO 出貨量、OCS Google 需求 20 萬台、NPO vs CPO 過渡）
- [[memo_光通信大厂调研_CPO出货量_FAU_MPC方案_acecamptech_20260529]]（Spectrum X/Quantum X 進展、DFAU 良率問題、CPO 取代電交換機速度）
- [[memo_OCS_ASIC設計_光通信_LPU_AOC_acecamptech_20260517]]（OCS 格局、MEMS 芯片成本、Google 3.2T NPO 計劃）
- [[memo_1.6T_800G光模块出货更新_NPO_CPO_acecamptech_20260507]]（3.2T NPO 訂單、各 CSP 採購計劃）
- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（OCI 200G MSA；1.6T 850K +280%；GB300 55K +129%；InP 供應鏈更新，2026-06-29）

## 相關頁面

- [[APH.US(amphenol)]]
- [[CIEN.US(ciena)]]
- [[KYOCERA（未）]]
- [[Mitsubishi Electric（未）]]
- [[Nokia Bell Labs（未）]]
- [[Qnity Electronics（未）]]
- [[技術_光互連]]
- [[技術_光模塊]]
- [[技術_混合鍵合]]
- [[技術_聚合物波導]]
