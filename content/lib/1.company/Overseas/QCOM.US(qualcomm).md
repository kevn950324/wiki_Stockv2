---
title: "QCOM.US(qualcomm)"
ticker: "QCOM"
market: US
exchange: NASDAQ
sector: 無線通訊晶片 / AI 資料中心
tags:
  - 公司/Qualcomm
  - 環節/IC設計
  - 產業/AI伺服器
updated: 2026-08-19
aliases:
  - Qualcomm
  - 高通
  - QCOM
  - Snapdragon
related_companies:
  - "[[2454_聯發科（市）]]"
  - "[[AVGO.US(broadcom)]]"
---

# QCOM.US(qualcomm)

## 基本資料

Qualcomm 以 Snapdragon 行動 SoC 與通訊晶片為核心，正把 AI 資料中心擴展為非手機成長引擎。廣發香港 2026-07-17 首評將其資料中心策略拆為 AI250 加速器、CPU、Alphawave SerDes、客製化晶片與 Modular 軟體堆疊；AI／資料中心收入能否從目標轉為可驗證出貨，是估值關鍵。

## 核心技術／競爭優勢

- Dragonfly 平台整合加速器、CPU、connectivity 與客製化晶片。
- Alphawave 帶來 224G SerDes（目標 2026 年底量產）、PCIe Gen 6、CXL 與 UCIe 能力；448G 路線目標 2028 年。
- 既有行動晶片規模與晶圓配置，可支援客製化晶片與 wafer-selling 模式。

## 產品與應用

| 產品 / 服務 | 應用 | 觀察客戶 / 競爭 |
|---|---|---|
| AI250 / HBC 加速器 | 資料中心 AI 推論／訓練 | CSP；與 GPU 平台競爭 |
| 客製化晶片 | Hyperscaler 資料中心 | MSFT、Meta、AWS 為券商推估 |
| SerDes / Connectivity | 資料中心互連 | 高速 I/O 與 UCIe |
| Snapdragon SoC | Android 手機 | 與 [[2454_聯發科（市）]] 競爭 |

## 圖片 / 架構圖

```mermaid
flowchart LR
    S[Snapdragon／既有IC] --> D[Dragonfly資料中心平台]
    A[AI250加速器] --> D
    C[客製化晶片] --> D
    I[Alphawave SerDes] --> D
    D --> CSP[CSP資料中心]
    classDef core fill:#a5d8ff,stroke:#1c7ed6,color:#111;
    classDef end fill:#fff3bf,stroke:#f08c00,color:#111;
    class S,A,C,I,D core;
    class CSP end;
```

圖說：Qualcomm 以 AI250、客製化晶片與高速互連組成 Dragonfly 平台，試圖降低對手機營收的依賴。

## EPS 預估

| 年度 | 廣發香港 EPS（報告日：2026-07-17） |
|---|---:|
| FY2026E | US$10.7 |
| FY2027E | US$11.3 |
| FY2028E | US$14.6 |

## 目標價與評等

| 券商 | 報告發布日 | 評等 | 目標價 | 評價基礎 | 來源 |
|---|---|---|---:|---|---|
| 廣發香港 | 2026-07-17 | Hold | US$203 | 18x FY2027E EPS | [[報告_廣發香港_高通QCOM_20260717]] |

## 時間軸

| 時間 | 事件 | 類型 | 重要性 | 備註 |
|---|---|---|---|---|
| 2026 年底 | 224G SerDes 目標量產 | 技術下線 | ⭐⭐ | 公司路線圖 |
| FY2027 | 資料中心收入目標 US$5bn | 放量 | ⭐⭐⭐ | 公司目標；券商估 US$4.7bn |
| 2H FY2027 | AI250 加速器收入預計啟動 | 放量 | ⭐⭐ | 路線圖，待客戶驗證 |
| FY2029 | 資料中心收入目標 US$15bn | 放量 | ⭐⭐ | 公司目標，非券商基準預測 |

## 供應鏈位置

- 設計／互連：AI250、客製化晶片與 SerDes 共同服務 CSP 資料中心。
- 手機端與 [[2454_聯發科（市）]] 競爭；資料中心 ASIC／connectivity 面對 [[AVGO.US(broadcom)]] 等同業。

## 相關公司

| 公司 | 關係 | 說明 |
|---|---|---|
| [[2454_聯發科（市）]] | 競爭 | Android 手機 SoC 與 AI ASIC 設計服務競爭 |
| [[AVGO.US(broadcom)]] | 競爭 | CSP ASIC 與高速互連的主要同業 |

> [!warning] 風險與注意事項
> - AI250 的 LPDDR5 成本與 scale-up 能力可能不及 HBM GPU 路線。
> - 資料中心客戶、ASP 與客製化晶片進度尚缺可驗證細節。
> - Android 需求與手機市占面臨競爭／庫存壓力。

## 來源

- [[報告_廣發香港_高通QCOM_20260717]] — 廣發香港，2026-07-17。

### 2026-07-30 財報更新

- FY3Q26 營收 US$9.9bn、Non-GAAP EPS US$2.21；QCT US$8.5bn、QTL US$1.3bn，手機業務仍衰退，汽車與 IoT 持續成長。
- 資料中心兩個 ASIC 專案已進入量產，預期 2026 年底開始貢獻營收；HBC 預計 2027 年貢獻。非手機業務長期目標與客戶進度仍屬公司展望。
- CTBC 維持 Neutral，認為資料中心正面進展尚不足抵銷手機逆風；富邦與 CTBC 來源對財測、評等與目標價分別保留。

來源：[[QCOM Q3 Earnings Call memo_Fubon 20260730]]（富邦證券，2026-07-30）；[[Qualcomm(QCOM,N_中立)-CTBC260730]]（中國信託，2026-07-30）。

## 相關頁面

- [[時程_2026記憶體與AI催化劑]]
