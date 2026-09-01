---
title: "分析_Anthropic與OpenAI_PreIPO_TokenEconomics算力ASIC估值"
query_date: 2026-09-01
updated: 2026-09-01
report_pdf: "[[Anthropic_OpenAI_PreIPO_20260901.pdf]]"
sources:
  - "[[Anthropic（未）]]"
  - "[[OpenAI（未）]]"
  - "[[20260709_0823_Anthropic_3Q26_Profit_Over_$1B_The_Anthropic_IPO_Financials_Sneak]]"
tags:
  - 來源/分析報告
  - 公司/Anthropic
  - 公司/OpenAI
  - 產業/AI模型
  - 技術/ASIC
related_companies:
  - "[[Anthropic（未）]]"
  - "[[OpenAI（未）]]"
  - "[[CRWV.US(coreweave)]]"
  - "[[NVDA.US(nvidia)]]"
  - "[[AMD.US(amd)]]"
related_topics:
  - "[[技術_AI推論與ASIC平台]]"
confidence: 中
---

# 分析_Anthropic與OpenAI_PreIPO_TokenEconomics算力ASIC估值

## 問題背景

Anthropic 與 OpenAI 的私募估值已接近兆美元，但兩者仍缺乏完整公開 GAAP 財務。這份比較以 2026-09-01 為截止日，將 token 定價、毛利訊號、ASIC 策略與長期 compute commitments 放在同一框架，核心是判斷 headline growth 能否轉成可分配自由現金流。

## 關鍵發現

- Anthropic Series H（2026-05-28）披露 $65B 融資、$965B post-money 與同期 run-rate revenue 超過 $47B；推算約 20.5 倍 run-rate revenue。
- Microsoft 10-Q（2025-10-28）確認 OpenAI 對 Azure 新增 $250B 服務採購承諾；Oracle、CoreWeave、Cerebras、AMD 與 NVIDIA 另有不同結構的容量協議。
- OpenAI 2025 外洩 audited figures 經 FT 與媒體核驗，顯示 $13.07B revenue、$7.5B COGS，推算 gross margin 約 42.6%；公司尚未正式發布。
- Anthropic 採 Trainium、TPU、NVIDIA 三平台並深度優化 Trainium；OpenAI 除多供應商外，已將 Broadcom 共同開發的 Jalapeño 推論 ASIC 推進至 silicon 階段。

## 投資重點 memo

| 重點 | 投資含義 | 相關標的 | 信心 |
|---|---|---|---|
| Anthropic 的企業/API mix 與多雲策略較利於近期單位經濟 | 但 GAAP 毛利未公開，不能直接套用 SaaS 70-80% 毛利 | [[Anthropic（未）]] | 中 |
| OpenAI 的自研 ASIC 與多供應商容量提供較大長期 operating leverage | tape-out、量產、HBM/封裝與利用率仍可能使優勢延後 | [[OpenAI（未）]] [[AVGO.US(broadcom)]] | 中 |
| 超大型 compute commitments 不可直接加總 | 含 LOI、採購、租賃、供應商投資與專案融資，需 obligation waterfall | [[OpenAI（未）]] [[CRWV.US(coreweave)]] | 高 |
| headline valuation 約為 20 倍 run-rate revenue | 必須以 GAAP LTM、net-of-rev-share revenue 與 lease-adjusted FCF 重估 | [[Anthropic（未）]] [[OpenAI（未）]] | 中 |

## 比較表

| 維度 | Anthropic | OpenAI | 投資含義 |
|---|---|---|---|
| 晶片 | Trainium／TPU／NVIDIA；偏 co-optimization | Broadcom 自研 ASIC＋NVIDIA／AMD／Cerebras | Anthropic 降低 tape-out 風險；OpenAI 保留更高 TCO 上行 |
| 商業 mix | 企業、開發者、usage-based API | 消費訂閱＋企業/API＋多產品 | Anthropic 近期 margin narrative 較佳；OpenAI 分銷面較廣 |
| 資本 | 多雲長約＋Fluidstack | Stargate＋超大型多供應商合約 | OpenAI 選擇權多，但 obligation 與治理更複雜 |
| 財務透明度 | 官方 run-rate 多；GAAP 少 | 外洩 audited figures 較完整；公司未正式發布 | 兩者均需等 S-1 |

