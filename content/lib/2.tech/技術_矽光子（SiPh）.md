---
title: "技術_矽光子（SiPh）"
tags:
  - 技術/矽光子
  - 產業/光通訊
  - 產業/AI伺服器
  - 環節/光電芯片
maturity: developing
updated: 2026-07-07
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

![[20260522_矽光子發展趨勢：技術演進與機會_008.png]]
*圖（知識力科技，2026-05）：馬赫任德調變器（MZM）結構——光分入上下兩臂，相位差控制干涉輸出（亮/暗），典型長度 >1000µm，不相容 3D-CPO。*

### MZM vs MRM 3D-CPO 相容性（知識力科技，2026-05）

| 指標 | MZM | SiGe/Ge EAM | MRM |
|------|-----|-------------|-----|
| 3D-CPO 相容？ | ❌ 過大（>1000µm） | ❌ 過大（50-100µm） | ✅ **~15µm 直徑** |
| 需額外多工器？ | 是 | 是 | **否**（自帶多工功能） |
| 熱穩定性 | 穩定（兩臂溫差影響） | 需 feedback loop | 需 feedback loop（0–105°C）|
| 功耗 | ~50 mW | ~10 mW | **~1 mW** |
| 傳輸懲罰 | <5 dB | <10 dB | <5 dB |
| 工作波段 | O-band + C-band | **C-band 限定** | O-band + C-band |

**結論**：MRM 是 3D-CPO 架構唯一相容的矽調變器，因其尺寸極小（15µm）且自帶 WDM 多工能力，是 CPO 光引擎整合的關鍵技術路線。（來源：[[報告_矽光子發展趨勢技術演進與機會_20260522]]）

### 代工平台格局（2026）

| 平台 | 業者 | 市占 / 特色 | 代表客戶 |
|------|------|------------|---------|
| **Tower Semiconductor** | 美商（Nasdaq:TSEM），純晶圓代工 | 全球 SiPh 市占 60–70%；1.6T 量產中，3.2T InP 異質整合中；2025 Q4 季營收 $80–95M，5× 擴產中；2027E 年化 $1.6–1.9B | 廣泛 AI 資料中心客戶，簽 $1.3B 2027 產能預訂 |
| **GF Fotonix** | GlobalFoundries | 300mm 單片 O/C-band；含 SiN SSC、V-groove | Coherent 等 |
| **TSMC COUPE** | 台積電 | N65 PIC + N7 EIC，SoIC 混合鍵合；23× 頻寬密度 | NVIDIA、Broadcom、Ayar |
| SilTerra | 馬來西亞，私人 | 較小型，利基市場 | — |
| Intel | IDM | 自用為主；CPO V-groove 玻璃耦合器 | 自家平台 |

![[CPO 250815 Latitude silicon photonics supply chain_015.png]]
*圖（Latitude Design Systems，2025-08）：SiPh 收發引擎架構——Laser（光源）→ SiPh Tx/Rx Engine（含調變器、PD、波導）→ Prism™ 模組（TX Driver IC + DSP）→ 光學 I/O / 電氣 I/O。這是矽光子可插拔模組的典型訊號流程，CPO 版本省去 DSP 並將 Laser 改為外部 CW 連續波雷射。*

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

![[20260522_矽光子發展趨勢：技術演進與機會_019.png]]
*圖（知識力科技，2026-05）：SiPh 生態系 IC 設計與製造廠商全圖——ASIC/xPU（NVDA/MRVL/AVGO/INTC/AMD/聯發科）→ 光子IC（NVDA/MRVL/AVGO/Lumentum/Coherent）→ 電子IC（+ MACOM MTSI）→ 晶圓代工（TSM/Tower TSEM/GF GFS/UMC）。*

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

## 市場規模與 CPO 滲透率

![[20260522_矽光子發展趨勢：技術演進與機會_001.png]]
*圖（知識力科技，2026-05）：Silicon PIC 收入按應用分類——2024 $404M → 2030 ~$2.1B（CAGR 31%）；Datacom pluggables 主導，CPO（scale-out + scale-up）從 ~$4M 成長至 $761M（+188x）為最快成長子類別。*

![[20260522_矽光子發展趨勢：技術演進與機會_005.png]]
*圖（TrendForce，2026-03）：CPO 在 800G+1.6T+3.2T 光模組出貨中的滲透率——2025: 0.05% → 2026F: 0.55% → 2027F: 2.21% → 2028F: 7.23% → 2029F: 22.07% → 2030F: 35.74%。CPO 真正放量在 2028-2030，與 Rubin Ultra/Feynman 世代時程吻合。*

| 年份 | CPO 滲透率（TrendForce Mar 2026） |
|------|--------------------------------|
| 2025 | 0.05% |
| 2026F | 0.55% |
| 2027F | 2.21% |
| 2028F | 7.23% |
| 2029F | 22.07% |
| 2030F | 35.74% |

## 光傳輸技術光源比較

| 技術 | 最大傳輸距離 | 速率（Gbps/lane）| 能耗（pJ/bit）| CMOS 整合難度 | 相對成本 |
|------|-----------|----------------|-------------|-------------|---------|
| PCIe（銅）| 1m | 4 | >10 | 易 | 低 |
| Micro LED | 10–50m | 2–4 | 1–2 | 易 | 低 |
| VCSEL | 100m | 10–50 | 4 | 中 | 中 |
| **CW 雷射（SiPh CPO）** | **1,000m** | **50** | **5** | 難 | 高 |
| EML | 40,000m | 100 | 4.5 | 中 | 中 |

MicroLED CPO 為短距（<50m）低成本方案，適合伺服器內部 scale-up 光互連；SiPh CW 雷射 CPO 適合跨機架 scale-out（1,000m）。（來源：[[報告_矽光子發展趨勢技術演進與機會_20260522]]）

## 關鍵廠商更新

Tower Semiconductor（[[TSEM.US(tower semiconductor)]]）是目前全球最重要的獨立 SiPh 純晶圓代工廠：2025 年 Q4 季營收 $80–95M → 5× 擴產後 2027E 年化 $1.6–1.9B；已與客戶簽署 2027 年 $1.3B 產能保留合約（20% 預付款），顯示超算 AI 資料中心客戶對 SiPh 產能長期鎖定的信心。即使 CPO 封裝最終交由 TSMC COUPE 執行，Tower 的 SiPh 晶圓仍可獨立供應（不綁定 TSMC 生態）。

## 來源

- [[報告_矽光子發展趨勢技術演進與機會_20260522]]（知識力科技 張勤煜，臺大電機博士，2026-05-22；MRM vs MZM 比較、CPO 滲透率 TrendForce、SiPh 生態系圖、MicroLED vs CW 雷射 CPO）
- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（STT 20 篇，2026-06-29）
- [[技術_光互連]]（全球 SiPh 代工格局）
- [[Yuanta Tower Semiconductor silicon photonics AI datacenter capacity reservation 260701]]（元大，2026-07-01；Tower SiPh 業務深度）
- [[CPO 250815 Latitude silicon photonics supply chain]]（Latitude，2025-08-15；SiPh Tx/Rx 引擎架構、供應鏈格局）
- [[Optical Networking 260417 GS AI scale out scale up]]（Goldman Sachs，2026-04-17；全球光通供應鏈地圖）

## 相關頁面

- [[技術_InP磷化銦]]
- [[TSEM.US(tower semiconductor)]]
- [[KYOCERA（未）]]
- [[Mitsubishi Electric（未）]]
- [[Nokia Bell Labs（未）]]
- [[Polariton（未）]]
- [[Sumitomo Electric（未）]]
- [[技術_玻璃基板]]
