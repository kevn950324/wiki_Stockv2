---
title: "分析_MS_AI供應鏈_HBM降規與Kyber延遲_20260810"
query_date: 2026-08-16
updated: 2026-08-17
sources:
  - "[[報告_MS_AI供應鏈_20260810]]"
  - "[[報告_富邦_Kyber機櫃延後_20260721]]"
  - "[[memo_廣發海外電子通信月度電話會議_20260814]]"
tags:
  - 產業/AI伺服器
related_companies:
  - "[[NVDA.US(nvidia)]]"
  - "[[2059_川湖（市）]]"
  - "[[2308_台達電（市）]]"
  - "[[3017_奇鋐（市）]]"
  - "[[3653_健策（市）]]"
related_topics:
  - "[[技術_HBM高頻寬記憶體]]"
  - "[[技術_CPO]]"
  - "[[技術_800VDC供電架構]]"
---

# 分析_MS_AI供應鏈_HBM降規與Kyber延遲_20260810

## 問題背景

Morgan Stanley 2026-08-10 的供應鏈查核顯示，記憶體短缺與超級節點工程難度正改變 Rubin Ultra 硬體組態。核心 thesis 是：短期由分級 HBM 與 Oberon NVL72 緩解供應／工程瓶頸，中長期仍以 CPO／NPO 跨機櫃互連擴大 scale-up domain。

富邦 2026-07-21 的產業調查補充 Kyber 實體瓶頸：垂直 blade、78 層 HLC／M10 CCL midplane、600kW 供電、0.5U 散熱與不對稱滑軌承重需同步成熟。其結論是 Kyber 延後主要讓高規零組件收入遞延，CSP 仍會以 Oberon 機櫃承接需求。

## 關鍵發現

- [[報告_MS_AI供應鏈_20260810]]（2026-08-10）指 Rubin Ultra 可能分高階 HBM4e 8Hi 與低階 HBM4 12Hi／8Hi SKU，NVIDIA 預計 2026Q3 末前定案。
- 降低單晶片記憶體容量對長 context decoding 的影響高於 pre-fill，但可能增加 GPU 出貨顆數。
- Kyber blade rack 受 PCB 與散熱挑戰延後，首代 Rubin Ultra 可能續用 Oberon NVL72，再以 CPO／NPO 支援 NVL576 規模。
- [[報告_富邦_Kyber機櫃延後_20260721]]（2026-07-21）估 Kyber midplane 採 78 層 HLC、M10 CCL，單 GPU CCL 價值量較 Oberon 增加約 US$40／20%；但富邦基準情境為 2027 年無 Kyber 出貨。
- 富邦估 Kyber 約 600kW，需 800VDC power rack；MCL 與雙相液冷仍受測試標準、流量均勻、快接頭／管線壓力與幫浦設計制約。
- [[memo_廣發海外電子通信月度電話會議_20260814]]（2026-08-14）進一步稱 Rubin Ultra 以 8-Hi 為主要降配方向，列出 HBM4 192GB／HBM4E 256GB 與 12-Hi 288GB／384GB 四種版本；192GB 偏推論、384GB 偏訓練。
- 同份來源預期 Rubin Ultra 2027H2 與 Feynman 2028H2 的 scale-up 先採 NPO，顯示「跨機櫃光互連方向不變，但 CPO 形態與時程可能後移」。

![[報告_富邦_Kyber機櫃延後_20260721_003.png]]

圖說：Kyber 以垂直 compute blade／switch blade 經 midplane 正交連接，省去 Oberon 大量銅纜，但把 PCB、散熱、供電與機構可靠度集中成單一系統瓶頸。（來源：富邦投顧，2026-07-21）

## 投資重點 memo

| 重點 | 投資含義 | 相關標的 | 信心 |
|------|----------|----------|------|
| HBM 分級而非全面同規格 | 高容量／層數需求下修，但 GPU 數量與測試量可能補償 | [[NVDA.US(nvidia)]] | 中 |
| Kyber 延遲 | 機架 PCB／散熱難度仍是 supernode 瓶頸 | [[3017_奇鋐（市）]] | 中 |
| Oberon 承接過渡需求 | ODM 整機需求未必消失；Kyber 專屬 M10／78 層 PCB、MCL／雙相液冷與高階滑軌收入較可能遞延 | [[2059_川湖（市）]]、[[3017_奇鋐（市）]]、[[3653_健策（市）]] | 中 |
| 跨機櫃光互連方向不變 | CPO 短期時程有風險，中長期 scale-up 需求仍在 | [[NVDA.US(nvidia)]] | 中高 |

