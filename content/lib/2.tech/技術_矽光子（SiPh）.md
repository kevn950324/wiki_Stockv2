---
title: "技術_矽光子（SiPh）"
tags:
  - 技術/矽光子
  - 產業/光通訊
  - 產業/AI伺服器
  - 環節/光電芯片
maturity: developing
updated: 2026-07-02
aliases:
  - SiPh
  - Silicon Photonics
  - 矽光子
  - Silicon Photonic IC
  - PIC
  - SiPho
  - 光子積體電路
  - Fotonix
  - COUPE
---

# 技術_矽光子（SiPh）

## 定義

矽光子（Silicon Photonics, SiPh）是在標準 CMOS 相容製程上整合光子元件（調變器、光偵測器、波導、耦合器）的技術，讓光訊號傳輸在晶圓廠可量產的矽平台上實現。相較 InP 磊晶方式，矽光子具有成本低、尺寸小、可大面積製造的優勢，是 CPO 與高速光模組的主流平台。

2026 年 SiPh 在光模組的滲透率已超 50%（2026 OFC 確認），是 1.6T 出貨的主要技術路線（估 50–70% 滲透率）。

## 圖解

![[國泰證期研究部_半導體產業_PIC推動晶圓代工邁向AI光電異質整合新平台_20260525_001.png]]
*圖（國泰證期，2026-05）：矽光子芯片三維示意圖——SOI 晶圓上集成 Germanium PIN Photodetector（鍺 PIN 光偵測器，接收端 O→E）、Silicon waveguides（矽波導佈線）、Electro-optic Modulator（電光調製器，發射端 E→O）與 Optical coupler（光柵耦合器，芯片↔光纖 I/O）。所有器件在 CMOS 產線製造，與電子 IC 單片或異質整合（HB/SoIC），是矽光子的根本競爭力所在。*

![[國泰證期研究部_半導體產業_PIC推動晶圓代工邁向AI光電異質整合新平台_20260525_002.png]]
*圖（國泰證期，2026-05）：PIC（Photonic Integrated Circuit）布局俯視圖——包含 Laser（光源輸入）、Optical ring resonator（環形共振器，波長選擇/濾波）、Optical modulator（電光調製器）、Optical waveguide（波導佈線）、Couplers（分光/合光）、Photonic crystal（特殊波長轉換）、Photo diode（光偵測器 O→E）與 Optical fiber（光纖 I/O）。PIC 把傳統多顆分立光子器件整合到單片芯片，是 1.6T 光模塊與 CPO 光引擎成本下降的核心路徑。*

## 技術原理

### 核心器件

| 元件 | 功能 | 材料選擇 |
|------|------|---------|
| 調變器（Modulator）| 電→光訊號轉換 | Si MZM/MRM、TFLN、plasmonics、EML |
| 光偵測器（PD）| 光→電訊號轉換 | Ge-on-Si |
| 波導 | 光路導引 | Si、SiN |
| 耦合器（Coupler）| 光纖↔PIC 耦合 | 邊緣耦合（SSC）、光柵耦合（GC）|

### 調變器三路線並進（2026 現況）

| 路線 | 代表 | 頻寬 | 長度 | 優勢 | 挑戰 |
|------|------|------|------|------|------|
| Si MZM/MRM | TSMC COUPE | 50–60 GHz | 毫米級 | 成熟/量產 | RC 頻寬牆 |
| TFLN（薄膜鈮酸鋰）| Nokia Bell Labs / 光庫 | >50 GHz | 毫米級 | Vπ低/頻寬高 | 耦合損耗待解 |
| plasmonics（電漿子）| Marvell × Polariton | ~1 THz | **~10 µm** | 突破繞射極限 | 可靠度驗證早期 |

> ⚠️ **路線轉向（規則 #14）**：Marvell 2026 年收購 Polariton（ETH Zurich 血統），把 plasmonics 調變器路線收進 SiPh 生態——調變器不再只有 Si 一條線，TFLN、EML、plasmonics 三線並進，對供應鏈格局影響深遠。

### 代工平台格局（2026）

