---
title: "CBRS.US(cerebras)"
ticker: "CBRS"
market: US
exchange: NASDAQ
sector: AI加速器
tags:
  - 公司/Cerebras
  - 技術/AI推理加速
  - 技術/晶圓級封裝
  - 產業/AI半導體
  - 環節/AI加速器
updated: 2026-08-13
aliases:
  - Cerebras
  - Cerebras Systems
  - CBRS
related_companies:
  - "[[OpenAI（未）]]"
  - "[[NVDA.US(nvidia)]]"
---

# CBRS.US(cerebras)

## 基本資料

Cerebras Systems（NASDAQ: CBRS）是美國 AI 加速器公司，以全球唯一商用晶圓級處理器（Wafer-Scale Engine, WSE）為核心，專注低延遲推理市場。2026 年與 OpenAI 簽訂 750MW 取付或付（take-or-pay）合約，奠定未來 3 年營收基礎。

- **核心產品**：WSE-3（4 兆電晶體、90 萬 AI 核心、44GB on-chip SRAM、21 PB/s 記憶體頻寬）
- **定位**：低延遲 AI 推理（decode 階段）的差異化加速器，與 GPU 叢集互補而非全面替代
- **OpenAI 合約**：750MW 三期 × 250MW，最多延至 5 年；RPO $21.6B，估算總合約價值 ~$30B
- **現有客戶**：OpenAI（~80% 收入）、G42、MBZUAI（阿聯酋）、AWS（概念驗證）
- **市值**：約 US$507 億（2026-06-05 股價 $201.01）
- **資料來源**：報告_MS_Cerebras_CBRS_初始覆蓋_20260608（Morgan Stanley，2026-06-08，初始覆蓋）

## 核心技術／競爭優勢

- **晶圓級單芯片（WSE-3）**：跨 scribe line 在整片晶圓上建構單一處理器，消除 chip-to-chip 通訊延遲；on-chip SRAM 21 PB/s 是 NVIDIA B200 的 2,625 倍，4 兆電晶體是 B200 的 19 倍
- **推理 decode 效率**：傳統 GPU 叢集在 token 生成（decode）階段需大量資料移動；WSE 將計算與記憶體置於同一晶片，記憶體頻寬瓶頸大幅降低，適合低批次、低延遲工作負載
- **先發優勢 + OpenAI 深度綁定**：750MW take-or-pay 合約鎖定 2026–2028 產能，2025–2026 幾乎全部產能已分配
- **差異化定位**：MS 估計 Fast Inference（低延遲）將佔推理硬體市場 10%+，到 2030 年可達 ~20%（約 $800 億機會）；Cerebras 是少數針對此細分市場設計的架構之一

## 產品與應用

| 產品 / 服務 | 應用 | 相關客戶 |
|-------------|------|---------|
| Cerebras Cloud（雲端推理服務） | 低延遲 AI 推理 API | [[OpenAI（未）]]、G42 |
| CS-3 系統（硬體銷售） | On-premise 推理加速器 | G42、MBZUAI |
| 混合部署（Cloud + On-prem） | 企業客戶彈性選擇 | 2028E 起新客戶 |

## 圖片 / 架構圖

![[CEREBRAS_20260608_0419_009.png]]

> 左：傳統分散式 GPU 叢集（多芯片 + HBM + 網路交換），存在大量資料移動開銷；右：Cerebras WSE 單片晶圓架構，計算與 SRAM 同片共置，消除 chip-to-chip 通訊瓶頸。（來源：Morgan Stanley，2026-06-08）

![[CEREBRAS_20260608_0419_008.png]]

> WSE-3 vs NVIDIA B200：電晶體數 19×、on-chip 記憶體 250×、記憶體頻寬 2,625×。優勢集中在記憶體頻寬密集型工作（推理 decode 階段）。（來源：Company Filings, MS，2026-06-08）

## EPS 預估

| 年度 | EPS（US$，Non-GAAP） | GAAP 營收（$M） | Non-GAAP 營收（$M） | 毛利率（Non-GAAP） | 來源（MS，報告日：2026-06-08） |
|------|---------------------|----------------|--------------------|--------------------|-------------------------------|
| 2025A | ND | 510 | 510 | 39.0% | 實際 |
| 2026E | -1.22 | 792 | 831 | 29.5% | MS ModelWare |
| 2027E | 0.88 | 3,174 | 2,695 | 51.1% | MS ModelWare |
| 2028E | 5.44 | 7,706 | 6,415 | 57.9% | MS ModelWare |

