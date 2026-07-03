---
title: "技術_CoWoS與先進封裝"
tags:
  - 技術/先進封裝
  - 技術/CoWoS
  - 技術/HBM
  - 產業/半導體
  - 環節/封測
maturity: developing
updated: 2026-07-03
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

## 供給瓶頸

CoWoS 是近年 NVIDIA 出貨最主要的產能限制：
- **4× reticle 拼接需求**：Rubin 世代 CoWoS 需求量相比 H100 大幅倍增，TSMC 須持續擴充中介層產線
- **HBM 供給**：HBM4 三廠齊認證後，供應鏈多元化，但初期 SK Hynix 領先
- **良率**：Hybrid Bonding 初期良率約 35%（見 [[技術_CPO]] 的良率分析）；大面積中介層翹曲控制是另一挑戰

## 相關頁面

- [[技術_混合鍵合]]（SoIC Hybrid Bonding 技術原理）
- [[技術_CPO]]（COUPE 光引擎封裝整合）
- [[技術_玻璃基板]]（Glass Substrate / CoPoS 下一步）
- [[技術_800VDC供電架構]]（Rubin Ultra/Kyber 供電需求）

## 來源

- [[研究導引_AI硬體架構資源總覽_202607]]（自研讀書導引，2025-07 至 2026-07 文獻彙整，2026-07）
- TSMC ECTC 2025 論文：Direct-to-Silicon Liquid Cooling Integrated on CoWoS Platform（量測 0.055°C/W，>2.6kW TDP）
- JEDEC JESD270-4（HBM4 規格）；SK Hynix、Samsung、Micron 2026-06 完成 Rubin 認證
