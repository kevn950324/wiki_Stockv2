---
title: 技術_HBM高頻寬記憶體
tags:
  - 技術/HBM
  - 技術/DRAM
  - 產業/記憶體
  - 產業/AI伺服器
maturity: developing
updated: 2026-07-07
aliases:
  - HBM
  - High Bandwidth Memory
  - 高頻寬記憶體
  - HBM3e
  - HBM4
  - HBM4E
---

# 技術_HBM高頻寬記憶體

## 定義
HBM（High Bandwidth Memory，高頻寬記憶體）是把多顆 DRAM die 垂直堆疊、透過 TSV（矽穿孔）與底部 logic die 連接的 3D 記憶體，提供 AI GPU/加速器所需的超高頻寬。與標準型 DRAM 的差別在於「以堆疊 + 先進封裝換頻寬」，單位 wafer 產出的 bit 少、消耗產能高。

為什麼現在重要：AI 訓練/推論對記憶體頻寬的需求，使 HBM 成為 DRAM 廠獲利與產能配置的核心。HBM 消耗 wafer 多，DRAM→HBM 的 trade ratio 約 3:1，等於排擠標準型 DRAM 供給、放大整體記憶體循環（見 [[分析_記憶體超級循環2026]]）。HBM 需與 [[技術_CoWoS與先進封裝]] 整合上 GPU 載板。

相關主線：[[供應鏈_記憶體]]、標準型 DRAM、[[技術_CoWoS與先進封裝]]。

## AI 晶片 HBM 採用路線圖（2025–2028）

![[20260521_0807_統一證to群益投信_記憶體技術概論與大廠現況分析_260520_019.png]]
*圖（統一證，2026-05-20）：主要 AI 晶片廠商 HBM 採用進程（品牌、代工夥伴、晶片名稱、製程、HBM 世代、HBM 容量、CoWoS 封裝、季度時間軸 2025-2028）。覆蓋 NVIDIA（H20/H200/GB200/GB300/VR200/VR300/Feynman）、AMD（MI300X～MI500X）、Intel（Gaudi3）、Google（TPU v6e～v8p，MTK/Broadcom）、Amazon（Trainium，Marvell）、Microsoft（Maia，Marvell）、Meta（Athena/Iris/Arke，Broadcom/MTK）、ByteDance（Gen1-3，Broadcom）、OpenAI（Titan1/2，Broadcom）、Apple（Balta）、SoftBank/ARM、Huawei（910B/C/920）。*

## DRAM 製程路線圖（2020–2029）

![[20260521_0807_統一證to群益投信_記憶體技術概論與大廠現況分析_260520_004.png]]
*圖（統一證，2026-05-20）：DRAM 廠商製程推進（Ver. MD-2509-01 Simplified）。Samsung 1a/1b/1c/1d；SK Hynix 1b（2026 量產）→ 1c（2027 EUV，紅框）；Micron 1β（2026）→ 1γ EUV（2027，紅框）；CXMT G3/G4/G5（追趕中）；Nanya 1B（2027，紅框）→ 1C；Winbond 20nm（2026-27）→ 16nm（2028）；JHIOC 25nm→20nm。*

## 圖解
```mermaid
flowchart TB
    subgraph HBM堆疊
      D1[DRAM die] --- D2[DRAM die]
      D2 --- D3[DRAM die]
      D3 --- LOG[Logic die N4/N12/N3]
    end
    LOG -->|TSV / hybrid bonding| INT[中介層 CoWoS]
    INT --> GPU[AI GPU]
    classDef mem fill:#c3fae8,stroke:#0ca678,color:#111;
    classDef pkg fill:#d0bfff,stroke:#7048e8,color:#111;
    classDef cust fill:#fff3bf,stroke:#f08c00,color:#111;
    class D1,D2,D3,LOG mem;
    class INT pkg;
    class GPU cust;
```
圖說：HBM 由多層 DRAM die 堆疊並接 logic die，經 TSV／hybrid bonding 與 CoWoS 中介層整合到 AI GPU；logic die 製程（N4/N12/N3）是各廠差異化關鍵。

