---
title: "技術_CoWoS與先進封裝"
tags:
  - 技術/先進封裝
  - 技術/CoWoS
  - 技術/HBM
  - 產業/半導體
  - 環節/封測
maturity: developing
aliases:
  - CoWoS
  - Chip-on-Wafer-on-Substrate
  - 2.5D封裝
  - 先進封裝
  - CoWoS-S
  - CoWoS-R
  - CoWoS-L
  - SoIC
  - CoPoS
  - HBM4
  - Super Carrier
  - 超大中介層
  - 玻璃中介層
  - 直接液冷封裝
  - Direct-to-Silicon Liquid Cooling
  - FOCoS
  - FOCoS-CL
  - FOCoS-Bridge
  - sFOCoS
  - FOBGA
  - 2.3D
  - EMIB
  - FO-EB
  - Silicon Bridge
  - 矽橋
  - Adaptive Patterning
  - M-Series
  - aLSI
  - Active LSI
  - Active Local Silicon Interconnect
  - 主動式矽橋
  - TBM
  - Temporary Bonding Material
  - TBDB
  - Temporary Bonding and Debonding
  - RL
  - Laser Release Layer
  - 鐳射離型層
updated: 2026-08-22
---

# 技術_CoWoS與先進封裝

## 圖解（補充：JPM 客戶需求分配）

![[報告_JPM_台積電CoWoS先進封裝_20260709_002.png]]
*圖（J.P. Morgan，2026-07-09）：CoWoS 全球客戶需求堆疊圖（2023-2027E，千片/年）——NVIDIA 為絕對主力；AMD 2027E 大幅爬升；Broadcom（含 Google TPU）、Marvell + AWS、MediaTek 亦顯著成長。2027E 合計約 238 萬片/年。*

![[報告_JPM_台積電CoWoS先進封裝_20260709_003.png]]
*圖（J.P. Morgan，2026-07-09）：TSMC + Non-TSMC CoWoS 季度月產能爬坡（1Q24-4Q28E，kwfpm）——TSMC 自有產能由 1Q24 1.6K 爬升至 4Q28E 225K；OSAT 外包產能（Non-TSMC）至 4Q28E 達 85K；合計 4Q28E 310K wfpm。*

## 定義

CoWoS（Chip-on-Wafer-on-Substrate）是 TSMC 的旗艦 2.5D 先進封裝平台，透過矽中介層（Interposer）把 GPU/ASIC die 與 HBM 堆疊並排互連，繞過傳統有機基板的帶寬瓶頸。AI 晶片的 CoWoS 中介層已從早期 <1,000 mm² 擴大至 Rubin 世代的 **>3,300 mm²**（4× reticle 拼接），HBM 堆疊從 8-Hi 邁向 12-Hi → 16-Hi（HBM4）。

封裝已成為 AI 晶片的**實質供給瓶頸**與效能槓桿：CoWoS 產能分配、HBM 供給、OSAT 角色重組是三條可量化主線。

## 圖解

![[AI硬體架構研究資源總覽_2025-2026_006.png]]
*圖（研究導引，2026-07，自繪概念圖）：CoWoS-L＋SoIC 封裝剖面概念示意。中介層 >3,300 mm²（多光罩「Super Carrier」）；HBM4 堆疊數 8→12→16；SoIC/Hybrid Bonding 普及；趨勢向 CoPoS（面板級）與光引擎（COUPE/CPO）整合。*

## CoWoS 各變體

| 變體 | 中介層類型 | 特點 | 主要應用 |
|------|-----------|------|---------|
| CoWoS-S | 矽（Silicon Interposer） | 最成熟，高密度 TSV 互連；最大 3.3× reticle | A100、H100、H200 世代；AMD MI300（2025延至 CoWoS-L）|
| CoWoS-R | RDL（Redistribution Layer） | 低成本替代（降 20-30% vs S）；無矽橋；100% 外包 OSAT | NVIDIA Vera CPU（2025 Q4 小量）；Qualcomm、Xilinx chiplet |
| CoWoS-L | 局部矽橋（Silicon Bridge + RDL）| 可達 4× reticle → 目標 9×；B200 只需 10 個 silicon bridge（1,000 mm² vs 4,900 mm² for S）| GB300、Rubin Ultra；Google TPU 主力 |

### CoWoS-S vs CoWoS-L 成本比較

以 B200 為例：
- **CoWoS-S**：整塊矽中介層 ~70mm × 70mm（面積 4,900 mm²），一片 12" 晶圓僅產出 ~14 個 interposer（65nm 工藝）
- **CoWoS-L**：使用 10 個 10mm × 10mm silicon bridge，總矽面積僅 1,000 mm²，成本大幅降低

**CoWoS-S 仍存在的原因**：技術路線鎖定難切換（AMD 2025 年仍有 20% 留 S，為舊產品延續）；L 設計難度高、協同設計要求更高。

### CoWoS-R 外包現況（2025 年底起）

台積電自 2025 年底起**不再承接 CoWoS-R**（L 的 RDL interposer 產能擠佔 R 的產能），100% 外包 OSAT：

| 時間 | 外包格局 |
|------|---------|
| 2025 Q4 | 全部由 Amkor 承接 |
| 2026 全年 | Amkor **70%** / ASE（矽品）**30%** |

- CoWoS-R 2026 年總需求量：**80–100K 片**
- NVIDIA Vera CPU 為 CoWoS-R 主要用戶（2026 全年需求約佔總量 15%）

