---
title: "分析_CPO無源器件ELS_FAU與Shuffle專家訪談_20261030"
query_date: 2026-10-30
updated: 2026-10-30
sources:
  - "[[memo_CPO無源器件_ELS_FAU_Shuffle專家觀點_日期不詳]]"
  - "[[技術_CPO]]"
  - "[[技術_FAU]]"
  - "[[分析_ELS出貨量預測2026-2028]]"
tags:
  - 分析/產業
  - 技術/CPO
  - 技術/FAU
  - 技術/MPO
  - 技術/OCS
  - 供應鏈/CPO
related_companies:
  - "[[COHR.US(coherent)]]"
  - "[[GLW.US(corning)]]"
  - "[[LITE.US(lumentum)]]"
  - "[[NVDA.US(nvidia)]]"
  - "[[AVGO.US(broadcom)]]"
  - "[[3008_大立光（市）]]"
  - "[[3363_上詮（櫃）]]"
  - "[[2317_鴻海（市）]]"
  - "[[TSEM.US(tower semiconductor)]]"
  - "[[2330_台積電（市）]]"
  - "[[3711_日月光投控（市）]]"
  - "[[GOOGL.US(alphabet)]]"
  - "[[META.US(meta)]]"
  - "[[5803.JP(fujikura)]]"
related_topics:
  - "[[技術_CPO]]"
  - "[[技術_FAU]]"
  - "[[技術_MPO]]"
  - "[[技術_光互連]]"
  - "[[供應鏈_CPO]]"
  - "[[分析_ELS出貨量預測2026-2028]]"
  - "[[時程_2026-2027高速互連與分散式算力]]"
---

# 分析_CPO無源器件ELS_FAU與Shuffle專家訪談_20261030

## 問題背景

CPO／NPO 交換器的價值量討論多集中在光引擎與雷射晶片，但量產瓶頸愈來愈落在 ELS 模組、保偏光纖（PMF）、FAU／DFAU、Shuffle Box 與 MMC 這些無源器件。使用者 2026-10-30 提供一份匿名專家訪談（日期不詳），把 ELS 與 DFAU 的物料清單、兩條 FAU 代工鏈（Coherent 與 Corning）、PMF 缺口與 2027Q2～Q3 放量節點一次拆開。本頁的判讀是：**2027 年真正的硬瓶頸是 PMF 產能與 FAU 熟練人力，不是 ELS 模組組裝**；價值較穩的環節是 CW 雷射（Coherent／Lumentum）與 PMF（Corning），組裝代工的淨利率只有 3%–5%。

> [!warning] 受訪者與規格口徑
> - 原文「公司」判讀為 [[COHR.US(coherent)]]（中高信心）：自產 CW 雷射與 PMLA、FAU 外包光庫／蘅東光／工業富聯、福州擴產、研發 200G VCSEL、供應 Google OCS 環形器。受訪者身分未公開。
> - 原文把 Quantum 寫成 102.4T、Spectrum 寫成 115.2T；[[技術_CPO]] 引 NVIDIA 官方 2025-08-26 資料為 **Quantum-X Q3450 115.2T（4 顆 ASIC、144×800G）**、**Spectrum-X 102.4T（單一 ASIC、32×3.2T 光引擎）**。144×800G＝115.2T、128×800G＝102.4T，可判定原文總頻寬標示對調；ASIC、MPO、光引擎與 ELS 數量則與官方及既有資料一致。本頁採官方數字。

## 關鍵發現

以下除另註外，皆出自 [[memo_CPO無源器件_ELS_FAU_Shuffle專家觀點_日期不詳]]（2026-10-30 收錄），屬匿名 channel estimate：

