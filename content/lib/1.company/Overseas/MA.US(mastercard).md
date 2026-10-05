---
title: "MA.US(mastercard)"
ticker: "MA"
market: US
exchange: NYSE
sector: 支付網路 / 加值服務（Payment Services）
tags:
  - 公司/Mastercard
  - 產業/金融服務
updated: 2026-10-06
aliases:
  - Mastercard
  - Mastercard Inc
  - 萬事達卡
  - 萬事達
  - MA
  - VASS
  - Value-Added Services and Solutions
  - Agent Pay
  - Mastercard Wallet Pay
  - MDES
  - Mastercard Move
  - Mastercard Threat Intelligence
related_companies:
  - "[[V.US(visa)]]"
  - "[[GOOGL.US(alphabet)]]"
  - "[[CRWD.US(crowdstrike)]]"
---

# MA.US(mastercard)

## 基本資料

Mastercard 是全球第三大信用與簽帳卡支付網路（依 Nilson 以交易量計，BofA 2026-07-30），品牌含 Mastercard、Maestro、Cirrus；網路覆蓋 250 個國家與地區、150M+ 受理商戶據點、25K 家金融機構與 35 億組支付憑證（TD Cowen 2026-09-10）。收入分兩條線：**Payment Network**（交換、跨境、交易處理的 assessments 與費率，扣除 rebates & incentives）與 **VASS（Value-Added Services and Solutions，加值服務）**。依 RBC 2026-09-09，近四季營收約 $35.1B，其中 VASS 約 $14.6B（約 42%）、近四季年增約 23%，2Q26 VASS 貢獻約 56% 的營收增量。

2Q26（2026-07-30 財報）：淨營收 $9,277M（年增約 14%，RBC 模型）、調整後 EPS $5.04（高於市場約 6%，Barclays）。券商一致認為驅動力是 VASS（資安、tokenization）加速與跨境優於預期；FY26 指引維持「調整後 organic FXN 營收成長落在 low-double-digit 高端」，並隱含小幅上修（Barclays 2026-07-30）。

資料來源：6 份券商報告（2026-07-30～2026-09-10），見下方「來源」。與台灣供應鏈無直接零組件關係，本頁定位為「支付網路／金融科技」跨產業參照，供比較 Visa、追蹤代理式支付與穩定幣議題。

### 歷史補充：機構持股與歐洲曝險

| 面向 | 新增資料 | 判讀／來源 |
|---|---|---|
| 1Q26 持股 | Top 100 主動組合權重 1.42%、S&P 500 權重 0.74%，超額 68bps；15 年／5 年平均 74／87bps | [[報告_MorganStanley_VisaMastercard機構持股_20260604]]，2026-06-04；fact（調查），信心中；不是全部機構占流通股比率 |
| 2Q26 受理 | 474 家有效網路零售樣本全部直接接受 Mastercard | [[報告_MorganStanley_2Q26支付受理追蹤_20260710]]，2026-07-10；fact（樣本），信心中；受理不等於處理量份額 |
| 歐洲可爭奪收入池 | 不含／含英國約占集團淨營收 12%／16%，高於 Visa 7%／12% | [[報告_UBS_Wero與數位歐元_20260727]]，2026-07-27；estimate，信心中；未乘實際新增替代份額前不是損失率 |
| 跨境量月度走勢 | 排除歐洲內部：4 月 +7%、5 月 +12%、6 月 +15%、7 月 +12%，6 月受 Prime Day 時點影響 | [[報告_UBS_EMEAFinTech觀察_20260731]]，2026-07-31；fact（券商轉述），信心中；7 月觀察窗口與其他券商 MTD 不同 |

這些是 2026-10-06 入庫的 6–7 月歷史資料，保留原始日期，不覆蓋較晚財報與產品資料。

## 核心技術／競爭優勢

