---
title: "FTNT.US(fortinet)"
ticker: "FTNT"
market: US
exchange: NASDAQ
sector: Cybersecurity / NGFW / SASE / AI-SecOps
tags:
  - 公司/Fortinet
  - 產業/資安
  - 環節/硬體安全設備
  - 主題/NGFW
  - 主題/SASE
  - 主題/AI-SecOps
updated: 2026-10-05
aliases:
  - Fortinet
  - FTNT
related_companies:
  - "[[PANW.US(palo alto networks)]]"
  - "[[CRWD.US(crowdstrike)]]"
  - "[[ZS.US(zscaler)]]"
---

# FTNT.US(fortinet)

## 基本資料

Fortinet（FTNT）是全球網路安全設備出貨量第一的公司，約佔全球防火牆市場 30% 份額，擁有逾 500,000 名客戶（含企業、電信商、SMB、政府）。由 Ken Xie（CEO）與 Michael Xie（CTO）兄弟於 2000 年創立，總部位於加州 Sunnyvale，在加州 Union City 設有 200,000 平方英尺的製造與組裝中心。

核心產品線：NGFW（FortiGate 系列）、SD-WAN、FortiSASE（SASE）、FortiCloud、AI 驅動 SecOps（FortiSIEM / SOAR / EDR / XDR）。以「全面整合、Total Cost of Ownership 最優化」為核心差異化主張。

**近期財務規模（2026-07-10 資料）**

| 指標 | 數值 | 來源 |
|---|---|---|
| 市值 | $115.4B | TD Cowen，2026-07-10 |
| 股價 | $157.51 | 2026-07-10 |
| 52 週區間 | $74.12 – $165.28 | TD Cowen |
| 稀釋流通股（mn） | 742.8 | TD Cowen |
| 淨現金 | $2.8B | TD Cowen（$3.6B Cash - $0.8B Debt）|
| Beta | 1.09 | TD Cowen |
| FCF Yield | 4.7% | TD Cowen |

---

## 產品架構

### 1. Strata（NGFW / SD-WAN / FortiSASE）

| 產品 | 說明 |
|---|---|
| FortiGate NGFW | 旗艦防火牆，FG-4000 / 5000 為高端 DC 型號；7/8 digit deals 驅動高端成長 |
| FortiSASE | 單一廠商 SASE 整合方案，SD-WAN + SSE 在 FortiOS 單一平台上部署 |
| SD-WAN | 業界第二大 SD-WAN 廠商，企業廣域網路優化 |

### 2. AI 驅動 SecOps

| 產品 | 說明 |
|---|---|
| FortiSIEM | 安全事件管理 |
| FortiSOAR | 安全協調自動化回應 |
| FortiXDR | 跨域偵測與回應 |
| FortiEDR | 端點偵測與回應 |

### 3. FortiCloud

- 雲端訂閱服務：威脅情報訂閱、雲端管理、AIOps
- 服務收入佔比 ~67%（FY25A $4,581M / $6,800M），毛利率 88%（非 GAAP）

---

## 2Q26E 預覽 & 近期動態（TD Cowen，2026-07-13）

TD Cowen 2Q26E Beat-and-Raise 前景：
- **VAR channel check**：VARs 普遍已超過 2Q26 配額（部分超出 15%），3Q 目標持續上修
- **Billings 上調**：2Q26E $2,230M（+25% YoY）vs 街頭 $2,164M；TD 稱進一步上行高度可行
- **Product revenue**：$675M (+33% YoY)；受大型 DC 建設 + AI 採用驅動，多筆 7-digit 交易，潛在 8-digit deal
- **Service revenue**：$1,262M (+13% YoY)
- **Total revenue**：$1,938M (+19% YoY) vs TD 前估 +17%
- **2Q26E EPS**：$0.80（非 GAAP，vs 前估 $0.77）
- **財報日**：2026-07-29 AMC

**AI/DC 建設為主要需求驅動**：DC build-out 是 FortiGate 中高端型號需求的重要 tailwind，AI 基礎建設帶動 SASE / SecOps 需求跟進。

![[報告_TD_Fortinet_2Q26Preview_20260713_001.png]]
*TD Cowen FTNT 模型調整（來源：TD Cowen，2026-07-13）*

---

## 2026Q2 資安通路與硬體刷新更新

- Barclays（2026-07-07／07-10）通路觀察 FTNT 2Q26 硬體防火牆與 SD-WAN 動能仍強，部分約 10–15% 可能是漲價前拉貨；目前尚未看到 FortiBleed 對交易流造成明顯影響，均屬通路觀察。
- Wells Fargo（2026-07-20）調查顯示 FTNT 2Q26 加權淨高於計畫約 +26%，低於 1Q26 的 +39%；防火牆刷新仍在，但拉貨前移降溫，OT 是較具差異化的中期機會，SASE／SecOps／CNAPP 仍偏早期或以下行市場。
- UBS（2026-07-14）認為防火牆仍成長但相對其他資安次領域承壓；因此 2H26 應同時追蹤刷新週期尾端、OT 新需求與非硬體產品滲透。