- **交換器配置**：Quantum 4 ASIC、144 MPO、72 個 1.6T 光引擎、72 個 FAU、18 個 ELS；Spectrum 1 ASIC、128 MPO、32 個 3.2T 光引擎、32 個 FAU、16 個 ELS。
- **ELS 結構**：每個 ELS 有 8 路，每路是 1 顆 CW 雷射、2 片透鏡（準直＋匯聚）、1 個雙極隔離器、1 根 PMF；8 根 PMF 以 4 根一組經保偏 FA 輸出。
- **ELS 價格**：目前售價 US$500–600、物料約 US$300（CW 約 US$30／顆、兩片透鏡 US$1.25–1.5、雙極隔離器 US$6–7、PMF US$4–5／根）；預期降至 US$400–450 或更低，主因是 CW 降價。2027 年 ELS 需求「千萬顆級別」。
- **ELSFP 份額**：第一代（Quantum）幾乎由天孚主導；第二代（Spectrum）預期 Coherent 最大，其次天孚，再次旭創、新易盛與 Lumentum。天孚、旭創、新易盛的 CW 向 Lumentum 採購。
- **PMF**：售價約 US$4／公尺以上，嚴重缺貨、擴產後預期先漲後跌；Corning 產能約 1 萬芯公里，需求為其十倍以上，正接洽長盈通、烽火、長飛代工。
- **DFAU**：36 芯（32 單模＋4 PMF），一端 V-Groove（加 PMLA 做 90° 轉折、垂直耦合到光柵耦合器），另一端 MMC；目前售價可達 US$300，客戶目標 US$150–200；主料約 US$16（PMF）＋US$5–6（V-Groove）＋20 多美元（4 個 12 芯 MMC）＋US$5–6（MPO）。
- **兩條代工鏈**：Coherent 自製 PMLA，向光庫、蘅東光、工業富聯買 FAU 自行組成 DFAU；Corning 買 PMLA 交給蘅東光、仕佳、工業富聯組成完整 DFAU。天孚 FAU 自製。
- **Shuffle Box**：US$3,000–3,500／台，未來約 US$2,500；Corning 約 70% 份額、全數交太辰光代工；其他為波若威、[[3363_上詮（櫃）]]，天孚計畫切入。
- **良率與人力**：FAU 良率普遍不高（天孚相對好），瓶頸是半人工穿纖與光纖微裂；熟練工需 3–4 個月培訓。Coherent 福州 FAU 月產能從數萬只擴至百萬只級，新增逾萬名員工、廠房由 3 棟增至近 10 棟。
- **放量節點**：CPO 目前每月僅數千至一萬個；2027Q2 小量、2027Q3～Q4 NPO／CPO 每月數十萬至數百萬個。NPO 規模出貨 2027H2 起、2027 年底到 2028 年明顯放量。
- **OCS**：NVIDIA OCS 預期 2027H2 放量、部署於 1U 層級，偏好波導但插損未解，樣品同時評估液晶與 MEMS；光迅已送 Meta、Google 各一台樣機。

## 投資重點 memo

| 重點 | 投資含義 | 相關標的 | 信心 |
|---|---|---|---|
| ELS 價值在 CW 雷射，模組組裝不是護城河 | ELS 降到 US$400–450 主要壓縮 CW 與組裝利潤；自產 CW 的廠商在第二代份額最大 | [[COHR.US(coherent)]]、[[LITE.US(lumentum)]] | 中低 |
| PMF 是 2027 年最硬的瓶頸 | 有產能就有訂單、先漲後跌；Corning 外找代工，名目擴產不等於有效供給 | [[GLW.US(corning)]]、[[5803.JP(fujikura)]] | 中低 |
| DFAU 從 US$300 往 US$150–200 收斂 | 目前單價高，但 BOM 只有約 US$50–70；毛利來自良率與 PMF 處理能力，價格下修會淘汰良率差的廠商 | [[COHR.US(coherent)]]、[[GLW.US(corning)]]、[[3008_大立光（市）]] | 中低 |
| Shuffle Box 由 Corning 主導 | 光纖自用推高 Corning 份額；台廠（上詮、波若威）是第二梯隊 | [[GLW.US(corning)]]、[[3363_上詮（櫃）]] | 低 |
| 工業富聯同時在兩條 FAU 鏈 | 鴻海集團在 Corning 鏈做整個 DFAU、在 Coherent 鏈做 FAU，屬 CPO 被動件的新角色 | [[2317_鴻海（市）]] | 低 |
| 大立光是 2027 年產能缺口的候選補位者 | 2,000 萬個 FAU 需求需多家供應；送樣失敗後很難再進入 | [[3008_大立光（市）]] | 低 |
| CPO 製程分工 | NVIDIA 設計 PIC → Tower 流片 → 台積電封裝 → 日月光測試 | [[TSEM.US(tower semiconductor)]]、[[2330_台積電（市）]]、[[3711_日月光投控（市）]] | 中 |

## 受惠鏈

