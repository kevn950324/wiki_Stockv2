---
title: "技術_EDR與XDR"
tags:
  - 技術/EDR
  - 技術/XDR
  - 產業/資安
updated: 2026-07-07
aliases:
  - EDR
  - XDR
  - Endpoint Detection and Response
  - Extended Detection and Response
---

# 技術_EDR與XDR

## 定義

**EDR（Endpoint Detection and Response，終端偵測與回應）** 是部署在終端設備（桌機、筆電、伺服器、容器）上的資安代理程式，持續監控系統行為、識別惡意活動並自動回應。

**XDR（Extended Detection and Response，延伸偵測與回應）** 是 EDR 的進化形態，整合多層遙測資料（終端 + 網路 + 身份 + 雲端 + SaaS）進行跨域關聯分析，提供統一的威脅可視性與自動化回應。

| 對比維度 | EDR | XDR |
|---|---|---|
| 資料來源 | 終端（OS 層） | 終端 + 網路 + 身份 + 雲端 + SaaS |
| 偵測能力 | 終端異常行為 | 跨域攻擊鏈偵測（橫向移動、身份濫用） |
| 整合深度 | 獨立部署 | 需與 SIEM / SOAR / Identity 整合 |
| 自動化程度 | 自動隔離 / 程序終止 | AI 驅動自動調查 + 多層協調回應 |

---

## AI 驅動 EDR / XDR（2026 年現況）

2026 年的重大轉變：AI 使攻擊成本趨近於零，eCrime 的「突破時間（breakout time）」縮短到分鐘級（CRWD 威脅報告：平均 29 分鐘，最快紀錄 27 秒），迫使防守端必須實現 AI vs AI 的自動對抗。

| 廠商 | AI EDR / XDR 代表產品 | 核心功能 |
|---|---|---|
| [[CRWD.US(crowdstrike)]] | Charlotte AI + AIDR（AI Detection & Response） | 自然語言查詢 + AI 完整接管 Tier 1/2 SOC |
| [[PANW.US(palo alto networks)]] | Cortex XSIAM | 整合 SIEM + SOAR + EDR；Precision AI 自動威脅分類 |
| SentinelOne（S） | Purple AI + Singularity XDR | 跨領域資料整合；Purple AI 自然語言界面 |

### Charlotte AI（CRWD）詳解

Charlotte AI 是 CRWD Falcon 平台的 AI 分析師，提供：
- **自然語言查詢**：「Show me all lateral movement in the last 24h from finance subnet」
- **自主調查**：接受事件後自動執行完整調查工作流，生成 root cause report
- **AIDR（AI Detection & Response）**：完全替代人工 Tier 1/2 SOC 工作，含遏制、隔離、修補決策

UBS Gartner 峰會（2026-06-09）資料：Charlotte AI 已在生產環境完成 100K+ 次自主調查，每次調查平均節省 4-6 小時人工時間。

### Cortex XSIAM（PANW）詳解

PANW 的自主 SOC 平台，採「在一個平台上整合一切」策略：

- **Precision AI**：PANW 品牌 AI 引擎，自動分類威脅嚴重程度並觸發回應
- **整合廣度**：700+ 原生資料來源整合；攝取 NGFW / ZTNA / Identity / Cloud 遙測
- **XSIAM 2.0**（2026 年）：加入 AI 代理人偵測能力，監控非人類身份的異常存取行為

---

## 攻擊技術演進（驅動 EDR 升級需求）

來源：JPMorgan（2026-04-27）、CrowdStrike 2026 Global Threat Report

| 攻擊向量 | 2026 年現況 | 對 EDR 的影響 |
|---|---|---|
| eCrime breakout time | 平均 **29 分鐘**（最快 27 秒） | 要求 EDR 必須在 5 分鐘內完成隔離 |
| AI 輔助漏洞利用 | **+89% YoY** AI 輔助攻擊者活動 | 靜態規則/簽名已無效；必須行為分析 |
| 身份攻擊 | 80-90% 事件來自認證洩露或特權濫用 | EDR 必須整合 ITDR（身份威脅偵測） |
| Agentic 攻擊 | AI 代理人自主研究目標、撰寫 PoC、執行攻擊 | EDR 需要偵測非人類行為模式 |
| 無惡意程式攻擊（Fileless） | 持續增加，利用合法工具（LOLBins） | Kernel 層監控必要；傳統防毒無效 |
| CVE 漏洞數量 | 歷年最高（JPM 圖表） | 漏洞利用窗口縮短，AIDR 快速修補鏈接 |