- **雙邊網路與 switching 滲透率提升**：switched transactions 佔處理交易比重 2Q26 達 72%（年增 5pts，FY23 為 65%、FY18 為 55%；Barclays），管理層把份額成長歸因於相對本地網路的價值主張，並藉彈性網路架構擴大 switching 角色。
- **Tokenization 為 VASS 與網路雙重槓桿**：token 佔 switched transactions 超過 40%（較 1Q25 約 35%、FY24 約 30%；Barclays）；RBC 指 tokenized 交易的核准率比非 tokenized 高 3–6ppt，且每筆 token 交易帶來高增量毛利的服務收入。核心平台為 MDES（Mastercard Digital Enablement Service），4–6 個月可在新市場上線。
- **Security Solutions 佔 VASS 約 40%**：涵蓋 Recorded Future（威脅情報，2024 年底收購）、RiskRecon、Cyber Quant、Cyber Front、Threat Protection（前 Baffin Bay）、Ethoca、Risk Decisioning；多為訂閱與 network-linked 的高 recurring 收入（RBC）。Mastercard Threat Intelligence 自推出以來辨識逾 700 萬次 card testing 攻擊（192 國），估計阻止約 $172M 詐欺（BofA）。
- **代理式商務（agentic commerce）定位**：管理層主張「卡片在代理式商務中會勝出」，因為需要可預期、有保護的體驗；Agent Pay 在既有 tokenization 之上註冊並驗證 agent、附加 agentic token、傳遞消費者驗證，並以 Verifiable Intent（與 [[GOOGL.US(alphabet)]] 共同開發）保留不可竄改的原始意圖，使 chargeback 仍可運作；Agent Pay for Machines（2026 年 6 月）面向機器對機器、延遲低於 5ms 的小額支付，並與 Coinbase、Coinflow 的穩定幣與 x402 標準結合（BofA 2026-07-30、BMO 2026-08-25、RBC 2026-09-09）。
- **穩定幣「納入而非抵抗」**：2026 年 6 月擴大支援以受監管穩定幣（USDC、PYUSD、USDG、USDP、RLUSD）做 24/7 on-chain 卡片結算；2026 年 5 月取得 NY BitLicense；收購 BVNK（BMO：2026 年 8 月完成、$1.8B、年化穩定幣處理量約 $30B、130 個市場、25+ 牌照）。BMO 的論點是穩定幣要花用仍需轉成可花用餘額，若連到 Mastercard 憑證即可多重變現（跨境 assessments、switching、tokenization、驗證與詐欺、錢包／發卡服務）。
- **Wallet Pay（2026-09 發表）**：把 tokenization、Mastercard Move for Wallets、Issuing for Wallets、Acceptance for Wallets 與 Wallet Services 打包成錢包供應商的單一入口，主打新興市場儲值與階段式錢包；TD Cowen 評估不會改變近期財務，但可降低「錢包成長侵蝕卡片量」的風險。

## 產品與應用

| 產品／服務 | 應用 | 相關客戶／下游／備註 |
|---|---|---|
| Payment Network（switching、跨境、assessments） | 發卡行與商戶之間的授權、清算、跨境交易 | 金融機構客戶集中度與 rebates & incentives 為主要議價變數 |
| Security Solutions | 網路安全、身分、詐欺偵測、爭議管理 | Recorded Future 服務逾 1,900 家客戶、75 國（2024-09 資料，RBC）；Cyber Front 整合 [[CRWD.US(crowdstrike)]] 等工具的漏洞資料 |
| Other Services（MDES、Identity Check、Agent Pay、Merchant Cloud） | 代幣化、3DS 驗證、代理式支付、商戶單一整合點 | Merchant Cloud 連接 240+ 收單機構、35+ 支付方式 |
| Consumer Acquisition & Engagement | 行銷、忠誠度、Dynamic Yield 個人化、Commerce Media | 約 15% VASS；與支付量掛鉤的合約使收入較黏 |
| Business & Market Insights | 經濟研究、SpendingPulse、Test & Learn、信用分析、收單分析 | 3,000+ 顧問（2024 年社群日資料） |
| Other Solutions（Instant Payment、Bill Pay、Cross-Border Services／Move、Open Finance） | 即時支付、帳單、跨境匯款、開放銀行 | Instant Payment 驅動約 11 國即時支付系統；Open Finance 連 95%+ 美國存款帳戶 |
| Wallet Pay | 新興市場錢包的發卡、受理、匯款與 tokenization | 初始夥伴 AlipayHK、Clip、GCash、KakaoPay、TNG eWallet、TrueMoney，另有 Axian、CRED、DaviPlata、Mercado Pago、MTN、TenPay Global（TD Cowen 2026-09-10） |

## 圖片 / 架構圖

![[報告_UBS_Wero與數位歐元_20260727_p24.png]]
*UBS（2026-07-27，第 24 頁）：Mastercard 歐洲收入扣除入境跨境、信用卡、非交易 VAS 與境外 debit 費用後，可爭奪池約 12%（不含英國）／16%（含英國）。這是條件式收入曝險，不是已發生收入損失。*

![[報告_BMO_Mastercard委內瑞拉_20260825_p4.png]]
*BMO（2026-08-25）：跨境 assessments 成長 vs 跨境交易量成長的價差。2Q26 約 8ppt，為 2022 年疫後回升以來最大；歷史平均約 3ppt，BMO 估約 5ppt 來自一次性或特定來源（含委內瑞拉美元可得性）。*