| 廠商 | 環節／角色 | 受惠理由 | 信心 | 觀察重點 |
|---|---|---|---|---|
| [[COHR.US(coherent)]] | CW、ELSFP、PMLA、DFAU 組裝、OCS 環形器 | 第二代 ELSFP 份額預期最大；福州 FAU 產能擴至月百萬只 | 中低 | Spectrum CPO 放量時程、福州招工進度 |
| [[LITE.US(lumentum)]] | CW 雷射供應天孚／旭創／新易盛；ELSFP 自製（雲暉） | 掌握 CW，下游 ELS 份額分散也仍受惠 | 中 | ELS 自製比例、CW 產能 |
| [[GLW.US(corning)]] | PMF、Shuffle Box、DFAU（外包組裝） | Shuffle Box 約 70%、PMF 缺貨中 | 中低 | PMF 代工對象、Shuffle Box 降價速度 |
| 天孚通信（未建頁） | 第一代 ELS、FAU／保偏 FA、隔離器；計畫切 Shuffle | 保偏 FA 能力最強、良率較好 | 中低 | 第二代 ELSFP 份額是否被 Coherent 拿走 |
| 蘅東光、光庫、仕佳、太辰光（未建頁） | FAU／DFAU 與 Shuffle 代工 | 兩條鏈同時供貨，但代工淨利率 3%–5% | 低 | 光庫是否完成收購安捷訊 |
| [[3363_上詮（櫃）]] | Shuffle Box 第二梯隊、FAU | Corning 以外的 Shuffle 供應選項 | 低 | 是否取得 NVIDIA Shuffle 訂單 |
| [[3008_大立光（市）]] | 潛在 DFAU 供應商 | 需求遠大於單一供應商能力 | 低 | 送樣與驗證結果 |
| [[2317_鴻海（市）]] | 工業富聯：Corning 鏈完整 DFAU、Coherent 鏈 FAU | 集團切入 CPO 被動件 | 低 | 是否在財報或法說揭露 |

## Insight 結論

| 結論 | 投資含義 | 信心 |
|---|---|---|
| 2027 年 PMF 需求約 8–10 萬芯公里，與 Corning 約 1 萬芯公里產能差距很大 | PMF 漲價與代工外包是 2027H1 的先行訊號；PMF 不足會直接卡 ELS 與 DFAU | 中低 |
| ELS 需求「千萬顆」高於 wiki 既有 500–700 萬只共識 | 視為需求上緣；實際出貨仍受 CW 與 PMF 限制，不上修 [[分析_ELS出貨量預測2026-2028]] 的供給推算 | 低 |
| 被動件價值量約為傳統光模組的 5–10 倍，但淨利率多在 8%–15% | 營收彈性大，獲利彈性要看良率；代工型廠商不宜以營收倍數估值 | 中低 |
| FAU 自動化困難，熟練人力是產能上限 | 擴產速度看招工與培訓，而非設備採購；對位設備需求仍在 | 中 |
| 36 芯 FAU 不能單獨判定 CPO，32 芯對應內置光源 NPO | 追蹤供應商出貨芯數可間接推估內外置光源比例 | 中 |

> [!tip] 結論／投資觀點
> CPO 被動件 2027Q3 起放量，但瓶頸在 PMF 與 FAU 熟練人力；價值留在 CW 雷射與 PMF 的上游（Coherent、Lumentum、Corning），DFAU 與 Shuffle Box 的組裝代工面臨降價與低淨利率。
> 信心水準：中低（匿名單一來源）

## 數據彙整

| 項目 | 數值 | 來源 | 日期 |
|---|---|---|---|
| ELS 售價／物料 | US$500–600／約 US$300；目標 US$400–450 | 本訪談 | 日期不詳 |
| CW 雷射單價 | 約 US$30 | 本訪談 | 日期不詳 |
| 雙極隔離器 | US$6–7 | 本訪談 | 日期不詳 |
| PMF 價格 | 約 US$4／公尺以上（「3 元人民幣／公尺」不可能） | 本訪談 | 日期不詳 |
| 2027 ELS 需求 | 約 1,000 萬顆 → 2,000 萬個 3.2T 光引擎 → 2,000 萬個 FAU | 本訪談 | 日期不詳 |
| 2027 PMF 需求 | 2,000 萬 FAU × 4m ＝ 8,000 萬公尺 ＝ 8 萬芯公里 | 本訪談推算 | 日期不詳 |
| Corning PMF 產能 | 約 1 萬芯公里 | 本訪談 | 日期不詳 |
| FAU 廠 PMF 用量 | 天孚、光庫、蘅東光每家每月 2,000–3,000 芯公里 | 本訪談 | 日期不詳 |
| DFAU 售價 | 可達 US$300；目標 US$150–200 | 本訪談 | 日期不詳 |
| Shuffle Box | US$3,000–3,500 → 約 US$2,500；內含 1,152＋128 根光纖 | 本訪談 | 日期不詳 |
| MMC | 12 芯 US$6–8；144 芯 MMC 連接器 1,000 多美元 | 本訪談 | 日期不詳 |
| 蘇納光電矽透鏡份額 | 全球 60%–70% | 本訪談 | 日期不詳 |
| 無源器件淨利率 | 天孚以外 8%–15%；代工 3%–5% | 本訪談 | 日期不詳 |
| Coherent 800G 委外 | 每季 100–200 萬只，由天孚、Fabrinet 分配 | 本訪談 | 日期不詳 |

