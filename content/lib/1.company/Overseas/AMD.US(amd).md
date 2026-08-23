---
title: "AMD.US(amd)"
ticker: "AMD"
market: US
exchange: NASDAQ
sector: XPU / AI 加速器 / CPU
tags:
  - 公司/AMD
  - 技術/OCI
  - 技術/CPO
  - 技術/先進封裝
  - 技術/CoWoS
  - 產業/AI伺服器
  - 環節/IC設計
updated: 2026-08-16
aliases:
  - AMD
  - Advanced Micro Devices
  - 超微
  - Instinct
  - EPYC
related_companies:
  - "[[META.US(meta)]]"
  - "[[AVGO.US(broadcom)]]"
  - "[[NVDA.US(nvidia)]]"
  - "[[2330_台積電（市）]]"
  - "[[MU.US(micron)]]"
  - "[[3711_日月光投控（市）]]"
  - "[[Anthropic（未）]]"
  - "[[3706_神達投控（市）]]"
---

# AMD.US(amd)

## 圖解

![[報告_GFHK_AMD更新_20260701_003.png]]
*圖（廣發香港，2026-07-23）：AMD Helios Rack vs NVIDIA Vera Rubin NVL72 對比——+15% AI Compute、+50% HBM 容量 / 頻寬、+50% Scale-out Bandwidth；底部為 Tokens/s/GPU 在三種 Interactivity 情境下 Helios 均領先 10-15%。*

![[報告_GFHK_AMD更新_20260701_001.png]]
*圖（AMD 官方 / 廣發香港，2026-07-23）：MI455X vs MI355X 效能對比——Throughput 最高 34×（High Interactivity），Token Cost 最低 1/18×，CDNA5 架構跨代躍升。*

![[報告_AMD_AdvancingAIDay_20260727_005.png]]
*圖（AMD Advancing AI 2026 / 富邦投顧，2026-07-27）：EPYC Venice CPU 完整 SKU 陣列——Venice HF（CPU Servers Host Node）、Venice 256c（Agent CPU Sandbox）、Venice SP7/SP8（General Purpose）、Venice-X（Technical/HPC）；展示 AMD EPYC 從一般 Server 到 AI Agent 的完整布局。*

## 基本資料

Advanced Micro Devices（AMD）是全球第二大 x86 CPU 製造商，也是 AI 加速器（Instinct MI 系列）的主要供應商。2026-07-23 舉辦 **Advancing AI Day**（AMD AI Day），正式發表 Helios Rack、MI455X、Venice EPYC CPU 及 ROCm.AI 完整 AI 計算平台。

在光互連戰略上，AMD 是 **OCI 200G MSA 的三家共同編輯之一**（與 Meta、Broadcom），以 XPU 廠商角色參與定義 scale-up 光互連開放標準。

## Instinct GPU 路線圖

| 世代 | 製程 | 封裝 | HBM | 頻寬 | TDP | 時程 |
|------|------|------|-----|------|-----|------|
| MI300X | 5nm | SoIC+CoWoS-L | HBM3e 192GB | 5.3 TB/s | 750W | 量產中 |
| MI325X | 5nm | SoIC+CoWoS-L | HBM3e 256GB | — | — | 2025 量產 |
| MI350X | CDNA4 | — | — | — | — | 2025/26 |
| **MI455X** | N2+N3（2+3nm） | SoIC+CoWoS-L | **HBM4 432GB** | **19.6 TB/s** | **2300W** | **3Q26** |
| MI500 | — | CoWoS-L | HBM4E | — | — | 2027 商用 |
| MI600（CDNA6） | — | — | — | — | — | 2028 |