```mermaid
flowchart LR
    A[發卡行 25K FIs] --> N[Mastercard 網路<br/>switching 72% / token >40%]
    B[商戶 150M+ 受理點] --> N
    W[數位錢包 / AI agent / 穩定幣] --> N
    N --> PN[Payment Network<br/>約 58% 近四季營收]
    N --> VA[VASS 加值服務<br/>約 42% 近四季營收]
    VA --> S[Security 約 40%]
    VA --> O[Other Services / Solutions]
    VA --> C[Consumer Engagement / Insights]
    PN -.-> R[Rebates & Incentives<br/>(BNP: 增速 3Q26 見頂)]
```
*結構圖（自行整理）：Payment Network 與 VASS 的收入關係；占比取 RBC 2026-09-09 近四季估計，細項占比為 FY24（RBC Exhibit 3）。*

## EPS 記錄

| 季度 | 調整後 EPS | YoY | 備註 |
|---|---:|---:|---|
| 2025Q1 | $3.73 | — | 來源：BofA／BMO／RBC |
| 2025Q2 | $4.15 | — | |
| 2025Q3 | $4.38 | — | |
| 2025Q4 | $4.76 | — | |
| 2026Q1 | $4.60 | 約 +23% | 以 2025Q1 $3.73 自行計算 |
| 2026Q2 | $5.04 | 約 +21% | 高於市場約 6%（Barclays）；BofA 表列 $5.05 |

> [!warning] 資訊衝突：EPS 口徑
> 2026Q2 EPS：Barclays 文字、BMO、RBC 為 $5.04；BofA 表列 $5.05A；Barclays 年度表格以財報口徑列 $4.97A。2026E 全年 EPS 因調整後 vs 財報口徑差異，介於 $19.54（Barclays 財報口徑）至 $20.4（BNP 調整後）。本頁並列保留，各券商口徑見下表。

## EPS 預估

| 年度 | UBS（2026-07-27） | BofA（2026-07-30） | Barclays（2026-07-30） | BNP Paribas（2026-08-07） | BMO（2026-08-25） | RBC（2026-09-09） | 備註 |
|---|---:|---:|---:|---:|---:|---:|---|
| 2026E | 19.76 | 19.95 | 19.54 | 20.4（公司口徑 20.12） | 20.04 | 20.07 | BofA 共識：Bloomberg 19.65／Visible Alpha 20.11 |
| 2027E | 23.17 | 23.55 | 22.88 | 23.8（公司口徑 23.57） | 23.33 | 23.20 | BNP 稱高於共識約 3%；BofA 共識 22.78／23.34 |
| 2028E | 26.96 | 27.63 | 26.73 | 28.5（公司口徑 28.19） | 26.98 | — | |
| 2029E | 31.41 | — | — | — | — | — | UBS 長期模型 |
| 2030E | 36.84 | — | — | — | — | — | UBS 長期模型 |

口徑：BofA non-GAAP、Barclays 財報口徑（EPS reported）、BNP 調整後、BMO core EPS、RBC reported diluted。

UBS 為 UBS-adjusted diluted EPS（美元），出自 [[報告_UBS_Wero與數位歐元_20260727]] 第 28 頁；2026E local-GAAP 為 $19.50、cash EPS 為 $21.19，未混入 UBS 欄。皆為 estimate，信心中。MS（2026-06-04）維持 Overweight、以 30x 2027 EPS 作評價基礎，研究正文未提供數值目標價，未反推。

## 目標價與評等

| 券商 | 報告日 | 評等 | 目標價 | 評價基礎 | 來源 |
|---|---|---|---:|---|---|
| BofA | 2026-07-30 | Buy | $735（前 $700） | 29x STM non-GAAP EPS，接近 1／5 年平均 | [[報告_BofA_Mastercard_20260730]] |
| Barclays | 2026-07-30 | Overweight | $660（前 $640） | 29x CY27E 調整後 EPS $22.88（前 28x） | [[報告_Barclays_Mastercard2Q26財報_20260730]] |
| BNP Paribas | 2026-08-07 | Outperform | $713（前 $680） | 1.75x mid-term PEG，約 31.5x 12m-fwd PE | [[報告_BNP_MastercardVisa_20260807]] |
| BMO | 2026-08-25 | Outperform | $630 | 27x 2027E EPS $23.33；上行 $702（29x）／下行 $496（24x） | [[報告_BMO_Mastercard委內瑞拉_20260825]] |
| RBC | 2026-09-09 | Outperform | $696 | 30x CY27 EPS，約歷史平均 | [[報告_RBC_VisaMastercard加值服務_20260909]] |
| TD Cowen | 2026-09-10 | Buy | $667 | 本報告未揭露評價方法 | [[報告_TD_MastercardWalletPay_20260910]] |