### CoWoS-L 量產時程延期（2026-05 更新）

> ⚠️ CoWoS-L 大量量產時程從原計畫 2028 年延至 **2029-2030 年**
> - 延期原因：Google TPU 訂單暴增（年初 ~80 萬顆 → 約 300 萬顆，增幅近 4×）
> - 台積電原規劃用於 CoWoS-L 的兩座工廠被緊急徵用擴充 CoWoS 產能應對 Google TPU 需求

來源：[[memo_日月光_CoWoS_CPO_專家會議_20260520]]

## HBM 技術路線

| 規格 | 介面寬度 | 堆疊數 | 頻寬/顆 | 主要應用 | 認證狀態 |
|------|--------|--------|--------|---------|---------|
| HBM3 | 1,024-bit | 12-Hi | ~1.2 TB/s | H200 | 量產 |
| HBM3e | 1,024-bit | 12-Hi | ~1.6 TB/s | GB300 | 量產 |
| HBM4 | **2,048-bit** | 12-Hi→16-Hi | ~4 TB/s+ | Rubin | SK Hynix、Samsung、Micron 三廠均於 2026-06 完成 Rubin 認證 |

**HBM4 關鍵變化**：2,048-bit 介面（倍增）＋客製化 Base Die（記憶體廠與晶圓代工分工重組）——Base Die 由 TSMC 或三星先進製程製造，是「記憶體廠 × 邏輯廠協作」模式的轉型。

## 直接液冷封裝（Direct-to-Silicon Liquid Cooling）

**TSMC ECTC 2025 論文**（CoWoS 平台上的晶背直接液冷）是近一年封裝領域指標論文：

- 在約 **3,300 mm²** 矽中介層上整合晶背直接液冷
- 量測熱阻 **0.055°C/W**，支撐 **>2.6 kW TDP**
- 直接回應 Rubin Ultra 級（單封裝估 ~3.6 kW）的「熱牆」問題
- 把散熱從「封裝後外掛」整合進封裝本身

> [!info] 散熱壓力：kW 級 GPU 封裝
> Rubin 世代單 GPU 封裝 TDP 已逼近或超過 3 kW，傳統外部 CDU 冷卻路徑過長、熱阻過高。直接液冷封裝是突破熱牆的必要路線，預期 Rubin Ultra 世代起進入量產討論。

## Rubin 世代封裝組合

| 元素 | 規格 | 重要性 |
|------|------|-------|
| 中介層平台 | CoWoS-L（局部矽橋） | 支撐 >3,300 mm² 超大尺寸 |
| 3D 堆疊 | SoIC（混合鍵合，見 [[技術_混合鍵合]]） | 把 GPU 計算 chiplet 3D 整合 |
| HBM | HBM4（三廠 2026-06 完成 Rubin 認證）| 2,048-bit 頻寬翻倍 |
| 散熱 | 直接液冷封裝（Direct-to-Silicon Cooling）| >2.6 kW TDP 能力 |
| 光互連 | COUPE 光引擎整合入封裝（CPO）| 見 [[技術_CPO]] |

## 前瞻封裝技術

| 技術 | 概念 | 預期時程 |
|------|------|---------|
| **Super Carrier（超大中介層）** | 多光罩拼接突破單一 reticle 面積限制（>3,300 mm²）| Rubin 世代已啟用 |
| **Active LSI（aLSI，主動式矽橋）** | CoWoS-L 中介層的矽橋從被動（純走線+電容）升級為主動（含低功耗再生器電路）；Bridge 承擔訊號完整性後，頂層 Die 的 PHY 可縮小，釋出計算與記憶體岸線 | TSMC ISSCC 2026 發表；首批量產搭載：[[AMD.US(amd)]] MI455X（Helios）2026 H2 |
| **CoPoS（面板級封裝）** | 把 CoWoS 製程移植到大型面板（Glass Panel Processing），降低每顆成本 | 2027-2029 開始量產評估 |
| **玻璃基板** | 矽 → 玻璃中介層，降翹曲、提高密度（見 [[技術_玻璃基板]]）| 2027-2028 初期導入 |
| **Hybrid Bonding 普及** | SoIC 從 HBM→chiplet 全面擴展（見 [[技術_混合鍵合]]）| 已量產，滲透加速 |

> [!info] Active LSI 技術要點
> TSMC 於 ISSCC 2026 展示主動式局部矽橋（aLSI）：Bridge 包含低功耗訊號再生器，可在 Channel 中途恢復訊號，讓 PHY 負擔轉移到 Bridge，縮小頂層晶片的 PHY 面積並降低岸線佔用。SemiAnalysis（2026-07-24）確認 AMD MI455X 是首款量產搭載 aLSI 的晶片，Interposer 上有 2 個 Base Die、12 堆 HBM4 與 2 個 I/O Die。
> 來源：[[報告_SemiAnalysis_AMD_AdvancingAI2026_20260724]]

## FOCoS 與 2.3D 整合（日月光路線）

> 來源：三篇學術論文（John Lau IMAPS 2023 ×2、Deca×ASE IMAPS 2023），詳見「來源」章節。FOCoS 投資面（AMD Venice 獨家合約、報價、產能）見 [[3711_日月光投控（市）]] 與 [[分析_日月光深度報告]]。

**2.3D 整合定義**（John Lau 分類法）：用「細線寬 RDL 基板（fan-out RDL-substrate，L/S 可達 2/2µm）＋ build-up 載板」組成混合基板（hybrid substrate），取代 2.5D 的 TSV 矽中介層。首篇論文為 STATSChipPac ECTC 2013；ASE 的 FOCoS 是 2.3D 路線目前唯一大規模量產的 OSAT 實作。

