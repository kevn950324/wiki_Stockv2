---
title: "供應鏈_AI伺服器PCB"
anchor: 三井金屬
tags:
  - 供應鏈/AI伺服器PCB
  - 技術/銅箔
  - 產業/AI伺服器
  - 環節/PCB材料
updated: 2026-06-26
---

# 供應鏈_AI伺服器PCB

## 供應鏈主軸

> AI 伺服器 PCB「超級循環」供應鏈——由量（層數、板數）與質（材料升級）雙驅動。本輪材料升級焦點從玻纖布轉向**銅箔（HVLP4）**。受惠順序（SemiAnalysis）：銅箔 > 玻纖布 > CCL > PCB > 鑽針。

## 供應鏈結構圖

```mermaid
flowchart TD
    DRV["需求驅動：cableless AI 伺服器<br/>Trainium / VR NVL144 / Kyber"]
    CU["銅箔 HVLP4（首選受惠）<br/>三井金屬 / Co-Tech / Furukawa"]
    GF["玻纖布<br/>Nittobo / 福懋"]
    RS["樹脂系統"]
    CCL["CCL 覆銅板 (M8→M9)<br/>EMC / TUC / Doosan"]
    PCB["高層數 / HDI PCB<br/>金像電 / Victory Giants / 滬電 / TTM / ISU"]
    DRILL["PCB 鑽針<br/>Union Tool / Topoint"]
    SRV["AI 伺服器主板 / scale-up switch board / midplane"]

    CU --> CCL
    GF --> CCL
    RS --> CCL
    CCL --> PCB
    DRILL -. 設備耗材 .-> PCB
    PCB --> SRV
    DRV --> SRV

    classDef mat fill:#b2f2bb,stroke:#333
    classDef proc fill:#d0bfff,stroke:#333
    classDef equip fill:#ffc9c9,stroke:#333
    classDef cust fill:#fff3bf,stroke:#333
    class CU,GF,RS mat
    class CCL,PCB proc
    class DRILL equip
    class DRV,SRV cust
```

## 各環節廠商

### 銅箔 Copper Foil（首選受惠）
| 廠商 | 地位 | 備註 |
|------|------|------|
| [[5706.JP(mitsui_kinzoku)]] | 主導 | HVLP（VSP）份額第一；FY25 上修銷量、產能 580→850 噸/月 |

銅箔（未建頁）：Co-Tech 銅箔（8358.TW，第二大、最積極退出低階轉 HVLP4）、Furukawa（古河）。

### 玻纖布 Glass Fiber Cloth
未建頁：Nittobo（3110.JP，首選）、福懋 Fulltech（1815.TW）。下一代 Q-glass（石英玻璃）供應鏈尚未商業化，是本輪改由銅箔升級的主因。

### CCL 覆銅板
未建頁：EMC（2383.TW，Trainium 2 用最高階 M8）、TUC（6274.TW）、Doosan（000150.KR）。CCL = 玻纖布＋銅箔＋樹脂，訊號性能分級 M7/M8/M9。

### 高層數 / HDI PCB
未建頁：Victory Giants（300476.CH）、金像電 GCE（2368.TW）、滬電 WUS（002463.CH）、ISU（007660.KR）、TTM、FHT、Lincstech（GBM）、Dynamic。AI 伺服器主運算板層數由約 20 層升向 30+ 層。

### PCB 鑽針 Drill
未建頁：Union Tool（6278.JP）、Topoint（8021.TW）。

## 競爭格局

- **銅箔是本輪最強受惠環節**：過去靠玻纖布推動 M7→M8，玻纖布暫遇瓶頸（Q-glass 未成熟），下一棒由銅箔 HVLP4 接手。
- **HVLP4 供需吃緊**：產能轉換非 1:1（HVLP2→HVLP4 約少 40% 產能），銅箔氧化保存限制（約 2 週）使長期囤貨不可行，供需失衡易反映在價格（詳見 [[技術_HVLP銅箔]] 供需表）。
- **整條 PCB stack 受惠**：cableless 化使板內容（層數、scale-up switch board、PCB midplane）全面增加。

## 觀察重點（投資視角）

1. **HVLP4 供需缺口**：2Q26 起明顯短缺，三井金屬、Co-Tech 為主要受惠者。
2. **前提依賴**：短缺論點部分建立在「Nvidia VR NVL144 採 cableless」——該設計尚未定案（[[技術_HVLP銅箔]] 已標註）。
3. 高階銅箔毛利高（HVLP4 估 ~60%），漲價週期下彈性大。
4. 與 CPO/光互連節奏互相牽動：cableless 推進帶動 PCB 材料，光互連替代部分銅互連則牽動需求結構。