目標價區間 $630–735，皆為估計（estimate）；股價約 $567.5（2026-09-09）至 $599.37（2026-08-25）。

## 時間軸

| 時間 | 事件 | 類型 | 重要性 | 備註 |
|---|---|---|---|---|
| 2026-09-15（來源預告，結果未驗證） | CLARITY 程序投票／倫理與收益條款爭議；CCCA 為另案 routing 風險 | 政策 | ⭐⭐ | [[報告_EvercoreISI_CLARITY程序投票_20260810]]；不是已通過或已施行 |
| 2026-10 起（當時 roadmap） | iDEAL 逐步遷移 Wero 基礎設施 | 競爭 | ⭐⭐ | [[報告_UBS_Wero與數位歐元_20260727]]；estimate，信心中；實際進度未查證 |
| H2 2027／2029（條件式） | 零售數位歐元試點／可能發行 | 政策／競爭 | ⭐⭐ | [[報告_UBS_EMEAFinTech觀察_20260731]]；以立法及實施為前提 |
| 2026-07-30 | 2Q26 財報：VASS 加速、跨境優於預期、FY26 指引偏上緣 | 財報 | ⭐⭐⭐ | [[報告_Barclays_Mastercard2Q26財報_20260730]]、[[報告_BofA_Mastercard_20260730]] |
| 2026-07（MTD 至 7/28） | 7 月 US switched volume 約 +6%（排除 Capital One debit 遷移約 +10%）；跨境 MTD 約 +11% | 先行指標 | ⭐⭐ | Prime Day 提前至 6 月與較高比較基期使 7 月放緩（BofA） |
| 2026-08 | 完成收購 BVNK（BMO：$1.8B） | 併購 | ⭐⭐ | BofA／Barclays 7 月底仍稱預期 3Q 完成；BMO 為單一來源，信心中 |
| 2026Q3 | Rebates & incentives 成長預期見頂，4Q 起趨緩 | 財務 | ⭐⭐⭐ | BNP 推估；若 incentives 趨緩，支撐 MA 再評價 |
| 2026Q3 | 3Q26 EPS（BofA 預估 $5.15、BMO $5.22、RBC $5.23） | 財報 | ⭐⭐⭐ | 日期本批來源未揭露 |
| 2026H2 | OpenUSD 上線；穩定幣結算與 Agent Pay 擴散 | 新產品 | ⭐⭐ | 管理層於 2Q26 電話會議（BofA） |
| 2026-09 | 發表 Wallet Pay | 新產品 | ⭐⭐ | [[報告_TD_MastercardWalletPay_20260910]] |
| 2027 | 淨營收可能成長 13–14%（BNP 估計），隱含 4Q26 約 13% l/l | 預測 | ⭐⭐⭐ | [[報告_BNP_MastercardVisa_20260807]]，estimate，信心中 |

→ 跨公司比較詳見 [[時程_2026Q3Q4_支付網路催化劑]]。

## 供應鏈位置

- **產業位置**：支付網路與加值服務層，上游為發卡行與收單機構、錢包與商戶，下游為持卡人與企業；本批資料未揭露具名硬體或台灣供應商。
- **所屬供應鏈**：[[供應鏈_金融服務]]（金融機構與支付網路之間透過 client incentives 與手續費結算）。
- **同業**：[[V.US(visa)]]（BNP 指 2025 年夏 MA 對 V 的本益比溢價自 >4.7 轉降至 0.7 倍，2026-08 回升至約 1.5 倍）。
- **比較分析**：[[分析_Visa_vs_Mastercard_加值服務比較]]、[[分析_Mastercard_2Q26後券商觀點與催化劑]]。
- **替代支付**：詳 [[分析_歐洲替代支付對VisaMastercard的風險_20261006]]；UBS 認為 Wero／數位歐元增加議價壓力的可能先於大規模量損。DB 2026-07-17 評估潛在 Stripe／PayPal 結合的近期去中介化風險有限，較可信的長期競爭在跨境匯款、B2B、marketplace payouts 等特定用途，屬 thesis，並非確認交易。

## 相關公司

