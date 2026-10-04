---
title: 技術_NAND快閃記憶體
tags:
  - 技術/NAND
  - 產業/記憶體
  - 產業/AI伺服器
maturity: mature
updated: 2026-10-04
aliases:
  - NAND
  - NAND Flash
  - 快閃記憶體
  - eSSD
  - QLC
  - TLC
  - SLC
  - Boot Drive
  - Super High IOPS
---

# 技術_NAND快閃記憶體

## 定義
NAND 快閃記憶體是非揮發性儲存的主流介質，以浮閘/電荷儲存 bit，依每 cell 存放位元數分 SLC（1）、MLC（2）、TLC（3）、QLC（4）。與 DRAM 的差別在於非揮發、容量大、速度較慢、單位成本低。

為什麼現在重要：AI 推論（inference）帶動 NAND 需求結構轉變——**KV Cache** 把原本放在昂貴 DRAM 的推論快取，改放到速度較慢但大容量的高效 NAND SSD；伺服器 SSD 由 NVIDIA 帶動。大和與 MS 均指投資人看好 NAND 更勝 DRAM（inference + KV Cache + 供給相對受限）。AI 占 NAND 需求由 2025 的 18% 升至 2027 的 41%（見 [[分析_記憶體超級循環2026]]）。

相關主線：[[供應鏈_記憶體]]、[[技術_HBM高頻寬記憶體]]。

## 3D NAND 製程路線圖（2020–2029）

![[20260521_0807_統一證to群益投信_記憶體技術概論與大廠現況分析_260520_013.png]]
*圖（統一證，2026-05-20）：主要 NAND 廠商製程推進（Ver. MN-2509-01 Simplified）。Samsung V8 236L（2025 量產）→ V9 286L → V10 4xxL；SK Hynix V8 238L → V9 321L；Kioxia/SanDisk BiCS8 218L（2025 量產）→ BiCS9 1yyL → BiCS10 332L → BiCS11 4xxL；Micron G8 232L → G9 276L；YMTC G5 Xtacking4 160L/267L（2026 紅框，加速擴張）；MXIC G1 48L → G2 92L → G3 192L。*

## 圖解
```mermaid
flowchart LR
    NAND[NAND 晶粒 SLC/MLC/TLC/QLC] --> CTRL[SSD 控制器]
    CTRL --> ESSD[eSSD / KV SSD]
    CTRL --> BOOT[Boot Drive 模組]
    ESSD --> AISRV[AI 伺服器 / hyperscaler]
    BOOT --> AISRV
    BUF[Buffer DRAM] --> ESSD
    classDef mem fill:#c3fae8,stroke:#0ca678,color:#111;
    classDef ctrl fill:#ffd8a8,stroke:#e8590c,color:#111;
    classDef cust fill:#fff3bf,stroke:#f08c00,color:#111;
    class NAND,ESSD,BOOT,BUF mem;
    class CTRL ctrl;
    class AISRV cust;
```
圖說：NAND 晶粒需搭 SSD 控制器（+ buffer DRAM）組成 eSSD／KV SSD 與 boot drive，供 AI 伺服器；控制器是價值與門檻關鍵環節。

## 技術原理
| 模組 | 功能 | 觀察重點 |
|------|------|----------|
| NAND cell（SLC/TLC/QLC） | 儲存位元 | QLC 位元密度較 TLC 高約 33%，改用 QLC 省 wafer |
| SSD 控制器 | 讀寫管理、韌體 | KV Cache 需高效 TLC，controller 至關重要 |
| Buffer DRAM | SSD 快取 | 缺貨時依賴南亞科等供給 |
| Boot Drive 模組 | 系統初始化、OS、log/telemetry | NVIDIA BlueField-3/4 標準化，用量提升 |

與一般消費 SSD 的差異：資料中心 eSSD 需高 IOPS/耐久/一致性；「Super High IOPS」SSD 若量產，估耗用 3x 一般 SSD 產能，進一步收緊供給。

## 關鍵參數 / 判斷指標
| 指標 | 意義 | 投資觀察 |
|------|------|----------|
| TLC vs QLC | 效能 vs 密度 | KV Cache 要高效 TLC；大容量走 QLC eSSD |
| eSSD 每 tray 容量 | AI rack 儲存密度 | ASIC in-rack 8–16TB、外掛 16–64TB |
| 3Q26 eSSD 漲價 | 循環強度 | TLC eSSD +30% QoQ，消費級僅微升 |
| 控制器市占 | 價值卡位 | SIMO 佔 BlueField-3 boot drive 控制器 100% |