![[報告_IMAPS_JohnLau_2.3D整合FOCoS綜述_20230501_001.png]]
圖說：TSMC CoWoS（左，TSV interposer + microbump + underfill）與 ASE FOCoS chip-first（右，fan-out RDL 直連 C4）剖面對比——FOCoS 省去 TSV 中介層、晶片凸塊、C2W 鍵合與 underfill 工序，這是 ASE 報價能比 CoWoS 低 40-50% 的結構性原因（John Lau, IMAPS 2023）。

### FOCoS 三代技術演進

| 世代 | 首發 | 結構特徵 | 關鍵參數 |
|------|------|---------|---------|
| FOCoS chip-first | ECTC 2016 | die-down 置於臨時載板→壓縮成型→再做 RDL；RDL 經 UBM/C4 直連載板 | 省 TSV interposer、bumping、underfill |
| FOCoS chip-last（FOCoS-CL，後改名 FOBGA） | ECTC 2020（量產級） | RDL 先做在玻璃載板（RDL-first），晶片以 µbump 接上 | 4 層 RDL、L/S 2/2µm；示範模組 30×28mm、載板 47.5×47.5mm（1 ASIC + 2 HBM） |
| sFOCoS（FOCoS-Bridge 前身） | ECTC 2021 | 頂側 fan-out RDL（L/S 10/10µm）撐 ASIC+HBM，底側**矽橋埋入 EMC** | Si bridge 6×6mm、橋上 L/S 0.8µm；模組 27×14mm、載板 40×30mm |

- **chip-first vs chip-last 取捨**：chip-first 工序較簡單、成本較低；chip-last 適合**更大 die/封裝尺寸**、無 die shift 問題、RDL 線寬可以更細——這是 AI/HPC 大模組全走 chip-last 的原因。
- **可靠度**（ECTC 2022，JEDEC 標準測試）：FOCoS-CL 與 sFOCoS 全數通過；各項目 FOCoS-CL 均優於 sFOCoS，主因矽橋（CTE 2.5 ppm/°C）與有機載板（18.5 ppm/°C）熱膨脹失配。兩者回焊翹曲接近、皆在允收範圍。
- **良率邏輯**：chip-last 另一優勢是「先測混合基板、確認 known-good 再貼晶片」，把最貴的 KGD（known-good die）損失風險降到最低——OSAT 只需在良品基板上貼片。

![[報告_JMEP_JohnLau_Chiplet水平互連綜述_20230401_034.png]]
圖說：ASE sFOCoS 剖面——ASIC 與 HBM 經 µbump 坐在 fan-out RDL 上，die-to-die 高密度互連由埋在 EMC 中的矽橋（Si Bridge）承擔，其餘訊號走 RDL + C4 到載板。矽只用在需要細線寬的局部，是 FOCoS-Bridge 成本低於全面積 TSV interposer 的核心（John Lau, JMEP 2023）。

![[報告_JMEP_JohnLau_Chiplet水平互連綜述_20230401_035.png]]
圖說：sFOCoS 製程流程——臨時玻璃載板上先貼橋 + 電鍍 Cu post →壓模研磨露出 Cu post →製作 RDL →貼 ASIC/HBM →再壓模→移除載板、植 C4、切割成模組→上載板。與 SPIL FO-EB 流程幾乎相同（集團內兩套平行方案）。

### 矽橋（Bridge）方案全景對照

橋 = 一小片無元件、只有 RDL 的矽片，只在 chiplet 間需要細線寬互連的局部使用。兩大陣營：**埋入載板**（Intel/IBM）vs **埋入 fan-out EMC**（OSAT 陣營，含 ASE）。

| 方案 | 廠商 | 橋的位置 | 特徵 / 參數 |
|------|------|---------|-----------|
| EMIB | [[INTC.US(intel)]] | build-up 載板腔內 | L/S/H 2/2/2µm、橋 2×2–8×8mm、<4 RDL；載板挖腔+再壓合是良率難點 |
| **EMIB-T（TSV 升級版）** | [[INTC.US(intel)]] | 建板腔內＋TSV | **ECTC 2026** 發表 CoWoS-L 替代方案：36/35µm bumps pitch @**2× reticle** 拼接；TSV 可降電源壓降 **-68~80%**；MIM 電容 PDN 阻抗 **-82%**；最大可達 **12× reticle** 拼接（突破 CoWoS-S 物理上限）|
| DBHi | IBM | 一般載板頂部開腔 | C2 bump 做在橋上、TCB+NCP 先橋後板;工序簡單但橋貼合精度要求高 |
| LSI | [[2330_台積電（市）]] | InFO/CoWoS 內 | InFO_LSI 與 CoWoS_LSI（即 CoWoS-L 的矽橋） |
| FO-EB / FO-EB-T | SPIL（日月光投控子公司） | fan-out EMC 內 | 測試載具 GPU+4 HBM、橋最大 36mm²、模組 30×45mm、封裝 70×80mm；**FO-EB-T 橋內加 TSV，供電電阻改善 55%**、DCR 追平 2.5D |
| sFOCoS / FOCoS-Bridge | [[3711_日月光投控（市）]] | fan-out EMC 內 | 見上表；2025-05 再發表 FOCoS-Bridge with TSV（功耗損失降 3×） |
| S-connect | [[AMKR.US(amkor)]] | fan-out EMC 內 | 橋可用矽橋或 molded RDL 橋，另可埋 IPD |
| EFI | IME | fan-out EMC 內 | 模組直貼 PCB，散熱優於 2.5D |
| Hybrid Bonding Bridge | [[3037_欣興（市）]]（提案） | 橋與 chiplet 以 Cu-Cu 混合鍵合 | 免 µbump，pitch 最細的下一步（見 [[技術_混合鍵合]]） |

