---
title: "技術_GPU_Backstop"
tags:
  - 技術/AI融資
  - 環節/AI基礎建設
  - 產業/資料中心
  - 產業/AI伺服器
updated: 2026-08-12
aliases:
  - GPU Backstop
  - Nvidia Backstop
  - AI Project Trinity
  - Neocloud Backstop
  - GPU租賃保底
related_companies:
  - "[[NVDA.US(nvidia)]]"
  - "[[ORCL.US(oracle)]]"
  - "[[META.US(meta)]]"
---

# 技術_GPU_Backstop

## 定義

**GPU Backstop（GPU 保底計畫）** 是 NVIDIA 於 2025-2026 年推出的 Neocloud 支持方案：NVIDIA 以投資等級（AA/Aa2）信用為 Neocloud 算力租賃合約提供最低收入保證（take-or-pay），解鎖 Neocloud 向貸款方融資的能力，進而讓算力供給不再只由超大算力商（Hyperscaler）主導。

## 圖解

![[nvidia-gpu-backstop_original_004.png]]
*圖（SemiAnalysis AI TCO Model, 2026-07-06）：NVIDIA Backstop 保底價格曲線示例——6 年期，平均 ~$2.36/hr/GPU，為較低端估計；Neocloud 實際租金扣除 Nvidia 收益分成後的淨收入。*

![[nvidia-gpu-backstop_original_019.png]]
*圖（SemiAnalysis, 2026-07-06）：NVIDIA 算力買家同心圓——All Buyers → Neoclouds → NCPs → NCPs with Backstop，越靠內圈 NVIDIA 收益越深（從一次性硬體利潤 → 持續性算力服務收益）。*

## AI Project Trinity

Neocloud 建設必須同時解決三個關卡：

| 關卡 | 問題 | Backstop 如何解決 |
|------|------|----------------|
| **Capital（資本）** | 貸款方要求 IG 信用擔保 | NVIDIA AA/Aa2 信用替代 Hyperscaler 保證 |
| **Offtake（租約）** | 短期租客（< 1 年）無法滿足傳統 5 年融資模板 | 保底在手，可接受多元租期客戶 |
| **Datacenter（機房）** | 機房運營商偏好 10-15 年 Hyperscaler 直租 | NVIDIA 也開始保底部分 DC 租約（最困難） |

## 原理 / 條款

### 典型結構

- **期限**：6 年
- **保底觸發**：Neocloud 無法找到足夠市場客戶時，NVIDIA 以預設價格買入算力
- **收益分成**：租金超出保底部分，NVIDIA 抽 40-60%（estimate；各 Neocloud 個別談判）
- **平均 take rate**：~18-20%（SemiAnalysis 計算，6 年期）
- **保底價格基準**：SemiAnalysis 估計 GB300 平均約 $2.36/hr（低端）；市場預期多數高於此

### IRR 情境分析（SemiAnalysis 模型）

| 情境 | IRR |
|------|-----|
| 1 年租賃（有 Backstop）| **25.4%** |
| 6 年固定（有 Backstop）| ~0%（等同保底觸發）|
| 1 年租賃（無 Backstop）| 40.7% |
| Backstop 觸發（租給 NVIDIA）| 0% 或略負 |

### 融資定價框架

- 貸款人 DSCR（債務服務覆蓋率）閾值：≥1.3x
- 貸款成數（LTV）：70-80%
- 利率參考：CoreWeave 5 年 unsecured ~10%（SOFR+600）vs 超大算力商保底 ~5.9%（SOFR+225）
- Nvidia 保底：預期初始在兩者之間（5.9% < Nvidia backstop < 10%）

## 市場背景

**為什麼需要 Backstop？**

- 2029 年 AI 債務餘額預計達 **$7T+**（超越美國 ABS 市場外的任何資產類別，僅次於 MBS $13T）
- 2024-2029 年累計 AI 資本支出：**$11.1T**
- 傳統 5 年 Hyperscaler 保底模板不可擴充——Hyperscaler 資產負債表無法保底數兆美元
- 貸款人尚未建立自己的 GPU 殘值模型、租金指數、tokenomics 理解能力

**NVIDIA 的戰略目的**：擴大買家圈（從 5-10 個 Hyperscaler → 數百個 Neocloud + 推理服務商），防止算力市場被 Hyperscaler 自製矽（AWS Trainium、Google TPU、Meta MTIA 等）壓縮需求。

## 已公告案例（截至 2026-07-06）

| Neocloud | 地點 | 規模 | GPU 數 | 保底金額 |
|---------|------|------|-------|---------|
| SharonAI | 澳洲 | 72MW → 132MW | 40k GB300（最終 55k+）| $4.88B（6 年）= ~$2.33/hr/GPU |
| Firmus | 印尼峇淡島 | 360MW | — | $25-30B 客戶收入（6 年）|

> [!note] AMD 保底計畫
> AMD 自 2025 年起亦對 AWS、OCI、Digital Ocean、Vultr、Tensorwave、Crusoe 等提供保底（換取 GPU 採購）。

## NVIDIA 財務影響

| 指標 | F1/27 | F1/29 |
|------|-------|-------|
| Cloud service agreements | $77.5B | $175.3B |
| 保底增量收入 | $1.8B | $13.9B |
| 保底算力規模 | 932MW | 3,432MW |

每 100MW 保底對應 NVIDIA 擔保金額約 $5.9B。

## 相關工具（SemiAnalysis 配套）

- **GPU Rental Pricing Index**：追蹤各 SKU / 各租期雙邊合約價格
- **InferenceX**：實測各 GPU 推理吞吐，將 token 需求換算 GPU 需求
- **ClusterMAX**：Neocloud 10 維評分體系，為貸款人提供對手方信用評估
- **AI TCO Model**：全面 IRR、DSCR、GPU 殘值模型

## 來源

- 報告_SemiAnalysis_NVIDIA_GPU_Backstop_AI_Trinity_20260706（SemiAnalysis，2026-07-06）

## 相關頁面

- [[技術_人形機器人]]
- [[技術_邊緣AI]]
