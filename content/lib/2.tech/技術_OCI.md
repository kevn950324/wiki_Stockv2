---
title: "技術_OCI"
tags:
  - 技術/OCI
  - 技術/CPO
  - 產業/光通訊
  - 產業/AI伺服器
maturity: developing
updated: 2026-07-02
aliases:
  - OCI
  - Optical Compute Interconnect
  - 光計算互連
  - OCI 200G
  - OCI MSA
  - ELSFP
  - OIF-ELSFP
  - scale-up 光互連
  - 外接雷射 ELS
---

# 技術_OCI

## 定義

OCI（Optical Compute Interconnect）是由 Meta、Broadcom、AMD 三家聯手發佈的 scale-up 光互連開放規範。OCI 200G v1.0（2026-03-11）定義了晶片間光互連的物理層介面，目標是在 AI 加速器叢集內提供低功耗、高密度、可維修的光 I/O 標準，對抗 NVIDIA 垂直整合的 NVLink 路線。

> **結盟意涵**：Meta（買方）＋ Broadcom（交換/光 IP）＋ AMD（XPU）三巨頭把線側物理層寫成具體規格，推動成事實標準，直接對 NVIDIA 垂直整合（NVLink + 自家光子）宣戰。

## 圖解

![[報告_Semianalysis_CPO_20260102_005.png]]
*圖（SemiAnalysis，2026-01）：Nvidia Oberon（GB300 NVL72，72 GPU / 1 機柜）vs Kyber（Rubin Ultra NVL576，576 GPU / 9 機柜）Scale-up 架構對比。NVL72 以 NVLink Switch 銅互連在機柜內互連；NVL576 跨 9 機柜需突破銅互連 ~2m 物理限制，OCI（Optical Compute Interconnect）或 NVLink 光互連是把 Scale-up 域延伸至 500m SMF 的核心方案，讓 576-GPU「World Size」成為可能。OCI 主要場景即 NVL576 跨機柜光學 Scale-up 互連。*

## 技術原理

### 四個架構賭注

**1. 外接雷射（ELS）**：強制使用 OIF ELSFP（OIF-ELSFP-01.0）外接雷射源，光耦進偏振維持光纖（PMF）再接 OCI chiplet。雷射規格：線寬 1 MHz、SMSR 30 dB、PER 16 dB、RIN −144 dB/Hz；波長落在 Group A（~1308–1315 nm）與 Group B（~1328–1335 nm）。等於為 CW DFB／ELSFP 供應商畫出明確規格。

**2. 微環 DWDM 省功耗**：TX 側用級聯微環做 DWDM，每方向 4 個波長。代價是需熱鎖——規範要求 TX squelch 時平均功率必須恆定，確保 TX/RX 微環維持熱鎖（暴露工程負擔）。

**3. 單纖雙向省光纖**：每根光纖同時跑 TX 與 RX，用 Group A（~1308–1315 nm）與 Group B（~1328–1335 nm）兩組 CWDM 反向傳送——光纖數砍一半。代價是 back-reflection 與多路徑干涉（MPI）管理。

**4. NRZ 簡單路線**：用 53.125 Gbaud NRZ（非 PAM4），靠 4λ DWDM 拿密度。設計哲學：低功耗 + 低複雜度 > 追求最高速率。

### 光學鏈路參數

| 參數 | 值 |
|------|----|
| 調變 | 53.125 Gbaud NRZ |
| 波長 | Group A：1308 / 1310.28 / 1312.58 / 1314.88 nm；Group B：1327.69–1334.78 nm |
| 每方向頻寬 | 212.5 Gbps |
| 發射功率 | 6 dBm（每組 4λ 總功率）|
| ER | 3.5–4.5 dB |
| 受壓靈敏度 | −6.2 dBm |
| BER floor | 1E-6 |
| 鏈路預算 | 500m SMF-28，插損 ≤2.5 dB |
| CMIS 管理 | 5.3 版 |

### Deskew 狀態機

單纖雙向 + 4λ DWDM 會有通道間偏斜（skew）。規範定義狀態機（Relink→Detect→Sync→Validate→Mission），補償 0–7 UI 通道間偏斜，BER 1E-4 仍能辨識訓練圖樣。

## 速率階梯

| 模式 | PMA 比例 | 每方向頻寬 |
|------|---------|---------|
| 200G OCI | 1:4 | 212.5 Gbps |
| 400G OCI | 2:8 | 425 Gbps |
| 800G OCI | 4:16 | 850 Gbps |
| **1.6T OCI** | **8:32** | **1.7 Tbps** |

## 技術瓶頸 / 風險

- **v1.0 多處 "Subject to change"**：規範仍在修訂，採用時程不確定
- **微環熱鎖工程負擔**：溫度波動需即時補償功率，增加系統複雜度
- **單纖雙向 MPI 管理**：背向反射與多路徑干涉需要嚴格管理
- **規範 ≠ 量產**：OCI 結盟要轉化為量產需要客戶採用 + 供應鏈建立 + 標準收斂

## 關鍵廠商

| 角色 | 廠商 | OCI 位置 |
|------|------|---------|
| 買方 / 規範共編 | [[META.US(meta)]] | Amiralizadeh / Alduino / Peng |
| 交換 ASIC + 光 | [[AVGO.US(broadcom)]] | Ramaswamy / Brosnan / Traverso |
| XPU 廠商 | [[AMD.US(amd)]] | Streshinsky / Li / Settaluri |
| 競爭對手 | [[NVDA.US(nvidia)]] | NVLink 垂直整合路線 |
| 光源供應商 | [[COHR.US(coherent)]] | CW DFB / ELSFP 潛在主力 |
| 光源供應商 | [[LITE.US(lumentum)]] | ELSFP 候選供應商 |

## 應用場景

- **AI 叢集 scale-up 光互連**：GPU/XPU 間超高頻寬、低延遲光 I/O
- **ELSFP 市場催化**：OCI 強制外接雷射，為 CW DFB + ELSFP 供應商畫出明確需求
- **開放 MSA 生態**：對抗 NVIDIA 專有 NVLink，吸引 AMD 生態廠商採用

## 相關技術

- [[技術_CPO]]（OCI 是 CPO scale-up 路線的規範化）
- [[技術_矽光子（SiPh）]]（OCI 調變器選用微環 MRR DWDM，屬 SiPh 技術）
- [[技術_光互連]]（OCI 在光互連演進中的位置）
- [[技術_TFLN]]（TFLN 是突破矽調變器 RC 牆的候選，OCI 下一代可能採用）

## 來源

- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（STT Article 14 OCI 200G 線側規範解析，2026-06-29）