## 產業動能
- **KV Cache 帶動 eSSD**：[[大和 韓國記憶體產業電話會議摘要]]（2026-07-02）指 KV SSD 由三星、美光為主，TLC 為關鍵，大容量 QLC eSSD 快速增加。
- **容量補充 vs. 利用率提升**：[[memo_FMS2026_CXL記憶體池與光互連_日期不詳]]（日期不詳，FMS 2026 觀察）把 NAND KV Cache offload 定位為增加較低成本容量，並把 CXL memory pooling 定位為提高既有 HBM／DRAM 利用率。兩者較可能是分層互補而非互斥替代；實際配置取決於 KV Cache 熱度、延遲容忍度、IOPS、資料搬移與 TCO。此為使用者產業觀察，CXL 與系統產品細節尚待原始簡報驗證，詳見 [[分析_FMS2026_CXL記憶體池與光互連受惠邏輯]]。
- **Boot Drive 標準化**：[[260702_ms_nand-industry]]（2026-07-02）指 SIMO.US(silicon_motion) 佔 BlueField-3 boot drive 控制器 100%；Vera Rubin 標準化後 BlueField-4 加入 [[8299_群聯（櫃）]]、[[2379_瑞昱（市）]]。
- **利基 SLC/MLC 緊俏**：MS 看好 [[2337_旺宏（市）]]（Top Pick，SLC/MLC）、[[2344_華邦電子（市）]]（SLC）；3Q 漲 50–60%，enterprise HDD 轉用高密度 SLC。
- **模組廠模式改變**：LTA 使記憶體高檔維持 3–5 年，低成本庫存耗盡後模組廠毛利趨穩（[[分析_記憶體超級循環2026]]）。
- **原廠產品組合遷移（渠道觀察）**：[[memo_AceCamp_NAND供需與eSSD轉型_20260820]]（2026-08-20）稱部分原廠把產能轉向 eSSD、退出小容量 SLC／eMMC；這是匿名產業訪談，不能視為任何單一公司的產品公告，須以原廠產品 EOL、LTA 與 bit shipment 交叉驗證。
- **KV Cache 分層與 PCIe 6（渠道觀察）**：[[memo_AceCamp_SiliconMotion_KVCache與PCIe6SSD_20260901]]（2026-09-01）將 SSD 定位為 warm／cold KV Cache 的溢出層；HBM 仍負責 hot cache，DRAM／CXL 可能負責中間層。其認為要降低尾延遲，需同時處理 GPU-direct I/O、分層調度、順序化寫入與 SSD 韌體的寫放大控制，不能只靠控制器規格升級。PCIe 6 控制器 2027 年下半年小量導入是匿名渠道時程，須以產品送樣、相容性認證和伺服器平台採用驗證。

## 概念股 / 族群
| 類型 | 廠商 | 角色 | 觀察點 |
|------|------|------|--------|
| NAND 原廠 | [[285A.JP(kioxia)]] | 純 NAND、hybrid bonding | MS 日本 Top Pick |
| NAND 原廠 | [[SNDK.US(sandisk)]] | QLC eSSD、DC 轉型 | datacenter 占比拉升 |
| NAND 原廠 | [[MU.US(micron)]]、[[005930.KR(samsung)]] | KV SSD 主供 | ASP、eSSD 產能 |
| SSD 控制器 | SIMO.US(silicon_motion) | boot drive/eSSD 控制器 | MonTitan eSSD、BlueField |
| SSD 控制器 | [[8299_群聯（櫃）]] | 模組 + 控制器 | Kioxia dummy die 支援、3Q26 高峰 |
| 利基 NAND | [[2337_旺宏（市）]]、[[2344_華邦電子（市）]] | SLC/MLC | 資料中心/HDD 拉貨 |

> [!note] 信心水準
> Boot drive 控制器市占、SLC/MLC 緊俏、eSSD 漲價來自 MS 2026-07-02 產業報告與大和賣方會議，屬賣方研判與 channel check；個別台廠進入特定 NVIDIA 平台、MonTitan 客戶數仍待公司公告確認。台廠控制/利基股（慧榮 SIMO、群聯 8299、旺宏 2337、華邦 2344、瑞昱）本批尚未建個股頁，先整理於 [[供應鏈_記憶體]]。

