---
title: "NVDA.US(nvidia)"
ticker: "NVDA"
market: US
exchange: NASDAQ
sector: AI 晶片 / GPU
tags:
  - 公司/NVIDIA
  - 技術/GPU
  - 技術/CoWoS
  - 技術/CPO
  - 技術/光互連
  - 供應鏈/先進封裝載板
  - 環節/IC設計
  - 產業/半導體
  - 產業/AI伺服器
updated: 2026-08-27
aliases:
  - NVIDIA
  - 輝達
  - Nvidia Backstop
related_companies:
  - "[[2330_台積電（市）]]"
  - "[[3037_欣興（市）]]"
  - "[[8046_南電（市）]]"
  - "[[AMKR.US(amkor)]]"
  - "[[COHR.US(coherent)]]"
  - "[[LITE.US(lumentum)]]"
  - "[[GFS.US(globalfoundries)]]"
  - "[[GLW.US(corning)]]"
  - "[[3711_日月光投控（市）]]"
  - "[[CBRS.US(cerebras)]]"
  - "[[2357_華碩（市）]]"
---

# NVDA.US(nvidia)

> [!note] 本頁範圍說明
> 本頁涵蓋：**CoWoS / Rubin 供應鏈**、**光互連技術棧與 GB300 出貨**、**光學戰略投資（Coherent / Corning）**。NVIDIA 的 GPU 路線細節、CUDA 軟體 stack、汽車等其他主題等之後 ingest 對應來源時再補。

## 基本資料
NVIDIA（輝達），全球 AI GPU 龍頭。本次主題範圍內的角色是**全球 CoWoS / HBM 產能主要消耗者**，且其 Rubin 世代已出現 CoWoS **產能外溢**訊號。

主要資料來源：[[報告_其他_玻璃基板_20260511]]（國金證券，2026-05-11）。

## 核心技術／競爭優勢

- **CoWoS / HBM 雙資源主導**：[[NVDA.US(nvidia)]]、Google、AMD、Amazon 四家共占 [[2330_台積電（市）]] CoWoS / HBM **90% / 92%** 產能（國金引 Epoch AI 2025 數據；claim 類型 estimate、信心中）
- **Rubin 部分 CoWoS 外溢**：Rubin 世代部分 CoWoS 訂單外包给 [[AMKR.US(amkor)]] 與日月光，反映 TSMC CoWoS 產能仍不足以應付需求（claim 類型 fact、信心中）
- **ABF 載板需求驅動**：透過 TSMC CoWoS → 由 [[3037_欣興（市）]]、[[8046_南電（市）]] 等 ABF 載板廠供應

## 產品與應用

| 產品 / 服務 | 應用 | 上游製造 |
|-------------|------|----------|
| AI GPU（Hopper / Blackwell / Rubin） | 資料中心 / AI 訓練與推論 | [[2330_台積電（市）]] CoWoS + [[3037_欣興（市）]] / [[8046_南電（市）]] ABF 載板 |
| Rubin 部分 CoWoS（外溢部分） | 同上 | [[AMKR.US(amkor)]] + 日月光（OSAT 外包） |

## 圖片 / 架構圖

![[nvidia-800-vdc-industry-alignment-white-paper_001.png]]
*圖（NVIDIA，2026-08-20）：800VDC 由 Power Rack、Power Center 到 DC Power Block 的三層部署選項，說明其由 AI 機櫃供應延伸至 cluster 與 data hall 的系統定位。*

![[報告_其他_玻璃基板_20260511_005.png]]
> 頭部企業包攬 CoWoS / HBM 產能：NVIDIA、Google、AMD、Amazon 共占 90%/92%（來源：國金證券，原引 Epoch AI）

```mermaid
flowchart LR
    A[3037 欣興 + 8046 南電<br/>ABF 載板] --> B[2330 台積電<br/>CoWoS 主代工]
    B --> C[NVIDIA AI GPU<br/>Hopper / Blackwell / Rubin]
    B -.Rubin 部分外溢.-> D[Amkor + 日月光<br/>OSAT 外包]
    D --> C
    C --> E[AI 資料中心客戶<br/>含 Google / AMD / Amazon<br/>四家共占 90%/92% 產能]

    classDef material fill:#b2f2bb,stroke:#222,color:#000
    classDef core fill:#a5d8ff,stroke:#222,color:#000
    classDef customer fill:#fff3bf,stroke:#222,color:#000
    classDef outsource fill:#ffd8a8,stroke:#222,color:#000

    class A material
    class B core
    class C,E customer
    class D outsource
```