## Insight 結論

| 結論 | 投資含義 | 信心 |
|---|---|---|
| Frontier lab 不是純 SaaS，而是模型 IP＋長約租用 AI 雲端 | 應用 lease-adjusted FCF 與維持前沿所需 R&D 正規化 | 高 |
| OpenAI 的 gross margin 不能反映全部訓練負擔 | 2025 R&D 估算高於 revenue，需看 R&D/revenue 收斂 | 中 |
| Anthropic 的多雲策略同時是韌性與成本風險 | 必須揭露各平台 workload mix、利用率與最低採購 | 中 |

> [!tip] 結論／投資觀點
> Anthropic 的近期財務質量看似較佳，OpenAI 的長期基礎設施 optionality 較大；但在 S-1 揭露 GAAP 毛利、長約到期梯與關係人條款前，兩者約 20 倍 run-rate revenue 的定價都需要顯著條款保護。

## 關鍵 Claim

| Claim | 類型 | 來源 | 日期 | 信心 |
|---|---|---|---|---|
| Anthropic Series H post-money valuation 為 $965B | fact | Anthropic Series H 官方公告 | 2026-05-28 | 高 |
| OpenAI 最新公司公告 post-money valuation 為 $852B | fact | OpenAI funding 官方公告 | 2026-03-31 | 高 |
| OpenAI 2025 推算 gross margin 約 42.6% | inference | FT 核驗之外洩 audited figures | 2025 | 中 |
| Anthropic 2Q26 adjusted operating income 為正 | estimate | Bloomberg 見內部文件 | 2026Q2 | 中 |
| SpaceX 向 Anthropic 提供 $26B/year compute | rumor | [[20260709_0823_Anthropic_3Q26_Profit_Over_$1B_The_Anthropic_IPO_Financials_Sneak]]；官方未披露 | 2026 | 低 |

> [!todo] 反證條件／待確認
> - [ ] S-1 顯示 Anthropic GAAP gross margin 明顯低於 50%，且 adjusted profit 主要靠排除 SBC／訓練成本。
> - [ ] OpenAI Jalapeño 量產延誤或實際 tokens/W 未優於外購方案。
> - [ ] 任一公司 compute spend 持續快於 revenue，且 committed capacity 出現減損或重談。
> - [ ] 企業/API cohort 的 NRR 與 retention 快速下降，顯示模型能力缺乏持久定價權。
> - [ ] 取得兩家公司 S-1 後，重建 related-party revenue share、最低採購與 lease-adjusted FCF。

## 驗證清單

| 追蹤指標 | 為什麼重要 |
|---|---|
| GAAP gross margin 與 cost-of-revenue bridge | 驗證 token economics 是否轉成財務毛利 |
| Compute obligation maturity ladder | 估算每年最低現金需求與 overcapacity 風險 |
| API／subscription／enterprise mix 與 NRR | 判斷成長品質與定價權 |
| Jalapeño yield、tokens/W、部署占比 | 驗證 OpenAI 自研 ASIC 護城河 |
| Claude 各晶片平台 workload mix | 驗證多雲韌性是否抵銷移植成本 |

## 相關

- 公司：[[Anthropic（未）]] [[OpenAI（未）]] [[CRWV.US(coreweave)]] [[NVDA.US(nvidia)]] [[AMD.US(amd)]]
- 技術：[[技術_AI推論與ASIC平台]]
- 報告原檔：![[Anthropic_OpenAI_PreIPO_20260901.pdf]]

## 信心水準與假設

- 整體信心：中。官方合約與估值信心高；私有公司完整損益、run-rate 口徑與 adjusted profit 信心中。
- 研究截止日：2026-09-01；使用者提供的日期欄位為 placeholder，故採當日。
