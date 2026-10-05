---
title: "OKTA.US(okta)"
ticker: "OKTA"
market: US
exchange: NASDAQ
sector: Cybersecurity / Identity / IAM / CIAM
tags:
  - 公司/Okta
  - 產業/資安
  - 環節/SaaS平台
  - 主題/身份安全
  - 主題/AI驅動資安
updated: 2026-10-05
aliases:
  - Okta
related_companies:
  - "[[SAIL.US(sailpoint)]]"
  - "[[CRWD.US(crowdstrike)]]"
  - "[[ZS.US(zscaler)]]"
  - "[[PANW.US(palo alto networks)]]"
---

# OKTA.US(okta)

## 基本資料

Okta 是全球最大的獨立身份安全（Identity）平台，總部位於美國舊金山，2009 年由 Todd McKinnon（CEO）與 Frederic Kerrest 創辦，2017 年在 NASDAQ 上市。公司從企業勞動力身份（Workforce Identity）起家，2021 年收購 Auth0 進入客戶身份（CIAM），2026 年以 Agentic AI 時代的「非人類身份（NHI）」管理為第三成長曲線。

BMO（Keith Bachman）在 2026 年初升評後，將 OKTA 列為**首選（Top Pick）**，認為其從「AI 落後者」感知走向「AI 賦能者」的多重重估支撐當前估值擴張。

**近期財務規模（2026 年 6 月市場資料）**

| 指標 | 數值 | 來源 |
|---|---|---|
| 市值（2026-06-10） | ~$20.4B | BMO |
| 股價（2026-06-10） | $117.50 | BMO |
| NTM EV/FCF（2026-06） | 20.2x（+37% YTD multiple expansion） | BMO |
| Revenue Growth（CY2026E） | 9.8% | BMO |
| Revenue Growth（CY2027E） | 11.4% | BMO |
| EV/CY27E Revenue | 5.1x | BMO |

---

## 核心平台

### 1. Workforce Identity（企業勞動力身份）

- 基礎業務，穩定成長；SSO、MFA、Lifecycle Management
- NRR 穩健，企業端留存率高

### 2. Customer Identity（Auth0 / CIAM）

- 2021 年收購 Auth0，是 OKTA 第二條成長曲線
- Auth for GenAI：讓企業將 OKTA 身份層嵌入 AI 應用，是 2026 年差異化重點

### 3. AI 驅動身份安全（第三曲線：Agentic AI 時代）

| 產品 | 說明 |
|---|---|
| Okta for AI Agents | 管理 AI 代理人的身份、存取與行為監控 |
| Auth for GenAI | 將企業身份驗證整合至 AI 應用（如 Claude Cowork、ChatGPT Enterprise） |
| Identity Governance（IGA） | 企業身份生命週期與合規管理 |
| Privileged Access（PAM） | 特權帳戶管理，傳統 CyberArk 領域的延伸 |
| ISPM（Identity Security Posture Management） | 身份安全態勢管理，含 NHI 發現與治理 |
| Machine Identity / NHI | 非人類身份（代理人、服務帳戶）的治理與監控 |

### Agent 端防護架構（網路搜尋補強，2026-10-05）

Okta 的做法是把 agent 當成身份，在「連線當下」由 IdP 決定授權，而不是在流量層檢查。來源：[[research_Zscaler_Okta_Agent防護_20261005]]（Okta 新聞稿、SiliconANGLE、Auth0 發表文）。

| 產品 | 狀態 | 做什麼（來源描述） |
|---|---|---|
| Agent SSO | 2026-08-24 GA；含在核心 SSO，不另收費 | 支援 Cross App Access 的 agent 連到企業應用或 MCP server 時，登錄為 Universal Directory 的具名身份，發短效且受身份治理的 token，取代靜態憑證；與員工同一管理介面 |
| Okta for AI Agents | 2026-05 起 GA；另購訂閱 | 發現未登錄／shadow agent（瀏覽器、端點、網路偵測）並指派人類負責人；涵蓋非 XAA agent、自訂授權伺服器、服務帳戶、機密、agent 對 agent；存取認證、核准流程、停用（kill switch）、執行期強制 |
| Auth0 for AI Agents | Auth for MCP、OBO Token Exchange 已 GA；FGA Permissions Index 為 Developer Preview；Token Vault（組織支援）、Agent as Principal 原計畫 2026-06 初（前瞻性聲明） | 開發者端：以獨立身份授權 agent、MCP 用戶端驗證、downstream token 換發、大規模權限檢查、多租戶憑證隔離 |
| Cross App Access（XAA） | 開放協定（OAuth 延伸），已列為 MCP 的 Enterprise-Managed Authorization 擴充 | 請求端 app（Claude、Cursor、VS Code、Docker、Zoom）、資源端 app（Asana、Atlassian、Datadog、Figma、Slack、Notion 等）、閘道／框架（Cloudflare、Keycloak、WorkOS、Stytch 等）；25+ 軟體商加入 |

- **動機數據**：Okta《AI Agents at Work 2026》稱僅 34% 組織對 AI agent 套用與員工相同的安全控制（公司自家調查，fact 但屬行銷口徑／中信心）；多數 agent 仍用靜態 API key、一次性 OAuth 授權（公司說法）。
- **商業模式**：Agent SSO 免費當入口，升級 Okta for AI Agents 才有新營收；Agent SSO 已登錄的 agent 升級時不必重新註冊。尚無任何來源揭露 Okta for AI Agents 的 ARR、定價或客戶數，不可推論為已貢獻收入。
- **生態擴張**：2026-05 將平台延伸到 Amazon Bedrock 並開放給對手身份廠商（SiliconANGLE）；Anthropic beta 計畫以 Okta 為 featured IdP，客戶含 Ramp、Webflow、HubSpot。
- **與 ZS 分工**：Okta 決定「agent 是誰、可拿什麼 token」；ZS 看「agent 實際流量與裝置行為」。比較見 [[分析_Zscaler與Okta_Agent防護分工_20261005]]。

