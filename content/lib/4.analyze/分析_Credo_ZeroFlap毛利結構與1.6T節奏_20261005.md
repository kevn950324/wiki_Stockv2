---
title: "分析_Credo_ZeroFlap毛利結構與1.6T節奏_20261005"
query_date: 2026-10-05
updated: 2026-10-05
sources:
  - "[[活動_Credo_凱基CallMemo_20261005]]"
  - "[[memo_國泰證期_CredoCallMemo_20260902]]"
  - "[[報告_GFHK_Credo_20260901]]"
  - "[[memo_AceCamp_Credo_800G光模組與1.6TAEC_20260930]]"
  - "[[CRDO.US(credo)]]"
tags:
  - 分析/產業
  - 公司/Credo
  - 技術/光互連
  - 產業/光通訊
related_companies:
  - "[[CRDO.US(credo)]]"
  - "[[MRVL.US(marvell)]]"
  - "[[3665_貿聯-KY（市）]]"
related_topics:
  - "[[技術_光互連]]"
  - "[[技術_CPO]]"
  - "[[時程_2026-2027高速互連與分散式算力]]"
  - "[[分析_20260930專家紀要公司辨識與商業化驗證]]"
---

# 分析_Credo_ZeroFlap毛利結構與1.6T節奏_20261005

## 問題背景

Credo 正從 AEC 延伸到自有品牌光模組（ZeroFlap Optics）、PIC 與 NPO。市場關心兩件事：光模組這種「低毛利產品」會不會拉低公司毛利率，以及 1.6T 與 scale-up 何時真正貢獻營收。凱基主辦的管理層電話會議（[[活動_Credo_凱基CallMemo_20261005]]）首次給出 ZeroFlap 毛利的示意算式，並把 1.6T 量產窗口定在 2027-04～06。

Thesis 預告：ZeroFlap 的高毛利來自「自有矽不必付給晶片廠毛利」，而不是模組製造本身；短期真正的變數是放量年度與代工成本，而非毛利結構。

## 關鍵發現

- 1.6T AEC 與光學 DSP 預計 FY27 末～FY28 初（2027-04～06）開始量產出貨，CY27 下半年確定放量；CY26 1.6T 營收為零（[[活動_Credo_凱基CallMemo_20261005]]，2026-10-05）。
- 1.6T 卡關在客戶交換器與 NIC 配套；最大客戶之一下一代自研 NIC 仍為 8×100G（同上）。
- 光學供給已確保 FY27 末出貨數十萬顆、FY28 成長 2～3 倍；200G/lane 的 3nm 與雷射可能最緊（同上）。
- FY27 毛利率目標 68%；ZeroFlap、OmniConnect、ALC、Retimer、AEC 新產品整體落在 60% 高段（同上）。
- 示意算式：800G 模組 US$400、模組廠毛利率 40% → COGS US$240；外購矽約 US$100，Credo 自製同等矽成本約 US$20 → COGS US$160、同價毛利率 60%；溢價 25%（ASP US$500）→ 毛利率 68%（同上）。
- ZeroFlap 目前只揭露 TensorWave（neocloud）；管理層稱放量在「FY28 下半年」，此年度原稿標註待確認（同上）。既有來源稱 FY27 ZeroFlap 貢獻逾 US$100mn（[[memo_國泰證期_CredoCallMemo_20260902]]，2026-09-02）、光學量產高峰在 FY2H27（[[報告_GFHK_Credo_20260901]]，2026-09-02）。
- 第一代 ZeroFlap 用外購 PIC，DustPhotonics PIC 約 9 個月後導入下一代；DSP＋PIC 套裝短期無實質營收（[[活動_Credo_凱基CallMemo_20261005]]）。
- NPO 用 PIC 預計 FY28 開始貢獻營收；200G/lane scale-up Retimer 打入網通 OEM 交換器板，已有 US$50M 訂單（同上）。

## 投資重點 memo

| 重點 | 投資含義 | 相關標的 | 信心 |
|------|----------|----------|------|
| 自有矽省下晶片廠毛利，是 ZeroFlap 毛利接近公司平均的主因 | 光模組放量不必然稀釋毛利率；若溢價低於 25%，毛利率約在 60%～68% 之間 | [[CRDO.US(credo)]] | 中 |
| 初期代工成本高於大型模組廠 | FY27～FY28 初期光學毛利可能低於示意值，需看量產爬坡 | [[CRDO.US(credo)]] | 中 |
| 對外部 DSP 廠的壓力 | 若系統商自製矽比例上升，外購 DSP 的高毛利（示意約 80%）面臨被繞過的風險 | [[MRVL.US(marvell)]] | 低 |
| 1.6T 放量依客戶分歧 | 800G 產品週期比預期長；2×800G 與 Y-cable 拓撲讓 AEC 數量不一定隨 1.6T 減少 | [[CRDO.US(credo)]]、[[3665_貿聯-KY（市）]] | 中 |
| Scale-up 營收在 FY28 才起步 | 短期估值仍由 AEC 與 800G 光學支撐，NPO／微發光源屬長期選擇權 | [[CRDO.US(credo)]] | 中 |

## 論點彙整

