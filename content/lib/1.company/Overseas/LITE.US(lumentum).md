---
title: "LITE.US(lumentum)"
ticker: "LITE"
market: US
exchange: NASDAQ
sector: 光通訊 / 雷射
tags:
  - 公司/Lumentum
  - 產業/AI伺服器
  - 技術/CPO
  - 環節/光通訊
updated: 2026-06-29
aliases:
  - Lumentum
  - LITE
  - 外部雷射源
  - ELS
  - CW DFB laser
related_companies:
  - "[[NVDA.US(nvidia)]]"
  - "[[AVGO.US(broadcom)]]"
image_status: "待補來源圖"
---

# LITE.US(lumentum)

## 基本資料

Lumentum 是光通訊與雷射元件大廠，在 CPO 浪潮中的關鍵角色是**外部雷射源（ELS）供應商**——CPO 系統需較高功率的 CW DFB 雷射（每顆約 350mW）。SemiAnalysis 預期 Lumentum 為 Nvidia 初期 CPO 交換器出貨的**首批主要（甚至唯一）ELS 供應商**。供應鏈位置：光元件/雷射上游，供 CPO 光引擎所需雷射光源。資料來源：SemiAnalysis CPO Book（2026-01-02）。

## 核心技術 / 競爭優勢

- **高功率 CW DFB 雷射**：CPO 用雷射雖被視為相對標準化，但高功率雷射仍有一定護城河；Nvidia CPO 交換器 ELS 首批主要供應商
- **OCS（Optical Coherent Solution）**：Lumentum 為 Google 最主要的 OCS 供應商，OCS 較傳統可插拔光模組**節省 65% 功耗**，是超大規模資料中心降耗關鍵
- **泰國廠高速產能**：泰國工廠已具備 800G 年產 300 萬支、1.6T 年產 200 萬支的製造能力
- **EML 定價話語權**：100G / 200G EML 雷射元件報價持續上揚，受益 AI DC 互連需求擴張
- 既有可插拔 transceiver / 雷射元件業務基礎，跨足 CPO ELS

## 產品與應用

| 產品 / 服務 | 應用 | 相關客戶 / 下游 |
|-------------|------|-----------------|
| CW DFB 雷射 / ELS 模組 | CPO 光引擎光源 | [[NVDA.US(nvidia)]]（Q3450 用 18 ELS 模組、每模組 8 CW DFB）；Nvidia CPO sole supplier 候選 |
| OCS（光相干連接方案）| 超大規模 DC 長距互連 | Google（主要供應商）；vs 傳統模組節省 65% 功耗 |
| EML（電致吸收調製雷射）| 800G / 1.6T 光模組雷射源 | Coherent、Broadcom 光模組廠；ASP 上行（100G/200G） |
| 可插拔光元件 / 雷射 | scale-out 光模組 | 模組廠 |

## 圖片/架構圖

`[待補來源圖]` 需官方 IR 泵浦雷射或光源產品圖佐證，現有研究筆記不足以支撐產品示意圖。

## 泰國廠產能（小作文 2026-01）

| 產品 | 年產能 | 備註 |
|------|--------|------|
| 800G 模組 | 300 萬支 / 年 | 已投產，爬坡中 |
| 1.6T 模組 | 200 萬支 / 年 | 高速產品線 |

## 目標價（小作文 2026-01）

| 來源 | TP | 備註 |
|------|----|------|
| 小作文研究（2026-01）| USD 472 | OCS + CPO ELS 雙引擎；EML ASP 上行 |

## 供應鏈位置

- 下游客戶：[[NVDA.US(nvidia)]]（CPO 交換器 ELS）、Google（OCS）
- 所屬供應鏈：[[供應鏈_CPO]]（外部雷射源環節）
- 同環節（未建頁）：Coherent（COHR，預期第二供應）、Furukawa、Broadcom 自供、源傑/仕佳（中）

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[NVDA.US(nvidia)]] | 下游客戶 | CPO 交換器 ELS 首批主供；sole supplier 候選 |
| [[AVGO.US(broadcom)]] | 同業 / 自供競爭 | Broadcom 亦具 CW laser 能力 |

## 券商觀點與催化劑

> [!warning] 資訊衝突：Lumentum 定位（半年內翻轉）
> - [[報告_Semianalysis_CPO_20260102]]（報告日：2026-01-02）：Nvidia 初期 CPO ELS **首批主要/唯一供應商**（正面定位）。
> - [[報告_Semianalysis_CPOand800VDC_20260609]]（報告日：2026-06-09）：對 Lumentum **轉趨負面**——CPO 量在其多頭論述占比高，而 CPO 時程下修使近期缺乏催化劑；同列入「CPO 量為多頭論述重要部分」而轉保守的名單（與 Coherent、Himax、Applied Optoelectronics 同組）。
> - 狀態：ELS 供應地位（結構正面）與 CPO 放量延後（近期偏空）的拉鋸，兩說並存、依時程演進判讀。

## FY26 Q3 實際結果（Jan–Mar 2026）

| 項目 | 說明 |
|------|------|
| 財報結果 | **beat 共識** |
| 股價反應 | **-8%**（beat & drop 模式，與 COHR -9%、AAOI -13% 同時）|

> **光通訊三雄 beat & drop（規則 #14）**：COHR / LITE / AAOI 同期財報均 beat，但股價全數下跌（-9% / -8% / -13%），顯示市場擔憂 AI 光互連溢價已過度計入，獲利了結壓力大於基本面催化。

## ECTC 2026 技術合作（NVIDIA × Lumentum × TSMC COUPE）

ECTC 2026 論文：Lumentum 與 NVIDIA、[[2330_台積電（市）]] COUPE 平台合作，共同發表 **DWDM CW-DFB 雷射陣列**論文——驗證 COUPE 架構下外部雷射多波長整合的可行性，是 Lumentum 進入 CPO ELS 生態的技術公信力確認。

- ELSFP（External Laser SFP）：OCI 200G MSA 定義的外部雷射規格，Lumentum 為主要供應候選
- 詳見 [[技術_OCI]]（OCI ELSFP 規格）

## 來源

- [[報告_Semianalysis_CPO_20260102]]（CPO Book，2026-01-02）
- [[報告_Semianalysis_CPOand800VDC_20260609]]（2026-06-09）
- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（FY26 Q3 beat -8%；ECTC 2026 COUPE 論文合作；OCI ELSFP，2026-06-29）

## 相關頁面

- [[技術_InP磷化銦]]
- [[3105_穩懋（市）]]
- [[3450_聯鈞（市）]]
- [[AAOI.US(applied optoelectronics)]]
- [[CIEN.US(ciena)]]
- [[COHR.US(coherent)]]
- [[CRDO.US(credo)]]
- [[META.US(meta)]]
- [[技術_CPO]]
- [[技術_光互連]]
- [[技術_光模塊]]
- [[技術_光電芯片]]
- [[技術_矽光子（SiPh）]]