> [!note] 既有關係描述未獲新來源驗證
> 本頁與 ZS 頁寫的「ZS 以夥伴模式整合 Okta 作為 access layer」未出現在本次六篇來源中；新來源只顯示兩家在 agent 控制平面上並行布局。保留既有描述，待查證。

### 為何身份在 AI 時代更重要

- **IDC 數據**：企業平均每 1 個人類身份對應 >100 個機器身份（Machine Identity），Agentic AI 加速這一趨勢
- **攻擊統計**（Truist 引用）：80-90% 的資安事件來自認證資訊洩露或特權濫用，而非技術漏洞
- **AI 代理人問題**：代理人以用戶身份行動、繼承過度授權，若無 OKTA 類治理，將形成大量未受管的存取路徑

---

## 投資觀察

### BMO Top Pick 邏輯（2026 年初升評）

1. **多重重估支撐**：CY26 Revenue 估值上調僅 +0.8%，但 NTM EV/FCF 倍數 YTD 擴張 37%——說明市場正在重新定價其 AI 身份敘事（非基本面驅動）
2. **非人類身份 TAM 巨大**：Agentic AI 浪潮帶動機器身份爆發，OKTA 有現成的 IAM 基礎建設可延伸
3. **估值仍低於平台同類**：NTM EV/FCF 20.2x vs CRWD 83.5x / PANW 41.7x，若敘事持續重估有明顯上升空間

### 關鍵風險

- 成長率偏低（CY26 9.8%），被分類為「非高速成長」資安股
- 傳統 Workforce Identity 市場競爭激烈（MSFT Entra、Ping 等）
- AI 身份敘事兌現需時（Truist 認為 2027+ 才會真實物化）

---

## 券商評等與目標價

| 報告日 | 券商 | 評等 | 目標價 | 當時股價 | 備註 |
|---|---|---|---|---|---|
| 2026-06-08 | Truist Securities | Buy | — | $118.72 | AI Agents 身份敘事 |
| 2026-06-10 | BMO Capital Markets | Outperform（Top Pick） | $120 | $117.50 | 上漲空間 2.1% |

---

## 相關公司

| 關係 | 公司 | 備註 |
|---|---|---|
| 主要競品（IAM） | CyberArk → [[PANW.US(palo alto networks)]] | 特權存取 + 機器身份，已被 PANW 收購 |
| 相關（Identity Governance） | [[SAIL.US(sailpoint)]] | IGA 領域直接競品 |
| 整合夥伴 | [[ZS.US(zscaler)]] | ZS 使用 Okta 作為 access layer；ZS 自己做 governance layer |
| 競品（MSFT 原生） | MSFT Entra（未建頁） | 企業 Azure 原生身份，OKTA 最大存在性威脅 |
| 相關技術 | [[技術_可觀測性]] | 身份安全資料可觀測性 |

---

## 時間軸

| 時間 | 事件 | 類型 | 重要性 | 備註／來源 |
|---|---|---|---|---|
| 2026-05（約 21 日） | Auth0 for AI Agents：Auth for MCP、OBO Token Exchange GA | 產品發表 | ⭐⭐ | [[research_Zscaler_Okta_Agent防護_20261005]]，fact／高 |
| 2026-06-23 | Cross App Access 生態擴至 25+ 軟體商，成為 MCP 授權擴充 | 生態／標準 | ⭐⭐ | 同上，fact／中（SiliconANGLE 轉述） |
| 2026-08-24 | Agent SSO GA，含於核心 SSO | 產品 GA | ⭐⭐⭐ | [[research_Zscaler_Okta_Agent防護_20261005]]，fact／高 |

---

## 來源

- [[research_Zscaler_Okta_Agent防護_20261005]] — 網路搜尋（Okta 新聞稿、SiliconANGLE、Auth0），Agent 身份與 Cross App Access，2026-10-05 擷取。
- [[報告_EvercoreISI_OpenAIDevDay資安影響_20260929]] — Evercore ISI，2026-09-29；正文將本公司列為核心 runtime 防護廠商，近期直接替代風險仍較集中於上線前工作流（券商 thesis／中信心）；本次只補來源追溯，跨公司財務附表保留於 Raw。

- [[報告_Truist_MythosAndDaybreak_20260608]] — Truist，Rise of the Models，2026-06-08
- [[報告_UBS_Gartner資安峰會_20260609]] — UBS，Gartner 安全峰會，2026-06-09
- [[報告_BMO_資安可觀測性_20260612]] — BMO，資安可觀測性（OKTA Top Pick），2026-06-12
- [[報告_Jefferies_資安_20260416]] — Jefferies VAR Survey（Agentic Identity），2026-04-16

- [[Cybersec 260608 Truist_The age of Mythos & Daybreak]]（2026-06-08）
- [[Cybersec 260609 UBS_Themes from Gartner security conference]]（2026-06-09）
- [[Cybersec 260714 UBS_Positive June Q checks]]（2026-07-14）
- [[Cybersec 260720 WF_2Q26 on-cycle security reseller survey]]（2026-07-20）

## 相關頁面

- [[分析_Zscaler與Okta_Agent防護分工_20261005]] — Agent 端防護的流量層 vs 身份層分工。
- [[分析_DevSecOps_AI安全衝擊]] — 2026-09-29 Evercore 的上線前／runtime 替代風險框架。

- [[時程_2026Q3Q4_AI網通與硬體催化劑]]
- [[分析_AI驅動資安支出2026]]