**MI455X 關鍵規格**（2026-07-23 正式發布）：
- CDNA 5 架構，N2（8 XCD 計算 Tile）+ N3P（2 I/O Die）混合
- 封裝：CoWoS-L（5.5× Reticle，業界最大）+ SoIC-X Hybrid Bonding（垂直 Z 軸疊層），共 3,470mm² 邏輯矽
- **Active LSI（aLSI）**：首款搭載 TSMC aLSI 技術的量產 GPU；主動式 Bridge 於 Chiplet 間再生訊號，壓低 PHY 面積、釋出計算與記憶體岸線
- HBM4 12 堆疊（12-Hi）432GB；HBM4 Pin Speed 7.6 Gbps → 總頻寬 **23.3 TB/s**（AMD AI Day 宣布 19.6 TB/s，SemiAnalysis 實測/推算 23.3 TB/s，詳見下方衝突說明）
- 封裝夥伴：[[2330_台積電（市）]] CoWoS + SoIC，OSAT [[3711_日月光投控（市）]] FOCoS-Bridge（AMD Venice 獨家）

> [!warning] HBM4 頻寬數字衝突
> AMD 官方 Advancing AI Day（2026-07-23）宣布 MI455X HBM4 頻寬 **19.6 TB/s**；SemiAnalysis 報告（2026-07-24）根據 12 堆疊 × HBM4 Pin 7.6 Gbps 推算為 **23.3 TB/s**。可能差異原因：AMD 採保守功耗模式、或兩者量測基準不同（peak vs. sustained）。暫並列，待 AMD 官方確認。
> 來源：[[報告_AMD_AdvancingAIDay_20260727]]（19.6 TB/s）、[[報告_SemiAnalysis_AMD_AdvancingAI2026_20260724]]（23.3 TB/s）

**MI500 特點**（2027 商用）：
- 更大 Scale-up Domain
- **Copper + Optical Interconnect**（CPO 光互連）
- 新一代 HBM4E

來源：[[報告_GFHK_AMD更新_20260701]]（GFHK，2026-07-23）、[[報告_AMD_AdvancingAIDay_20260727]]（富邦投顧，2026-07-27）

## Helios Rack 系統架構

AMD Advancing AI Day 首次完整公開 Helios Rack 規格，定位為整機架 AI 系統（Rack-scale AI System），對標 NVIDIA NVL72。

| 元素 | 數量 | 規格 |
|------|------|------|
| Compute Tray | 18 個 | 每 Tray：4× MI455X GPU + 1× Venice CPU + 1× Pensando DPU + 12× 800G Volcano NIC |
| Switch Tray | 6 個 | 每 Tray：2× 102.4 TB/s Switch Chip（Broadcom TH6） |
| 網路架構 | — | UALink over Ethernet（Scale-up） + Ultra Ethernet（Scale-out） |

**vs NVIDIA NVL72**：Helios 提供 +15% Compute、**+50% HBM4 容量/頻寬**、+50% Scale-out Bandwidth，固定功耗下整體推論效率 +10–15%，Tokens/Dollar +30%。

**製造挑戰（SemiAnalysis 分析）：**
- 非 Cableless 設計：Compute Tray 與 Switch Tray 間使用大量 Flyover Cable（NVIDIA Vera Rubin NVL72 已改為 Cableless）
- Backplane Retimer：AMD SerDes 弱點導致 ~**85% Scale-up 連結需 Broadcom Ethernet Retimer**，每架約 550 顆，增加成本與組裝複雜度
- Memory Despec：原 EAM 模組計畫的 1TB LPDDR5x 第二層記憶體已取消（供應緊張）

**Meta 自定義版 MI455X（Recsys 用途）：**
- 計算 Tile 從 8 顆砍半至 4 顆；HBM 從 12 堆疊縮減至 6 堆疊（8-Hi 而非 12-Hi）
- 定位 Recsys 推薦系統，對 LLM 訓練/推論吸引力較低；SemiAnalysis 建議 AMD 直接向 Meta TBD 推廣標準版 MI455X

來源：[[報告_AMD_AdvancingAIDay_20260727]]、[[報告_SemiAnalysis_AMD_AdvancingAI2026_20260724]]

## Venice EPYC CPU（第六代 / Zen 6）

AMD Venice 是 EPYC 第六代處理器，在 AI Server 中扮演 GPU Host Node 角色，也是 Helios Rack 的內建 CPU。

| SKU 類型 | 核心數 | 定位 |
|---------|--------|------|
| Venice HF | — | GPU Host Node（Helios Rack 內建），最高頻率與 I/O |
| Venice（256 核） | 256 核 / 512 線程 | Agent Sandbox，最高核密度 |
| Venice（128 核） | 128 核 | Enterprise / General Purpose Server |