![[報告_JPMorgan_資安_20260427_001.png]]
*JPMorgan（2026-04-27）：CVE 漏洞數量趨勢（2019-1Q26）——2025-2026 年達歷史高峰，強化資安支出韌性的基本面論述。*

![[報告_JPMorgan_資安_20260427_002.png]]
*JPMorgan（2026-04-27）：Mythos 資安基準測試比較——Anthropic Mythos 在資安能力（CTF、漏洞發現、紅隊測試）上超越 GPT-4o 與 Claude Opus 4，是對抗性 AI 的里程碑。*

---

## Mythos 對 EDR / XDR 市場的衝擊

**Project Glasswing**（2026-04-07，Anthropic）宣布 Mythos 的受限商業化，影響 EDR/XDR 市場：

1. **攻擊能力提升**：Mythos 可自主發現、描述、開發漏洞利用程式，攻擊者若取得存取權限（TAC 或暗網），攻擊複雜度將大幅降低
2. **防守能力提升**：CRWD（Glasswing 創始夥伴）與 PANW 將優先獲得 Mythos 防禦模型的存取，可訓練更精準的 AI 偵測模型
3. **Daybreak 競爭**（OpenAI，2026-05）：TAC 成員（已超過 200 個組織）亦可存取，與 Mythos 形成平行的 AI-augmented 攻防能力提升

結論：AI 能力的整體提升對 EDR/XDR 市場是**雙向正面**——既增加攻擊複雜度（需求端），也提升防守能力（產品端），最終驅動企業升級到 AI-native EDR 解決方案。

---

## Agentic AI 的新偵測挑戰

傳統 EDR 以「人類用戶行為基線」設計。Agentic AI 時代，AI 代理人以機器身份執行大量合法操作（文件讀取、API 調用、資料庫查詢），使傳統行為基線失效。

EDR 廠商的應對策略：

| 挑戰 | 應對技術 |
|---|---|
| 區分人類 vs 機器身份行為 | ITDR 整合機器身份識別；CRWD Falcon Identity + OKTA NHI |
| 代理人繼承過度授權 | SAIL / OKTA NHI 治理；ZS Symmetry 身份圖譜 |
| 代理人跨應用橫向移動 | XSIAM 跨域遙測關聯；RBRK Agent Cloud 監控 |
| 代理人的 LLM 提示注入 | NET AI Gateway；ZS AI Broker；CRWD Falcon AI-SPM |

---

## 競爭格局

| 廠商 | 市場定位 | 2026 估值 NTM EV/FCF |
|---|---|---|
| [[CRWD.US(crowdstrike)]] | EDR 市占第一，AIDR 最成熟 | 83.5x |
| [[PANW.US(palo alto networks)]] | XDR + SIEM + SOAR 整合（XSIAM） | 41.7x |
| SentinelOne（S） | 純 EDR/XDR 獨立廠商；Purple AI | — |
| Microsoft（Defender） | 企業 Azure 原生，MSFT Entra 整合 | — |

---

## 相關技術

- [[技術_SASE]] — SASE 提供網路層防護；EDR 提供終端層防護；互補而非競爭
- [[技術_可觀測性]] — 可觀測性平台（DDOG）的安全模組與 XDR 的遙測資料可整合

## 相關公司

- [[CRWD.US(crowdstrike)]]
- [[PANW.US(palo alto networks)]]
- [[DDOG.US(datadog)]]

## 來源

- [[報告_JPMorgan_資安_20260427]] — JPM，Mythos 對 EDR 市場影響，2026-04-27
- [[報告_Truist_MythosAndDaybreak_20260608]] — Truist，AI 攻防雙面刃，2026-06-08
- [[報告_UBS_Gartner資安峰會_20260609]] — UBS，Charlotte AI 自主調查數據，2026-06-09
- [[報告_CybersecForecast2026_en_20260101]] — Google Cloud / Mandiant，2026 年威脅預測，2026-01-01

## 相關頁面

- [[FTNT.US(fortinet)]]
- [[分析_DevSecOps_AI安全衝擊]]
