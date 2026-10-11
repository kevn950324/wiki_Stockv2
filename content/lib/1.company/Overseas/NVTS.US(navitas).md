---
title: "NVTS.US(navitas)"
ticker: "NVTS"
market: US
exchange: NASDAQ
sector: 功率半導體
tags:
  - 公司/Navitas
  - 產業/功率半導體
  - 環節/功率元件
updated: 2026-10-11
aliases:
  - Navitas Semiconductor
  - Navitas
related_companies:
  - '[[GFS.US(globalfoundries)]]'
  - '[[6770_力積電（市）]]'
  - '[[2308_台達電（市）]]'
  - '[[2301_光寶科（市）]]'
---

# NVTS.US(navitas)

## 基本資料
Navitas Semiconductor（NVTS）聚焦 GaN 與 SiC 功率半導體，產品應用由消費電子延伸至 AI 資料中心、800V 電源架構與電網基礎設施。Craig-Hallum 2026-05-06 報告指出，公司 1Q26 營收 US$8.6M、2Q26 指引 US$10M，並維持 Hold、將目標價由 US$10 調升至 US$13；數字與評等均屬券商資料。

## 核心技術／競爭優勢
- GaN power IC 與驅動整合，切入高頻、高效率的 AI 電源轉換。
- 報告追蹤 800V AI rack 與電網相關產品 samples，客戶決策窗口落在 2026H2–2027H1，具 design-in 黏著性但尚未等同量產訂單。
- SiC／GaN 雙路線，使公司可參與資料中心、電網與工業電源升級。

## 產品與應用
| 產品／方案 | 應用 | 相關下游 |
|---|---|---|
| GaN power IC | 800V→48/50V、AI rack DC-DC | AI 資料中心電源 |
| SiC／高功率元件 | 電網、工業與高功率轉換 | 電源基礎設施 |

## 圖片 / 架構圖

![[活動_國泰_美國參訪訪談紀要_20260914-18_p069.png]]

圖說：國泰 p69：Navitas 四階段供電路線；sidecar、原生 800V 與 SST 各自驗證。
![[NVTS 260506 Craig Hallum_001.png]]
> 來源報告首頁與公司更新資料，搭配既有 800VDC 架構頁追蹤 Navitas 的 Stage 0／Stage 1 位置。

## 目標價與評等
| 券商 | 報告日 | 評等 | 目標價 | 評價基礎 |
|---|---|---|---:|---|
| Craig-Hallum | 2026-05-06 | Hold | US$13 | 估值約 59x EV/S；estimate |

## 時間軸
| 時間 | 事件 | 類型 | 重要性 | 備註 |
|---|---|---|---|---|
| 2026H2 | 800V AI 基礎設施客戶決策 | 驗證 | ⭐⭐⭐ | Craig-Hallum estimate／待驗證 |
| 2027H1 | AI rack DC-DC 客戶決策 | 驗證 | ⭐⭐⭐ | Craig-Hallum estimate／待驗證 |

→ 架構細節詳見 [[技術_800VDC供電架構]]。

## 供應鏈位置
- 800VDC 電源架構的功率半導體供應商：[[技術_800VDC供電架構]]、[[供應鏈_AI伺服器散熱]]。
- 服務 AI 資料中心與電網升級；具體客戶與量產份額尚待查證。

## 相關公司
目前本報告未提供可安全建立的直接客戶／供應商 wikilink，保留空清單。

> [!warning] 風險與注意事項
> - 800V AI rack 與電網產品仍在 samples／決策階段，時程不是已確認量產。
> - Craig-Hallum 認為估值相對同業偏高；AI 電源 design-in 轉換速度與零售交易波動可能放大股價風險。

## 本批來源更新（2026-10-11 入庫）

### 2026-09 國泰參訪：800V 分階段與 GaN 代工移轉

CEO Chris Allexandre 的四階段路線：既有 50V PSU 功率增至 5／10kW；2027 年 480VAC→800V→50V sidecar；原生 800V 進 compute tray，GaN 降到 50／12／6V；15kVAC→800V SST 更晚約 2030。10kW 800→50V 展示峰值效率 98.5%，不泛化至完整系統。

sidecar 稱已有 FY27 訂單，原生 800V 仍為付費測試板／系統驗證；至少一個 XPU 2027、較全面部署 2028 是公司估計，不推定全 NVIDIA 平台採用。Navitas 將台達、光寶等列為電源系統客戶／驗證鏈，但未披露逐案認證與份額。

GlobalFoundries 美國 200mm Gen5：2026-09 首批晶圓、10 月樣品、年底客戶測試、FY27 HVM；TSMC 2Q27 退出時稱有約 2 年緩衝。力積電中壓 GaN 為戰術合作，不是主力 650V HVM 已獲認證。FoundryPlus 投資夥伴資產不等於轉成 IDM。

Claros 收購最高 US$233m、現金 125m、目標 2026 年底完成，VPD／IVR 收入在 2028／29 更晚；未把 SAM 情境當收入。Q2 營收 10.5m、non-GAAP GM 39.5%，Q3 指引 13.5±0.5m、GM 39.7±1%。每季收入 US$40m 損益兩平指向 FY28 某季，OCF 正值目標 FY29，不等於 FY28 全年已獲利。

時間軸與上述節點同步 [[時程_2026-2028十月券商催化劑]]。架構見 [[技術_800VDC供電架構]]，活動來源的公司說法採轉述／中信心。

## 來源

- [[活動_國泰_美國參訪訪談紀要_20260914-18]] — 國泰證期研究部，2026-09-18；原始研究／訪談全文，數字及時程依本批註記保留來源口徑。
- [[NVTS 260506 Craig Hallum]]（Craig-Hallum，2026-05-06）

- [[20260626_0803_JPM_First_Principles___A_2026-06-24_5235046]]（2026-06-24）

## 相關頁面

- [[分析_國泰美國參訪_電力測試記憶體與太空驗證_20260914-18]]

- [[分析_2026-08_AI半導體與電源供應鏈新來源]]