- **製程**：N2（2nm），台積電代工
- **效能**：vs Turin 提升 ~1.8×；vs NVIDIA Vera +2.2×；vs Intel Xeon 6 +2.0×
- **記憶體**：最高支援 12TB DDR6，500–700W TDP（256-core SKU）
- **封裝**：主要由 [[3711_日月光投控（市）]] FOCoS-Bridge 承接（獨家），CoWoS-L 搭配 [[2330_台積電（市）]]
- **需求規模**（JPM 估）：2026E 0.4M 顆 → 2027E 3.2M 顆 → 2028E 4.5M 顆
- **CoWoS 需求**（JPM 估）：2026E 95K → 2027E 355K → 2028E 540K wfpy（AMD 合計，含 MI 系列）

搭配 Verona（次世代 AI Host CPU）和 Venice X（3D V-Cache，HPC）的後續路線。

來源：[[報告_JPM_台積電CoWoS先進封裝_20260709]]（J.P. Morgan，2026-07-09）

## ROCm.AI 軟體生態

AMD 將 ROCm 升級為 **ROCm.AI**，整合 **Hyperloom AI 最佳化引擎**：
- AI Agent 自動完成 GPU Kernel 最佳化、Runtime 調校、Parallelism 配置
- 自動分析 14,000+ 模型
- vs ROCm 7：推論效能 +3.3×，訓練效能 +2.4×

**Anthropic 案例**（AMD AI Day 現場分享）：Anthropic 部署 MI355 平台時，僅 1 位工程師利用 Claude 完成 Bring-up 與最佳化，凸顯 AI-assisted GPU 開發門檻大幅降低。

**SemiAnalysis 軟體進度評估（2026-07-24）：**

| 面向 | 現況 | 風險 |
|------|------|------|
| SemiAnalysis 整體評級 | 升評至「great chance of success」（前：non-zero） | 仍需解決 CI cluster 與 Backplane 兩大風險 |
| vLLM Gating | 朝 90% CUDA Parity 推進；因 cluster 被抽調近期回退 | Cluster 穩定性是瓶頸 |
| SGLang Nightly CI | 2-node MI355X 1P1D 合併主線；EP8/DP-attention/Kimi K2.6 覆蓋 | 持續擴展中 |
| Kubernetes / Pollara NIC | CI Parity 0%（AMD 為 llm-d 創始夥伴但 CI 未就緒）| 工程阻力來自 cluster 不足而非技術意願 |
| MI455X vLLM/SGLang CI | 計畫 October 2026；原目標 Advancing AI 2026 未達成 | 新 ISA（gfx1250）需獨立測試路徑 |

**主要內部障礙（SemiAnalysis 觀察）：** 開發用 GPU Cluster 長期不足，且在 Distributed Multi-node Inferencing 時代需求倍增；AI Agent 開發模式下每名工程師需同時跑數十個 Agent，各 Agent 又各需 GPU，Cluster 缺口比傳統估算大一個數量級。

## 其他發表（AMD Advancing AI 2026）

- **MI350P**：風冷設計企業推論 GPU，不需液冷設施，支援 260B 參數模型，4× Tokens/Dollar vs 競爭品
- **Ryzen AI Halo**：PC 平台，120GB Unified Memory，支援 200B 參數模型，2Q26 上市
- **Gorgon AI Halo**：次代 PC，192GB Unified Memory，300B 參數，3Q26 上市
- **Kria AI SoM**：AI 機器人大腦，整合 CPU+GPU+NPU，vs NVIDIA Jetson Thor +3.4× 即時推論
- **Cerebras 合作**：Disaggregated Inference——Helios 負責 Prefill，Cerebras WSE 負責 Decode，2H26 上線

## 主要客戶動態（2026）

