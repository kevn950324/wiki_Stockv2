---
title: "Sumitomo Electric（未）"
ticker: ""
market: Unlisted
exchange: 未上市頁（JP 上市：5802.JP）
sector: 光電元件 / 電纜 / 光通訊
tags:
  - 公司/Sumitomo Electric
  - 技術/CPO
  - 技術/矽光子
  - 產業/光通訊
  - 環節/光纖與光通訊
  - 環節/光纖與光通訊
updated: 2026-10-30
aliases:
  - Sumitomo Electric
  - 住友電工
  - Sumitomo
  - 5802
related_companies:
  - "[[COHR.US(coherent)]]"
  - "[[MMM.US(3m)]]"
---

# Sumitomo Electric（未）

## 基本資料

住友電工（Sumitomo Electric Industries）是日本綜合電氣與光電元件大廠（TSE: 5802），業務涵蓋電線電纜、光纖、光通訊元件、半導體器件。在光互連封裝領域，住友電工與 FICT 合作，在 ECTC 2026 發表「準直鏡擴束垂直耦合」方案，同時解決 PIC 覆晶封裝的「對位敏感」與「溫度穩定性」問題。

另注：住友電工在 [[技術_TFLN]] 供應鏈中亦掌握 Nb₂O₅（五氧化二鈮）高純度原料（與巴西 CBMM 戰略合作），是 TFLN 上游壟斷材料。

