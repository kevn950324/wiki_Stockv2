---
title: "MRVL.US(marvell)"
ticker: "MRVL"
market: US
exchange: NASDAQ
sector: 客製ASIC / 光互連 / 半導體
tags:
  - 公司/Marvell
  - 產業/AI伺服器
  - 技術/CPO
  - 技術/矽光子
  - 環節/光通訊
updated: 2026-06-29
aliases:
  - Marvell
  - 邁威爾
  - MRVL
  - Celestial AI
  - Photonic Fabric
  - plasmonics
related_companies:
  - "[[NVDA.US(nvidia)]]"
  - "[[AVGO.US(broadcom)]]"
  - "[[2330_台積電（市）]]"
  - "[[Polariton（未）]]"
---

# MRVL.US(marvell)

## 基本資料

Marvell 是客製 ASIC 與資料中心連結（光 DSP、AEC、光模組元件）的主要供應商，並透過**收購 Celestial AI** 切入 scale-up 光互連。營收驅動來自客製運算（hyperscaler ASIC）、光學 DSP 與電互連。供應鏈位置：fabless，Celestial 的 Photonic Fabric chiplet 採 [[2330_台積電（市）]] 5nm。資料來源：SemiAnalysis CPO Book（2026-01-02）。

## Polariton 收購（2026）— 調變器路線多元化

> ⚠️ **路線轉向（規則 #14）**：2026 年 Marvell 收購 plasmonics 技術公司 **[[Polariton（未）]]**（ETH Zurich 衍生新創），把 plasmonics 調變器路線收進矽光子生態。調變器路線從「Si MZM/MRM 主導」轉為「**Si / TFLN / plasmonics / EML 四線並進**」。

| 調變器路線 | 代表廠商 | EO 頻寬 | 定位 |
|-----------|---------|---------|------|
| Si MZM / MRM | 多數 SiPh 廠 | 50–60 GHz（RC 限制）| 當前量產主流 |
| TFLN（薄膜鈮酸鋰）| Nokia Bell Labs | >50 GHz，Vπ·L=2.3 V·cm | 低驅動電壓先進路線 |
| Plasmonics（SPP）| **Marvell / Polariton** | **~1 THz**（~10 µm 長度）| 極小尺寸、超高頻寬 |
| EML（III-V 電吸收）| Mitsubishi Electric | 89 GHz，106.25 Gbaud PAM4 | 每 lane 400G 推進 |

Polariton 里程碑：2022 低溫驗證 → 2025-03 **1.1 THz 世界紀錄** → 2026 交付含 plasmonic transponder 的 400G/lane 元件 → 2026 被 Marvell 收購。

資料來源：[[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]

## 核心技術 / 競爭優勢

- **Celestial AI「Photonic Fabric™（PF）」**：把光子元件（調變器、PD、波導）做進中介層，對外經 GC + FAU。
  - **PF Chiplet**（TSMC 5nm，UCIe/MAX PHY）：第一代 16 Tbit/s，第二代 64 Tbit/s。
  - **OMIB™ 光學中介層**：類 CoWoS-L/EMIB 的橋接，把 I/O 放到晶片中央、繞過 shoreline 限制。
  - **PFMA 記憶體 appliance**：TSMC 5nm、115.2T，連 16 顆 ASIC（每顆 7.2T scale-up），作 KVCache 卸載的「warm」記憶層。
- **差異化：採 EAM（電吸收調變器）**——熱穩定佳（可容忍瞬間 35°C），適合放在高功率 XPU 下方的中介層；但需自行把 EAM 整合進晶圓廠，C-band 雷射生態較 O-band 不利。
- 在光學端同時保有可插拔 transceiver / DSP / AEC 業務（June note 視為相對 CPO 量曝險較低的偏好標的）。

## 圖片 / 架構圖

![[報告_Semianalysis_CPO_20260102_016.png]]
*圖（Celestial AI）：Photonic Fabric 把光子互連做進中介層，提供 XPU↔XPU / XPU↔Switch / XPU↔Memory 連結。*

![[報告_Semianalysis_CPO_20260102_017.png]]
*圖（Celestial AI, Marvell）：OMIB 光學中介層置於 ASIC 下方，I/O 可置於晶片中央以繞過 shoreline 限制。*

![[報告_Semianalysis_CPO_20260102_018.png]]
*圖（Celestial AI, Marvell）：相較 Lightmatter 大型多光罩光中介層，Celestial 採類矽橋的光子橋接，scope 較收斂。*

## 產品與應用

| 產品 / 服務 | 應用 | 相關客戶 / 下游 |
|-------------|------|-----------------|
| 客製 ASIC | hyperscaler 加速器 | 雲端大廠（未建頁） |
| 光 DSP / AEC / 光模組元件 | scale-out 可插拔光學 | 模組廠 |
| Celestial PF chiplet / OMIB | scale-up 光互連 | 採 EAM 的 bookended 系統 |

## 供應鏈位置

- 製造夥伴：[[2330_台積電（市）]]（PF chiplet 5nm）
- 所屬供應鏈：[[供應鏈_CPO]]

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[NVDA.US(nvidia)]] | 同業 / 競對 | scale-up 光互連與 ASIC 競爭 |
| [[AVGO.US(broadcom)]] | 同業 / ASIC 競對 | 客製 ASIC 與 CPO 競爭 |
| [[2330_台積電（市）]] | 製造夥伴 | Celestial PF chiplet 5nm 代工 |
| [[Polariton（未）]] | 收購對象 | 2026 年收購，plasmonics 調變器技術整合中 |