> **注意**：GAAP vs Non-GAAP 差異來自：(1) 客戶認股權（contra revenue）；(2) OpenAI data center pass-through（租金/電費等由 OpenAI 補償，core metrics 排除）。2028E Non-GAAP 毛利率目標長期 60%+。

## 目標價與評等

| 券商 | 報告日 | 評等 | 目標價 | 評價基礎 | 來源 |
|------|--------|------|--------|----------|------|
| Morgan Stanley | 2026-06-08 | Overweight（初始） | US$250 | 12x 2028E adj. 營收 $6B（對標 SMID cap AI semis） | 報告_MS_Cerebras_CBRS_初始覆蓋_20260608 |

**風險情境：**
- Bull Case：$385（12x CY28 rev $10B；合約容量提前部署，1GW+ by 2028）
- Base Case：$250（12x CY28 adj. rev $6B；750MW 按時交付）
- Bear Case：$76（7x CY28 adj. rev $2.7B；容量延遲，僅 700MW）

## 時間軸

| 時間 | 事件 | 類型 | 重要性 | 備註 |
|------|------|------|--------|------|
| 2025 末 | 低延遲推理需求突然爆發 | 需求轉折 | ⭐⭐⭐ | Fast inference category 進入主流視野 |
| 2026 初 | OpenAI 750MW take-or-pay 簽約 | 合約 | ⭐⭐⭐ | 3 期 × 250MW；最長延至 5 年；RPO $21.6B |
| 2026-06-08 | MS 初始覆蓋 OW $250 | 研究覆蓋 | ⭐⭐ | 首家大行分析師覆蓋 |
| 2027 中 | 第一期 250MW 預計全數部署 | 放量 | ⭐⭐⭐ | 決定 2027 營收主要驅動 |
| 2H26 | NVIDIA Vera Rubin + Groq 架構出貨 | 競爭 | ⭐⭐ | NVIDIA 收購 Groq 技術整合入路線圖 |
| 2028 末 | 第三期 250MW 部署完成 | 放量 | ⭐⭐⭐ | 基礎合約 750MW 滿載；+1.25GW 選擇權 |
| 2029 | OpenAI +1.25GW 選擇權行使窗口 | 選擇權 | ⭐⭐⭐ | 若行使，總部署可達 2GW |

## 供應鏈位置

- **上游**：晶圓代工（整片晶圓特殊製程）、資料中心基礎設施商（Bell Canada、DGXX 已簽 ~240MW）
- **客戶**：[[OpenAI（未）]]（~80% 收入）、G42（轉租 Cerebras，暫作 rent-back）、MBZUAI、AWS（POC 階段）
- **競爭**：[[NVDA.US(nvidia)]]（主要）、Groq（已被 NVIDIA 收購技術）、AMD、Google TPU
- **合作**：G42（阿聯酋）雙重角色—既是客戶也是容量 rent-back 提供方（2026 中過渡安排，預計 2H27 前逐步退場）

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[OpenAI（未）]] | 主要客戶（~80%） | 750MW take-or-pay，合約價值 ~$30B；2026–2028 產能幾乎全部分配給 OpenAI |
| [[NVDA.US(nvidia)]] | 主要競爭者 / 生態主導者 | NVIDIA 收購 Groq 技術，整合入 Vera Rubin 平台；Cerebras 非正面挑戰 NVIDIA 主流，而是針對 decode 細分 |

> [!warning] 風險與注意事項
> - **客戶集中風險**：OpenAI 佔 2026E 49%、2027E 85%、2028E 76% 收入；合約為 take-or-pay 但集中風險極高
> - **容量部署執行風險**：CloudInfra 安全需要 Bell Canada / DGXX 等合作方交付；延遲直接影響收入確認
> - **GAAP vs Non-GAAP 財務複雜度**：Data center pass-through 與 contra revenue 導致兩套指標差異顯著，投資人需特別留意
> - **競爭升溫**：NVIDIA Vera Rubin+Groq 2H26 出貨；長期 fast inference 市場將吸引更多競爭者
> - **G42 rent-back 拖累毛利**：2026 GAAP 總毛利率約 15%（目標長期 60%+），2027H2 前毛利率承壓

## 來源

- 報告_MS_Cerebras_CBRS_初始覆蓋_20260608（Morgan Stanley，Joseph Moore，2026-06-08，評等：Overweight，PT $250，初始覆蓋）