資料來源：[[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（2026-06-29）

## 核心技術

### 準直鏡擴束垂直耦合（ECTC 2026，與 FICT 合作）

把 PIC 出光模場從 3 µm 擴束到 **32 µm 準直光**，讓對位容差從「不可能公差」變成「製程可接受」：

| 指標 | 值 |
|------|----|
| 擴束後 MFD | **32 µm** |
| 3 µm 對位誤差造成的損耗 | **只剩 0.2 dB** |
| 實測耦合效率（FC 模組）| **−2.30 dB** |
| 25→80°C 下最大位移 | **0.34 µm**（遠在 32 µm 容差內）|

做法：off-axis 拋物面準直鏡（3D 列印在 PIC 與玻璃基板兩端溝槽），PIC 用 Au stud bump 熱壓覆晶，灌折射率匹配透明樹脂（n=1.46）。

### 3M EBO 擴束連接器組裝夥伴

2025-03-19 與 [[MMM.US(3m)]] 簽 assembler agreement，可銷售採用 3M EBO ferrule 的光纖連接產品。住友電工自行開發 3M EBO ferrule 的端接設備，首批產品為單模／多模 12／16 芯 EBO 跳線（工廠端接），規劃再推配線面板、interconnect panel、cassette 與預端接高芯數光纜，OFC 2025 首展；2026-05 也是 EBO MSA 創始成員。資料中心連接器端的擴束與本公司 CPO 端準直鏡擴束耦合同原理，細節見 [[技術_EBO擴束連接器]]（[[research_EBO技術細節_2026-10-28]]，fact／高）。

### TFLN 上游原料（重要）

住友電工掌握 6N 級高純度 Nb₂O₅——鈮酸鋰晶體的核心原料，與巴西 CBMM 戰略合作。中國管控稀有材料後，住友擴產計劃停止（詳見 [[技術_TFLN]]）。

### 100G EML 外部供應

[[memo_EML_InP_CW_ELS_NPO_CPO專家觀點_日期不詳]] 中的 Coherent 專家稱，[[COHR.US(coherent)]] 可能增加向住友採購 100G EML，把更多自有 InP 產能轉向 200G EML 與 200／400mW CW。此為日期不詳的 channel claim，尚待雙方公告、法說或供應鏈資料驗證。

## 相關公司

| 公司 | 關係 | 說明 |
|------|------|------|
| [[COHR.US(coherent)]] | 潛在客戶／EML 採購 | Coherent 專家稱 100G EML 外採增加；信心低 |
| [[MMM.US(3m)]] | 技術授權方／ferrule 供應 | 2025-03 簽 EBO assembler agreement，以 3M ferrule 做 EBO 跳線與配線產品 |

## 圖片/架構圖

![[報告_招商證券_FAU與MPO在ScaleUp時代的價值通脹_20261013_p22.png]]
*圖（招商證券，2026-10）：左上 MT-FA 實物圖引自住友電工 Optifrontier。MT-FA 一端是 MT 插芯、另一端是 FAU，把多根光纖耦合到光模組的 PIC；住友同時供應 MT 插芯與 MT-FA，屬光模組並行傳輸的關鍵被動件。右下為 NVIDIA Quantum CPO 交換器中 FAU 的位置。*

### MT 插芯與布線（招商證券 2026-10-13）

[[報告_招商證券_FAU與MPO在ScaleUp時代的價值通脹_20261013]] 把住友列為 MT 插芯上游供應商（透過 US Conec 技術授權生產）與光纖光纜供應商，也列入北美布線方案商（MT 插芯＋光纖光纜），並在 EBO MSA 產業鏈表中與 Molex、SENKO 同列「連接器龍頭」。券商整理，信心中。

## Goldman Sachs 2026-07-07 亞洲科技 2H26 策略

- GS 日本工業電子分析師估住友電工 AI／DC 相關產品的獲利占比由 FY25 的 15% 擴大到 FY28 的 42%，動能來自光纖光纜銷售擴大、光連接器增產，以及邊際利潤率高的光元件與 InP 基板；FY2E P/E 23x 被 GS 視為低估（estimate／中）。
- 07-07 Buy，TP ¥3,400（附表收盤價 ¥2,593，上檔 31.1%），FY27／FY28 P/E 17.5x／14.1x。GS 也把住友電工與 JX 金屬列為 InP 基板材料主要廠商。框架見 [[分析_GS亞洲科技2H26投資策略_AI硬體循環與選股框架_20260707]]。

## 相關技術

- [[技術_矽光子（SiPh）]]（準直鏡耦合技術應用）
- [[技術_TFLN]]（住友電工是 Nb₂O₅ 上游供應商）
- [[技術_聚合物波導]]（與 Kyocera 曲面鏡、Intel V-groove 同為耦合解法競爭流派）

## 來源

- [[報告_招商證券_FAU與MPO在ScaleUp時代的價值通脹_20261013]] — 招商證券，2026-10-13；MT 插芯、MT-FA 與布線角色（券商整理，信心中）。
- [[research_EBO技術細節_2026-10-28]] — 網路彙整，擷取 2026-10-28；3M EBO assembler agreement（2025-03）、EBO MSA 成員。
- [[260707_gs_asia-tech-2H26-strategy]] — Goldman Sachs，2026-07-07；亞洲科技 2H26 策略，AI／DC 獲利占比 15% → 42%、Buy／TP ¥3,400。
- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（Shingo Nakamura et al., Sumitomo Electric × FICT, ECTC 2026，2026-06-29）
- [[技術_TFLN]]（Nb₂O₅ 上游壟斷記載）
- [[memo_EML_InP_CW_ELS_NPO_CPO專家觀點_日期不詳]]（Coherent 向住友採購 100G EML 的專家說法；日期不詳，2026-08-30 收錄，信心低）

## 相關頁面

- [[KYOCERA（未）]]
- [[技術_玻璃基板]]
- [[技術_光電芯片]]（CIC 2025 雷射晶片外售排名推定為 Company D：矽光 CW 外售第 1、市占 31.7%）
- [[分析_專家口徑CW雷射營收估算2026-2028]]（70/100mW 矽光 CW 與內置 NPO 用 CW 的逐年營收估算）
- [[技術_EBO擴束連接器]] — 資料中心連接器端的擴束光學；與本公司 CPO 端準直鏡擴束耦合同原理