| 主題 | 管理層觀點 | 投資含義 | 信心 |
|------|-----------|----------|------|
| ZeroFlap 定價 | 「適度溢價」，幅度未定；以 AEC 早期經驗看，首家大客戶會壓價 | 首批 hyperscaler 訂單的毛利可能低於長期水準 | 中 |
| 渠道衝突 | 賣 DSP／PIC 給模組廠，同時自賣模組；衝突尚未出現 | ZeroFlap ASP 三位數、DSP 二位數，衝突時公司偏向模組 | 中 |
| 微發光源 | microLED 與 microVCSEL 都用 | 貿聯與 ams OSRAM 的 microVCSEL 路線不一定是 ALC 的替代威脅 | 中 |
| CPO 時程 | 至少還要數年 | 「CPO 取代 AEC」的估值折價有修正空間，但需第三方驗證 | 中 |

## Insight 結論

| 結論 | 投資含義 | 信心 |
|------|----------|------|
| ZeroFlap 的毛利來源是垂直整合矽，不是模組組裝 | 追蹤重點是自有 DSP／PIC 在模組 BOM 中的比例，以及代工成本下降速度 | 中 |
| 1.6T 是 2027 年下半年的事 | 2026Q4～2027Q1 的營收動能仍以 800G AEC 與 800G 光學為主 | 中 |
| ZeroFlap 放量年度存在口徑衝突 | 下一次法說需確認 FY27 光學逾 US$600mn 的組成是否改變 | 低 |

> [!tip] 結論／投資觀點
> Credo 能用自有矽把光模組毛利拉近公司平均，但 FY27～FY28 初期受代工成本與客戶壓價影響；真正要驗證的是 ZeroFlap 放量年度與 1.6T 配套進度。
> 信心水準：中

## 數據彙整

| 項目 | 數值 | 來源 | 日期 |
|------|------|------|------|
| FY27 毛利率目標 | 68%（單季 ±1 個百分點） | [[活動_Credo_凱基CallMemo_20261005]] | 2026-10-05 |
| 800G 模組售價示意 | US$300～500，取 US$400 | 同上 | 2026-10-05 |
| 外購矽成本示意 vs 自製 | US$100 vs US$20 | 同上 | 2026-10-05 |
| ZeroFlap 溢價示意 | 25% → ASP US$500、毛利率 68% | 同上 | 2026-10-05 |
| 光學出貨 | FY27 末數十萬顆，FY28 成長 2～3 倍 | 同上 | 2026-10-05 |
| Scale-up Retimer 訂單 | US$50M | 同上 | 2026-10-05 |
| Scale-up vs scale-out 連結數 | 約 8～10 倍 | 同上 | 2026-10-05 |
| FY27 光通訊營收目標 | 逾 US$600mn；ZeroFlap 逾 US$100mn | [[memo_國泰證期_CredoCallMemo_20260902]] | 2026-09-02 |

## 關鍵 Claim

| Claim | 類型 | 來源 | 日期 | 信心 |
|-------|------|------|------|------|
| 1.6T AEC／光學 DSP 於 2027-04～06 開始量產出貨 | guidance | [[活動_Credo_凱基CallMemo_20261005]] | 2026-10-05 | 中 |
| ZeroFlap 光模組可達約 68% 毛利率 | estimate（示意算式） | 同上 | 2026-10-05 | 中低 |
| ZeroFlap 於 FY28 下半年放量 | guidance（年度待確認） | 同上 | 2026-10-05 | 低 |
| ZeroFlap FY27 貢獻逾 US$100mn | guidance | [[memo_國泰證期_CredoCallMemo_20260902]] | 2026-09-02 | 中 |
| 光學量產高峰在 FY2H27 | management outlook | [[報告_GFHK_Credo_20260901]] | 2026-09-02 | 中 |
| NPO 用 PIC 於 FY28 開始貢獻營收 | guidance | [[活動_Credo_凱基CallMemo_20261005]] | 2026-10-05 | 中 |
| 已取得 US$50M scale-up Retimer 訂單 | fact（公司說法，客戶未具名） | 同上 | 2026-10-05 | 中 |
| 3nm 與雷射是光學供給最緊環節 | 公司說法 | 同上 | 2026-10-05 | 中 |

> [!todo] 反證條件 / 待確認
> - [ ] 回聽或比對官方資料，確認 ZeroFlap 放量是 FY27 下半年還是 FY28 下半年；若為 FY28，FY27 光學逾 US$600mn 的組成需重估。
> - [ ] 若 ZeroFlap 溢價明顯低於 25%，或代工成本無法下降，光學毛利會低於公司平均，「新產品毛利在 60% 高段」的說法失效。
> - [ ] 追蹤首家 hyperscaler ZeroFlap 客戶與價格條件；目前只揭露 TensorWave。
> - [ ] 觀察最大客戶之一的 NIC 何時轉向 1.6T；若 800G 週期延長，1.6T 營收占比將低於預期。
> - [ ] 確認 US$50M scale-up Retimer 的 OEM 與 GPU 廠，以及「UAL over Ethernet」是否為 UALink 或 Ethernet 的辨識錯誤。
> - [ ] 若 CPO／NPO 導入比管理層預期快，AEC 在 scale-up 的角色可能被壓縮。

## 來源引用

- [[活動_Credo_凱基CallMemo_20261005]] — 凱基主辦 Credo 管理層電話會議逐字稿，2026-10-05 提供
- [[memo_國泰證期_CredoCallMemo_20260902]] — 國泰證期，2026-09-02
- [[報告_GFHK_Credo_20260901]] — GFHK，2026-09-02
- [[memo_AceCamp_Credo_800G光模組與1.6TAEC_20260930]] — AceCamp Tech 匿名專家訪談，2026-09-30
- [[CRDO.US(credo)]]、[[技術_光互連]]、[[時程_2026-2027高速互連與分散式算力]]
