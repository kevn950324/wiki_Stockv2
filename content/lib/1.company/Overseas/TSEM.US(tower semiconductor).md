---
title: "TSEM.US(tower semiconductor)"
ticker: "TSEM"
market: US
exchange: NASDAQ
sector: 矽光子晶圓代工 / 類比特殊製程
tags:
  - 公司/TowerSemi
  - 技術/矽光子
  - 技術/CPO
  - 環節/晶圓代工
  - 產業/光通訊
updated: 2026-08-24
aliases:
  - Tower Semiconductor
  - TSEM
  - 高塔半導體
related_companies:
  - "[[2330_台積電（市）]]"
  - "[[GFS.US(globalfoundries)]]"
  - "[[LITE.US(lumentum)]]"
  - "[[COHR.US(coherent)]]"
  - "[[NVDA.US(nvidia)]]"
  - "[[MRVL.US(marvell)]]"
  - "[[SMTC.US(semtech)]]"
---

# TSEM.US(tower semiconductor)

## 基本資料

| 項目 | 內容 |
|------|------|
| 全名 | Tower Semiconductor Ltd. |
| 代號 | TSEM（Nasdaq） |
| 成立 | 1993年；總部以色列 |
| 業務定位 | 純晶圓代工（pure-play foundry），專注高附加值類比特殊製程 |
| 主要製程 | 矽光子（SiPh）、矽鍺（SiGe）、RF SOI、電源管理、影像感測 |
| 市場 TP（一致目標）| USD 307.57（2026-07-02 Bloomberg 共識）|
| 股價（2026-07-02）| USD 245.46（隱含漲幅 25.3%）|

## 圖片 / 架構圖

![[Optical Networking 260417 GS AI scale out scale up_005.png]]
*圖（Goldman Sachs，2026-04-17）：全球光通訊供應鏈地圖，Tower Semi 位列 SiPh 晶圓代工廠（與 TSMC、GF、SilTerra、UMC 並列），同時也是 InP 磊晶（SiGe RAM）平台。*

## 供應鏈位置

**矽光子晶圓代工市場的第二大玩家**（僅次 TSMC）：Tower 是全球最早商用化矽光子製程的純晶圓代工廠之一，市佔率高且已大規模驗證。與 TSMC COUPE 路線差異在於：Tower 為 foundry 開放平台，客戶可整合自有 EIC/PIC 設計，不必綁定 TSMC 生態；即使最終 CPO 封裝交由 TSMC，矽光子晶圓仍可由 Tower 供應。

主要 SiPh 客戶群：AI 資料中心（hyperscaler 光收發模組）、光通訊網路廠商。

| 製程平台 | 技術特色 |
|---------|---------|
| 矽光子（SiPh）| 成熟商用；1.6T 量產中，3.2T InP 異質整合中 |
| 矽鍺（SiGe）| 高速 ADC/DAC；RAM 擴充計畫 5× |
| RF SOI / RF SSOI | 5G / Wi-Fi 前端；200mm→300mm 世代移轉 |
| 電源管理 IC | 行動與工業 PMIC |
| 影像感測 | 高階 CMOS 影像感測器 |

## 矽光子業務關鍵數據（Yuanta，2026-07-01）

| 指標 | 數值 |
|------|------|
| 2025 Q4 SiPh 季營收 | USD $80–95M |
| 2027E 年化 SiPh 營收（5× 擴產後）| USD $1.6–1.9B |
| 2027 產能保留合約總額 | **USD $1.3B**（已收 ~20% 預付款）|
| 2028 合約 | 金額將再提高（未揭露）|
| 整體產能成長（2025–2027）| +30%（含 5× SiPh 擴充）|

**產能動態：**
- 目前整體需求高於現有產能；多數客戶仍採配額制（RF Mobile 為例外）
- 2029 年初：日本 Fab 7「鏡像廠」完工，主要承接矽光子與 SiGe 擴產；與 Novaton 協議後 Fab 11X（200mm）移交，Tower 專注 300mm
- 短期評估重啟四年前關閉的日本舊廠，填補 2029 年前缺口

## 3.2T 路線圖

