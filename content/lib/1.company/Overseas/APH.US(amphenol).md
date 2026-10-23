---
title: "APH.US(amphenol)"
ticker: "APH"
market: US
exchange: NYSE
sector: 連接器 / 互連
tags:
  - 公司/Amphenol
  - 產業/AI伺服器
  - 環節/光纖與光通訊
  - 環節/光纖與光通訊
updated: 2026-10-20
aliases:
  - Amphenol
  - APH
  - 安費諾
  - copper interconnect
  - AEC
  - active electrical cable
related_companies:
  - "[[NVDA.US(nvidia)]]"
image_status: "待補來源圖"
---

# APH.US(amphenol)

## 基本資料

Amphenol 是全球連接器與互連龍頭，在 AI 伺服器題材中的定位是**銅互連（copper interconnect）受惠者**——CPO 延後反而強化「銅仍是 scale-up 主要互連、可插拔光學續守 scale-out」的格局。營收驅動來自高速連接器、AEC（主動電纜）與互連方案。供應鏈位置：scale-up/scale-out 銅互連與連接器供應。資料來源：SemiAnalysis 800VDC/CPO note（2026-06-09）。

## 核心技術／競爭優勢

- 高速銅互連與連接器：CPO 良率/物理瓶頸使銅在 scale-up 維持主力，pluggable 續守 scale-out，兩者需求同步成長。
- **AEC（主動電纜）**：與 Nubis 合作，基於 Nubis 的 Nitro 線性 redriver 打造 ACC，把 200G 銅互連觸及距離延伸到數公尺。

## 產品與應用

| 產品 / 服務 | 應用 | 相關客戶 / 下游 |
|-------------|------|-----------------|
| 高速連接器 / 互連 | AI 伺服器 scale-up/out | [[NVDA.US(nvidia)]] 生態、ODM |
| AEC / ACC（主動電纜） | scale-out 銅延伸 | 與 Nubis（未建頁）合作 |

## 圖片/架構圖

`[待補來源圖]` 需官方 IR 高速連接器或數據中心產品圖佐證，現有研究筆記不足以支撐產品示意圖。

## 供應鏈位置

- 下游：AI 伺服器系統 / [[NVDA.US(nvidia)]] 生態
- 所屬供應鏈：[[供應鏈_CPO]]（銅 vs 光的互連競合）
- 同組偏好標的（未建頁）：Semtech（SMTC）、MACOM（MTSI）——SemiAnalysis 視為「被忽略的銅曝險、TAM 數年內可 3 倍」

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[NVDA.US(nvidia)]] | 下游生態 | scale-up 銅互連與連接器需求來源 |

## 券商觀點與催化劑

- [[報告_Semianalysis_CPOand800VDC_20260609]]（2026-06）：Computex 後對 Amphenol **轉趨正面**（與 Vertiv、Fortrend、Legrand、FormFactor 同組）。相對市場預期，最看好的銅互連名單為 Amphenol、Semtech、MACOM——這些被忽略的銅曝險公司，TAM 數年內估明顯倍增。
- 邏輯：CPO 系統級整合良率/物理瓶頸（[[技術_CPO]]）強化銅作為 scale-up 主互連、pluggable 續守 scale-out，雙軌需求持續成長。

## 2026-09-01 Molex 高速連接器訪談：同業驗證觀察

匿名受訪者明示為 Molex 視角，描述 CX2／CX2 Dual-Speed 的 112G／224G 近晶片 DAC 連接器設計、224G 後續產品及供給吃緊。這可作為高速銅互連升級與 [[APH.US(amphenol)]] 競爭格局的同業訊號，但**不是安費諾自身的產品、價格、客戶或訂單揭露**；原文對中國客戶與 NVIDIA 導入的說法均維持 rumor／estimate。

來源：[[memo_AceCamp_Molex_CX2高速連接器_20260901]]（2026-09-01；匿名 Molex 相關專家訪談）；公司辨識見 [[分析_20260901-08專家紀要受訪公司辨識與供給觀察]]。

## 2026-09-18 高速銅纜產業訪談補充

[[memo_AceCamp_高速銅纜與AEC供應鏈_20260918]] 把 Amphenol、Molex 與 TE Connectivity 列為高速銅纜一階供應的主要競爭群，並將 DAC／ACC／AEC 的經濟性依距離、功耗與訊號重整需求拆分。對 Amphenol 而言，這支持其高速連接器與有源銅纜曝險的產業定位；但訪談未揭露單一受訪公司，不能反推為 Amphenol 的公司立場。

> [!warning] 產業渠道觀察
> 文中市占、NVIDIA／CSP 客戶關係、中國代工供應商份額、AEC 規格與 Rubin 放量均為匿名口徑，非公司或客戶確認。DAC 的成本優勢、AEC 在中距離連結的角色及高傳輸速率下的功耗／散熱限制，可作技術追蹤框架，不能轉化為 Amphenol 訂單或營收預測。

## 2026-10-19 OCP：HD2 與次世代 Ultra Dense Interconnect

![[261019_ms_OCP-MGX_006.png]]

圖說：NVIDIA 在 OCP 2026 展示的 Ultra Dense Interconnect（含 cable cartridge）與 6 家供應商：Amphenol、Foxconn、Lead Wealth、LOTES、Luxshare、TE。此連接器規劃取代現行 Amphenol Paladin HD2，量產估約兩年後。（來源：NVIDIA，MS 2026-10-19 拍攝）

- 現行 VR200 NVL72 midplane 與 cable cartridge 採 Amphenol Paladin HD2，MS 先前調查 ASP 每組約 US$70–90+。次世代 Kyber 機櫃將導入新 midplane 連接器「Voronoi」，MS 調查指 FIT（鴻海體系）為關鍵設計夥伴；Ultra Dense Interconnect 量產約兩年後，供應鏈目標 ASP 壓到 US$100 以下，pogo pin 供給為瓶頸（channel_check／中）。對 Amphenol 而言是現有 HD2 份額在下一世代被稀釋的風險。

來源：[[261019_ms_OCP-MGX]]（Morgan Stanley，2026-10-19）。

## 來源

- [[報告_Semianalysis_CPOand800VDC_20260609]]（800VDC Pushout & CPO Delays，2026-06-09）
- [[報告_Semianalysis_CPO_20260102]]（CPO Book，2026-01-02）
- [[memo_AceCamp_Molex_CX2高速連接器_20260901]]（2026-09-01；同業匿名訪談）
- [[memo_AceCamp_高速銅纜與AEC供應鏈_20260918]]（2026-09-18；匿名產業訪談，低信心）

相關分析：[[分析_20260908-18專家紀要受訪公司辨識與技術觀察]]。

- [[261019_ms_OCP-MGX]]（2026-10-19）

## 相關頁面

- [[時程_2026Q3Q4_AI網通與硬體催化劑]]