## Agent 端防護：FortiOS 8.0 協定偵測 + FortiAIGate + Virtue AI（網路搜尋補強，2026-10-05）

FTNT 走「防火牆／閘道看得懂 agent 協定」的路線：在既有 FortiGate 上辨識 MCP 與 A2A 流量，再用 FortiAIGate 這個 AI 閘道做 prompt 與工具呼叫防護，並以收購 Virtue AI 補 agent 測試與 runtime 防護。來源：[[research_Fortinet_Agent防護_20261005]]（FortiOS 8.0 文件、WWT、Fortinet 新聞稿 2026-06／2026-08-17）。

| 元件 | 內容 | 狀態／限制 |
|---|---|---|
| FortiOS 8.0 Agentic AI 協定支援 | 應用程式控制以特徵碼辨識 MCP（Protocol.MCP／.Tools／.Prompts）與 A2A（Protocol.A2A／.Message）；延伸 UTM 日誌可記錄 AI Method、AI Function、AI Arguments、AI Agent；FortiView 新增 AI 使用情境圖 | 需 SSL 深度檢查；proxy 模式的 inline IPS 與 NGFW 政策模式不支援 MCP／A2A；資料庫更新需 FMWR 合約 |
| FortiAIGate | 部署在應用與模型之間的 LLM 安全閘道：FortiAIFlow 管路由、快取與成本，FortiAIGuard 擋 prompt injection、越獄、模型投毒與 DLP；MCP 工具防護 | 容器化部署、OPEX 年訂閱；WWT 稱 8.0.1 版可雙向掃描 MCP tools/list、tools/call 與回應 |
| Virtue AI 收購（2026-08-17） | agent 攻擊測試：50+ 沙盒環境、14 個高風險領域、1,000+ 風險類別；發現未核准 agent 與 AI 工具、掃描 MCP 工具與原始碼、監控 agent 行為並在執行前擋下惡意工具呼叫；即時多模態護欄 | 金額不重大、未揭露；與 FortiAIGate 整合規劃中 |
| FortiSOC（2026-06） | 統一 SIEM、SOAR、UEBA、ITDR 的雲端 SOC；FortiAI-Assist 以 MCP 協調 agent 執行調查與回應 | 屬「用 AI 防守」，非保護 agent |

- 公司引用 Gartner：保護 AI 生態系與 AI agent 的產品市場由 2026 年 $2.8B 成長到 2030 年 $16.4B（Gartner estimate，經 Fortinet 新聞稿轉述，中信心）。
- 投資含義：MCP／A2A 偵測讓既有 FortiGate 裝機量直接多一個 AI 使用情境，但目前是「看得到」為主；真正攔截 agent 動作要靠 FortiAIGate 與 Virtue AI 的整合進度。十家比較見 [[分析_資安十強Agent端防護比較_20261005]]。

## EPS 記錄

| 年度 | 季度 | 指標 | 數值 | 備註 |
|------|------|------|------|------|
| FY25A | — | Revenue | $6,800M | +14% YoY |
| FY25A | — | Non-GAAP EPS | $2.76 | +16% YoY |
| FY25A | — | Billings | $7,555M | +16% YoY |
| FY25A | — | FCF | $2,226M | FCF margin 32.7% |
| 1Q26A | — | Revenue | $1,850M | +20% YoY |
| 1Q26A | — | Non-GAAP EPS | $0.82 | +40% YoY |
| 1Q26A | — | Billings | $2,085M | +31% YoY |

## EPS 預估

| 年度 | Revenue（TD）| Billings（TD）| Non-GAAP EPS（TD）| FCF Margin | 備註 |
|------|------------|-------------|-----------------|-----------|------|
| FY26E | $7,854M（+16%）| $9,044M（+20%）| $3.25 | 33.9% | 街頭 Rev $7,806M，高 1% |
| FY27E | $8,677M（+10%）| $10,006M（+11%）| $3.50 | 34.8% | — |
| FY28E | $9,388M（+8%）| $10,578M（+6%）| $3.85 | 33.0% | — |

---

## 目標價與評等

| 券商 | 報告日 | 評等 | 目標價 | 評價基礎 | 來源 |
|------|--------|------|--------|---------|------|
| TD Cowen | 2026-07-13 | Buy (1) | $215（前 $160）| 52x EV/FY27 FCF（前 39x）| [[報告_TD_Fortinet_2Q26Preview_20260713]] |
| Zacks | 2026-07-14 | Outperform（前 Neutral）| $192（6-12M）| — | [[報告_Zacks_Fortinet_20260715]] |