> [!note] FO-EB-T 的投資意涵
> SPIL 論文證明「橋內加 TSV」把 fan-out 橋方案唯一輸 2.5D 的供電（DCR）補上——這正是 ASE 2025-05 產品化 FOCoS-Bridge with TSV 的技術脈絡。垂直供電路徑同時是散熱通道，對 kW 級 AI 晶片是必要演進。

### Deca M-Series 與 Adaptive Patterning（ASE 授權的面板級路線）

- **問題**：封裝密度 20 年只增 15×（IC 增 500×）；chiplet 裝置常 36×36mm（1,296mm²）> 曝光 reticle 上限（~850mm²），拼接（stitching）技術可行但不符成本。
- **Deca 解法**：**無光罩 LDI 數位微影**——整片 300mm 圓 / 600×600mm 方板單一曝光場，徹底繞過 reticle 限制；Adaptive Patterning 即時量測每顆 die 位移、逐顆動態調整 RDL 圖形（Adaptive Alignment 平移旋轉全圖 / Adaptive Routing 局部改佈線），解 fan-out chip-first 的 die shift 痼疾。
- **設計實證**：4nm die（12×13mm、6,000 die pads）以 5µm L/S **單層 RDL 完成全部佈線**，成品 14×16mm（fan-out ratio 1.44）。
- **與 ASE 關係**：ASE 是 Deca M-Series / Adaptive Patterning 授權夥伴（論文由 Deca 與 ASE 工程團隊合著），此路線是 FOCoS chip-first 端與 FOPLP 面板級的技術底層；ASE ECTC 2026 發表的 FOPLP 600mm 混合流程（RDL 600mm + 組裝 300mm，生產力 7.1×）與此一脈相承。

### UCIe 與 chiplet 互連標準

UCIe 1.0（2022-03）定義 die-to-die 標準互連：advanced package（即 FOCoS/CoWoS/EMIB 級）bump pitch 25–55µm、通道 <2mm、頻寬密度 188–1,350 GB/s/mm²、功耗 0.25 pJ/b。ASE 為創始 promoter 成員（與 TSMC、Intel、Samsung、AMD 等同列）——bridge 方案百家爭鳴後，標準化是 FOCoS 對外承接多家 chiplet 客戶的前提（呼應 [[3711_日月光投控（市）]] Broadcom/Marvell 洽談中的客戶多元化）。

## 2027 全球 CoWoS 需求分配（MS，2026-07-08）

> 來源：報告_MS_AI供應鏈_CoWoS2027分配_20260708（Morgan Stanley，Charlie Chan，2026-07-08）

**2027e 總需求：2,664k 片（YoY +91% vs 2026e 1,394k）**

| AI 晶片商 | 2026e（k 片） | 2027e（k 片） | 2027 占比 | YoY |
|-----------|------------|------------|---------|-----|
| NVIDIA | 780 | 1,222 | 45% | +57% |
| Broadcom（含 Google TPU） | 300 | 484 | 18% | +61% |
| AMD | 130 | 530 | 20% | **+308%** |
| MediaTek（Google TPU Zebrafish） | 40 | 180 | 7% | — |
| AWS/Annapurna | 62 | 90 | 3% | +45% |
| Marvell | 17 | 64 | 2% | +276% |
| GUC 客戶 | 14 | 60 | 2% | +329% |
| Microsoft（Maia） | 9 | 50 | 2% | — |
| Meta（MTIA 3） | 15 | 55 | 2% | — |
| Others | 27 | 28 | 1% | — |
| **合計** | **1,394** | **2,694** | 100% | **+93%** |

**AI HBM 需求：2027e 約 50bn Gb（2026e 約 30bn Gb）**

### NVIDIA Rubin 出貨預估
- **7mn Rubin + Rubin Ultra** chips in 2027（R200: 5,920k + Ultra: 1,040k）
- **90k NVL72 server racks** in 2027（Rubin 啟動 3Q26，racks 4Q26 起出貨）
- 2026 Blackwell 庫存為供應鏈 buffer，將於 2026 年底全數消耗完畢

### AMD 詳細規格（2027）
- **MI455（標準版）**：2 compute dies + 12 HBM4 12hi；搭配 Helios rack（18 CPU + 72 GPU）；主要客戶 Microsoft、AWS、Oracle
- **MI450（Meta 定制版）**：半尺寸，1 compute die + 6 HBM4 12hi（9 CPU + 36 GPU）
- **Venice CPU**：AMD 首款 CoWoS 製程 CPU；CoW 生產集中在 OSATs（ASE/SPIL、Amkor、Powertech）；2027 CPU 出貨 5.7-6mn
- 2027 AMD CoWoS 合計 530k（AI 晶片 240k+Venice CPU 270k）；執行風險存在（2026 曾縮減訂單）