| 客戶 | 動態 | 說明 |
|------|------|------|
| Anthropic | 公開宣布部署 **2GW AMD chips** | 重大背書；Claude 推論首選 AMD ROCm 平台 |
| OpenAI | **Azure MI455X 主要最終客戶** | Microsoft-AMD 合作框架下，OpenAI 是主要用量方 |
| Microsoft | 反轉：原因 MI300X 後 HBM 記憶體問題中止（跳過 MI325X/MI355X），2026 重新部署 MI455X Helios | Samsung 2023 HBM 品質問題 + 軟體問題導致 2023 年短暫離開 |
| Meta | 部署自定義 Cut-down MI455X（Recsys 用）；標準版興趣待確認 | SemiAnalysis 建議 AMD 向 Meta TBD 推廣標準版 |
| Cerebras | 分離式推論合作：Helios Prefill + Cerebras WSE Decode | 2H26 上線 |

**105% Equity Rebate 結構（AMD vs OpenAI/Meta）：**
- AMD 給予 OpenAI / Meta 高達 **105% 股權折扣回饋**（clever financial engineering）
- 觸發條件：AMD 股價達 $600 + 買方採購量達標
- 效果：MI455X Helios 的每百萬 Token 成本幾乎為負，AMD 實質上是在補貼客戶採購
- 來源：[[報告_SemiAnalysis_AMD_AdvancingAI2026_20260724]]（信心：高，estimate）

## 產品與應用

| 產品 / 服務 | 應用 | 相關客戶 / 下游 |
|-------------|------|-----------------|
| Instinct MI455X GPU | AI 訓練 / 推論 | 雲端大廠（AWS、Azure、Oracle） |
| Instinct MI500 | AI Scale-up + CPO 光互連 | 大型 AI Cluster |
| Venice EPYC CPU | AI Host Node / Agent Sandbox / 一般伺服器 | Helios 整架方案 |
| EPYC CPU（一般） | 資料中心 | 廣泛伺服器 |
| Helios Rack | 整機架 AI 系統 | 對標 NVIDIA NVL72 |
| ROCm.AI | GPU 軟體生態 | AI 開發者 |
| OCI 200G MSA 共編 | scale-up 光互連標準 | Meta、Broadcom 陣營 |

## 券商觀點

### 廣發香港（GFHK）— Buy，TP US$640（2026-07-23）

- **評等**：Buy，TP US$640（45× 2027E EPS US$14.22）
- **AMD AI TAM**：2030 年 AI 加速器 TAM $1.4 兆（AMD 管理層），GFHK 估 2028 年 $1 兆
- **收入預估**：2026E $52.3B（+51% YoY）→ 2027E $82.2B（+57%）→ 2028E $113.3B（+38%）
- **EPS**：2026E $7.92 → 2027E $14.22 → 2028E $20.2

來源：[[報告_GFHK_AMD更新_20260701]]（GFHK，2026-07-23）

### 富邦投顧 — 買進，TP US$520（2026-07-27）

- **評等**：買進，TP US$520（AMD AI Day 後維持）
- **EPS**：FY26F $6.29 → FY27F $10.48
- 收盤價（基準）：US$522

來源：[[報告_AMD_AdvancingAIDay_20260727]]（富邦投顧，2026-07-27）

## 供應鏈位置

- **晶圓代工**：[[2330_台積電（市）]]（N2/N3 Instinct，CoWoS + SoIC；N2 Venice CPU）
- **先進封裝（OSAT）**：[[3711_日月光投控（市）]]（FOCoS-Bridge，Venice CPU 獨家）
- **記憶體**：[[MU.US(micron)]]、SK Hynix（HBM4）
- **光互連標準**：OCI MSA（與 [[META.US(meta)]]、[[AVGO.US(broadcom)]]）

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[META.US(meta)]] | OCI 共編夥伴 | 買方（CSP）角色 |
| [[AVGO.US(broadcom)]] | OCI 共編夥伴 | Helios Switch TH6 供應 |
| [[NVDA.US(nvidia)]] | 競爭對手 | NVLink 垂直整合 vs AMD 開放路線 |
| [[2330_台積電（市）]] | 晶圓代工 | Instinct N2/N3 + CoWoS + SoIC |
| [[3711_日月光投控（市）]] | 先進封裝 OSAT | Venice CPU FOCoS-Bridge 獨家 |
| [[MU.US(micron)]] | 上游 HBM | AI 加速器記憶體（HBM4） |
| [[3706_神達投控（市）]] | 系統整合夥伴 | 神達展示 MI355X 液冷與 MI350X 氣冷 AI 機櫃 |

