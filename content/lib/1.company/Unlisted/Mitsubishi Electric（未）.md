---
title: "Mitsubishi Electric（未）"
ticker: ""
market: Unlisted
exchange: 未上市頁（JP 上市：6503.JP）
sector: 電機 / 光通訊元件 / III-V 半導體
tags:
  - 公司/Mitsubishi Electric
  - 技術/矽光子
  - 技術/玻璃基板
  - 技術/CPO
  - 產業/光通訊
updated: 2026-06-29
aliases:
  - Mitsubishi Electric
  - 三菱電機
  - Mitsubishi
  - 6503
  - EML
  - NPO
related_companies:
  - "[[技術_玻璃基板]]"
image_status: "待補來源圖"
---

# Mitsubishi Electric（未）

## 基本資料

三菱電機（Mitsubishi Electric，TSE: 6503）是日本綜合電機大廠，光通訊元件是其核心業務之一，特別是 **EML（Electro-absorption Modulated Laser）**——集 DFB 雷射 + 電吸收調變器 + 點尺寸轉換器於一體。

ECTC 2026：三菱電機提出非主流路線——**玻璃中介層（Glass-IP）+ RDL + III-V EML 覆晶**的 NPO 高速封裝架構，針對 inter-GPU link 每 lane 往 400 Gbps 推進的需求。

資料來源：[[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（2026-06-29）

## 核心技術

### III-V EML 玻璃中介層（NPO 架構，ECTC 2026）

| 指標 | 值 |
|------|----|
| 小訊號電氣 3-dB 頻寬 | **89 GHz** |
| 測試速率 | **106.25 Gbaud PAM4（SSPRQ）** |
| B2B TDECQ | **2.37 dB** |
| ER | 4.30 dB |
| 可拆光連接器容差 | ±0.77 µm（IL ≤1 dB，模擬）|

系統架構：玻璃中介層（Glass-IP）同時處理電、光、熱三用——
- **電**：EML 與 EIC（driver/TIA）靠 TGV 縮短走線，低寄生
- **光**：EML 覆晶在玻璃上，微稜鏡 + 微透鏡做可拆 FAU
- **熱**：玻璃低熱導把 EML/EIC 與 ASIC 熱源隔開

戰略押注：III-V EML 已能做到 100+ Gbaud，是「每 lane 往 400 Gbps」時代的自然選擇；但陣列化與量產成本挑戰。

## 圖片/架構圖

`[待補來源圖]` 需官方 IR 光器件或電力電子模組產品圖佐證，現有研究筆記不足以支撐產品示意圖。

## 相關技術

- [[技術_玻璃基板]]（Glass-IP 中介層）
- [[技術_矽光子（SiPh）]]（EML 是矽調變器路線的競爭與補充）
- [[技術_CPO]]（CPO/NPO 架構）

## 來源

- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（Kei Masuyama et al., Mitsubishi Electric, ECTC 2026，2026-06-29）

## 相關頁面

- [[技術_TFLN]]
