---
title: "VRT.US(vertiv)"
ticker: "VRT"
market: US
exchange: NYSE
sector: 資料中心電源 / 熱管理
tags:
  - 公司/Vertiv
  - 產業/AI伺服器
  - 技術/800VDC
  - 環節/電源
updated: 2026-08-14
aliases:
  - Vertiv
  - 維諦
  - VRT
  - UPS
related_companies:
  - "[[NVDA.US(nvidia)]]"
  - "[[GEV.US(ge_vernova)]]"
image_status: "待補來源圖"
---

# VRT.US(vertiv)

## 基本資料

Vertiv 是資料中心電源與熱管理（含 UPS、power rack、配電、液冷）的領導廠商，是 AI 機櫃供電架構轉換（含 800VDC / HVDC sidecar）的核心受惠者之一。營收驅動來自 AI 資料中心的電力與散熱基礎設施擴張。供應鏈位置：資料中心電力鏈核心廠商，服務 hyperscaler 與 Neocloud 的機櫃級供電。資料來源：SemiAnalysis 800VDC note（2026-06-09）。

## 核心技術／競爭優勢

- **電源機櫃 / sidecar 轉型**：無論匯流排是 400V 或單端 800V，sidecar/power rack 轉型照走，使 Vertiv 對架構選擇相對中性。
- **Computex 2026 展示 grey-space power rack**：把 PSU 與 PDU 移到 IT room 外，保留珍貴的 white space，獲 SemiAnalysis 正面評價。
- 大型 UPS 業務：800VDC 延後反而延長其壽命。

## 產品與應用

| 產品 / 服務 | 應用 | 相關客戶 / 下游 |
|-------------|------|-----------------|
| Power rack / sidecar | AI 機櫃集中供電 | hyperscaler / Neocloud（未建頁） |
| 大型 UPS | 資料中心不斷電 | 資料中心營運商 |
| 液冷 / 熱管理 | 高功率機櫃散熱 | AI 伺服器部署 |

## 圖片/架構圖

`[待補來源圖]` 需官方 IR 液冷或電源管理系統架構圖佐證，現有研究筆記不足以支撐系統示意圖。

## 供應鏈位置

- 下游客戶：AI 資料中心 / hyperscaler（含 [[NVDA.US(nvidia)]] 機櫃生態的電力配套）
- 所屬主題：[[技術_800VDC供電架構]]
- 同環節（未建頁）：台達電 2308.TW、光寶科 2301.TW（power rack 轉型）；grey-space：Legrand、Schneider、ABB、Hammond Power、Fortrend/FPS

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[NVDA.US(nvidia)]] | 下游生態 | AI 機櫃供電/散熱配套需求來源 |

## 券商觀點與催化劑

- [[報告_Semianalysis_CPOand800VDC_20260609]]（2026-06）：800VDC 延後對 power rack 供應商（Vertiv、台達、光寶）影響**中性**——sidecar/power rack 轉型不論匯流排 400V 或單端 800V 都在發生；Vertiv 因 800V 延後**延長大型 UPS 業務壽命**而定位尤佳。報告對 Vertiv 在 Computex 後**轉趨正面**（與 Amphenol、Fortrend、Legrand、FormFactor 同組）。
- 對照：800VDC 才是寬能隙（WBG）含量真正放量點，其延後使 Wolfspeed、Navitas 等純玩家近期缺催化劑（負面）——Vertiv 屬「架構中立、轉型照走」的相對受惠方。

## 來源

- [[報告_Semianalysis_CPOand800VDC_20260609]]（800VDC Pushout & CPO Delays，2026-06-09）

## 相關頁面

- [[分析_AI資料中心供電與電熱整合]]
- [[供應鏈_AI伺服器散熱]]


## 2026Q2 電話會議更新（大和，2026-08-10）

Q2 北美 organic growth 為 20%，低於原 guidance 30%，主因 SmartRun／One Core 等整合系統任一 point product 缺件即延後整套出貨。公司表示 7 月已見改善，下半年北美 guidance 隱含約 40%，全年 organic growth guidance 為 30–32%（management guidance，信心：中）。

![[報告_大和_Vertiv電話會議摘要_20260810_001.png]]

*圖（大和，2026-08-10）：Vertiv 預製化基礎建設方案；多項 power／thermal point products 整合交付，使專案協調與供應鏈同步成為營收認列瓶頸。*

![[報告_大和_Vertiv電話會議摘要_20260810_002.png]]

*圖（Vertiv／大和，2026-08-10）：資料中心高壓供電需求由 rack、pod 演進至 data hall；公司預期 AC、DC sidecar 與完整 800VDC 長期並存。*

| 時間 | 事件 | 類型 | 重要性 | 備註 |
|------|------|------|--------|------|
| 2026H2 | 北美 organic growth 修復至約 40%（guidance） | 營運修復 | ⭐⭐⭐ | 產能、供應商認證、工程與 PMO 強化 |
| 2027 | rack／pod 層級 HVDC 設計驗證 | 技術驗證 | ⭐⭐ | 放量由次世代晶片規格主導 |
| 2028+ | data hall 級 800VDC／中伏 UPS／SST | 規格升級 | ⭐⭐⭐ | 每 MW content 可能提高 |

> [!warning] 風險更新
> - 大型整合方案具「缺一件、整套延遲」特性；修復若不如 guidance，營收認列仍可能後移。
> - 800VDC、SST 與 two-phase liquid cooling 尚在驗證，實際採用由晶片功耗與客戶架構決定。

- [[報告_大和_Vertiv電話會議摘要_20260810]] — 大和 sales note，2026-08-10

- 催化劑時程：[[時程_2026記憶體與AI催化劑]]

### 2026-08 電熱整合研究更新

- 永豐投顧 2026-08-23 將 Vertiv 定位為資料中心電力、熱管理、模組化建置與服務整合度最高的純資料中心平台之一；每 MW 可服務市場估約 US$3.25–3.75M，屬券商整理與估計，信心：中。
- 研究指出 AI 機櫃功率由 140kW 走向 Vera Rubin Ultra 約 600kW，供電與散熱需作為同一系統設計；Vertiv 受惠於電熱整合，但大型專案仍有「缺一件、整套延遲」風險。
- 來源：[[Sinopac_電力設備]]（永豐投顧，2026-08-23）。
