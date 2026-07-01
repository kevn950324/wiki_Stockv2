---
title: "Nokia Bell Labs（未）"
ticker: ""
market: Unlisted
exchange: 未上市（Nokia 旗下研究機構）
sector: 電信設備 / 光通訊研究
tags:
  - 公司/Nokia Bell Labs
  - 技術/TFLN
  - 技術/CPO
  - 產業/光通訊
updated: 2026-06-29
aliases:
  - Nokia Bell Labs
  - Bell Labs
  - Nokia
  - 貝爾實驗室
related_companies:
  - "[[技術_TFLN]]"
image_status: "待補來源圖"
---

# Nokia Bell Labs（未）

## 基本資料

Nokia Bell Labs 是 Nokia 旗下的核心研究機構（前身是 AT&T Bell Labs），以光通訊、網路技術、材料物理研究著稱。在 CPO 技術領域，Nokia Bell Labs 與 UC Davis 合作，在 ECTC 2026 發表**全球首個 TFLN 調變器 × 商用驅動 IC 覆晶混合整合**的 CPO 發射器實證，被視為 TFLN 路線進入封裝整合階段的里程碑。

Nokia 上市公司（NYSE: NOK；HEL: NOKIA）；Bell Labs 為旗下非獨立上市研究部門。

資料來源：[[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（2026-06-29）

## 核心技術 / 競爭優勢

### TFLN CPO 發射器（ECTC 2026）

Nokia Bell Labs（Tam Huynh et al.）與 UC Davis（Zhixing Lin）合作，ECTC 2026：

| 指標 | 值 |
|------|----|
| TFLN 調變器 Vπ·L | **2.3 V·cm** |
| EO 3-dB 頻寬（調變器本體）| **>50 GHz** |
| EO 頻寬（整合後）| >45 GHz（被驅動 IC 限制）|
| 驅動 IC 最高溫 | ~68°C（無強制風冷）|
| 驅動到終端電阻距離 | **5 mm**（TFLN PIC 當電的 interposer）|
| EO 響應起伏（整合後）| <2 dB（vs 單 IC 5 dB）|

關鍵創新：**把 TFLN PIC 當「電的 interposer」**——驅動 IC 直接微凸塊覆晶鍵合在 TFLN PIC 上，驅動到終端只剩 5 mm，寄生大幅下降。

待解問題：耦合損耗 ~8 dB/facet（無 SSC），訊號輸入仍用 RF 探針（下一步要做 TSV）。

詳見 [[技術_TFLN]]

## 圖片/架構圖

`[待補來源圖]` 需官方技術文件光通信或網路架構圖佐證，現有研究筆記不足以支撐架構示意圖。

## 相關技術

- [[技術_TFLN]]（TFLN CPO 發射器的技術路線）
- [[技術_CPO]]（CPO 調變器整合方案）
- [[技術_矽光子（SiPh）]]（TFLN 作為矽調變器突破頻寬牆的替代路線）

## 來源

- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（Nokia Bell Labs × UC Davis ECTC 2026，2026-06-29）