## EPS 記錄
（本次來源未涉及）

| 季度 | EPS (USD) | YoY | 備註 |
|------|-----------|-----|------|
| — | — | — | 本次來源未揭露 |

## EPS 預估
（本次來源未涉及）

## 目標價與評等
（本次來源未涉及）

## 時間軸

| 時間 | 事件 | 類型 | 重要性 | 備註 |
|------|------|------|--------|------|
| 2025 | 與 Google/AMD/Amazon 共占 TSMC CoWoS/HBM 90%/92% 產能 | 產能分配 | ⭐⭐⭐ | 國金引 Epoch AI 數據 |
| 2026（Rubin 時程） | Rubin 部分 CoWoS 外包给 [[AMKR.US(amkor)]] 與日月光 | 供應鏈外溢 | ⭐⭐⭐ | TSMC CoWoS 產能不足首次公開信號 |
| 2026-08-20 | 發布 800VDC Architecture: Industry Alignment & Execution 白皮書 | 技術路線 | ⭐⭐⭐ | Power Rack／Power Center／DC Power Block；系統級保護、認證與驗證框架，屬 roadmap／execution framework |

## 供應鏈位置
- **上游晶圓代工**：[[2330_台積電（市）]]（CoWoS 主代工）
- **上游 ABF 載板**：[[3037_欣興（市）]]、[[8046_南電（市）]]、Ibiden（日）、Shinko（日）
- **上游 OSAT（Rubin 外溢）**：[[AMKR.US(amkor)]]、日月光（3711.TW，未建頁）
- **下游 AI 資料中心客戶**：Google、AMD、Amazon 等（與 NVIDIA 共同占用 CoWoS/HBM 產能）
- **所屬供應鏈**：[[供應鏈_先進封裝載板]]

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[2330_台積電（市）]] | 上游主代工 | CoWoS 主代工，Rubin 部分外溢出口 |
| [[3037_欣興（市）]] | 上游 ABF 載板 | 載板供應，Ajinomoto 漲價傳導至此 |
| [[8046_南電（市）]] | 上游 ABF 載板 | 同上 |
| [[AMKR.US(amkor)]] | 上游 OSAT / Rubin 外包 | 接 TSMC CoWoS 外溢的 OSAT 之一 |

> [!warning] 風險與注意事項（本次範圍）
> - **CoWoS 產能瓶頸**：雖然 TSMC 擴產（2024 ~3.5 萬 → 2027 ~17 萬月產能），但 Rubin 已被迫外溢，後續需求增速是否能被吸收待觀察
> - **玻璃基板路線間接影響**：若 [[2330_台積電（市）]] CoPoS 或 [[INTC.US(intel)]] 3DGS 量產順利，NVIDIA 未來世代是否轉用玻璃基板未明（claim 類型 thesis、信心低，本次來源未直接點到 NVIDIA 與玻璃基板的關係）
> - **資料來源限制**：本次只有國金證券二手引述。NVIDIA 自家對 CoWoS / Rubin / HBM 規劃應另查 NVIDIA 法說與 Computex / GTC 發表