### Google TPU 進度
- KYEC 3Q26 約 +10% QoQ（低於初估 15%），主因 Rubin 與 Sunfish 輕微延後 + MediaTek 手機 SoC 砍單
- **Sunfish**（TPU v8i，Broadcom）：主要出貨集中 4Q26，全年量 960k；2027 CoWoS-S 330k → 約 3.9mn 單位（die 更大、chip value 更高 vs Zebrafish）
- **Zebrafish**（TPU v8t，MediaTek）：4Q26 爬產不變；2027 CoWoS-S 180k → 約 3.6mn 單位；ABF/T-Glass 基板供應是 upside 的主要風險
- **Humufish**（TPU v9，MediaTek）：2027e 400k
- **TriggerFish**（2nm，推論版）：inferencing 版本的 HumuFish；新一代 Google TPU 代號；可能支援 TPU 租賃服務（TPU leasing）

（來源：[[報告_MS_CoWoS分配NVDA_Google_TSMC_20260623]]，2026-06-23）

### CPU CoWoS 消耗（2027）

CPU 開始大量消耗 2.5D 先進封裝產能：
- **NVIDIA Vera CPU**（3nm，CoWoS-R）：2027 預估 **5.75mn 顆**（近翻倍 YoY）；CoWoS-R 幾乎完全翻倍
- **AMD Venice CPU**（2nm，FOCoS-B/CoWoS）：2027 預估 **6.75mn 顆**（vs 2026 ~1.25mn，+440%）；AMD 2027 CoWoS 合計 530k（AI 晶片 240k + Venice CPU 270k）

（來源：[[報告_MS_CoWoS分配NVDA_Google_TSMC_20260623]]，2026-06-23；AMD 2027 詳細見上方 AMD 段落）

### Meta ASIC（Apollo）
- 原 Olympus（2nm ASIC）被取消，由 **Apollo** 接續（同為 2nm，Broadcom 繼續設計服務）
- 量產時程 1Q28；**GUC** 可能贏得 Meta Rivos 團隊旗下另一 ASIC 專案，tape-out 1H27，CoWoS 2027 年底-1H28

## OSAT CoWoS 容量預測

TSMC 本身維持 CoWoS 核心產能，但將 oS（Substrate on Substrate）與 CP（Chip on Substrate）大量外包。各方預估：

### ASE + Amkor 外包 CoWoS（kwpm，季底最大值）

| 時間點 | ASE | Amkor | 合計 | 來源 |
|--------|-----|-------|------|------|
| 3Q25A  | 8   | 6     | ~14  | GFHK |
| 4Q25A  | 9   | 6     | ~15  | GFHK |
| 4Q26E  | **15**  | 10 | ~25  | GFHK |
| 4Q27E  | **45**  | 33 | ~78  | GFHK |
| 4Q28E  | **55**  | 45 | ~100 | GFHK |

**Amkor 詳細擴產計畫**（來源：[[memo_日月光_CoWoS_CPO_專家會議_20260520]]）：

| 時間點 | Amkor CoWoS 月產能 |
|--------|------------------|
| 2026 年初 | **14K 片/月** |
| 2026 年底目標 | **20–25K 片/月** |
| 2027 年目標 | **27K 片/月** |
| 美國新廠（2027 Q3-Q4）| **6K 片/月**（一期）→ 12K/月（總規劃）|

> 美國新廠 2026 年仍在土建階段；2027 Q2 設備移入與驗證；量產 2027 Q3-Q4。

![[GFHK - ASE update_002.png]]
> ASE/SPIL 與 Amkor CoWoS 容量預測（kwpm，季底）。2027 年合計接近 78kwpm，2028 年達 100kwpm（來源：廣發香港，2026-07-01）

### 各方 end-2027 ASE CoWoS 估值比較

| 機構          | ASE end-2027 CoWoS（kwpm） | 口徑說明       |
| ----------- | ------------------------ | ---------- |
| UBS         | **50**                   | 年底最大值      |
| 廣發香港        | **45**                   | 年底最大值（季底）  |
| 定錨（ASE 管理層） | **42** 年均                | 2027 年年均產能 |

> 三者口徑略有差異（年底最大值 vs 年均），實質接近 40-50kwpm。

### TSMC 全廠 CoWoS 年產能估計比較（各機構）

| 機構 | 報告日 | 2026F 年產能 | 2027F 年產能 | 備註 |
|------|--------|------------|------------|------|
| Nomura | 2026-06-30 | 1,100kpcs（TSMC 目標） | 2,000kpcs（目標）；**Nomura 模型 1,800kpcs** | WoS 瓶頸限制實際產出（見下方說明） |
| Goldman Sachs | 2026-07-02 | 1,275kpcs | 2,730kpcs | 含 WMCM；2028F 3,480kpcs |
| Morgan Stanley | 2026-07-08 | 1,394kpcs | 2,664kpcs | 全球客戶分配總量 |
| **J.P. Morgan** | 2026-07-09 | **1,240kpcs** | **2,381kpcs** | 不含 WMCM；2028F 3,320kpcs；[[報告_JPM_台積電CoWoS先進封裝_20260709]] |

### JPM CoWoS 客戶需求分配（2026/27/28E，萬片/年）

| 客戶 | 2026E | 2027E | 2028E |
|------|-------|-------|-------|
| NVIDIA | 72.5 | 119.6 | 173.5 |
| AMD | 9.5 | 35.5 | 54.0 |
| Broadcom（含 Google TPU）| 25.0 | 42.5 | 58.0 |
| **合計** | **~124** | **~238** | **~332** |

**TSMC CoWoS 月產能（JPM 估，wfpm，季底）**：
- end-2026E：TSMC 自有 115K + OSAT 15K = **130K wfpm**
- end-2027E：TSMC 自有 190K + OSAT 50K = **240K wfpm**
- end-2028E：TSMC 自有 225K + OSAT 85K = **310K wfpm**