> [!warning] 與既有資料的口徑差異
> - **ELS 單價**：[[技術_CPO]] Q3450 BOM（SemiAnalysis 2026-01）為 18 個 ELS 合計 US$6,300（約 US$350／個）；同頁 2026Q2 調研為約 US$430；[[分析_ELS出貨量預測2026-2028]] 列 GS US$400、專家 US$500 以上。本訪談 US$500–600 屬現價、US$400–450 屬未來價，可能是時間點與規格（Quantum 第一代 vs Spectrum 第二代）不同，並列保留。
> - **PMF 需求量級**：[[技術_FAU]] 引亨通光電匿名紀要（2026-09-30）稱 2026H1 供給不足 20 萬芯公里、2027 需求 40–60 萬芯公里；本訪談只算 CPO／NPO 外置光源 FAU，約 8–10 萬芯公里。前者可能涵蓋其他 PMF 用途（光纖陀螺、感測等），兩者口徑不同，不直接比較。
> - **PMF 價格**：亨通紀要為長協 20 多元、現貨約 40 元人民幣／公尺；本訪談 US$4 以上（約 28 元人民幣以上），落在同一區間。
> - **OCS 代工**：[[技術_光互連]] 稱武漢捷普 2025 年底合約結束、轉向旭創與新易盛；本訪談稱武漢捷普代工「仍在討論、尚未落地」。可能是不同客戶或不同專案，並列保留。

## 關鍵 Claim

| Claim | 類型 | 來源 | 日期 | 信心 |
|---|---|---|---|---|
| 第二代 ELSFP（Spectrum）Coherent 份額最大，天孚第二 | rumor | [[memo_CPO無源器件_ELS_FAU_Shuffle專家觀點_日期不詳]] | 日期不詳（2026-10-30 收錄） | 低 |
| 第一代 ELSFP（Quantum）由天孚主導 | estimate | 同上 | 同上 | 中低 |
| ELS 價格由 US$500–600 降至 US$400–450 | estimate | 同上 | 同上 | 中低 |
| 2027 年 ELS 需求約 1,000 萬顆 | estimate | 同上 | 同上 | 低 |
| Corning PMF 產能約 1 萬芯公里，正找中國代工 | rumor | 同上 | 同上 | 低 |
| Corning Shuffle Box 份額約 70%，全數由太辰光代工 | estimate | 同上；[[供應鏈_CPO]] 既有「Corning 分包 T&S」一致 | 同上 | 中 |
| DFAU 客戶目標價 US$150–200 | estimate | 同上；[[技術_FAU]] 既有 CPO FAU 150–200 USD 一致 | 同上 | 中 |
| 工業富聯在 Corning 鏈做完整 DFAU | rumor | 同上 | 同上 | 低 |
| 2027Q3 NPO／CPO 每月出貨達數十萬至數百萬 | estimate | 同上 | 同上 | 低 |
| NVIDIA OCS 2027H2 放量，偏好波導 | rumor | 同上 | 同上 | 低 |
| Broadcom CPO FAU 為 40 芯、3.6T | rumor | 同上 | 同上 | 低 |

> [!todo] 反證條件／待確認
> - [ ] 若 Spectrum-X Photonics 2027 年出貨延後（SemiAnalysis 曾稱 2027 CPO 預期過於積極），第二代 ELSFP 與 36 芯 DFAU 的放量節點會順延，Coherent 份額說法失去意義。
> - [ ] 若 NVIDIA 改用單模光纖＋矽光偏振控制取代 PMF（見 [[技術_MPO]]），PMF 缺口 thesis 失效。
> - [ ] 若 [[GLW.US(corning)]] GlassBridge 邊緣耦合普及，V-Groove＋PMLA 型 DFAU 的需求會被替代。
> - [ ] 追蹤 Corning 是否公告 PMF 代工夥伴（長盈通、烽火、長飛）。
> - [ ] 追蹤 Coherent 福州招工與廠房擴建是否有公開資料佐證。
> - [ ] 確認 ELS「千萬顆」是否含 NPO 外置光源與 scale-up，與 [[分析_ELS出貨量預測2026-2028]] 的 500–700 萬只對齊口徑。

## 來源引用

- [[memo_CPO無源器件_ELS_FAU_Shuffle專家觀點_日期不詳]] — 匿名專家訪談，日期不詳（2026-10-30 收錄）
- [[技術_CPO]] — wiki 編譯頁（NVIDIA 官方 2025-08-26 Quantum-X／Spectrum-X 規格、SemiAnalysis Q3450 BOM）
- [[技術_FAU]] — wiki 編譯頁（亨通光電 PMF 紀要 2026-09-30、既有 FAU 份額）
- [[分析_ELS出貨量預測2026-2028]] — wiki 分析頁（2026-10-23 更新）
