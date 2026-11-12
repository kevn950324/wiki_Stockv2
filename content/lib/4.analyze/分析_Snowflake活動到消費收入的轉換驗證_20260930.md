---
title: 分析_Snowflake活動到消費收入的轉換驗證_20260930
query_date: 2026-11-12
updated: 2026-11-13
tags: [分析/產業, 技術/LLM推理]
sources:
  - "[[memo_Notion_AceCamp_Snowflake_CoCo使用到付費轉換_70567677_20260930]]"
related_companies:
  - "[[SNOW.US(snowflake)]]"
related_topics:
  - "[[技術_大模型推理經濟學]]"
  - "[[分析_Agent商業化的工作流資料與成交閉環_20261112]]"
---

# 分析_Snowflake活動到消費收入的轉換驗證_20260930

## 問題背景

匿名紀要認為AI應用能增加查詢與資源消耗，但首次活動帳戶、正式部署及收入是不同階段。投資問題是新增活動能否形成持續且有價值的工作負載。研究主張：把付費生產用量、客戶留存與查詢效率一起觀察，避免只追蹤Agent生成query數。

## 關鍵發現

- [[memo_Notion_AceCamp_Snowflake_CoCo使用到付費轉換_70567677_20260930]]（2026-09-30）指出首次CoCo activity不等於進入production；舊POC客戶轉生產也可能不算首次活動帳戶。
- 同來源認為RPO受capacity合約、簽約時點及on-demand收入影響，不能僅由RPO增速下降判斷總消費惡化；但未提供定量分解以排除需求放緩。
- 同來源稱自然語言查詢可能因重試增加query及warehouse消耗；這是使用者行為推論，沒有提供付費轉換、增量收入或成本改善實測。
- 同來源估Data Engineering／ETL約收入一半、Analytics不到三分之一等，明言僅供參考；不是官方收入分部，亦不據此建立細分財務模型。

## 投資重點 memo

| 重點 | 投資含義 | 相關標的 | 信心 |
|---|---|---|---|
| 活動帳戶與生產收入有落差 | 看轉production比例、持續使用及付費消耗 | [[SNOW.US(snowflake)]] | thesis／中 |
| RPO未覆蓋所有按需消費 | 與產品收入、客戶擴張及實現消費一起看 | [[SNOW.US(snowflake)]] | 中低 |
| 重試可增加計費也可能損害客戶價值 | 追蹤每成功任務成本及續約，而非把低效率視為永續收入 | [[SNOW.US(snowflake)]] | thesis／中 |

## 比較表

| 階段 | 指標 | 證據限制 |
|---|---|---|
| 首次使用 | 首次activity帳戶 | 可含測試，不代表付費 |
| 正式部署 | production帳戶、活躍工作流 | 可來自舊POC，不能只看新增activity |
| 持續消費 | credits、warehouse、成功任務 | query數增加可能源於重試 |
| 商業品質 | 續約擴張、淨留存、每任務價值 | 需扣除優化、折扣與客戶流失 |

## Insight 結論

| 結論 | 投資含義 | 信心 |
|---|---|---|
| AI需求需走完活動→生產→付費→留存 | 先驗證使用品質，再外推成長 | thesis／中 |

> [!tip] 結論／投資觀點
> Snowflake的Agent商業化應由持續付費的成功任務驗證；query重試與內部AI採用本身不足以推算增量收入。

## 關鍵 Claim

| Claim | 類型 | 來源 | 日期 | 信心 |
|---|---|---|---|---|
| 首次activity與production帳戶不同 | 專家對指標的解釋，定義仍待公司確認 | [[memo_Notion_AceCamp_Snowflake_CoCo使用到付費轉換_70567677_20260930]] | 2026-09-30 | 中低 |
| AI可能透過更多query增加消費 | expert thesis，未量化 | 同上 | 2026-09-30 | 中低 |
| RPO放緩不足以單獨證明消費惡化 | 本頁thesis，亦不能據此排除惡化 | 同上 | 2026-09-30 | 中 |

> [!warning] 產品與競爭口徑
> 來源交替使用CoCo、Cowork、MCT等名稱，未核對產品版本與功能，不能直接作為使用指南。Databricks、BigQuery競爭及內部員工token預算為訪談轉述；Google Cloud總收入不等於BigQuery收入，內部採用也不等於外部付費需求。

## 反證條件／待確認

> [!todo] 驗證與反證
> - [ ] 核對正式產品名、GA日期、activity及production指標的定義。
> - [ ] 追蹤轉production、付費credits及續約擴張，分開capacity與on-demand。
> - [ ] 比較每成功任務成本、重試率與客戶預算，識別優化造成的消耗下降。
> - [ ] 若測試活動無法轉生產、或新增消耗被優化／流失抵銷，AI拉動淨收入thesis失效。

## 來源引用

- [[memo_Notion_AceCamp_Snowflake_CoCo使用到付費轉換_70567677_20260930]] — AceCamp匿名專家，Notion日期2026-09-30，原訪談日未核。