來源：[[報告_JPM_台積電CoWoS先進封裝_20260709]]（J.P. Morgan，2026-07-09）

> **Nomura WoS 瓶頸論（2026-06-30）**：CoWoS 分為 CoW（Chip-on-Wafer，台積電直接控制）和 WoS（Wafer-on-Substrate，涉及 ABF 載板及外部封裝基板端，台積電不直接控制）。Nomura 的關鍵洞察是 **WoS 而非 CoW 將成為 2027F 更大瓶頸**，因此即便 TSMC 目標 2,000kpcs，Nomura 模型僅取 1,800kpcs。此瓶頸對 [[技術_ABF載板]] 中的 ABF 載板需求是長多訊號（需求遠超供給），對 [[3189_景碩（市）]]、[[8046_南電（市）]]、[[3037_欣興（市）]] 等 ABF 載板廠的定價權有正面支撐。

### CoPoS（CoWoS on Panel-on-Substrate）時程

Nomura（2026-06-30）預期 CoPoS 最早可於 **2H28** 配合 NVIDIA Feynman GPU 時程啟動量產（較業界原估 2029F 大幅提前）。定錨產業筆記（2026-07-22，[[報告_先進封裝技術發展方向_20260722]]）口徑：**2027 試産、2029-30 大量量産**。

- CoPoS 載具：310×310mm 方形面板（TSMC 已定案），單面板切割效益顯著高於 CoWoS 圓晶
- 若 Feynman 完全遷移至 CoPoS，Nomura 估計 TSMC 需要 **700-800kpcs** CoPoS 產能
- SiC Carrier 需求：Feynman 大功率設計驅動 SiC 材質 carrier 採用，利好 [[6488_環球晶（櫃）]]

**CoPoS 台股設備材料映射（定錨，2026-07-22）**：

| 環節 | 台股廠商 | 角色 |
|------|---------|------|
| 面板級 PVD | [[6937_天虹（市）]] | 310×310mm 面板 PVD 二/三號機 |
| 濕製程設備 | [[3583_辛耘（市）]] | CoPoS/FOPLP 濕製程 |
| 應力平衡膜 | [[3595_山太士（市）]] | Balance Film 面板翹曲控制（類獨佔）|
| 液態封裝膠 | [[1717_長興（市）]] | WMCM LMC（WMCM 平台共通）|
| PSPI 介電材料 | [[1717_長興（市）]]、[[5234_達興材料（市）]] | RDL 介電層 |

> [!warning] CoPoS 時程風險
> 定錨報告明確指出 CoPoS **延遲風險最高達 2 年**（即量産可能滑到 2031 以後）。若 Feynman GPU 採用 CoWoS-L 而非 CoPoS，面板級設備材料的催化劑將大幅遞延。

### WMCM Apple A20 産能爬坡

WMCM（Wafer-Level Multi-Chip Module）是台積電為 Apple A20 打造的晶圓級多晶片封裝平台，整合先進製程邏輯晶片與記憶體，以 LMC 液態模封膠取代傳統塑封，[[1717_長興（市）]]為 LMC 獨家認証供應商。

| 時間節點 | WMCM 産能（片/月）| 說明 |
|----------|-----------------|------|
| 2025 年底 | ~10,000 | 爬産初期 |
| 2026E | ~75,000 | ×7.5 YoY（Apple A20 主力量産）|
| 2027E | ~125,000 | ×1.67 YoY |
| 2028E | ~145,000 | 趨近成熟 |

（來源：[[報告_先進封裝技術發展方向_20260722]]，定錨產業筆記，2026-07-22）

關鍵觀察點：WMCM 産能爬坡速度 > CoWoS，是台積電封裝産能 2026-2027 年最主要的隱性增量（未計入多數賣方 CoWoS 産能數字中）。受惠股：[[1717_長興（市）]]（LMC）、[[3583_辛耘（市）]]（濕製程設備）。

### SoIC 產能展望（Nomura，2026-06-30）

| 時間 | SoIC 產能變化 | 主要驅動 |
|------|------------|---------|
| 2027F | **翻倍** | nVidia CPO（光引擎 SoIC 整合） |
| 2028F | **再翻倍** | nVidia Feynman GPU-on-GPU（3D SoIC 堆疊） |

> Feynman 為首款採用 GPU-on-GPU SoIC 堆疊的 GPU，是 SoIC 從 HBM 鍵合延伸到 GPU-on-GPU 的結構性躍升。見 [[技術_混合鍵合]]。

## 封裝成本拆解（2026-05 專家估）

> 來源：[[memo_日月光_CoWoS_CPO_專家會議_20260520]]（信心：中高）

**Blackwell（B200）成本結構**：

| 元素 | 金額（USD） | 說明 |
|------|-----------|------|
| 晶片總成本 | ~9,000 | — |
| 封裝（不含測試）| **~600** | 主要成本來自 Interposer |
| 測試 | 150–200 | — |
| **CoWoS-L Interposer** | **~200** | 三大成本：聚醯亞胺 + 矽橋 + 銅線（電鍍） |
| ├ 聚醯亞胺（PI，Asahi Kasei）| ~100（40%）| 供應緊張，小幅漲價 5-10% |
| └ Silicon Bridge | ~80–100（40-50%）| — |
| 基板 + PCB | **800–1,000** | — |
| （僅供參考）電源模組 | ~600+ | 不含在上述 |