| 公司 | 關係 | 說明 |
|------|------|------|
| [[2330_台積電（市）]] | 上游主代工 | CoWoS 主代工，COUPE 平台合作 |
| [[3037_欣興（市）]] | 上游 ABF 載板 | 載板供應 |
| [[8046_南電（市）]] | 上游 ABF 載板 | 同上 |
| [[AMKR.US(amkor)]] | 上游 OSAT / Rubin 外包 | 接 TSMC CoWoS 外溢 |
| [[COHR.US(coherent)]] | 戰略投資 | NVIDIA 入股 USD 20 億，InP CW 雷射供應 |
| [[LITE.US(lumentum)]] | 戰略採購 | USD 20 億採購承諾，ECTC 2026 聯合論文 |
| [[GFS.US(globalfoundries)]] | 光連接器合作 | GLASSBRIDGE 可拆光纖連接器 |
| [[GLW.US(corning)]] | 戰略合作 | 光纖取代銅纜（2026-05-06） |
| [[3711_日月光投控（市）]] | 封測（Rubin 外溢） | 接 CoWoS 外溢封測 |
| [[CBRS.US(cerebras)]] | 競爭者 | NVIDIA 收購 Groq 技術整合入 Vera Rubin；fast inference 細分市場競爭（Groq LPU vs WSE）|
| [[2357_華碩（市）]] | 系統整合夥伴 | 華碩 HGX、NVL72 AI 伺服器採用 NVIDIA 平台 |

## 光互連技術棧（Optical Interconnect Stack，2026）

ECTC 2026 NVIDIA 論文揭示其光互連技術棧演進路線，與 [[2330_台積電（市）]] COUPE 平台、[[LITE.US(lumentum)]] 雷射陣列、[[GFS.US(globalfoundries)]] 光連接器合作多篇論文：

| 技術路線 | 合作方 | 關鍵特性 |
|---------|-------|---------|
| DWDM CW-DFB 外部雷射陣列 | TSMC COUPE + Lumentum | MRR DWDM；multiple-λ 共封裝 |
| 可拆 GLASSBRIDGE 光纖連接器 | GlobalFoundries + Corning | TE 1.44 dB/facet，PDL 0.3 dB，MT 相容，被動對準 |
| V-groove 玻璃耦合器 | Intel（平行生態）| 450 次熱循環 IL <0.7 dB，被動對準 |

> ⚠️ **路線觀察（規則 #14）**：NVIDIA 採**垂直整合**路線（NVLink 封閉生態），與 Meta+Broadcom+AMD 的 OCI 200G MSA **開放標準**路線形成對立。NVIDIA 以戰略入股 Coherent / 採購承諾 Lumentum 鎖定光學上游，而非透過開放 MSA 合作。

### 1.6T 出貨節奏（規則 #14 — 生產節奏）

| 指標 | 值 | 來源 |
|------|----|----|
| 2026 全球 1.6T 光模塊出貨 | **~850K 支**（+280% YoY）| STT AI 供應鏈 W26 |
| GB300 NVL72 機櫃 2026 年出貨 | **~55K 台**（+129% YoY）| STT AI 供應鏈 W26 |

## 光學戰略投資（規則 #14 — 關係更新）

- **NVIDIA × [[COHR.US(coherent)]]**：NVIDIA 戰略入股 **USD 20 億**，鎖定 InP CW 雷射供應（詳見 Coherent 頁）
- **NVIDIA × [[LITE.US(lumentum)]]**：採購承諾 USD 20 億，ECTC 2026 聯合發表 DWDM CW-DFB 雷射陣列論文
- **NVIDIA × [[GLW.US(corning)]]**：2026-05-06 戰略合作，確認「光進銅退」方向，光纖取代銅纜

