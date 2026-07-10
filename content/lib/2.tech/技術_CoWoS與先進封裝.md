---
title: "技術_CoWoS與先進封裝"
tags:
  - 技術/先進封裝
  - 技術/CoWoS
  - 技術/HBM
  - 產業/半導體
  - 環節/封測
maturity: developing
updated: 2026-07-09
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
---

# 技術_CoWoS與先進封裝

## 定義

CoWoS（Chip-on-Wafer-on-Substrate）是 TSMC 的旗艦 2.5D 先進封裝平台，透過矽中介層（Interposer）把 GPU/ASIC die 與 HBM 堆疊並排互連，繞過傳統有機基板的帶寬瓶頸。AI 晶片的 CoWoS 中介層已從早期 <1,000 mm² 擴大至 Rubin 世代的 **>3,300 mm²**（4× reticle 拼接），HBM 堆疊從 8-Hi 邁向 12-Hi → 16-Hi（HBM4）。

封裝已成為 AI 晶片的**實質供給瓶頸**與效能槓桿：CoWoS 產能分配、HBM 供給、OSAT 角色重組是三條可量化主線。

## 圖解

![[AI硬體架構研究資源總覽_2025-2026_006.png]]
*圖（研究導引，2026-07，自繪概念圖）：CoWoS-L＋SoIC 封裝剖面概念示意。中介層 >3,300 mm²（多光罩「Super Carrier」）；HBM4 堆疊數 8→12→16；SoIC/Hybrid Bonding 普及；趨勢向 CoPoS（面板級）與光引擎（COUPE/CPO）整合。*

## CoWoS 各變體

| 變體 | 中介層類型 | 特點 | 主要應用 |
|------|-----------|------|---------|
| CoWoS-S | 矽（Silicon Interposer） | 最成熟，高密度 TSV 互連 | A100、H100、H200 世代 |
| CoWoS-R | RDL（Redistribution Layer） | 扇出式，無矽通孔 | 中端封裝 |
| CoWoS-L | 局部矽橋（LSI/EMIB-like） | 可擴展大面積、降成本 | GB300、Rubin Ultra |

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
| **CoPoS（面板級封裝）** | 把 CoWoS 製程移植到大型面板（Glass Panel Processing），降低每顆成本 | 2027-2029 開始量產評估 |
| **玻璃基板** | 矽 → 玻璃中介層，降翹曲、提高密度（見 [[技術_玻璃基板]]）| 2027-2028 初期導入 |
| **Hybrid Bonding 普及** | SoIC 從 HBM→chiplet 全面擴展（見 [[技術_混合鍵合]]）| 已量產，滲透加速 |

## 2027 全球 CoWoS 需求分配（MS，2026-07-08）

> 來源：[[報告_MS_AI供應鏈_CoWoS2027分配_20260708]]（Morgan Stanley，Charlie Chan，2026-07-08）

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
- **Sunfish**（TPU v8i，Broadcom）：主要出貨集中 4Q26，全年量 960k
- **Zebrafish**（TPU v8t，MediaTek）：4Q26 爬產不變
- **Humufish**（TPU v9，MediaTek）：2027e 400k

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

![[GFHK - ASE update_002.png]]
> ASE/SPIL 與 Amkor CoWoS 容量預測（kwpm，季底）。2027 年合計接近 78kwpm，2028 年達 100kwpm（來源：廣發香港，2026-07-01）

### 各方 end-2027 ASE CoWoS 估值比較

| 機構          | ASE end-2027 CoWoS（kwpm） | 口徑說明       |
| ----------- | ------------------------ | ---------- |
| UBS         | **50**                   | 年底最大值      |
| 廣發香港        | **45**                   | 年底最大值（季底）  |
| 定錨（ASE 管理層） | **42** 年均                | 2027 年年均產能 |

> 三者口徑略有差異（年底最大值 vs 年均），實質接近 40-50kwpm。

## 供給瓶頸

CoWoS 是近年 NVIDIA 出貨最主要的產能限制：
- **4× reticle 拼接需求**：Rubin 世代 CoWoS 需求量相比 H100 大幅倍增，TSMC 須持續擴充中介層產線
- **HBM 供給**：HBM4 三廠齊認證後，供應鏈多元化，但初期 SK Hynix 領先
- **良率**：Hybrid Bonding 初期良率約 35%（見 [[技術_CPO]] 的良率分析）；大面積中介層翹曲控制是另一挑戰

## 相關頁面

- [[NVDA.US(nvidia)]]
- [[技術_HBM高頻寬記憶體]]
- [[技術_NAND快閃記憶體]]
- [[技術_混合鍵合]]（SoIC Hybrid Bonding 技術原理）
- [[技術_CPO]]（COUPE 光引擎封裝整合）
- [[技術_玻璃基板]]（Glass Substrate / CoPoS 下一步）
- [[技術_800VDC供電架構]]（Rubin Ultra/Kyber 供電需求）

## 來源

- [[報告_MS_AI供應鏈_CoWoS2027分配_20260708]]（Morgan Stanley，Charlie Chan，2026-07-08；2027 全球 CoWoS 分配 2,664k 片、Rubin 7mn 晶片/90k racks、AMD MI455/MI450、Google TPU 進度、Meta Apollo）
- [[報告_廣發香港_日月光3711_20260701]]（廣發香港，2026-07-01；ASE LEAP 容量 15/45/55kwpm（end-2026/27/28）；Amkor 10/33/45kwpm；CoWoS 外包漲價 10-20%）
- [[260702_gs_TSMC]]（高盛，2026-07-02；台積電 2027E CoWoS 含 WMCM 產能上修至 280kwpm／年 2,730k 片、2026-28 年 1,275k/2,730k/3,480k，2027E capex US$78bn；詳見 [[2330_台積電（市）]]）
- [[研究導引_AI硬體架構資源總覽_202607]]（自研讀書導引，2025-07 至 2026-07 文獻彙整，2026-07）
- TSMC ECTC 2025 論文：Direct-to-Silicon Liquid Cooling Integrated on CoWoS Platform（量測 0.055°C/W，>2.6kW TDP）
- JEDEC JESD270-4（HBM4 規格）；SK Hynix、Samsung、Micron 2026-06 完成 Rubin 認證
