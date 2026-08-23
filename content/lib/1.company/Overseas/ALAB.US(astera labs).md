---
title: "ALAB.US(astera labs)"
ticker: "ALAB"
market: US
exchange: NASDAQ
sector: 資料中心互連晶片 / PCIe Switch / 光互連
tags:
  - 公司/Overseas
  - 產業/半導體
  - 技術/光互連
  - 環節/PCIe交換
  - 環節/UAL互連
updated: 2026-07-07
aliases:
  - Astera Labs
  - ALAB
related_companies:
  - "[[NVDA.US(nvidia)]]"
  - "[[MRVL.US(marvell)]]"
  - "[[AVGO.US(broadcom)]]"
  - "[[CRDO.US(credo)]]"
---

# ALAB.US(astera labs)

## 基本資料

| 項目 | 內容 |
|------|------|
| 全名 | Astera Labs, Inc. |
| 代號 | ALAB（Nasdaq）|
| 成立 | 2017年；2024年IPO |
| 總部 | 美國加州聖克拉拉 |
| 定位 | AI 基礎設施互連半導體——PCIe switch、UAL、NVL Fusion、CXL |

## 圖片 / 架構圖

![[Datacenter Connectivity 250930 Bernstein ALAB MTSI SMTC CRDO_007.png]]
*圖（TD Cowen，2025-09-30）：2024–2030E GPU/XPU 加速器出貨單位（左軸，深綠）與 800G 及以上光埠數量（左軸，灰）和每顆加速器光埠數（右軸，折線）。到 2030E 每顆 XPU 連接埠數從 ~4 成長到 ~10，直接驅動 Astera PCIe/UAL switch content 提升。*

## 業務概況

**Astera Labs 是 AI 叢集互連的「底座」晶片廠**，核心賣點是在每顆 XPU 旁邊提供低延遲、高頻寬的互連橋接。

| 產品線 | 技術 | 定位說明 |
|--------|------|---------|
| **Cosmos PCIe Switch** | PCIe 5/6 | 被客戶形容為「開放生態的 NVSwitch」；Add-in-card 架構尤其適合中國市場 |
| **Scorpio 交換器** | 以太網 scale-out | ALAB 定義的 scale-out 乙太 switch |
| **UAL Switch**（Universal Accelerator Link）| UAL | AI scale-up 新型互連協議；管理層對競爭地位有信心但預期不會贏者全拿 |
| **NVL Fusion** | 客製 I/O | Nvidia NVLink Fusion 的第一個客製接觸點；後續有更多來自客戶的請求 |
| **CXL** | Cache-coherent 記憶體互連 | 2027E 開始貢獻營收；配合 KV-cache offload 需求 |
| **aiXscale**（收購）| AI scale-up 光學互連 | 含 PIC/EIC/OE 能力；2027E 開始產生合格營收 |

## 核心觀點（MS bus tour，2026-06-15）

- **每顆 XPU 內容約 $1,000**，隨 AI 基礎設施更依賴互連將持續成長
- **PCIe 仍會繼續成長**至少再數年；中國市場特別依賴 add-in-card + PCIe 架構，ALAB 視中國為重要機會（但不預期超越美國規模）
- **NPO 第一次部署 2027**；若 NPO 成功可能推遲部分客戶導入 CPO，但 NVIDIA 可直接切換到 CPO
- **CPO 最快 2028**，可能一名客戶會更早
- **機架間（rack-to-rack）必走光**：400G rack-to-rack 無法靠銅；即使 retimer 被光鏈路取代，新光鏈路的價值遠高於 retimer——對 ALAB 收入正面
- **自家 SerDes**：針對光學接口開發內部 SerDes IP，提高對光學轉換時點的掌握

## TAM 框架（管理層，2026-06-15）

| 市場 | 2030E TAM |
|------|-----------|
| PCIe | ~$10B |
| 以太網（Ethernet）| ~$10B |
| NVL + ICI solution | 屬 >$100B 市場的較大部分（未量化）|
| UAL | ~$10B |

## 分析師評等

| 來源 | 評等 | 說明 |
|------|------|------|
| Morgan Stanley（Joseph Moore）| Overweight ★ | 看好 Amazon Trainium 3 scale-up 放量 2H26；長期 UAL/NVLink Fusion/光互連機會 |
| TD Cowen（Sean O'Loughlin）| Hold | 最佳商業模式（客戶/平台多元化），但若 Scale-Up Ethernet 勝出則面臨逆風；Bernstein 啟動覆蓋，2025-09-30 |

> Morgan Stanley 備注：「強勢股價反彈後估值壓力較大，但基本面正面。」

## 競爭格局

- **vs Marvell（MRVL）**：兩者都在爭 scale-up optics 機會；MRVL 以「廣度為競爭優勢」；ALAB 以「聚焦」為策略——只打確定能贏的戰場
- **vs Broadcom（AVGO）**：ASIC 廠商（AVGO COT 計畫）會影響供應鏈中 scale-up 架構選擇
- **vs Credo（CRDO）**：兩者都在 AEC 互連；CRDO 在銅纜（AEC）更強，ALAB 在 PCIe switch 無競爭者

資料來源：[[Semiconductors 260615 MS public company bus tour ALAB MRVL INTC]]、[[Datacenter Connectivity 250930 Bernstein ALAB MTSI SMTC CRDO]]、[[Optical Networking 260312 Citrini AI connectivity optics]]

## 相關頁面

- [[SMTC.US(semtech)]]
