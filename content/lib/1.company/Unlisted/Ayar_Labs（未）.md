---
title: "Ayar_Labs（未）"
ticker: ""
market: Unlisted
exchange: 未上市
sector: 矽光子 / 光 I/O chiplet
tags:
  - 公司/Ayar_Labs
  - 技術/CPO
  - 技術/矽光子（SiPh）
  - 供應鏈/CPO
  - 環節/光通訊
  - 產業/AI伺服器
updated: 2026-10-22
aliases:
  - Ayar Labs
  - SuperNova
related_companies:
  - "[[6669_緯穎（市）]]"
  - "[[3443_創意電子（市）]]"
  - "[[2330_台積電（市）]]"
---

# Ayar_Labs（未）

## 基本資料

Ayar Labs 是美國未上市矽光子公司，主力產品為 TeraPHY 光 I/O chiplet（可透過 UCIe 與運算晶片整合的光學 retimer／光引擎），搭配外部多波長雷射光源（SuperNova），目標是把晶片間、機櫃內的電訊號改成光傳輸，屬 CPO 純玩家之一。既有 wiki 資料記錄其光引擎可放在板上、封裝上或 interposer 上，並列為 TSMC COUPE 的客戶之一。

台灣供應鏈關係：與 [[6669_緯穎（市）]]、[[3443_創意電子（市）]] 合作，2026-06 Computex 展示 Spectrum-X 光互連架構，2026-10 OCP Global Summit 再展示機櫃級 CPO 實機鏈路——創意多晶片封裝整合 Ayar TeraPHY 光引擎，即時遙測確認光鏈路運作，熱與波長漂移下訊號穩定（緯穎新聞稿 2026-10-20，fact／高）。

主要資料來源：[[research_產業合作技術發表_2026-10-22]]（緯穎新聞稿，2026-10-20）；技術定位見 [[技術_CPO]]、[[技術_矽光子（SiPh）]]。

## 核心技術／競爭優勢

- **UCIe 光 I/O chiplet**：TeraPHY 以 chiplet 形式與 ASIC／GPU 同封裝，讓運算晶片廠不必自建光學設計能力。
- **外部雷射架構**：光源與光引擎分離，熱與可維修性較佳，符合 ELS（外部雷射光源）路線。
- **台灣系統與封裝夥伴**：與緯穎（系統）、創意（多晶片封裝）形成從封裝到機櫃的展示鏈；製造端列為 TSMC COUPE 客戶（既有資料口徑）。

## 產品與應用

| 產品 / 服務 | 應用 | 相關客戶 / 下游 |
|-------------|------|-----------------|
| TeraPHY 光 I/O chiplet | ASIC／GPU 光互連、機櫃級 scale-up | [[3443_創意電子（市）]] 封裝整合、[[6669_緯穎（市）]] 系統 |
| SuperNova 多波長雷射光源 | 外部光源 | CPO 系統 |

## 圖片 / 架構圖

```mermaid
flowchart LR
    AY[Ayar Labs<br/>TeraPHY 光引擎] --> GUC[創意<br/>多晶片封裝]
    TS[台積電 COUPE] -.製造.-> AY
    GUC --> WW[緯穎<br/>機櫃級 CPO 系統]
    WW --> DEMO[OCP 2026<br/>實機光鏈路展示]
    classDef ay fill:#a5d8ff,stroke:#1971c2,color:#111;
    classDef tw fill:#fff3bf,stroke:#f08c00,color:#111;
    class AY ay;
    class GUC,WW,TS tw;
```
圖說：Ayar Labs 與台灣夥伴的機櫃級 CPO 展示鏈；COUPE 製造關係為既有資料口徑。

## 時間軸

| 時間 | 事件 | 類型 | 重要性 | 備註 |
|------|------|------|--------|------|
| 2026-06（Computex） | 與緯穎、創意展示 Spectrum-X 光互連架構 | 技術展示 | ⭐⭐ | 見 [[6669_緯穎（市）]] |
| 2026-10（OCP，10-20 回顧） | 機櫃級 CPO 實機光鏈路展示，熱與波長漂移下訊號穩定 | 技術展示 | ⭐⭐ | [[research_產業合作技術發表_2026-10-22]] |

→ 跨公司時程見 [[時程_2026-2027高速互連與分散式算力]]

## 供應鏈位置

- **上游**：晶圓代工（[[2330_台積電（市）]] COUPE，既有資料口徑）、雷射與光學元件。
- **下游**：ASIC 設計服務（[[3443_創意電子（市）]]）、伺服器 ODM（[[6669_緯穎（市）]]）、CSP 與 AI 晶片公司。
- **所屬供應鏈**：[[供應鏈_CPO]]。

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[6669_緯穎（市）]] | 系統合作夥伴 | Computex 與 OCP 2026 共同展示機櫃級 CPO |
| [[3443_創意電子（市）]] | 封裝整合夥伴 | 多晶片封裝整合 TeraPHY |
| [[2330_台積電（市）]] | 製造（既有資料口徑） | COUPE 客戶之一 |

> [!warning] 風險與注意事項
> - **仍在展示階段**：與台廠的合作尚未揭露客戶、量產時程或營收，不能推定已有量產訂單。
> - **競爭**：CPO 光引擎有 NVIDIA／Broadcom 自有方案及 Lightmatter、Celestial AI（Marvell）、Nubis（Ciena）等，標準與客戶選擇仍在變動。
> - **未上市資訊有限**：財務與產能資料不公開。

## 來源

- [[research_產業合作技術發表_2026-10-22]] — 緯穎 OCP 2026 回顧新聞稿，2026-10-20；機櫃級 CPO 實機展示。
- 技術定位與 COUPE 客戶口徑：見 [[技術_CPO]]、[[技術_矽光子（SiPh）]] 各自來源。

## 相關頁面

- [[技術_CPO]]
- [[供應鏈_CPO]]