Tower 在 3.2T 矽光子路線同樣領先。重點：
- 已具備完整製程；一名客戶正量產爬坡中
- InP 異質整合（IMP：InP-on-Si）技術已成熟，已發布相關新聞稿
- 與 Coherent 合作展示**無異質整合材料的純矽 3.2T 方案**
- 從多條技術途徑推進（pure silicon + InP integration + 其他材料）

> **Q4：「條條大道通台積」回應**
> CPO 封裝若走 TSMC COUPE 路線，SiPh 晶圓仍可由 Tower 供應——Tower 可保持獨立地位。CPO 複雜度極高，NPO 可能作為過渡；即使部分客戶偏好 TSMC 一站式，也有客戶不願依賴單一供應商。

## EDA / 設計生態

Latitude Design Systems（之光半導體）是 Tower SiPh 平台的 EDA 合作夥伴，提供 PIC Studio（PhotoCAD + pSim + pVerify），支援 Tower PDK 的電光共設計。設計夥伴涵蓋 Ansys、Cadence、Siemens、Synopsys、Luceda 等主流 EDA 工具鏈。

## 券商評等（2026-07-02）

| 券商 | 目標價 | 隱含漲幅 |
|------|-------|---------|
| GF Securities | USD 270 | +10% |
| Craig-Hallum | USD 325 | +32% |
| Wedbush | USD 300 | +22% |
| Citic Securities | USD 316 | +29% |
| 市場一致目標 | USD 307.57 | +25.3% |

資料來源：[[Yuanta Tower Semiconductor silicon photonics AI datacenter capacity reservation 260701]]、[[CPO 250815 Latitude silicon photonics supply chain]]、[[Optical Networking 260417 GS AI scale out scale up]]

## 時間軸

| 時間 | 事件 |
|------|------|
| 2025 Q4 | SiPh 季營收 $80–95M |
| 2026 全年 | 整體產能提升至年化 $920M 規模 |
| 2027E | 5× SiPh 擴產完成；年化 SiPh 營收 $1.6–1.9B；$1.3B 產能保留合約交貨 |
| 2028E | 產能保留合約金額再提高；3.2T 客戶量產爬坡 |
| 2029 年初 | 日本 Fab 7 鏡像廠新增產能逐步釋放 |

### 2026-08-24 研究更新

開源證券 2026-08-18 首次覆蓋報告將 Tower 的成長主軸由「矽光子擴產」進一步量化為 RF Infrastructure 業務放量與 Fab 7 權益重組：2025 年該分部營收約 4.2 億美元，2026Q2 約 2.25 億美元、占公司營收 49%；報告估 2026–2028 年營收為 18.89／31.23／54.75 億美元、歸母淨利為 3.68／7.42／14.74 億美元，均屬券商 estimate。

報告指出，截至 2028 年的規劃矽光產能逾 70% 已預訂或進入預訂流程，客戶包括 [[NVDA.US(nvidia)]]、[[MRVL.US(marvell)]]、中際旭創、[[COHR.US(coherent)]] 與 [[SMTC.US(semtech)]]；公司累計披露資本支出約 49.2 億美元，並規劃日本 300mm 矽光／矽鍺擴產。這些客戶與份額敘述為券商整理或估計，不能直接視為已確認訂單。

| 時間 | 新增催化劑 | 類型 | 資訊邊界 |
|---|---|---|---|
| 2027-04（預估） | Tower／NTCJ 交易若完成，Fab 7 權益由 51% 提升至 100% | 重組 | 券商估計，取決於交易條件 |
| 2027Q4（預估） | 日本 Arai Fab 6 改造之 300mm 矽光／先進封裝產線具備量產能力 | 量產 | 公司規劃／券商整理 |
| 2028（預估） | 矽光產能擴張與客戶預訂轉為營收 | 放量 | 券商 estimate |

來源：[[報告_開源證券_Tower半導體矽光代工_20260818]]（開源證券，2026-08-18）。

## 相關頁面

- [[時程_2026Q3Q4_AI網通與硬體催化劑]]
- [[供應鏈_AI光互聯]]
- [[技術_矽光子（SiPh）]]
