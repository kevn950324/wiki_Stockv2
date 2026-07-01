---
title: "CRDO.US — Credo Technology Group"
aliases:
  - Credo
  - CRDO
tags:
  - 公司/Overseas
  - 產業/半導體
  - 環節/AEC銅纜
  - 環節/SerDes
updated: 2026-06-29
image_status: "待補來源圖"
---

# CRDO.US — Credo Technology Group

## 基本資料

| 項目 | 內容 |
|------|------|
| 全名 | Credo Technology Group Holding Ltd. |
| 代號 | CRDO（Nasdaq） |
| 成立 | 2008年；2022年1月Nasdaq IPO |
| 總部 | 美國加州聖荷西（矽谷）；員工600+人 |
| 財年 | 5月起、止於4月（FY26 = May25-Apr26） |

## 業務概況

- 專為AI資料中心、雲端、超大規模（Hyperscale）網路提供高效能、低功耗連接解決方案
- 核心技術：**專有PAM4 SerDes IP / DSP / Retimer**
- 主要產品：HiWire AEC（主動電纜）、光學DSP、PCIe Retimer、SerDes Chiplet、IP授權
- FY25產品組合：硬體94% / 硬體工程服務3% / IP授權3%

## 圖片/架構圖

`[待補來源圖]` 需官方 IR AEC 模塊或 SerDes 晶片架構圖佐證，現有研究筆記不足以支撐架構示意圖。

## 核心競爭力：AEC市場

### AEC（Active Electrical Cable）優勢
- 400G/800G AEC市場先行者；FY24-1HFY26市占率 **~70%+**
- 有效距離：≤7公尺（NIC-to-ToR scale-out）
- vs AOC 優勢：耗電少25-50%、成本低~50%、可靠性更高（無光纖易損問題）
- 主要客戶（FY3Q26占比）：Amazon ~39% / Microsoft ~32% / xAI ~17%；另有Meta、Oracle

### AEC定價
| 規格 | 單價 |
|------|------|
| 800G AEC | ~US$320 |
| 400G AEC | ~US$170 |
| 100G AEC | ~US$85 |

### xAI Colossus 2
- 支援11萬櫃GB200 NVL72；GPU數量~80萬顆
- AEC需求產值估~US$23億；Credo為唯一供應商
- 每GPU對應AEC：設計依存，實際2-12條（理論最高18-24條）

## 財務數據

| 項目 | FY24A | FY25A | FY26E（凱基） | FY27E（凱基） |
|------|-------|-------|------------|------------|
| 營業收入（US$M） | 193 | 437 | 1,349 | 2,120 |
| 毛利率（%） | 62.5 | 65.0 | 68.1 | 66.9 |
| 營業利益率（%） | 1.4 | 26.4 | 47.6 | 47.2 |
| EPS（US$） | 0.09 | 0.70 | 3.36 | 4.62 |
| EPS成長（%） | — | +721.7 | +378.0 | +37.5 |

### 季度數據（FY3Q26 = Nov25-Jan26）
- 營收 US$407M（+52% QoQ, +202% YoY）；非GAAP EPS US$1.07（+60% QoQ）
- GM 68.6%；FY4Q26指引：營收~US$430M，毛利率預期降至~65%（DSP 3nm測試費+競爭加劇）

## 競爭威脅

| 類型 | 競爭者 |
|------|--------|
| 半導體 | Marvell「Golden Cable」、Astera Labs |
| 電纜廠 | TE Connectivity、Molex、Amphenol |
| 中國廠 | 立訊精密、溫州依華等（預計控制50%+高速模組市場） |
| 技術替代 | LPO（Linear Drive Optics）、SiPh、CPO |

- Marvell DSP晶片定價高Credo 30-50%；預期初期搶~10%市占，但價格競爭空間有限
- 1.6T AEC：物理極限~5公尺；3.2T AEC無法實用 → 長期趨勢全光學化

## 下一代產品

| 產品 | 技術 | 量產時程 |
|------|------|---------|
| Zero Flap Optics | 客製DSP+交換器SDK整合，解決訊號抖動 | FY1Q27（2026年中） |
| Active LED Cables（ALC） | microLED雷射，可達30m；購自Hyperlume（US$92M，Sep 2025） | FY27送樣，FY28營收 |
| OmniConnect Weaver Gearbox | 112G VSR SerDes記憶體-運算連接；10x I/O密度；支援6.4TB記憶體 | FY28 |

## CPO風險

- Credo**無CPO佈局**；CPO為2027+大規模scale-up架構主流
- PCIe retimer進入CPO市場，但此市場競爭激烈（NVDA NVLink、Intel等大廠）
- Yole預測：CPO for scale-up 2030市值US$56億；scale-out US$26億

## 券商追蹤

| 券商 | 評等 | TP（US$） | 估值基礎 |
|------|------|---------|---------|
| Rosenblatt（RB） | Neutral | **170** | 40x FY27E EPS $4.25 |
| 凱基投顧 | 增加持股 | **184** | 40x FY27F EPS $4.62 |

## 主要財務結構

- 現金：FY2Q26末US$8.14億（含ATM增資）；净現金無負債
- 客戶集中度高：前4大貢獻93%營收（FY2Q26）；FY25單一客戶67%

## 關聯頁面

- [[COHR.US(coherent)]]（ZeroFlap Optics對比，Rosenblatt提及更有競爭優勢）
- [[LITE.US(lumentum)]]（光學競爭）
- [[技術_光互連]]
- [[AVGO.US(broadcom)]]（競爭者，CPO主要玩家）
