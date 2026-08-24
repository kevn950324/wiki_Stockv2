---
title: "技術_SASE"
tags:
  - 技術/SASE
  - 技術/零信任
  - 產業/資安
updated: 2026-08-24
aliases:
  - SASE
  - Secure Access Service Edge
  - 安全存取服務邊緣
---

# 技術_SASE

## 定義與架構

**SASE（Secure Access Service Edge，安全存取服務邊緣）** 是 Gartner 2019 年提出的雲端安全架構框架，將網路（SD-WAN）與安全（SSE）功能整合至單一雲端交付平台。核心理念是：安全功能不再在企業資料中心執行，而是在靠近用戶與資料的邊緣節點（PoP）執行。

### SASE 的組成

| 類別                  | 代表技術                         | 說明                        |
| ------------------- | ---------------------------- | ------------------------- |
| **SD-WAN**          | 軟體定義廣域網路                     | 替代 MPLS，動態路由企業流量          |
| **ZTNA**            | Zero Trust Network Access    | 取代 VPN 的零信任遠端存取；最小化存取原則   |
| **SWG**             | Secure Web Gateway           | 過濾網路流量中的惡意軟體、釣魚、DLP       |
| **CASB**            | Cloud Access Security Broker | 管控員工對 SaaS 應用的存取行為        |
| **FWaaS**           | Firewall-as-a-Service        | 雲端防火牆，跨分支與遠端用戶一致執行        |
| **CSPM / DSPM（延伸）** | 雲端 / 資料安全態勢管理                | 新增雲端工作負載可視性（部分廠商延伸入 SASE） |

### SSE（Security Service Edge）

SSE 是 SASE 的安全子集（不含 SD-WAN），由 Gartner 2022 年正式命名：

```
SASE = SD-WAN（網路）+ SSE（安全）
SSE  = ZTNA + SWG + CASB（+ 選配：CASB, DLP, RBI, FWaaS）
```

---

## 市場現況（2026 年 Q1-Q2）

### Jefferies VAR 調查（2026-04-16，N=25 增值經銷商）

| 廠商                    | 2H26 vs 1H26 net score（加速預期） | 1Q26 performance delta（yoy vs 平均） |
| --------------------- | ---------------------------- | --------------------------------- |
| **PANW**（Prisma SASE） | **+64%**（全場最高）               | -3.4%（低於平均）                       |
| ZS                    | +12%                         | -1.8%                             |
| NET（Cloudflare One）   | —                            | **-0.4%**（最佳，即最接近平均）              |
| FTNT（Fortinet）        | +16%                         | -1.2%                             |
| 平均                    | +20%                         | -1.6%                             |

**解讀**：PANW 雖然 1Q26 偏弱（季節性），但 VARs 對其 2H26 的恢復信心最高，驗證了「短期慢、長期快」的 SASE 整合策略。

### 為何 SASE 仍是最大資安支出驅動

1. **VPN 終結浪潮**：ZTNA 取代 VPN 的採用仍在早期（企業 VPN 存量巨大）
2. **混合辦公固化**：疫情後的混合辦公成為常態，SASE 的邊緣安全架構更適配
3. **AI Agent 新需求**：AI 代理人需要「非人類身份」的安全存取路徑，SASE 是最自然的控制層
4. **Branch 到 Cloud 整合**：取代分支辦公室的傳統防火牆 + MPLS 架構，單一廠商 SASE 降低複雜度

---

## AI 時代的 SASE 延伸：Agentic 安全

### Check Point 的 AI Defense Plane 整合

Check Point 在 2026-07-30 法說發布 AI Network Firewall，並表示 AI Defense Plane 將嵌入網路、私有／公有雲與 SASE。其定位不是另立一套孤立的 AI gateway，而是把 AI app、agent、prompt 與 model interaction 的可視性、存取控制與資料保護放進既有 firewall／hybrid mesh 管理架構；公司表示 SASE 已準備擴展至企業級，正整合至 unified management。這是公司產品路線與管理層展望，尚待客戶採用與 ARR／billings 驗證。

2026 年的新需求：AI 代理人在企業中以非人類身份存取大量系統，SASE 廠商開始延伸為 AI 代理人提供流量過濾與治理功能：