**Rubin 世代預估**：基板 + PCB 上升至 ~US$1,500。

## 富邦 2027 先進封裝模型更新（2026-07-28）

![[報告_富邦_2027年半導體展望_20260728_002.png]]
*圖（富邦投顧，2026-07-28）：台積電 CoWoS／CoPoS 季底月產能估計；CoPoS 自 2028 年小量加入。*

| 項目 | 富邦估計 | 判讀 |
|------|----------|------|
| 台積電 CoWoS 月產能 | 2027 年底 18 萬片；2028 年底 22 萬片 | estimate；與定錨／JPM 約 19 萬片的差異不大 |
| 日月光 FoCoS 月產能 | 5 萬片 | 主要支援 CPU、網通與 AMD；estimate |
| NVIDIA CoWoS 配置 | 2026 年 63 萬片 → 2027 年 103 萬片 | TSMC 與 SPIL 合計；estimate |
| NVIDIA 晶片產出 | 2026 年 820 萬顆 → 2027 年 1,240 萬顆 | Rubin／Rubin Ultra 中介層切割假設為每片 12／10 個 |
| Intel EMIB 月產能 | 2026 年底 1.0–1.2 萬片 → 2027 年底 2.4–2.5 萬片 | 富邦供應鏈調查；學習曲線仍是風險 |

### Rubin 架構與 HBM 成本變化

- 富邦將短期 Rubin 產量下修至約 100 萬顆，理由是熱設計變更與生產延後；3Q26 Blackwell 增產抵銷部分影響。
- 富邦認為原 Kyber 機架取消或延後後，NVIDIA 正評估四櫃 Oberon 與雙櫃 Taycan 兩種替代設計；雙櫃方案可能以 NPO／CPO 做 scale-out。兩種設計均未定案，相關受惠鏈只能列為情境，不能列為確定訂單。
- HBM4 成本估計由 HBM3e 的 US$17–18／GB 升至 US$31–32／GB；其他 GPU／ASIC 專案可能達 US$35–36／GB。這會抬高 BOM 與系統售價，但最終採購價仍取決於記憶體供應、良率與客戶議價。
- 富邦估 Google 2028 年 TPU 目標 1,200–1,500 萬顆，V9 採四顆運算晶片，因此台積電之外可能需要 Intel EMIB-T 支援；這是券商調查推估，不是 Google 官方承諾。

**OSAT 全製程封裝報價比較**（AMD FOCoS，信心：中）：

| 方案 | 報價（USD/顆）| 初期良率 |
|------|-------------|---------|
| ASE FOCoS-Bridge | 3,500–4,000 | ~75%（學習中）|
| TSMC CoWoS | 6,000–7,000 | ~90% |

AMD FOCoS 報價結構（四段）：凸塊制備 + RDL（3層 PI + 3層金屬布線）+ Chip-to-Wafer 鍵合 + On-Substrate 組裝。以 Server CPU（50mm × 50mm，每片晶圓 20 顆）計，On-Substrate 段價值約 US$1,000/片。

## 供給瓶頸

CoWoS 是近年 NVIDIA 出貨最主要的產能限制：
- **4× reticle 拼接需求**：Rubin 世代 CoWoS 需求量相比 H100 大幅倍增，TSMC 須持續擴充中介層產線
- **HBM 供給**：HBM4 三廠齊認證後，供應鏈多元化，但初期 SK Hynix 領先
- **良率**：Hybrid Bonding 初期良率約 35%（見 [[技術_CPO]] 的良率分析）；大面積中介層翹曲控制是另一挑戰
- **暫時接著／解黏材料**：薄晶圓與玻璃承載板需以 TBM／TBDB 固定，再用 RL（Laser Release Layer，鐳射離型層）解黏；[[5234_達興材料（市）]]稱其 RL 已量產並可延伸至 CoWoS-S、FOPLP，另有 4 項 CoWoS 間接材料驗證中。

> [!warning] JPM SBR 執行風險（2026-07-21）
> JPMorgan Semiconductor Bus Review（2026-07-21）提出重要執行風險：
> - **CoWoS-S 實際物理上限約 3.3× reticle**（非市場假設的更大尺寸）
> - **Rubin Ultra 5.5× reticle「進展不順」**——超大中介層拼接良率挑戰超預期
> - 若 Rubin Ultra CoWoS-L 的 5.5× 目標延遲，NVIDIA GPU 出貨量可能不及市場預期
> - Intel EMIB-T 的 12× reticle 路線若成熟，是 CoWoS-L 可能的替代競爭方案
>
> 來源：[[報告_先進封裝技術發展方向_20260722]]（定錨，引 JPMorgan SBR，2026-07-21）

## 相關頁面

- [[6643_M31（市）]]
- [[技術_FOPLP]]
- [[分析_CP_FT_BI_SLT測試產業與外包]]
- [[分析_晶片尺寸擴大與面板級封裝2026]]
- [[分析_聯發科AI_ASIC]]
- [[分析_先進封裝與RDL]]
- [[技術_垂直供電VPD]]
- [[技術_矽電容]]
- [[7828_創新服務（櫃）]]
- [[NVDA.US(nvidia)]]
- [[技術_HBM高頻寬記憶體]]
- [[技術_NAND快閃記憶體]]
- [[技術_混合鍵合]]（SoIC Hybrid Bonding 技術原理）
- [[技術_CPO]]（COUPE 光引擎封裝整合）
- [[技術_玻璃基板]]（Glass Substrate / CoPoS 下一步）
- [[技術_800VDC供電架構]]（Rubin Ultra/Kyber 供電需求）
- [[供應鏈_先進封裝載板]]（ABF/玻璃基板/2.3D 混合基板供應鏈）
- [[3711_日月光投控（市）]]（FOCoS 投資面：AMD Venice 合約、LEAP 產能）
- [[5234_達興材料（市）]]（TBM／RL、PSPI 與先進封裝材料）
- [[7768_頌勝科技（市）]]（[[技術_CMP]] Pad／Membrane）

