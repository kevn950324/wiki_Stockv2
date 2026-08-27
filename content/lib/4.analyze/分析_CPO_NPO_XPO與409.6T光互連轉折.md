---
title: "分析_CPO_NPO_XPO與409.6T光互連轉折"
query_date: 2026-08-20
updated: 2026-08-20
sources:
  - "[[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]]"
  - "[[技術_CPO]]"
tags:
  - 技術/CPO
  - 技術/OCI
  - 產業/AI伺服器
  - 分析/產業
related_companies:
  - "[[NVDA.US(nvidia)]]"
  - "[[GFS.US(globalfoundries)]]"
  - "[[COHR.US(coherent)]]"
  - "[[LITE.US(lumentum)]]"
related_topics:
  - "[[技術_CPO]]"
  - "[[技術_OCI]]"
---

# 分析_CPO_NPO_XPO與409.6T光互連轉折

## 問題背景

OCP APAC 專家會議把 CPO、NPO、XPO 與可插拔模組放回同一個系統設計問題，而不是單純技術淘汰賽。當交換器由 102.4T／204.8T 走向 409.6T，密度、散熱、維修與供應鏈風險會共同決定光互連的導入位置。

## 關鍵發現

- [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]]：NPO 是部分客戶在供應鏈與先進封裝能力不足時，接近 CPO 效益的過渡方案。
- [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]]：講者估計 102.4T／204.8T 仍可由可插拔模組承接；409.6T 約 18 個月後成為高密度整合的 forcing function，屬產業專家模型而非公司訂單承諾。
- [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]]：NVIDIA 早期 CPO 接頭由 MPO 改為 MMC，ELS 更深置於系統內以降低人工接觸並支援全液冷，顯示量產瓶頸在系統整合與維修性。
- [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]]：Applied Materials 將動態熱循環與 CTE 失配視為先進封裝可靠性核心問題，並提出系統級 PDK 需求。

## 投資重點 memo

| 重點 | 投資含義 | 相關標的 | 信心 |
|---|---|---|---|
| NPO 與 XPO 延長可插拔生態週期 | 短期需求不會由 CPO 單線取代，光模組、連接器與測試仍有量 | [[COHR.US(coherent)]]、[[LITE.US(lumentum)]] | 中 |
| 409.6T 將提高高密度光整合必要性 | 中長期受惠由單一模組轉向光引擎、EIC/PIC、FAU 與封裝測試 | [[NVDA.US(nvidia)]]、[[GFS.US(globalfoundries)]] | 中低 |
| 系統級 PDK、機械／電氣介面標準化 | 標準化可降低跨晶圓廠與設備供應鏈碎片化，但短期仍屬產業協作議題 | [[GFS.US(globalfoundries)]] | 中低 |

## 受惠鏈

| 廠商 | 環節／角色 | 受惠理由 | 信心 | 觀察重點 |
|---|---|---|---|---|
| [[NVDA.US(nvidia)]] | AI 交換器與系統整合 | 以全系統拓撲、800G fabric 與 CPO 共同最佳化 | 中 | CPO 在實際交換器世代的部署比例 |
| [[COHR.US(coherent)]] | 雷射／光電元件 | CPO、NPO、可插拔路線均需要光源與光引擎供應 | 中 | 400G／更高速調變與可靠性認證 |
| [[LITE.US(lumentum)]] | 外部雷射源 | NVIDIA CPO 生態中的 ELS 供應地位 | 中 | ELS 多供策略與量產節奏 |
| [[GFS.US(globalfoundries)]] | SiPho／EIC-PIC 製造 | 具光子平台與 EIC/PIC 異質整合路線 | 中低 | 45µm micro-bump 向 hybrid bonding 的量產落地 |

## Insight 結論

| 結論 | 投資含義 | 信心 |
|---|---|---|
| CPO、NPO、XPO 將按應用場景並存，而非短期單一路線勝出 | 追蹤組合應同時涵蓋可插拔光模組、光源、光引擎與測試 | 中 |
| 409.6T 是高密度整合的潛在 forcing function，但時間點仍為專家預估 | 不宜把 18 個月直接轉成公司營收或量產日期 | 中低 |

> [!tip] 核心 thesis
> 光互連的下一階段不是「CPO 取代所有 pluggables」，而是密度與維修性逼近極限後，NPO／XPO 先承接過渡需求，CPO 在高價值、可共同設計的 AI 工廠中逐步擴大。

## 關鍵 Claim

| Claim | 類型 | 來源 | 日期 | 信心 |
|---|---|---|---|---|
| 102.4T／204.8T 仍可由 pluggables 承接 | thesis | [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]] | 2026-08-20 | 中 |
| 409.6T 約 18 個月後形成密度壓力 | estimate | [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]] | 2026-08-20 | 中低 |
| 動態熱循環與 CTE 失配是 CPO 先進封裝可靠性瓶頸 | thesis | [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]] | 2026-08-20 | 中 |

> [!todo] 反證條件／待確認
> - [ ] 追蹤 409.6T 交換器是否如專家所述在約 18 個月內進入量產部署。
> - [ ] 確認 NPO／XPO 是否因可靠性或成本優勢延後 CPO 大規模導入。
> - [ ] 若 CPO 良率、維修成本或標準化進度未改善，則 CPO 受惠鏈排序需下修。

## 來源引用

- [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]] — OCP APAC panel transcript，2026-08-20
- [[技術_CPO]] — CPO 技術與供應鏈彙整

## 2026-08-27 Lumentum 券商交叉驗證

五份 2026-08-11～12 券商報告把 NPO 的位置從「CPO 延後時的替代」進一步具體化為可插拔與 CPO 之間的增量路線：Barclays 認為 NPO 客戶興趣較廣，JPMorgan 估計 2027 年底可能開始 scale-up；但 TD Cowen 提醒 CW／InP 擴產的供過於求與毛利風險。這使 Lumentum 的短期驗證點仍是 1.6T／OCS，NPO／CPO 則是中期合約與出貨驗證。

| Claim | 類型 | 來源 | 日期 | 信心 |
|---|---|---|---|---|
| NPO 客戶興趣可能比 CPO 更廣，且可成為過渡路線 | thesis | [[2026-08-12-LITE.OQ-Barclays-Lumentum Holdings Inc. Several Moving Pieces, All in Right ...-123789088]] | 2026-08-12 | 中 |
| Lumentum 首張 ELS module 訂單預計 2H27 交付 | company outlook／estimate | [[2026-08-12-LITE.OQ-JPMorgan-Lumentum F4Q26 Review Executing Ahead of Plan With Incremen...-123791452]] | 2026-08-12 | 中 |
| 1.6T、OCS 與 EML／CW／pump laser 先於 NPO／CPO 形成近期收入驗證 | thesis | [[2026-08-11-LITE.OQ-Jefferies-Delivering on Multiple Growth Vectors, NPO a New Leg to Scal...-123789110]] | 2026-08-11 | 中 |

> [!todo] 新增待確認事項
> - [ ] 追蹤 NPO 是否在 2027H2 前取得正式客戶合約與量產窗口。
> - [ ] 比對 ELS module 首張訂單是否轉為可辨識收入，及其毛利是否高於公司平均。
> - [ ] 若 CW／InP 產能擴張先於需求，則需下修雷射環節受惠排序與估值倍數。