## 相關頁面

- [[1303_南亞（市）]]
- [[1802_台玻（市）]]
- [[1815_富喬（市）]]
- [[2327_國巨（市）]]
- [[2368_金像電（市）]]
- [[2383_台光電（市）]]
- [[3044_健鼎（市）]]
- [[4760_勤凱（市）]]
- [[4958_臻鼎（市）]]
- [[5475_德宏（市）]]
- [[6213_聯茂（市）]]
- [[6274_台燿（市）]]
- [[8021_尖點（市）]]
- [[8358_金居（市）]]
- [[AVGO.US(broadcom)]]
- [[技術_CCL]]
- [[技術_MLCC]]
- [[技術_PCB]]
- [[技術_PCB鑽孔設備]]
- 技術：[[技術_HVLP銅箔]]、[[技術_ABF載板]]、[[技術_玻璃基板]]
- 對照供應鏈：[[供應鏈_先進封裝載板]]、[[供應鏈_CPO]]

## 來源

- [[報告_Semianalysis_PCB_20250826]]（AI Server PCB Super Cycle; Copper Foil Content Upgrade，2025-08-26）

---

## CCL 漲價週期更新（2026）

### 漲價確認（跨券商一致）

| 時段 | CCL 等級 | 漲幅 | 來源 |
|------|---------|------|------|
| 2026 Q1 | M6 以下（低階） | +10-15% | HSBC 4/13、GS 3/20 |
| 2026 Q2 | M6 以下（低階） | +15-20% | HSBC 4/13 |
| 2026 Q2 起 | M7 以上（高階） | +10-15% | HSBC 4/13 |
| 2026 H2 | 全面 | 再次漲價（magnitude comparable） | GS 4/18 |
| 2026 H2-2027 | ABF 載板 | 季度性漲價 | Citi 4/22（投資人預期） |

### 漲價傳導順序

T-glass 缺料 → Low Dk 玻布缺料 → 石英布（Q-glass）缺料
↓
CCL 漲價（M7+ 漲幅向下擠壓 M6 以下資源，帶動全線漲）
↓
PCB 漲價（2026 H1 全面約 +10%，H2 繼續）
↓
ABF 載板漲價（2026 Q2 起季度性漲價週期）

### 玻纖布漲價（福邦預估）

| 布種 | 2025 | 2026F |
|------|------|-------|
| E-glass 厚（7628系列） | +15% | 累計至2月+15%，距歷史高價尚有50% |
| E-glass 薄（10系列） | +30% | 累計至2月+20%；預估全年+100-120% |
| Low DK | +20-30% | 預估全年至少+20-30% |
| Low DK2 | +20-30% | 預估全年至少+20-30% |
| T-glass | +20-30% | 累計至2月+20%；預估全年+30-40% |

## 各環節廠商更新

### CCL 覆銅板（新增外資詳細評等）

| 廠商 | 代號 | 主力等級 | 2026E EPS | 2027E EPS | TP | 評等 | 來源 |
|------|------|---------|-----------|-----------|-----|------|------|
| 台光電 EMC | 2383.TW | M8-M9 | NT\-90 | NT\-182 | NT\,020-4,470 | Buy | GS/HSBC |
| 台燿 TUC | 6274.TW | M7-M8 | NT\-31 | NT\-66 | NT\,020-1,165 | Buy | GS/HSBC |
| 聯茂 ITEQ | 6213.TW | M6-M7 | NT\.5-7.2 | NT\.6-11.8 | NT\-236 | Sell/Hold | GS/HSBC |
| Doosan | 000150.KR | M8 | — | — | — | — | 福邦 |
| 生益科技 | 600183.CH | M8-M9 | — | — | — | — | 福邦 |

> 台光電 1Q26 營收 NT\.7 億（YoY +52.5%），大幅超越 HSBC 預期 8%、consensus 4%。

### 高層數/HDI PCB（新增台廠詳細資料）

| 廠商 | 代號 | 主要產品 | 2026E EPS | 2027E EPS | TP | 評等 | 來源 |
|------|------|---------|-----------|-----------|-----|------|------|
| 金像電 GCE | 2368.TW | AI ASIC/Switch PCB | NT\-43 | NT\-78 | NT\,380-1,500 | Buy | Citi/GS |
| 健鼎 Tripod | 3044.TW | CPU/Memory PCB | NT\.4 | NT\.5 | NT\ | Buy | Citi |
| 臻鼎 ZDT | 4958.TW | FPCB+PCB+ABF基板 | NT\-14 | NT\-30 | NT\-338 | Sell/Buy | Citi/GS |
| 定穎 DY | 3715.TW | AI伺服器 HLC | — | — | — | — | 福邦 |
| 勝宏科技 | — | AI伺服器 HLC | — | — | — | — | 福邦 |
| WUS/滬電 | 002463.CH | AI伺服器 HLC | — | — | — | — | 福邦 |
| ISU Petasys | 007660.KR | AI伺服器 HLC | — | — | — | — | 福邦 |