## 來源

- [[報告_DIGITIMES_AI扇出型面板級封裝_20260822]] — DIGITIMES，下載日 2026-08-21；FOPLP 面積效率、RDL、翹曲與 TGV 瓶頸
- [[報告_先進封裝技術發展方向_20260722]]（定錨産業筆記，2026-07-22；CoPoS 台股映射表、WMCM産能爬坡、EMIB-T ECTC 2026、JPM SBR 07-21 執行風險）
- [[報告_IMAPS_JohnLau_2.3D整合FOCoS綜述_20230501]] — IMAPSource Proceedings（John H. Lau，Unimicron），2023-05-01；2.3D 整合定義、FOCoS chip-first/chip-last 製程與各家（STATSChipPac/MediaTek/TSMC InFO/Amkor SWIFT/Samsung/SPIL/Shinko/Unimicron）2.3D 方案
- [[報告_JMEP_JohnLau_Chiplet水平互連綜述_20230401]] — IMAPS JMEP（John H. Lau，Unimicron），2023-04-01；矽橋全景（EMIB/DBHi/LSI/FO-EB/sFOCoS/S-connect/EFI）、sFOCoS vs FOCoS-CL 可靠度翹曲、FO-EB-T TSV 55% 電阻改善、UCIe 1.0 規格
- [[報告_IMAPS_Deca_MSeries_FOCoS_20231110]] — IMAPSource Proceedings（Deca × ASE），2023-11-10；Adaptive Patterning 無光罩 LDI、600mm 面板、5µm L/S 單層佈線 FOCoS 設計實證
- [[報告_MS_CoWoS分配NVDA_Google_TSMC_20260623]]（Morgan Stanley，Charlie Chan，2026-06-23；2027 初步 CoWoS 分配；NVIDIA 910k CoWoS-L；MediaTek 180k→3.6mn ZebraFish；Broadcom 365k→含 SunFish/Ironwood；**TriggerFish（2nm inferencing TPU）首次提及**；Vera CPU 5.75mn/Venice CPU 6.75mn；ABF/T-Glass 為 MTK 出貨 upside 的瓶頸）
- 報告_MS_AI供應鏈_CoWoS2027分配_20260708（Morgan Stanley，Charlie Chan，2026-07-08；2027 全球 CoWoS 分配 2,664k 片、Rubin 7mn 晶片/90k racks、AMD MI455/MI450、Google TPU 進度、Meta Apollo）
- [[報告_廣發香港_日月光3711_20260701]]（廣發香港，2026-07-01；ASE LEAP 容量 15/45/55kwpm（end-2026/27/28）；Amkor 10/33/45kwpm；CoWoS 外包漲價 10-20%）
- [[報告_Nomura_亞洲AI半導體_20260630]]（Nomura，2026-06-30；TSMC CoWoS 2026F 1,100kpcs→2027F 目標 2,000kpcs / 模型 1,800kpcs；WoS 瓶頸論；CoPoS 2H28 目標 700-800kpcs；SoIC 2027F 翻倍（CPO）、2028F 再翻倍（Feynman GPU-on-GPU））
- [[260702_gs_TSMC]]（高盛，2026-07-02；台積電 2027E CoWoS 含 WMCM 產能上修至 280kwpm／年 2,730k 片、2026-28 年 1,275k/2,730k/3,480k，2027E capex US$78bn；詳見 [[2330_台積電（市）]]）
- [[報告_JPM_台積電CoWoS先進封裝_20260709]]（J.P. Morgan，2026-07-09；CoWoS 客戶需求 2026/27/28E 124/238/332 萬片；TSMC 自有產能 115k/190k/225k wfpm；OSAT 15k/50k/85k wfpm；NVIDIA/AMD/Broadcom 客戶分配；TSMC FY26E Rev NT$5,342B EPS 103.97，FY27E NT$7,192B EPS 138.24，OW TP NT$3,100）
- [[報告_富邦_2027年半導體展望_20260728]]（富邦投顧，2026-07-28；CoWoS／FoCoS 產能、客戶配置、Rubin／Rubin Ultra 晶片產出、HBM4 成本、替代機架與 Intel EMIB）
- [[研究導引_AI硬體架構資源總覽_202607]]（自研讀書導引，2025-07 至 2026-07 文獻彙整，2026-07）
- TSMC ECTC 2025 論文：Direct-to-Silicon Liquid Cooling Integrated on CoWoS Platform（量測 0.055°C/W，>2.6kW TDP）
- JEDEC JESD270-4（HBM4 規格）；SK Hynix、Samsung、Micron 2026-06 完成 Rubin 認證
- [[活動_達興材料法說_20260814]] — 統一投顧，2026-08-14（RL／TBM、CoWoS 材料驗證與量產進度）
- [[活動_頌勝科技法說_20260814]] — 頌勝科技法說 memo，2026-08-14（CMP Pad／Membrane 與 CoWoS／SoIC 應用）