| 平台 | 業者 | 市占 / 特色 | 代表客戶 |
|------|------|------------|---------|
| Tower Semiconductor | 美商，IDM | 全球 SiPh 市占 60–70% | 廣泛 |
| **GF Fotonix** | GlobalFoundries | 300mm 單片 O/C-band；含 SiN SSC、V-groove | Coherent 等 |
| **TSMC COUPE** | 台積電 | N65 PIC + N7 EIC，SoIC 混合鍵合；23× 頻寬密度 | NVIDIA、Broadcom、Ayar |
| Intel | IDM | 自用為主；CPO V-groove 玻璃耦合器 | 自家平台 |

## 關鍵參數 / 判斷指標

| 指標 | 意義 | 觀察重點 |
|------|------|----------|
| 插入損耗 | 光耦合效率 | SSC + 可拆連接器 <1.5 dB 為商用門檻 |
| 調變器頻寬 | 支援速率 | >45 GHz 才能跑 53.125 Gbaud NRZ（1.6T lane） |
| 光纖耦合方式 | 耦合方案 | 邊緣耦合 vs 光柵耦合、主動 vs 被動對位 |
| 晶片整合良率 | 量產可行性 | COUPE 32 顆 OE 複利 >99.5% 才夠 |

## 技術瓶頸 / 風險

- **矽調變器 RC 頻寬牆**：50–60 GHz 上限（電導率 + 自由電子吸收），需要 TFLN 或 plasmonics 接棒
- **光纖耦合**：邊緣耦合（±1 µm 精度需求）vs 光柵耦合（溫度敏感），CPO 量產的隱形關卡
- **散熱管理**：光元件與 ASIC 共封裝後散熱路徑複雜（KYOCERA 面朝下散熱方案：雷射溫降 15.3°C）
- **雷射光源**：CW DFB 雷射仍採 InP 異質整合，功率/可靠度/成本三角

## 關鍵廠商

| 環節 | 廠商 | 角色 |
|------|------|------|
| 代工平台 | [[2330_台積電（市）]] | COUPE N65+N7，SoIC 混合鍵合 |
| 代工平台 | [[GFS.US(globalfoundries)]] | Fotonix 300mm，O/C-band |
| plasmonics 調變器 | [[MRVL.US(marvell)]] | 收購 Polariton，~10µm、~1 THz |
| TFLN 調變器 | Nokia Bell Labs（研究）| ECTC 2026 TFLN CPO 發射器 |
| 光源 ELS | [[LITE.US(lumentum)]] | NVIDIA CPO 光源主供 |
| 光源 / 光模組 | [[COHR.US(coherent)]] | NVIDIA 入股 $20億 |
| CPO 平台客戶 | [[NVDA.US(nvidia)]] | COUPE，Spectrum-X CPO |
| CPO 平台客戶 | [[AVGO.US(broadcom)]] | COUPE，Humboldt → Davisson |
| 可拆連接器 | [[GLW.US(corning)]] | GLASSBRIDGE 離子交換玻璃連接器 |

## 應用場景

- **scale-up 光互連**（AI 叢集 GPU↔GPU）：OCI MSA、NVLink 光版本、NVIDIA Spectrum-X
- **scale-out 可插拔光模組**：400G→800G→1.6T→3.2T，DR/FR 規格
- **CPO 共封裝**：COUPE 平台整合 PIC+EIC+光纖耦合

## 相關技術

- [[技術_CPO]]（SiPh 作為 CPO 的 PIC 平台）
- [[技術_TFLN]]（突破矽調變器頻寬牆的材料路線）
- [[技術_OCI]]（OCI 200G MSA 規格 → 矽光子調變器選型）
- [[技術_混合鍵合]]（SoIC/CoW HB 整合 PIC+EIC）
- [[技術_聚合物波導]]（板級光互連的互補技術）
- [[技術_光互連]]
- [[技術_光模塊]]

## 來源

- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（STT 20 篇，2026-06-29）
- [[技術_光互連]]（全球 SiPh 代工格局）

## 相關頁面

- [[KYOCERA（未）]]
- [[Mitsubishi Electric（未）]]
- [[Nokia Bell Labs（未）]]
- [[Polariton（未）]]
- [[Sumitomo Electric（未）]]
- [[技術_玻璃基板]]