資料來源：[[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]

## GPU Backstop 計畫（2026 新業務）

NVIDIA 作為「AI 中央銀行」角色，推出 GPU Backstop 計畫，為 Neocloud 提供最低收入保證以解鎖融資。

### 架構
- **期限**：6 年
- **保底機制**：NVIDIA 承諾以預設價格收購 Neocloud 空閒算力（take-or-pay）；Neocloud 從未調用保底為預期目標
- **收益分享**：Neocloud 實際租金超出保底部分，NVIDIA 抽取 40-60%（估計平均 take rate ~18-20%）
- **保底價格曲線**：SemiAnalysis 估計平均約 $2.36/hr/GPU（GB300，6 年平均），屬較低端；市場預期多數在此之上

### AI Project Trinity
Neocloud 建設需要三條腿同時站穩：
1. **Capital**（資本）：貸款方要求 IG 級擔保；NVIDIA AA/Aa2 信用等級使其保底可替代超大算力商保證
2. **Offtake**（租約）：保底在手讓 Neocloud 可接觸多元短期租客（inference provider 最高只要 1 年租約）
3. **Datacenter**（機房）：仍是最難解決的一環；NVIDIA 也開始保底部分 DC 租約

### 已公告案例（截至 2026-07-06）

| Neocloud | 地點 | 規模 | 保底金額 | 備註 |
|---------|------|------|---------|------|
| SharonAI | 澳洲 | 72MW / 40k GB300 | $4.88B（6 年）= 約 $2.33/hr/GPU | 首個公告案例（2026-06）|
| Firmus | 印尼峇淡島（Batam）| 360MW | $25-30B 客戶收入（6 年）| 由 Blackstone / Coatue 融資；第二個公告 |

> [!note] AMD 也有類似計畫
> AMD 從 2025 年起已向 AWS、OCI、Digital Ocean、Vultr、Tensorwave、Crusoe 等提供保底，換取客戶增購 AMD GPU。

### NVIDIA 財務影響預測（SemiAnalysis，estimate，信心中）

| 指標 | F1/27（截至 Jan 2027）| F1/29（截至 Jan 2029）|
|------|--------|--------|
| Cloud service agreements（含保底）| $77.5B | $175.3B |
| 保底相關增量收入 | $1.8B | $13.9B |
| 保底對應算力 | 932MW（432MW 已公告）| 3,432MW 累計 |
| 每 100MW 保底合約對應擔保金額 | ~$5.9B | — |

**每個 Neocloud 保底計畫的邊際收入幾乎是純利**（near-pure margin）。

詳見 [[技術_GPU_Backstop]] 及 報告_SemiAnalysis_NVIDIA_GPU_Backstop_AI_Trinity_20260706

### 大型 AI 融資預測（SemiAnalysis，2026-07-06）

- 2029 年全球 AI 相關債務餘額：**>$7T**（僅次於美國 MBS 市場 $13T，成為全球第二大 ABS 市場）
- 2024-2029 年累計 AI 資本支出（GPU + 機房）：**$11.1T**
- 2028 年年化 AI 資本支出：**>$2T**

## InferenceX 與 TileRT 關聯

NVIDIA 承諾向 SemiAnalysis InferenceX 平台提交 **Vera Rubin** 可驗證數字（Blackwell 後繼）。InferenceX 持續追蹤 NVIDIA GPU（B200/GB300/B300/NVL72 等）推理效能。

- TileRT（第三方 OSS）在 B200 8-GPU server 上，批大小=1 下達 340-494 tokens/s/user，比傳統推理引擎快 1.9-3x
- 目前 NVIDIA GPU + TileRT 軟體在超低延遲場景可部分取代 Cerebras WSE / Groq LPU 的市場

詳見 [[技術_TileRT]]

## Rubin Ultra NVL576／Oberon 架構更新（2026-08-10）

### 2026-08-27 台灣供應鏈交叉觀察

- [[260827_ms_NVDA-implication]] 與 [[260827_citi_nvda-implication]] 均指向 FY/CY27 約 70% 營收成長展望、Rubin 已進入量產；瓶頸由 GPU 延伸至 HBM、CoWoS、網路、rack 整合、電力與資料中心實體容量。MS 估 NVIDIA 2027 年 CoWoS-L 用量約 910k wafers、年增約 40%（estimate，信心：中）。
- 台灣受惠鏈由 [[2330_台積電（市）]]、[[3711_日月光投控（市）]] 延伸至 [[2317_鴻海（市）]]、[[2382_廣達（市）]]、[[3231_緯創（市）]]；Citi 另強調 [[2308_台達電（市）]] 的電力基礎設施角色。

[[報告_SemiAnalysis_RubinUltraNVL576_20260810]] 將 Rubin Ultra 的 NVL576 Oberon 描述為 9+18+9 rack：18 個 compute tray 平分於上下方，18 個 0.75U NVLink Switch tray 置中；相較 Rubin，交換器 tray 數量加倍，以控制最遠銅背板通道距離。可擴充 Portia switch tray 有 NPO 與 CPO 兩種版本，每架 72 顆 NVLink Switch ASIC；報告認為 NPO 因 form factor 成熟度較高，可能先於 CPO 上市。上述為 SemiAnalysis 研究模型，且來源註明規格仍可能變動。

| 架構項目 | Rubin Ultra NVL576 研究模型 | 投資觀察 |
|---|---|---|
| Compute tray | 18 個，9+9 配置 | 機架與滑軌內容值增加 |
| NVLink Switch tray | 18 個、每個 0.75U | [[2059_川湖（市）]] 等機構供應商受惠方向 |
| Expandable switch | 4 顆 ASIC／tray、72 顆／rack | NPO socketed；CPO 為不可更換 optical engine |
| Tachyon HPM | PCB 26 層升至 30 層，材料不變 | 高層數 PCB／CCL 認證與良率需追蹤 |

![[報告_SemiAnalysis_Rubin_Ultra_NVL576_Flash_Overview_20260810_003.png]]
圖說：SemiAnalysis／NVIDIA 研究圖將 Rubin Ultra NVL576 的 9+18+9 rack 與 NPO／CPO scale-up 選項並列；架構尚非 NVIDIA 最終規格。

## 本次 ingest 更新（2026-08-31）

- FY2027Q2 法說逐字稿（2026-08-26）稱 Q3 營收指引約 $108bn，Vera Rubin 開始出貨；供應約為需求的 70%，FY2028 成長受供應限制。
- AWS、OpenAI 與其他 AI 實驗室的採購／融資敘述為管理層與客戶說法，需與正式申報交叉驗證；來源：[[活動_NVIDIA_FY2027Q2法說_20260826]]。

## 來源
- [[報告_CTBC_NVIDIA_20260827]]（中信投顧，2026-08-27；2QFY27 營收、Rubin／Vera CPU 與供應鏈瓶頸）
- [[報告_Daiwa_NVIDIA_2QFY27_20260827]]（大和，2026-08-27；法說摘要，供應鏈與 AI factory 需求）
- [[20260709_0823_800VDC_UBS_20260707]]（UBS，2026-07-07；800VDC 三層部署選項與 AI 資料中心電力架構）
- [[memo_OCPAPAC_CPO_NPO_XPO專家會議_20260820]]（OCP APAC panel，2026-08-20；NVIDIA CPO 系統設計、MMC／ELS／800G fabric 與 CPO 路線）
- 報告_SemiAnalysis_NVIDIA_GPU_Backstop_AI_Trinity_20260706（SemiAnalysis，2026-07-06；GPU Backstop 計畫、AI Project Trinity、Neocloud 融資）
- [[報告_SemiAnalysis_TileRT_InferenceX_20260809]]（SemiAnalysis，2026-08-09；TileRT on GPU 超低延遲推理；InferenceX 基準）
- [[報告_SemiAnalysis_RubinUltraNVL576_20260810]]（SemiAnalysis，2026-08-10；Rubin Ultra NVL576／Oberon rack、NPO／CPO 與 PCB／背板變化）
- [[報告_SemiAnalysis_NvidiaCCL_20260702]]（SemiAnalysis，2026-07-02；GB300／VR NVL72／Rubin 板卡 CCL 供應：EMC/斗山/南亞，見 [[技術_CCL]]）
- [[260702_gs_TSMC]]（高盛，2026-07-02；台積電為 NVIDIA AI 加速器加速擴 CoWoS 產能、2027E 280kwpm，見 [[技術_CoWoS與先進封裝]]）
- [[報告_其他_玻璃基板_20260511]]（國金證券「玻璃基板行業深度」，2026-05-11；分析師李陽 S1130524120003）
- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（光互連技術棧、光學戰略投資、GB300 出貨節奏，2026-06-29）
- [[報告_Bloomberg_NVDA_Q2CY25法說_20250827]]（Bloomberg，Q2CY25 法說，2025-08-27）
- [[報告_中信_NVIDIA_20260303]]（中信投顧，NVIDIA 評析，2026-03-03）
- [[報告_中信_NVIDIA_GTC2026評析_20260319]]（中信投顧，GTC2026 評析，2026-03-19）
- [[報告_富邦_NVDA_Q1FY26法說_20250529]]（富邦投顧，Q1FY26 法說，2025-05-29）
- [[報告_富邦_NVDA_Q3FY26法說_20251120]]（富邦投顧，Q3FY26 法說，2025-11-20）
- [[報告_美股專題_NVIDIA_GTC2026台廠評析_20260319]]（美股專題，GTC2026，2026-03-19）

## 相關頁面

- [[分析_20260827_NVIDIA供應鏈與AI伺服器]]
- [[時程_2026Q3Q4_AI網通與硬體催化劑]]
- [[AEHR.US(aehr)]]
- [[供應鏈_AI光互聯]]
- [[分析_2026-08_AI半導體與電源供應鏈新來源]]
- [[3665_貿聯-KY（市）]]
- [[TSEM.US(tower semiconductor)]]
- [[688836.SH(unitree robotics)]]
- [[2486_一詮（市）]]
- [[分析_CPO_NPO_XPO與409.6T光互連轉折]]
- [[SMCI.US(supermicro)]]
- [[2324_仁寶（市）]]
- [[8210_勤誠（市）]]
- [[分析_MS_AI供應鏈_HBM降規與Kyber延遲_20260810]]
- [[4938_和碩（市）]]
- [[NBIS.US(nebius)]]
- [[OpenAI（未）]]
- [[3189_景碩（市）]]

- [[技術_GPU_Backstop]]
- [[技術_TileRT]]
- [[7907_源傑科技（興）]]
- [[分析_先進封裝與RDL]]
- [[分析_日月光深度報告]]
- [[ALAB.US(astera labs)]]
- [[SNX.US(td_synnex)]]
- [[時程_2026記憶體與AI催化劑]]
- [[000150.KR(doosan)]]
- [[000660.KR(sk_hynix)]]
- [[005930.KR(samsung)]]
- [[1303_南亞（市）]]
- [[2059_川湖（市）]]
- [[2308_台達電（市）]]
- [[2317_鴻海（市）]]
- [[2345_智邦（市）]]
- [[2376_技嘉（市）]]
- [[2382_廣達（市）]]
- [[285A.JP(kioxia)]]
- [[3017_奇鋐（市）]]
- [[3231_緯創（市）]]
- [[3324_雙鴻（市）]]
- [[3357_台慶科（市）]]
- [[3533_嘉澤（市）]]
- [[3653_健策（市）]]
- [[6223_旺矽（櫃）]]
- [[6503.JP(mitsubishi electric)]]
- [[6510_精測（市）]]
- [[6515_穎崴（市）]]
- [[2449_京元電子（市）]]
- [[6669_緯穎（市）]]
- [[7751_竑騰（市）]]
- [[7769_鴻勁精密（市）]]
- [[8042_金山電（市）]]
- [[DELL.US(dell)]]
- [[PLTR.US(palantir)]]
- [[供應鏈_AI伺服器散熱]]
- [[供應鏈_半導體測試設備]]
- [[供應鏈_被動元件]]
- [[技術_HBM高頻寬記憶體]]
- [[技術_InP磷化銦]]
- [[2327_國巨（市）]]
- [[2360_致茂（市）]]
- [[2368_金像電（市）]]
- [[2383_台光電（市）]]
- [[3105_穩懋（櫃）]]
- [[3363_上詮（櫃）]]
- [[4958_臻鼎（市）]]
- [[6285_啟碁（市）]]
- [[AAOI.US(applied optoelectronics)]]
- [[AMD.US(amd)]]
- [[APH.US(amphenol)]]
- [[META.US(meta)]]
- [[MRVL.US(marvell)]]
- [[MU.US(micron)]]
- [[VRT.US(vertiv)]]
- [[供應鏈_CPO]]
- [[技術_OCI]]
- [[技術_矽光子（SiPh）]]
- [[技術_ABF載板]]
- [[技術_玻璃基板]]
- [[技術_CPO]]
- [[技術_光互連]]

### 2026-08-23 OpenAI 資料中心合作新聞

- [[Nvidia in Talks to Back OpenAI Lease of $500 Billion]]（Bloomberg，2026-07-28）報導 NVIDIA 與 OpenAI 資料中心租賃／融資安排的討論；屬新聞 rumor，未視為已簽署合約或已確認訂單。