| 廠商       | AI Agent 相關 SASE 功能                                      |
| -------- | -------------------------------------------------------- |
| **ZS**   | AI Broker（MCP 通訊安全）、ZAgent Framework、Symmetry（身份-資料連結圖譜） |
| **NET**  | AI Gateway（LLM 流量管控）、Workers（邊緣 AI 執行環境）、MCP 安全          |
| **PANW** | Cortex AISPM（AI Shadow IT 發現）、Precision AI（AI 流量分類）      |
| **CRWD** | Falcon Exposure Management（AI 攻擊面）、Charlotte AI（AI-SOC）  |
| **CHKP** | AI Network Firewall、AI Defense Plane；將 AI agent／LLM 流量與既有 firewall、cloud 與 SASE 管理整合 |

---

## 主要廠商定位

| 廠商 | 市場定位 | 差異化 |
|---|---|---|
| [[PANW.US(palo alto networks)]] | **單一廠商 SASE 市占第一**（VAR 數據） | PAN-OS 硬體刷新 + 軟體 SASE 整合；Cortex XSIAM 延伸至 SOC |
| [[ZS.US(zscaler)]] | **純 SSE / 零信任專家**，最大 SSE 市占 | 150+ PoP 節點最廣；Zenith Live 26 AI 新品；估值最便宜 |
| [[NET.US(cloudflare)]] | **邊緣網路 + SASE 整合**（全球 300+ PoP） | AI Gateway 兼具 LLM 安全；Workers 開發者生態；最低延遲 |
| FTNT（Fortinet） | **硬體防火牆 + SASE 混合** | ASIC 硬體優勢；SMB 市場強；對 AI 敘事貢獻少 |

---

## 競爭格局觀察

### 單一廠商 SASE vs 最佳個案（Best-of-Breed）

- **單一廠商 SASE**（PANW）：整合 SD-WAN + SSE + SIEM + SOAR，管理複雜度低但鎖定效應深
- **SSE 純粹廠商**（ZS）：不含 SD-WAN，聚焦零信任存取；需搭配第三方 SD-WAN（Meraki / Aruba）
- **邊緣混合型**（NET）：CDN + DDoS + Zero Trust + AI Gateway，定位介於網路基礎建設與 SASE 之間

### Jefferies 2026 年 VAR 的 SASE 硬體刷新觀察

- 56% VARs 預期 PANW 的網路安全設備刷新集中在 2026 年（44% 特別集中在 2H26）
- 刷新週期每 5-7 年一次，2026 年是重要催化劑——屬於 PANW 獨家的周期性利多

---

## 相關技術

- [[技術_可觀測性]] — SASE + 可觀測性整合（DDOG 安全模組在 SASE 架構中的位置）
- [[技術_EDR與XDR]] — SASE 的流量保護與 EDR 的終端保護形成互補防線

## 相關公司

- [[PANW.US(palo alto networks)]]
- [[ZS.US(zscaler)]]
- [[NET.US(cloudflare)]]
- [[CRWD.US(crowdstrike)]]
- [[DDOG.US(datadog)]]

## 來源

- [[報告_Jefferies_資安_20260416]] — Jefferies VAR Survey（SASE 最大催化劑），2026-04-16
- [[報告_JPMorgan_資安_20260427]] — JPM，AI 時代資安，2026-04-27
- [[報告_BMO_資安可觀測性_20260612]] — BMO，資安可觀測性（Zenith Live 26 ZS SASE 新品），2026-06-12
- [[報告_Truist_MythosAndDaybreak_20260608]] — Truist，Agentic Security Stack，2026-06-08

## 相關頁面

- [[分析_Check Point_GTM轉型與AI資安2026]]
- [[FTNT.US(fortinet)]]
- [[CHKP.US(check point software)]]
- [[CHKP_2Q26_Earnings_Presentation]] — Check Point，2026-07-30
- [[Check Point Software Technologies Ltd Earnings Call 2026730 DN000000003114523854 (1)]] — Bloomberg transcript，2026-07-30
- [[分析_DevSecOps_AI安全衝擊]]