## 技術原理
| 模組 | 功能 | 觀察重點 |
|------|------|----------|
| DRAM die 堆疊 | 提供容量與頻寬（8H/12H/16H） | 堆疊層數、die size；HBM4E 16H 客製化 |
| Logic die（base die） | I/O 與控制，可客製 | 製程世代：三星 N4、Hynix 可能 N12、美光 N3 |
| TSV / Hybrid bonding | die 間垂直連接 | 良率、精度；美光／三星導入 hybrid bonding（BESI） |
| 與 CoWoS 整合 | 上中介層與 GPU 共封裝 | 封裝產能連動 [[技術_CoWoS與先進封裝]] |

與一般 DRAM 的差異：HBM 技術難度高、GM 顯著高於標準型 DRAM；HBM4E 時 trade ratio 更高（24→32GB，content +30%，die size 與 lead time 增加）。

## 關鍵參數 / 判斷指標
| 指標 | 意義 | 投資觀察 |
|------|------|----------|
| DRAM→HBM trade ratio | 生產 HBM 排擠標準 DRAM 的倍率 | 約 3:1，HBM4E 更高 → 放大 DRAM 缺口 |
| Logic die 製程 | base die 效能／良率 | N3 難取得者（如 Hynix）競爭力受限 |
| HBM4E 定價 | 次世代 ASP | 大和估 2027 HBM 價格顯著上漲，HBM4 價約前代 2x |
| NVIDIA 供應占比 | 綁定最大買方 | 三星目標 HBM4 供應占比 > 50% |

## 產業動能
- **HBM 市占重排**：[[大和 韓國記憶體產業電話會議摘要]]（2026-07-02）估至 2027 [[005930.KR(samsung)]] 重返第一（~50%）、[[MU.US(micron)]] ~20%，[[000660.KR(sk_hynix)]] 市占由偏高回落。
- **2027 為 HBM 漲價年**：HBM 2025.9 一年一約、2026 價格偏弱，2027.9 改約後大和預期顯著上漲。
- **HBM4E 樣品競賽**：三星 HBM4E 用 1C DRAM + N4 logic die、效能 +20%；Hynix 樣品已出但 logic die 受限；美光可能用 N3（見各公司頁）。
- **Hybrid bonding 導入**：三星、美光已採 hybrid bonding，設備商 BESI 受惠（[[供應鏈_記憶體]]）。

## 概念股 / 族群
| 類型 | 廠商 | 角色 | 觀察點 |
|------|------|------|--------|
| HBM 供應 | [[005930.KR(samsung)]] | HBM4E 1C+N4，目標 NV >50% | 良率、NV 認證 |
| HBM 供應 | [[000660.KR(sk_hynix)]] | 現任龍頭，市占回落 | logic die 製程 N12→N3 |
| HBM 供應 | [[MU.US(micron)]] | HBM4 ~$1b 優預期 | 產能與 N3 base die |
| GPU 客戶 | [[NVDA.US(nvidia)]] | HBM 最大買方 | HBM4/HBM4E 拉貨 |

> [!note] 信心水準
> HBM 市占重排與 HBM4E 規格差異來自大和 2026-07-02 賣方會議與 MS 記憶體報告，屬賣方研判；各廠實際良率／NVIDIA 認證進度仍待公告確認。

## 技術瓶頸 / 風險
- **產能瓶頸**：HBM trade ratio 高，是 DRAM 產能主要瓶頸；擴 capex ≠ 大幅擴產（多用於新技術/製程升級）。
- **Logic die 製程門檻**：先進 base die（N3）取得難度高，落後者競爭力受壓。
- **定價循環**：HBM 一年一約，2026 價格偏弱，短期 rate of change 可能於 4Q26 觸頂。
- **封裝連動**：HBM 需 CoWoS 產能同步，任一環節卡關即限制出貨。

## 相關技術
- [[技術_CoWoS與先進封裝]]
- [[技術_NAND快閃記憶體]]
- [[技術_CCL]]

## 來源
- [[大和 韓國記憶體產業電話會議摘要]] — 大和，2026-07-02
- [[260702_ms_nand-industry]] — 摩根士丹利，2026-07-02
- [[報告_統一證_記憶體技術概論與大廠現況分析_20260520]] — 統一證券，2026-05-20（AI晶片HBM採用時間軸；DRAM廠商製程路線圖；HBM3→HBM4容量16→24→36GB；HBM $/Gb 2026-28F）

## 相關頁面

- [[技術_功率MOSFET]]
- [[供應鏈_記憶體]]
- [[分析_記憶體超級循環2026]]
