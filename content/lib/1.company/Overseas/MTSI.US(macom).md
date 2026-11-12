---
title: "MTSI.US(macom)"
ticker: "MTSI"
market: US
exchange: NASDAQ
sector: 類比半導體 / EIC / RF / 光通訊
tags:
  - 公司/Overseas
  - 產業/光通訊
  - 環節/EIC電子IC
  - 環節/RF功率
updated: 2026-11-13
aliases:
  - MACOM
  - MTSI
  - MACOM Technology Solutions
related_companies:
  - "[[MRVL.US(marvell)]]"
  - "[[AVGO.US(broadcom)]]"
  - "[[LITE.US(lumentum)]]"
  - "[[COHR.US(coherent)]]"
---

# MTSI.US(macom)

## 基本資料

| 項目 | 內容 |
|------|------|
| 全名 | MACOM Technology Solutions Holdings, Inc. |
| 代號 | MTSI（Nasdaq）|
| 總部 | 美國麻州洛威爾（Lowell, MA）|
| 定位 | 類比/混合訊號半導體，服務資料中心、電信、工業、國防 |

## 圖片 / 架構圖

![[Optical Networking 260417 GS AI scale out scale up_005.png]]
*圖（Goldman Sachs，2026-04-17）：全球光通訊供應鏈地圖，MACOM（MTSI）列於 EIC（電子整合電路）環節，與 Marvell、Broadcom、Lumentum、Coherent 並列光通訊核心電晶片廠商。*

## 供應鏈位置

MACOM 在光通訊供應鏈中的角色是 **EIC（Electronic Integrated Circuit）**——針對光模組、光收發器、CPO 提供驅動器（Driver）、跨阻放大器（TIA）等電子元件。這與 DSP 廠商（Marvell、Broadcom）不同：MACOM 聚焦模擬電路，在 LPO（Linear Pluggable Optics）場景尤其重要，因 LPO 省掉 DSP 後 TIA/Driver 的線性度要求更嚴苛。

## 核心產品領域

| 領域 | 代表產品 |
|------|---------|
| 光通訊（資料中心）| TIA、CDR、EML Driver、線性 Driver（LPO 場景）|
| 光電晶片／次模組 | 背照式 PIN Chip-on-Carrier（CoC），應用於 100G／400G PAM4 |
| 電信基礎設施 | ROADM 模組、功率放大器、微波 |
| 國防 / 航太 | 高功率 RF 放大器、毫米波 GaN |
| 工業 | 毫米波雷達、物聯網 |

## 分析師評等

| 來源 | 評等 | 說明 |
|------|------|------|
| TD Cowen（Sean O'Loughlin）| **Buy** ★ | 啟動覆蓋；多元化業務模式緩和直接曝險，但 AEC、LPO 大趨勢受惠明確；2025-09-30 |

TD Cowen 評語：「MACOM 在 AECs 和 LPO 方面位置良好，雖多元化業務模型使 P&L 的直接衝擊較小，但長期光通訊成長可期。」

## 競爭格局

MACOM 是罕見同時具備 **RF、毫米波、光通訊 TIA/Driver** 的整合類比廠商，這使其在：
- **LPO/LRO 場景**（省掉 DSP → 對 TIA 線性度要求高）獲益明確
- **CPO 場景**中 EIC 需求（OE 的電子驅動側）具長期成長空間

資料來源：[[Datacenter Connectivity 250930 Bernstein ALAB MTSI SMTC CRDO]]、[[Optical Networking 260417 GS AI scale out scale up]]、[[research_COC_Chip_on_Carrier_20260830]]

## 2026-11-03 PD與TIA供給紀要

[[memo_Notion_AceCamp_Macom_PD與TIA供給_70562967_20261103]]描述MACOM的200G PD、TIA／Driver與封裝布局，屬匿名專家轉述，信心低至中低；Notion日期2026-11-03，但正文部分仍以前瞻語氣描述2026下半年，實際採樣日待核。

| 項目 | 專家口徑 | 投資觀察與限制 |
|---|---|---|
| 200G PD | 感光區約7–8µm，相較100G更小，需微透鏡與精確耦合 | 看合格晶粒、封裝良率與收光容差；非全系列統一規格 |
| 2026供給情境 | MACOM 7,000萬–8,000萬顆、[[AVGO.US(broadcom)]] 4,000萬–6,000萬顆；需求2億顆＝2,500萬模組×8 PD | 模組數與其他紀要1,700萬顆預測不同，不當成一致市場缺口 |
| PD價格 | 100G US$0.6–0.8、200G US$2–3 | 與原文「5–6倍」不完全相符，不採倍數；毛利仍受良率與組合影響 |
| NPO／XPO EIC | CTLE補償、Driver等化及PD＋TIA近距整合，預期2027H2放量 | 封裝／節能為產品路線轉述，需樣品、客戶驗收與訂單確認 |

供應鏈上，MACOM的類比EIC可與[[MRVL.US(marvell)]]、[[AVGO.US(broadcom)]]等DSP搭配或在解耦架構下競爭；PD＋TIA整合可能改變採購綁定，但尚無本次已確認份額。InP投片不直接等於合格PD出貨。完整情境及數字衝突見[[分析_光互連缺口到有效交付與價值分配_20261112]]。

## 相關頁面

- [[供應鏈_AI光互聯]]（元大 2026-09-21 光通訊產業報告引用）
- [[SMTC.US(semtech)]]
- [[技術_COC光模組封裝]]
- [[技術_光電芯片]]（CIC 2025 雷射晶片外售排名推定為 Company G：全市場第 8，約人民幣 5.0 億元）


## 來源

- [[memo_Notion_AceCamp_Macom_PD與TIA供給_70562967_20261103]] — 2026-11-03日期欄，匿名專家；供給與時程未外部查證。

- [[Datacenter Connectivity 250930 Bernstein ALAB MTSI SMTC CRDO]]（2025-09-30）
- [[research_COC_Chip_on_Carrier_20260830]]