## 來源

- [[報告_GFHK_AMD更新_20260701]]（廣發香港，AMD Advancing AI Takeaways，2026-07-23）
- [[報告_AMD_AdvancingAIDay_20260727]]（富邦投顧，AMD AI Day 報告，2026-07-27）
- [[報告_SemiAnalysis_AMD_AdvancingAI2026_20260724]]（SemiAnalysis，"Can AMD break the CUDA Moat?"，2026-07-24）
- [[報告_JPM_台積電CoWoS先進封裝_20260709]]（J.P. Morgan，TSMC CoWoS，Venice 需求，2026-07-09）
- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（OCI 200G MSA，2026-06-29）
- [[報告_中信_AMD_OpenAI合作_20251006]]（中信投顧，2025-10-06）

## 相關頁面

- [[分析_2026Q3半導體供需與AI伺服器供應鏈]]
- [[AMKR.US(amkor)]]
- [[時程_2026記憶體與AI催化劑]]
- [[3189_景碩（市）]]

- [[2059_川湖（市）]]
- [[3017_奇鋐（市）]]
- [[3231_緯創（市）]]
- [[3533_嘉澤（市）]]
- [[3653_健策（市）]]
- [[6669_緯穎（市）]]
- [[7769_鴻勁精密（市）]]
- [[2360_致茂（市）]]
- [[2449_京元電子（市）]]
- [[COHR.US(coherent)]]
- [[供應鏈_半導體測試設備]]
- [[分析_先進封裝與RDL]]
- [[分析_日月光深度報告]]
- [[3711_日月光投控（市）]]
- [[2330_台積電（市）]]
- [[技術_CoWoS與先進封裝]]
- [[技術_CPO]]
- [[技術_OCI]]
- [[技術_光互連]]
- [[供應鏈_先進封裝載板]]

## 廣發香港 2026-07-24 更新

- AMD 將 2030 年 AI accelerator TAM 上修至 US$1.4tn、server CPU TAM 超過 US$220bn；這是公司展望，非已實現市場規模。
- MI455X、MI500、Helios rack 與 ROCm 是縮小與 NVIDIA 差距的產品路線；報告估 2027 年約 30 萬 CoWoS builds，屬券商 estimate。
- 廣發香港維持 Buy、目標價 US$640；主要風險為 AI 需求放緩、產品延遲與同業競爭。

來源：[[GFHK - AMD  update(1)]]（廣發香港，2026-07-24）。

## CTBC 2026-08-05 更新

- 2Q26 營收 US$115.36 億、資料中心營收 US$67 億，Non-GAAP EPS US$1.66；3Q26 營收指引中位數 US$130 億，均為公司財報／指引。
- Helios 預計 3Q26 小量出貨、4Q26 至 2027 年放量；客戶部署規模與產品量產節奏仍待後續揭露驗證。
- CTBC 以 2027E EPS US$15.33、37 倍 PER 給予目標價 US$567、評等 Overweight，屬券商 estimate。

來源：[[報告_CTBC_AMD_20260805]]（中國信託，2026-08-05）。

## 富邦 AMD Advancing AI Day 2026-07-27 更新

- AMD 發表 Helios rack：18 個 compute tray、6 個 switch tray；MI455、Venice CPU、Pensando DPU 與 800G Volcano NIC 組成 scale-up／scale-out 平台。
- MI500 將導入 HBM4E、擴大 scale-up domain 與銅／光互連；MI600 預計 2028 年推出，均屬公司 roadmap，非已實現出貨。
- ROCm 升級為 ROCm.AI，並以 Hybrid AI Computing、Kria robotics 平台延伸至企業、邊緣與機器人；Helios 的客戶部署與量產節奏仍待驗證。

來源：[[事件分析_AMD Advancing AI Day_20260727]]（富邦證券，2026-07-27；公司展望／券商整理）。