## 技術瓶頸 / 風險
- **消費級觸頂**：2Q26 漲價後已見實際砍單，消費（手機/PC）pricing 恐近天花板、量能疲弱。
- **供給紀律 / YMTC**：2028 最大變數為長江存儲（YMTC）Fab4/5 擴產；若加速 greenfield，恐轉為過剩。
- **控制器/buffer DRAM 瓶頸**：SSD 需 buffer DRAM，DRAM 缺貨時 SSD 供給受限；controller 為門檻環節。
- **模組廠量能受限**：原廠產能移向 CSP，模組廠 2026–27 量增受抑，須靠組合升級。

## 相關技術
- [[技術_HBM高頻寬記憶體]]
- [[技術_CoWoS與先進封裝]]

## 來源
- [[260702_ms_nand-industry]] — 摩根士丹利，2026-07-02
- [[大和 韓國記憶體產業電話會議摘要]] — 大和，2026-07-02
- [[20260521_0807_統一證to群益投信_記憶體技術概論與大廠現況分析_260520]] — 統一證券，2026-05-20（3D NAND Roadmap Ver.MN-2509-01；廠商製程節點路線圖）
- [[memo_FMS2026_CXL記憶體池與光互連_日期不詳]] — 使用者 FMS 2026 產業觀察，日期不詳（NAND KV Cache 容量層與 CXL pooling 比較；未查證）
- [[memo_AceCamp_NAND供需與eSSD轉型_20260820]] — AceCamp Tech 匿名產業渠道訪談，2026-08-20（eSSD／消費級配貨與價格觀察；低信心）。
- [[memo_AceCamp_SiliconMotion_KVCache與PCIe6SSD_20260901]] — AceCamp Tech 匿名專家訪談，2026-09-01（KV Cache 分層、PCIe 6 與 boot-drive 合作模式；低至中信心）。
- [[活動_Kioxia_FMS2026媒體說明會_20260903]] — Kioxia FMS 2026 媒體說明會，2026-09-03
- [[活動_Micron_FY4Q26法說_20261001]] — Micron FY4Q26 法說，2026-10-01
- [[活動_群聯8299_國泰論壇_20260825]] — 群聯國泰論壇，2026-08-25
- [[memo_LINE投資人超商_產業消息與群友討論彙整_20260725-20261004]] — LINE 群組轉傳（I023 HBF、I024 三星 FMS）

## 2026Q3 法說季：AI token 推動 NAND 供需（LINE 群組 Memo）

- **Kioxia（FMS 2026）：** 估 2030 年 NAND 位元規模約 3,000 EB，DRAM 約 100 EB；CXL XL-FLASH 模組讀延遲 <5 μs，卸載 1/3 DRAM 時性能僅降約 5%；BiCS10 TLC 7 月送樣，位密度 +60%。詳見 [[285A.JP(kioxia)]]。
- **Micron FY4Q26：** NAND 營收 141 億美元，價格季增約 30%；資料中心 SSD 營收接近 100 億美元；預估 NAND 位元 2027 年成長約中 20%，仍供不應求。詳見 [[MU.US(micron)]]。
- **群聯：** AI token 帶動 NAND 需求，看不到供需平衡；與原廠長約只保量不保價，訂單滿足率約 30%；aiDAPTIV SSD 與 HBF 路線並行。詳見 [[8299_群聯（櫃）]]。
- **三星 FMS（群組轉傳）：** V10 BV-NAND 400 層，位元密度 +58%；zNAND-O 以 TSV 堆疊、延遲 <3 μs。HBF 路線見 [[技術_HBM高頻寬記憶體]]。

> [!note] 信心
> Kioxia 與 Micron 為公司公開說明，信心中高；群聯滿足率為論壇口頭說法，信心中；三星新品規格為群組轉傳媒體報導，信心中低。

## 相關頁面

- [[分析_20260820專家會議受訪公司辨識]]
- [[分析_20260901專家紀要受訪公司辨識與驗證框架]]
- [[分析_2026Q3_NAND與高階PCB供需_20260828]]
- [[技術_大模型推理經濟學]]
- [[技術_邊緣AI]]
- [[分析_CXMT_DRAM_IPO分析]]
- [[供應鏈_記憶體]]
- [[分析_記憶體超級循環2026]]
