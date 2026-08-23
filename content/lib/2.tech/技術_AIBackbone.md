---
title: "技術_AIBackbone"
tags:
  - 技術/AI網路
  - 技術/scale-across
  - 環節/AI基礎建設
updated: 2026-08-12
aliases:
  - AIBackbone
  - AIBB
  - Meta AI Backbone
  - scale-across
  - Inter-datacenter AI networking
related_companies:
  - "[[META.US(meta)]]"
---

# 技術_AIBackbone

## 定義

**AIBackbone（AIBB）** 是 Meta 為超大規模 AI 訓練叢集設計的跨數據中心互連網路架構，是其 10X Backbone 的 AI 進化版。目的是在多個分散數據中心間提供高頻寬、低延遲的「scale-across」連接，突破單座數據中心的熱管理與電力上限，實現 GW 級別的訓練叢集。

## 圖解

![[meta-msl-1yr_original_011.png]]
*圖（SemiAnalysis AI Networking Model, 2026-07-09）：AIBackbone 三層架構——DSF/NSF scale-out 區域 → L3 Superspine（BAG）→ L4 InterBAG；圖示 Prometheus cluster 中 22 Petabits/s 雙向頻寬。*

![[meta-msl-1yr_original_012.png]]
*圖（SemiAnalysis AI Networking Model, 2026-07-09）：L3/L4 之間的 LR 光學與 DWDM ZR 光學跨園區互連示意圖。*

## 原理 / 架構

### 三層結構

| 層級 | 名稱 | 功能 | 部署位置 |
|------|------|------|---------|
| Scale-out 區域 | DSF（Disaggregated Scheduled Fabric）或 NSF（Non-Scheduled Fabric）| GPU 間通訊；1-10µs 延遲 | 單棟數據中心內 |
| L3 | Superspine / BAG（Backend Aggregation）| 連接 5 個 DSF 或 7 個 NSF | 單一園區 |
| L4 | InterBAG hub | 跨園區互連，22 Petabits/s 雙向頻寬 | 分佈多座數據中心 |

**典型 Prometheus 配置**：1 個 L4 連接 27 棟數據中心，橫跨 6 個園區，最遠園區距主叢集 75-80km。

### 光互連選擇

| 距離 | 技術 | 延遲 |
|------|------|------|
| 同一園區（< 6km）| LR 光學（Long Reach） | 可忽略 |
| 跨園區（> 6km）| DWDM + ZR 光學 | 75-80km ≈ 500µs（光傳播下限） |
| Titan 跨叢集（最高 2,000km）| DWDM | >>1ms（強制異步訓練） |

## 關鍵參數

- **總頻寬**：L4 InterBAG 提供 22 Petabits/s 雙向（Prometheus cluster）
- **延遲邊界**：DSF/NSF 區域內 1-10µs；跨 100km 不可低於 500µs
- **規模**：Prometheus = 27 個數據中心 / 6 個園區；其他 Titan 園區間距最高 2,000km

## 瓶頸 / 限制

- **延遲不可逾越**：光速決定的 500µs（100km）物理下限，迫使跨園區 RL 訓練走異步策略（pretraining 在單區域同步，RL 可全球分佈異步）
- **熱管理 / 電力上限**：單棟或單園區超過 100MW 仍有挑戰，AIBackbone 是繞過這個瓶頸的網路層方案
- **複雜性**：L3/L4 硬體分佈多座建築，維運難度高

## 應用

Meta 的 5 座 1GW「Titan」算力基地（Prometheus、Hyperion、El Paso、Iowa、Indiana）均依賴 AIBackbone 架構實現 GW 級訓練叢集。預訓練（synchronous）在單區域完成；RL 訓練（asynchronous）可跨多 Titan 分佈執行。

## 受惠公司

| 公司 | 角色 |
|------|------|
| [[META.US(meta)]] | 開發者與部署者 |
| DWDM / ZR 光學模組供應商（如 Coherent、Lumentum）| 跨園區光互連供應 |

## 來源

- 報告_SemiAnalysis_Meta超級智慧實驗室一年進展_20260709（SemiAnalysis，2026-07-09；AIBackbone 架構詳細描述）

## 本次 ingest 更新（DIGITIMES，2026-08-21）

AI Fabric 由單一晶片內互連延伸到 scale-up、scale-out 與 scale-across；DIGITIMES 觀察 800G 已進入 Leaf-to-Spine 主流、1.6T 開始導入，交換器 ASIC 往 102.4T 升級，CPO 逐步進入 scale-out 主幹。這些是產業研究觀察，個別平台與量產時程仍需公司公告驗證。

來源：[[Scale全棧式方案成形，伺服器連網晶片業者競爭升級_DIGITIMES]]（DIGITIMES，2026-08-21）。