## Insight 結論

| 結論 | 投資含義 | 信心 |
|------|----------|------|
| 記憶體短缺促使 SKU 分層，並未消除總算力擴張 | HBM 內容／GPU 數量需一起觀察，不宜單看單顆規格 | 中 |
| Kyber 延後將近期價值留在既有 NVL72 與散熱／PCB 優化 | 既有供應鏈營收延續，但 NVL576 放量節奏下修 | 中 |

> [!tip] 結論／投資觀點
> Rubin Ultra 的調整是「用組態最佳化換取供應與工程可行性」，不是 AI capex 方向反轉；真正需下修的是高階 HBM 單機含量與 Kyber／NVL576 時程。

## 關鍵 Claim

| Claim | 類型 | 來源 | 日期 | 信心 |
|-------|------|------|------|------|
| Rubin Ultra 採分級 HBM SKU | estimate | [[報告_MS_AI供應鏈_20260810]] | 2026-08-10 | 中 |
| Kyber 因 PCB／散熱挑戰延後且無明確時程 | fact／channel check | [[報告_MS_AI供應鏈_20260810]] | 2026-08-10 | 中 |
| 2027 年不會有 Kyber 出貨；延遲對 ODM 無明顯影響、對升規零組件短期影響在中低個位數百分比以下 | estimate／thesis | [[報告_富邦_Kyber機櫃延後_20260721]] | 2026-07-21 | 中 |
| CPO 是 NVIDIA 偏好的跨機櫃方向 | thesis | [[報告_MS_AI供應鏈_20260810]] | 2026-08-10 | 中高 |
| Rubin Ultra 準備四種 8-Hi／12-Hi HBM4／HBM4E 容量，192GB 為推論主流 | estimate／channel check | [[memo_廣發海外電子通信月度電話會議_20260814]] | 2026-08-14 | 中 |
| Rubin Ultra／Feynman scale-up 先以 NPO 為主 | estimate／channel check | [[memo_廣發海外電子通信月度電話會議_20260814]] | 2026-08-14 | 中 |

> [!warning] 資訊衝突
> - [[報告_摩根大通_台灣能源南亞目標價調升_20260713]]（報告日：2026-07-13）：記錄 NVIDIA 否認 Kyber 延遲，表示 roadmap intact。
> - [[報告_富邦_Kyber機櫃延後_20260721]]（報告日：2026-07-21）：富邦產業調查維持 2027 年無 Kyber 出貨的基準情境。
> - [[報告_MS_AI供應鏈_20260810]]（報告日：2026-08-10）：供應鏈查核指 Kyber 因 PCB／散熱挑戰延後，尚無明確時程。
> - [[memo_廣發海外電子通信月度電話會議_20260814]]（資料日：2026-08-14）：稱 8-Hi 路線已在韓國主要 HBM 供應商完成設計定案，並預期 Rubin Ultra scale-up 以 NPO 為主。
> - 狀態：公司口徑與兩家券商 channel check 並存；在 NVIDIA 公布明確量產節點前，以「時程未確認」處理。

> [!todo] 反證條件 / 待確認
> - [ ] NVIDIA 是否在 2026Q3 末正式公布 HBM SKU。
> - [ ] 若 HBM 供給快速改善，降規與 GPU 數量補償 thesis 可能失效。
> - [ ] 驗證 Kyber 是否恢復具體量產時間，以及 Oberon 延用範圍。

## 來源引用

- [[報告_MS_AI供應鏈_20260810]] — Morgan Stanley，2026-08-10
- [[報告_富邦_Kyber機櫃延後_20260721]] — 富邦投顧，2026-07-21
- [[memo_廣發海外電子通信月度電話會議_20260814]] — 廣發海外電子通信，2026-08-14