## 券商觀點與催化劑

> [!warning] 關鍵 claim：Celestial AI 營收 run-rate（需追蹤時程）
> - 來源：[[報告_Semianalysis_CPO_20260102]]（2026-01-02）轉述 Marvell 交易摘要與 Barclays 會議。
> - Marvell 估 Celestial 在 **F1/28（2028 年 1 月底）達 $500M run-rate**，並於 **2028 曆年底翻倍至 $1B**，隱含至 2027 年底約 2 年達商業化。
> - June note（[[報告_Semianalysis_CPOand800VDC_20260609]]，2026-06）整體下修 CPO 時程，scale-up CPO 真正放量看 2026+ 但 2028 跳升「樂觀」——此 run-rate 目標的達成節奏需留意。

- June note 偏好「槓桿可插拔 transceiver / DSP 而非 CPO 量」的光學名單，Marvell 列為偏好標的之一。

## MS Bus Tour 更新（Morgan Stanley，2026-06-15）

管理層展現「新高度的信心」，主要訊息：

- **全棧廣度成競爭優勢**：Marvell 是少數同時橫跨 DCI、die-to-die IP、scale-out switching、scale-up switching、optics、SerDes、CXL、NICs、客製矽 的廠商。在供應鏈受限、整合複雜度高的環境下，全棧位置愈來愈重要。
- **Scale-up optics 預計名列第一**：在 merchant（非客製）scale-up 光學解決方案中，管理層預期 Marvell 排名第一。客戶傾向非 Broadcom 替代選項，支撐 Marvell 地位。
- **Scale-up switching 仍是多方競爭**：UAL、ESUN、NVL Fusion 都在選項中。
- **財務規模框架**：客製業務 ~$4B 成長至 ~$10B；legacy 部門（儲存/網路）以 GDP 速度成長；連接業務 ~$10B、成長 ~70%（短期無放緩跡象）。Agentic AI 增加 NIC、CXL、交換器需求（未納入當前預估）。
- **估值爭議**：MS 態度正面但承認「2.5× NVDA 本益比倍數、但 Marvell 尚未比 NVDA 成長更快」是評價壓力。

## 來源

- [[報告_Semianalysis_CPO_20260102]]（CPO Book，2026-01-02）
- [[報告_Semianalysis_CPOand800VDC_20260609]]（2026-06-09）
- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（Polariton 收購；調變器路線多元化 Si/TFLN/plasmonics/EML 四線並進，2026-06-29）
- [[Semiconductors 260615 MS public company bus tour ALAB MRVL INTC]]（MS bus tour，2026-06-15）

## 相關頁面

- [[技術_CPO]]
- [[技術_TFLN]]
- [[技術_矽光子（SiPh）]]
