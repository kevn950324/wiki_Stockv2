---
title: "KYOCERA（未）"
ticker: ""
market: Unlisted
exchange: 未上市頁（JP 上市：6971.JP）
sector: 電子零組件 / 陶瓷 / CPO 封裝
tags:
  - 公司/KYOCERA
  - 技術/CPO
  - 技術/聚合物波導
  - 產業/光通訊
updated: 2026-06-29
aliases:
  - KYOCERA
  - 京瓷
  - Kyocera
  - 6971
related_companies:
  - "[[Sumitomo Electric（未）]]"
image_status: "待補來源圖"
---

# KYOCERA（未）

## 基本資料

京瓷（KYOCERA，TSE: 6971）是日本電子零組件大廠，主力業務涵蓋陶瓷零件、半導體封裝基板、通訊設備。在 CPO 光封裝領域，KYOCERA 在 ECTC 2026 發表**矽光子 CPO 模組寬溫光耦合**研究（與 AIST 另有 AOP 基板合作），重點在「面朝下散熱 + 曲面鏡 + 寬容差核心」三合一設計。

資料來源：[[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（2026-06-29）

## 核心技術

### CPO 模組寬溫光耦合結構（ECTC 2026）

| 指標 | 值 |
|------|----|
| 曲面鏡耦合損耗 | **1.22 dB**（vs 平面鏡 2.80 dB）|
| 面朝下 EIC 降溫 | 5.5°C |
| 面朝下雷射降溫 | **15.3°C** |
| 面朝下 SNR 改善 | 90% |
| 面朝下 jitter 降低 | 20% |
| 寬溫容差（0–105°C）| ±5 µm（< 1 dB excess loss）|
| 測試速率 | 32 Gb/s/lane，0–70°C 全域無錯誤 |

三個關鍵設計：
1. **面朝下（face-down）**：SiPh 晶片面向基板，熱直接往下散，大幅降低雷射溫度
2. **曲面鏡（R=0.8 mm, 41°）**：補償雷射發散角，耦合損耗從 2.80→1.22 dB（砍一半）
3. **Wrap-around 核心**：放大有效入光孔徑，把容差撐到 ±5 µm 並抗溫漂

### AOP 主動光學封裝基板（與 AIST 合作，ECTC 2026）

與 AIST 合作把矽光子收發器埋進有機基板（AOP 架構）：
- 聚合物 ORDL + 3D 微反射鏡（2PP 列印模具 + UV 壓印量產）
- 實測：**112 Gbps PAM4、TDECQ 3.35 dB**（過 IEEE 400G/400G-FR4 ≤3.4 dB）
- 詳見 [[技術_聚合物波導]]

## 圖片/架構圖

`[待補來源圖]` 需官方 IR 或型錄陶瓷基板或封裝產品圖佐證，現有研究筆記不足以支撐產品示意圖。

## 相關技術

- [[技術_CPO]]（KYOCERA 是 CPO 模組封裝供應商）
- [[技術_聚合物波導]]（AOP 基板 ORDL 整合）
- [[技術_矽光子（SiPh）]]（SiPh 裝置耦合模組）

## 來源

- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（KYOCERA ECTC 2026 兩篇研究，2026-06-29）