| 公司 | 關係 | 說明 |
|---|---|---|
| [[V.US(visa)]] | 直接競爭者 | 支付網路雙雄；VAS 成長差距與再評價為核心比較（BNP、RBC） |
| [[GOOGL.US(alphabet)]] | 技術夥伴 | Agent Pay 的 Verifiable Intent 與 Google 共同開發（BofA 2026-07-30） |
| [[CRWD.US(crowdstrike)]] | 整合夥伴 | Cyber Front 的 Attack Surface Validation 從整合工具（例如 CrowdStrike）取得漏洞資料（RBC 2026-09-09） |

> [!warning] 風險與注意事項
> - **宏觀與跨境**：跨境與旅遊受中東衝突、航班運力與一次性事件（World Cup、Prime Day 提前）影響；BofA 管理層稱 FY 指引假設衝突維持 2Q 底水準。
> - **客戶集中與 incentives**：BNP 指 MA 的 rebates & incentives 增速自 4Q25 起升高（可能與 NatWest、Deutsche Bank debit 合約到期續約有關，屬推測），3Q26 預期見頂；若續約條件更差，將壓抑 net revenue。
> - **去中介化**：下行風險含 AI agent 把交易導離網路、即時支付網路與穩定幣分流、歐洲主權疑慮與本地網路（BofA、Barclays、BNP、TD）。
> - **法規與訴訟**：監管變動、interchange 訴訟（BofA 揭露 Mastercard 與其母公司同為該案共同被告）、各國政策偏好本地支付方案（TD）。
> - **歐洲替代池敏感度**：UBS 2026-07-27 模型中 MA 12–16% 高於 V 7–12%；Wero 信用功能、混合錢包 routing 與境外受理若擴張，模型扣除的受保護收入需重估。註冊用戶與既有 A2A 遷移不等於 MA 已流失量。
> - **CLARITY／CCCA 分開**：Evercore 2026-08-10 認為新增 CCCA 共提案人屬政治訊號、單獨通過機率仍極低，是當時 thesis；程序投票不代表最終立法，未查證最新官方狀態。
> - **VASS 品質**：BNP 指 MA VASS 約 18% 成長兩年無加速，且已出售 SessionM、傳聞續砍帳單與 A2A 資產；需追蹤資安 pipeline 是否轉換為加速。
> - **估值**：目標價區間 $630–735，BMO 下行情境 $496；MA 2026E P/E 約 28–30x，高於 S&P 500（BofA 約 22x NTM）。

> [!warning] 資訊衝突：委內瑞拉去合併年份與 BVNK 完成時點
> - 去合併：BMO 稱 2017 年去合併委內瑞拉子公司並一次性認列 $167M 稅前費用；BMO 引述的管理層發言與 Barclays 則稱 2018 年。
> - BVNK：BofA／Barclays（2026-07-30）稱預期 3Q 完成；BMO（2026-08-25）稱 2026 年 8 月已完成。時序相容，以較晚的 BMO 為準但標為中信心。

## 來源

- [[報告_MorganStanley_VisaMastercard機構持股_20260604]] — Morgan Stanley，2026-06-04
- [[報告_MorganStanley_2Q26支付受理追蹤_20260710]] — Morgan Stanley，2026-07-10
- [[報告_DeutscheBank_PayPal收購傳聞_20260717]] — Deutsche Bank，2026-07-17
- [[報告_UBS_支付與FinTech觀察_20260727]] — UBS，2026-07-27
- [[報告_UBS_Wero與數位歐元_20260727]] — UBS，2026-07-27
- [[報告_UBS_EMEAFinTech觀察_20260731]] — UBS，2026-07-31
- [[報告_EvercoreISI_CLARITY程序投票_20260810]] — Evercore ISI，2026-08-10
- [[報告_Barclays_Mastercard2Q26財報_20260730]] — Barclays，2026-07-30
- [[報告_BofA_Mastercard_20260730]] — BofA，2026-07-30
- [[報告_BNP_MastercardVisa_20260807]] — BNP Paribas，2026-08-07
- [[報告_BMO_Mastercard委內瑞拉_20260825]] — BMO，2026-08-25
- [[報告_RBC_VisaMastercard加值服務_20260909]] — RBC，2026-09-09
- [[報告_TD_MastercardWalletPay_20260910]] — TD Cowen，2026-09-10

## 相關頁面

- [[V.US(visa)]]
- [[分析_Mastercard_2Q26後券商觀點與催化劑]]
- [[分析_Visa_vs_Mastercard_加值服務比較]]
- [[時程_2026Q3Q4_支付網路催化劑]]
- [[分析_歐洲替代支付對VisaMastercard的風險_20261006]]
- [[分析_FinTech錢包變現併購與立法風險_20261006]]
