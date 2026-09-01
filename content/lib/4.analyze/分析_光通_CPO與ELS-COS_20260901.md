---
title: "分析_光通_CPO與ELS-COS_20260901"
query_date: 2026-09-01
updated: 2026-09-01
sources:
  - "[[memo_光通_CPO_ELS_COS_20260901]]"
tags:
  - 分析/產業
  - 技術/CPO
  - 技術/光互連
  - 技術/CoS
  - 公司/聯鈞
  - 公司/NVIDIA
related_companies:
  - "[[3450_聯鈞（市）]]"
  - "[[NVDA.US(nvidia)]]"
related_topics:
  - "[[供應鏈_CPO]]"
---

# 分析_光通_CPO與ELS-COS_20260901

## 問題背景

使用者整理的 2026-09-01 光通訊筆記，將 NVIDIA 8/21 上傳的 IB Switch manual、8/18 Judge 對 ELS 規格的暗示，以及 SemiAnalysis 上週末對 ELS-COS 的描述串在一起。核心 thesis 是：CPO 的 ELS 數量與封裝位置逐步具體化，可能提高 CoS／COS 封裝在光互連供應鏈中的重要性；但目前仍缺少可直接引用的原始文件與 NVIDIA／客戶正式確認。

## 關鍵發現

- 使用者轉述 NVIDIA 2026-08-21 新版 IB Switch System User Manual 寫有「一個 CPO 搭配 18 個 ELS」，並與 2026-08-18 Judge 對新客戶 ELS spec 的描述相符；原始文件尚未收錄，屬待查證觀察。
- 使用者轉述第一代 CPO InfiniBand scale-out switch 型號為 Q3450-LD；這可能對應既有 CPO 供應鏈對 Q3450 平台的追蹤，但尚不能視為 NVIDIA 正式客戶／供應商揭露。
- 使用者轉述 SemiAnalysis 新文將 ELS-COS 放在傳統 ELSFP 與 ILS 之間：更靠近 OE、仍在 ASIC 封裝外，兼顧較短光路與遠離熱源；其是否用於 NVL756 尚未確定。

## 投資重點 memo

| 重點 | 投資含義 | 相關標的 | 信心 |
|---|---|---|---|
| ELS 數量與系統型號可能被提前揭露 | 追蹤 ELS、FAU、CoS 與測試設備的單機內容值 | [[3450_聯鈞（市）]]、[[LITE.US(lumentum)]]、[[COHR.US(coherent)]] | 低 |
| ELS-COS 位於 ASIC 封裝外但更靠近 OE | CoS／COS 封裝可能成為 CPO 與外置雷射的中間製造環節 | [[3450_聯鈞（市）]] | 低 |
| NVL756 架構仍未確認 | 暫不把單一 SemiAnalysis 描述直接轉成量產訂單或營收預測 | [[NVDA.US(nvidia)]] | 低 |

## 論點彙整

| 主題 | 來源觀點 | 投資含義 | 信心 |
|---|---|---|---|
| CPO 與 ELS | 一個 CPO 搭配 18 個 ELS 的規格被使用者轉述為 manual 內容 | 單機 ELS 數量若成立，會放大外部雷射與封裝需求 | 低 |
| ELS-COS 位置 | 介於 ELSFP 與 ILS，靠近 OE、仍位於 ASIC 封裝外 | 在熱管理、光路長度與維修性間取得折衷，可能增加 CoS 封裝價值 | 低 |
| 聯鈞 COS | 使用者認為 ELS-COS 提高 COS 重要性 | 聯鈞的 CoS 能力可作為受惠假說，但需客戶驗證與實際出貨支持 | 低 |

## Insight 結論

| 結論 | 投資含義 | 信心 |
|---|---|---|
| 光互連的產業進展正在從「是否採用 CPO」轉向「ELS 放在哪裡、每個系統需要多少、如何封裝」 | 供應鏈研究應把 ELS、CoS／COS、FAU 與熱管理拆開追蹤 | 中 |
| ELS-COS 若被平台採用，聯鈞的 COS 題材重要性上升，但尚未形成可驗證的訂單結論 | 先觀察 design-in、客戶驗證、量產時間與營收認列 | 低 |

> [!tip] 結論／投資觀點
> ELS-COS 是值得追蹤的中間架構假說：它可能把光源封裝價值留在 ASIC 封裝之外，同時縮短光路並降低熱耦合；在原始文件與客戶驗證出現前，聯鈞受惠仍只能列為低信心 thesis。

## 數據彙整

| 項目 | 數值 | 來源 | 日期 |
|---|---:|---|---|
| 單一 CPO 搭配 ELS 數量 | 18 個 | [[memo_光通_CPO_ELS_COS_20260901]]；使用者轉述 NVIDIA manual | 2026-08-21 |
| Judge 暗示 ELS spec | 新客戶規格，未提供完整數值 | [[memo_光通_CPO_ELS_COS_20260901]] | 2026-08-18 |

## 關鍵 Claim

| Claim | 類型 | 來源 | 日期 | 信心 |
|---|---|---|---|---|
| NVIDIA IB Switch manual 寫有一個 CPO 搭配 18 個 ELS | rumor／待查證 | [[memo_光通_CPO_ELS_COS_20260901]] | 2026-08-21 | 低 |
| 第一代 CPO IB scale-out switch 型號為 Q3450-LD | rumor／待查證 | [[memo_光通_CPO_ELS_COS_20260901]] | 2026-08-21 | 低 |
| ELS-COS 介於 ELSFP 與 ILS 之間，且可能用於 NVL756 | thesis／待查證 | [[memo_光通_CPO_ELS_COS_20260901]] | 2026-08-30 | 低 |
| ELS-COS 將提升聯鈞 COS 的重要性 | thesis | [[memo_光通_CPO_ELS_COS_20260901]] | 2026-09-01 | 低 |

> [!todo] 反證條件／待確認事項
> - [ ] 取得並保存 NVIDIA 2026-08-21 IB Switch System User Manual 原始文件，核對 CPO／ELS 數量與 Q3450-LD 型號。
> - [ ] 找到 2026-08-18 Judge 原始發言或逐字稿，確認新客戶 ELS spec 的完整內容。
> - [ ] 取得 SemiAnalysis ELS-COS 原文，確認其定義、產品位置與是否提到 NVL756。
> - [ ] 追蹤 [[3450_聯鈞（市）]] 是否出現 COS design-in、客戶驗證、量產或營收認列證據。
> - [ ] 若 NVL756 採用其他 NPO／CPO／可插拔方案，或聯鈞未進入驗證，則本頁對聯鈞的受惠 thesis 失效。

## 來源引用

- [[memo_光通_CPO_ELS_COS_20260901]] — 使用者提供之產業研究筆記，2026-09-01；內含 2026-08-18／21 與上週末觀察。