> TD TP $215：重估倍數 39x→52x EV/FY27 FCF，反映 AI 基礎建設需求加速。Zacks 升評 Neutral→Outperform（Rank 1 Strong Buy）。

---

## 時間軸

| 時間 | 事件 | 類型 | 重要性 | 備註 |
|------|------|------|--------|------|
| 2026-07-10 | TD TP 大幅上調 $160→$215（+34%） | 評等調整 | ⭐⭐⭐ | 2Q VAR checks 超配額，AI/DC 需求驅動 |
| 2026-07-29 AMC | 2Q26 財報發布 | 財報 | ⭐⭐⭐ | TD 預估 Beat-and-Raise |
| 持續 | AI DC build-out → FortiGate 高端需求 | 需求 | ⭐⭐⭐ | FG-4000/5000 多筆大型交易 |
| 2026-06 | FortiSOC 上市（FortiAI-Assist 以 MCP 協調 agent） | 產品 | ⭐⭐ | [[research_Fortinet_Agent防護_20261005]] |
| 2026-08-17 | 收購 Virtue AI（agent 攻擊測試與 runtime 防護） | 併購 | ⭐⭐ | 金額不重大；與 FortiAIGate 整合 |

---

## 供應鏈位置

- **市場定位**：UTM / NGFW 市場領導者（全球出貨量第一），面向企業、電信商、政府
- **競爭優勢**：FortiOS 全棧整合、最低 TCO、自製晶片（ASIC）差異化
- **競爭者**：PANW（高端企業）、CRWD（EDR / cloud-native）、CHKP（CheckPoint）、ZS（純雲端 SASE）
- **AI 受惠角度**：AI DC 建設帶動高端防火牆（FG-4000/5000）採購；SASE / SecOps 需求跟進

## 相關公司

| 公司 | 關係 | 說明 |
|---|---|---|
| [[PANW.US(palo alto networks)]] | 主要競品（高端企業）| 平台化策略競爭；PANW SASE 領先 |
| [[CRWD.US(crowdstrike)]] | 主要競品（EDR/雲端）| 端點安全 + AI-SOC 直接競爭 |
| [[ZS.US(zscaler)]] | 主要競品（SASE/SSE）| 純雲端 SASE vs FortiSASE |

> [!warning] 下行風險
> 1. FortiGate 硬體更新週期結束後的增長放緩
> 2. SASE/雲端轉型速度慢於 PANW / ZS
> 3. AI SecOps 市場落後 CRWD / PANW
> 4. 大型交易集中度風險（7/8-digit deals）

---

## 來源

- [[research_Fortinet_Agent防護_20261005]] — 網路搜尋，2026-10-05 擷取：Virtue AI 收購新聞稿（2026-08-17）、FortiOS 8.0 Agentic AI 協定文件、WWT FortiAIGate 介紹、FortiSOC 新聞稿（2026-06）。
- [[報告_EvercoreISI_OpenAIDevDay資安影響_20260929]] — Evercore ISI，2026-09-29；正文將本公司列為核心 runtime 防護廠商，近期直接替代風險仍較集中於上線前工作流（券商 thesis／中信心）；本次只補來源追溯，跨公司財務附表保留於 Raw。

- [[報告_TD_Fortinet_2Q26Preview_20260713]]（TD Cowen，2026-07-13；Buy TP $215、2Q26E Beat-and-Raise 預覽、VAR checks、AI/DC 需求）
- [[報告_Zacks_Fortinet_20260715]]（Zacks，2026-07-14；Outperform TP $192、Zacks Rank 1、1Q26 Product +41%、deal >$1M +63%）

### 本批新增來源

- [[Cybersec 260707 Barclays_Security VaR Call]] — Barclays，2026-07-07
- [[Cybersec 260710 Barclays_Another Security VaR Call]] — Barclays，2026-07-10
- [[Cybersec 260710 WF_Preventive security sees temporary boost]] — Wells Fargo，2026-07-10
- [[Cybersec 260714 UBS_Positive June Q checks]] — UBS，2026-07-14
- [[Cybersec 260720 WF_2Q26 on-cycle security reseller survey]] — Wells Fargo，2026-07-20

- [[Cybersec 260707 Evercore_Cybercheck round 1]]（2026-07-07）

## 相關頁面

- [[分析_DevSecOps_AI安全衝擊]] — 2026-09-29 Evercore 的上線前／runtime 替代風險框架。

- [[時程_2026Q3Q4_AI網通與硬體催化劑]]
- [[CHKP.US(check point software)]]
- [[分析_Check Point_GTM轉型與AI資安2026]]
- [[分析_AI驅動資安支出2026]]
- [[分析_資安十強Agent端防護比較_20261005]]
- [[技術_SASE]]
- [[技術_EDR與XDR]]