> 金像電 1Q26 Citi 預估：營收 NT\.4 億（YoY +60%）、毛利率 35.1%，均超預期。

### PCB 鑽針（補充）

| 廠商 | 代號 | 產能（萬支/月） | 高階佔比 | 主要客戶 |
|------|------|-------------|---------|---------|
| 尖點（Topoint） | 8021.TW | 3,500（計畫擴至 4,500+） | >50% | 金像電、ISU、勝宏、TTM、滬電 |
| 鼎泰高科 | — | 1.2 億支 | >40% | 深南、景旺、勝宏、健鼎、生益、定穎 |
| 中鎢高新（金洲） | — | 8,000 | >50% | 勝宏、深南、高技、生益 |
| 佑能 | — | 3,500 | >60% | 日本、台灣市場、載板廠 |

> 關鍵：高階 PCB（M8-M9 材料）每換一個等級，鑽針壽命大幅縮短——M6-M7 材料下主針 600-800 次，M8 下降至 400-500 次，M9 僅剩 100-200 次。鑽針需求量是過往 6 倍以上。

### 東南亞產能建置

| 廠商 | 地點 | 主要客戶 | 規格 | 量產時程 |
|------|------|---------|------|---------|
| 金像電 | 泰國 | Amazon/Meta | HLC | A區 2026H2 |
| 定穎 | 泰國 | Nvidia/Google/AMD/Tesla | HLC+HDI | 2025-2026 |
| 勝宏 | 泰國+越南 | Nvidia | HLC+HDI | 2025-2026 |
| 健鼎 | 越南 | Tesla、Dell | HLC | 26H1+ |
| TTM | 馬來西亞 | Nvidia | HLC | 一期 2B USD/年 |
| ISU | 馬來西亞+新加坡 | Google | HLC | 2025-2026 |
| 華通 | 泰國 | ORCL/交換機 | HLC+HDI | 2025-2026 |

## 競爭格局更新

### 投資人偏好排序（Citi 4/22 香港路演回饋）

ABF載板 = CCL > PCB

投資人對 ABF 載板和 CCL 信心最高（季度性漲價週期預期 2Q26-4Q27），PCB 則有供過於求疑慮（Tier 2/3 廠商宣稱從 2H26 進入 AI 供應鏈）。

### PCB 供過於求風險觀察

Citi 觀點：2027 年 PCB 產業可能面臨生產中斷風險（CCL 缺料 → PCB 暫時產能過剩），優先選高階 Tier 1 廠（金像電、健鼎），避開低階擴產東南亞的 Tier 2/3 廠。

GS 觀點：看好 HDI 升級趨勢——AI PCB 規格從 3+N+3 HDI（26L MLB 混合）升級至 2H27-2028 的 6+N+6/9+N+9 HDI（30L+ MLB 混合），帶動高端 HDI 設備需求，Tier 2 MLB 廠中有 HDI 能力者受益。

## 觀察重點更新

1. CCL 漲價節奏：2026 H2 是否如 GS/HSBC 預期再次漲價，台光電/台燿毛利率是否持續擴張
2. HVLP4 缺口：2Q26 起明顯短缺（福邦 48% 缺口預估），金居/台銅/古河受惠
3. PCB 東南亞產能爬坡：良率是否如預期，影響 Tier 1 廠客戶維繫
4. Rubin/TPU v8 時程：福邦預估 26H2 樣機、2027 放量，是 ABF 載板/CCL M9 的關鍵催化劑
5. 鑽針供需：主要板廠擴產速度高於鑽針廠擴產，尖點等高階鑽針廠供不應求至 2027

## 來源（補充）

- [[報告_HSBC_CCL展望2026_27_20260413]]（HSBC，2026-04-13；EMC/TUC/ITEQ 漲價分析）
- [[報告_Citi_PCB_CCL_20260422]]（Citi，2026-04-22；GCE/Tripod/ZDT 評等、香港路演回饋）
- [[報告_GS_CCL_PCB_20260320]]（Goldman Sachs，2026-03-20；CCL/PCB 漲價確認）
- [[報告_GS_台灣CCL_PCB_20260418]]（Goldman Sachs，2026-04-18；全面上調 TP、HDI 升級趨勢）
- [[報告_福邦_PCB載板產業展望_20260401]]（福邦投顧，2026-03-19；鑽針/銅箔/玻布完整供需）
