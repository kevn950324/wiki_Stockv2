---
title: "技術_矽光子（SiPh）"
tags:
  - 技術/矽光子
  - 產業/光通訊
  - 產業/AI伺服器
  - 環節/光電晶片
maturity: developing
updated: 2026-10-06
aliases:
  - Ge-on-Si
  - Germanium epitaxy
  - 鍺磊晶
  - Ge 光偵測器
  - SiPh
  - Silicon Photonics
  - 矽光子
  - Silicon Photonic IC
  - PIC
  - SiPho
  - 光子積體電路
  - Fotonix
  - COUPE
  - WDM
  - Wavelength Division Multiplexing
  - Grating Coupler
  - Edge Coupler
  - Wafer-level Photonics Test
  - PIC Wafer Sorting
  - Optical Engine Die Test
  - SOI
  - Silicon on Insulator
  - Thick-film Silicon Photonics
  - Photon Bridge
  - SOA
  - Semiconductor Optical Amplifier
---

# 技術_矽光子（SiPh）

## 定義

矽光子（Silicon Photonics, SiPh）是在標準 CMOS 相容製程上整合光子元件（調變器、光偵測器、波導、耦合器）的技術，讓光訊號傳輸在晶圓廠可量產的矽平台上實現。相較 InP 磊晶方式，矽光子具有成本低、尺寸小、可大面積製造的優勢，是 CPO 與高速光模組的主流平台。

2026 年 SiPh 在光模組的滲透率已超 50%（2026 OFC 確認），是 1.6T 出貨的主要技術路線（估 50–70% 滲透率）。

## 圖解

![[報告_Omdia_CIOE展會回顧_202609_p21.png]]
圖說：Omdia 第 21 頁的 Photon Bridge 矽／III-V 平台示意，對應厚膜矽光子、異質光源整合與耦合容差的比較；圖為廠商方案介紹，不是量產良率證明。

![[web_semicon_taiwan_2026_siph_summit_20260831_05.png]]
*圖（Simple Tech Trend，2026-08-31）：400G/lane 材料決策樹；來源整理將 Si MZM、Si MRM 與 SiGe EAM 的瓶頸歸因於頻寬、溫度敏感度與色散，並列出 TFLN、InP、BTO、有機聚合物與電漿子候選路線。*

![[國泰證期研究部_半導體產業_PIC推動晶圓代工邁向AI光電異質整合新平台_20260525_001.png]]
*圖（國泰證期，2026-05）：矽光子晶片三維示意圖——SOI 晶圓上整合 Germanium PIN Photodetector（鍺 PIN 光偵測器，接收端 O→E）、Silicon waveguides（矽波導佈線）、Electro-optic Modulator（電光調製器，發射端 E→O）與 Optical coupler（光柵耦合器，晶片↔光纖 I/O）。所有元件在 CMOS 產線製造，與電子 IC 單片或異質整合（HB/SoIC），是矽光子的根本競爭力所在。*

![[國泰證期研究部_半導體產業_PIC推動晶圓代工邁向AI光電異質整合新平台_20260525_002.png]]
*圖（國泰證期，2026-05）：PIC（Photonic Integrated Circuit）布局俯視圖——包含 Laser（光源輸入）、Optical ring resonator（環形共振器，波長選擇/濾波）、Optical modulator（電光調製器）、Optical waveguide（波導佈線）、Couplers（分光/合光）、Photonic crystal（特殊波長轉換）、Photo diode（光偵測器 O→E）與 Optical fiber（光纖 I/O）。PIC 把傳統多顆分立光子元件整合到單片晶片，是 1.6T 光模組與 CPO 光引擎成本下降的核心路徑。*

## 技術原理

### 光子材料前段：Ge 與 Si 磊晶

[[報告_國泰_嘉晶_20260924]]（2026-09-24）將 [[3016_嘉晶（市）]] 的 Ge 磊晶描述為光偵測材料，Si 磊晶則用於光線轉向元件。兩者是不同材料與用途，不宜合併成單一 PIC 訂單，也不能據此推定嘉晶製造完整光引擎。

| 材料／製程 | 功能與流程 | 投資觀察 |
|---|---|---|
| Ge 磊晶 | 用於光偵測；國泰稱客戶取得嘉晶材料後交 [[2303_聯電（市）]] 代工 | 機台調測、材料品質、光電轉換與客戶驗證影響良品產出；最終客戶未具名 |
| Si 光子磊晶 | 來源稱用於光線轉向元件，第二客戶仍前期 | 具體元件與驗證階段待查，不等同已確認量產 |
| 專用機台配置 | 來源稱光子與功率元件可用同類機台，但調測後專用於光子線 | 名目設備數不等於可互換的有效產能 |

國泰估光子年產能由 2026 年 2,700 片增至 2027 年 13,500 片、機台擴至 3 台，2027 年營收占比保守估 8%、單價 US$1,500–1,700；均為 estimate／中信心。第 2 頁對第二客戶「工程階段」與「尚未工程階段」互相矛盾，僅保留為前期驗證；2028 放量為低信心情境。流程延伸見 [[供應鏈_AI光互聯]]。

### SOI 供給與異質光源整合（CIOE 2026）

[[報告_Omdia_CIOE展會回顧_202609]]（2026-09，pp.12、21–22）指出供給限制已由 InP／雷射延伸至矽光 SOI 晶圓，長約開始廣泛導入。這是展會訪查觀察／中信心，未揭露具名供應商產能或交期。

| 模組／流程 | 功能 | 觀察重點 |
|---|---|---|
| Photon Bridge 厚膜矽光 | 來源比較 2µm 厚膜與 220nm 薄膜，主張較高功率承受、較低損耗及更寬製程容差 | 彈性元件對準／耦合方案為供應商 claim；量產良率、PDK 相容與成本待驗證 |
| [[INTC.US(intel)]] InP-on-SOI | 把 InP die 鍵合至 SOI，鍵合後處理 InP，整合 III-V 發光與矽光功能 | 晶圓級製造／測試／burn-in、KGD 與 SOA 可提高材料利用率；8／16 波長陣列為報告轉述展示 |
| 雷射陣列供給 | Sivers 在展會談及 array-based 光源，強調不與客戶競爭 | 陣列 know-how 與供應分工，不能推論為 Intel 或其他平台採購關係；未建公司頁 |

與分立雷射逐顆對位相比，上述方案把材料利用率、晶圓級篩選與對準複雜度放到整合平台處理；預期優勢仍須以可交付良率、熱循環可靠度與單位頻寬成本確認。

### 核心器件比較

| 元件 | 功能 | 材料選擇 |
|------|------|---------|
| 調變器（Modulator）| 電→光訊號轉換 | Si MZM/MRM、TFLN、plasmonics、EML |
| 光偵測器（PD）| 光→電訊號轉換 | Ge-on-Si |
| 波導 | 光路導引 | Si、SiN |
| 耦合器（Coupler）| 光纖↔PIC 耦合 | 邊緣耦合（SSC）、光柵耦合（GC）|

### 調變器三路線並進（2026 現況）

| 路線 | 代表 | 頻寬 | 長度 | 優勢 | 挑戰 |
|------|------|------|------|------|------|
| Si MZM/MRM | TSMC COUPE | 50–60 GHz | 毫米級 | 成熟/量產 | RC 頻寬牆 |
| TFLN（薄膜鈮酸鋰）| Nokia Bell Labs / 光庫 | >50 GHz | 毫米級 | Vπ低/頻寬高 | 耦合損耗待解 |
| plasmonics（電漿子）| Marvell × Polariton | ~1 THz | **~10 µm** | 突破繞射極限 | 可靠度驗證早期 |

> ⚠️ **路線轉向（規則 #14）**：Marvell 2026 年收購 Polariton（ETH Zurich 血統），把 plasmonics 調變器路線收進 SiPh 生態——調變器不再只有 Si 一條線，TFLN、EML、plasmonics 三線並進，對供應鏈格局影響深遠。

![[20260522_矽光子發展趨勢：技術演進與機會_008.png]]
*圖（知識力科技，2026-05）：馬赫任德調變器（MZM）結構——光分入上下兩臂，相位差控制干涉輸出（亮/暗），典型長度 >1000µm，不相容 3D-CPO。*

### MZM vs MRM 3D-CPO 相容性（知識力科技，2026-05）

| 指標 | MZM | SiGe/Ge EAM | MRM |
|------|-----|-------------|-----|
| 3D-CPO 相容？ | ❌ 過大（>1000µm） | ❌ 過大（50-100µm） | ✅ **~15µm 直徑** |
| 需額外多工器？ | 是 | 是 | **否**（自帶多工功能） |
| 熱穩定性 | 穩定（兩臂溫差影響） | 需 feedback loop | 需 feedback loop（0–105°C）|
| 功耗 | ~50 mW | ~10 mW | **~1 mW** |
| 傳輸懲罰 | <5 dB | <10 dB | <5 dB |
| 工作波段 | O-band + C-band | **C-band 限定** | O-band + C-band |

**結論**：MRM 是 3D-CPO 架構唯一相容的矽調變器，因其尺寸極小（15µm）且自帶 WDM 多工能力，是 CPO 光引擎整合的關鍵技術路線。（來源：[[20260522_矽光子發展趨勢：技術演進與機會]]）

### 代工平台格局（2026）

| 平台 | 業者 | 市占 / 特色 | 代表客戶 |
|------|------|------------|---------|
| **Tower Semiconductor** | 美商（Nasdaq:TSEM），純晶圓代工 | 全球 SiPh 市占 60–70%；1.6T 量產中，3.2T InP 異質整合中；2025 Q4 季營收 $80–95M，5× 擴產中；2027E 年化 $1.6–1.9B | 廣泛 AI 資料中心客戶，簽 $1.3B 2027 產能預訂 |
| **GF Fotonix** | GlobalFoundries | 300mm 單片 O/C-band；含 SiN SSC、V-groove | Coherent 等 |
| **TSMC COUPE** | 台積電 | N65 PIC + N7 EIC，SoIC 混合鍵合；路線由 200→400Gbps/lane、128+ lanes 與 1→16+ wavelengths 雙軸擴展 | NVIDIA、Broadcom、Ayar |
| SilTerra | 馬來西亞，私人 | 較小型，利基市場 | — |
| Intel | IDM | 自用為主；CPO V-groove 玻璃耦合器 | 自家平台 |

![[CPO 250815 Latitude silicon photonics supply chain_015.png]]
*圖（Latitude Design Systems，2025-08）：SiPh 收發引擎架構——Laser（光源）→ SiPh Tx/Rx Engine（含調變器、PD、波導）→ Prism™ 模組（TX Driver IC + DSP）→ 光學 I/O / 電氣 I/O。這是矽光子可插拔模組的典型訊號流程，CPO 版本省去 DSP 並將 Laser 改為外部 CW 連續波雷射。*

## 關鍵參數 / 判斷指標

| 指標 | 意義 | 觀察重點 |
|------|------|----------|
| 插入損耗 | 光耦合效率 | SSC + 可拆連接器 <1.5 dB 為商用門檻 |
| 調變器頻寬 | 支援速率 | >45 GHz 才能跑 53.125 Gbaud NRZ（1.6T lane） |
| 光纖耦合方式 | 耦合方案 | 邊緣耦合 vs 光柵耦合、主動 vs 被動對位 |
| 晶片整合良率 | 量產可行性 | COUPE 32 顆 OE 複利 >99.5% 才夠 |
| WDM 波長數 | 同一光纖可承載的平行通道 | TSMC 路線由 1 朝 16+ wavelengths 擴展；波長穩定與耦合損耗決定實際可用性 |
| 晶圓級光子測試 | 封裝前篩除不良 PIC／EIC | 越早測出缺陷，越能避免高價 SoIC／CPO 封裝完成後報廢；測試設備與校準能力受惠 |

### 200G per lane 的短距離互連轉換

[[活動_JPM_頎邦訪談_20260527]] 指出，當光模組由 100G per lane 升至 200G per lane，PD→TIA 與 Driver→Modulator 之間較長的 Wire Bond 容易放大寄生電感、電容與訊號損耗，使 SNR 下降。Gold Bump／Flip-Chip 將高速電性互連距離縮短，並非改變 PIC 的光子原理，而是解決 PIC 與 EIC 異質整合的電性封裝瓶頸。

| 光電路徑 | 關鍵元件 | Gold Bump 的作用 |
|----------|----------|--------------------|
| 接收端 | PD → TIA → DSP | 縮短微弱 PD 電流至 TIA 的電性路徑，降低寄生效應與訊號損耗 |
| 發射端 | DSP → Driver → Modulator | 縮短 Driver 至調變器的高速輸出路徑，支援 200G per lane 訊號完整性 |

## 產業動能

- **COUPE 擴展由單一速率轉為「更快＋更寬」雙路線**：[[2330_台積電（市）]] 於 SEMICON Taiwan 2026 提出提高單 lane 速率至 400Gbps、lane 數至 128+，並以 WDM 把波長由 1 擴至 16+；BofA 於 2026-08-31 轉述，屬公司技術路線／信心中高（[[報告_BofA_台積電_20260831]]）。
- **晶圓級測試成為量產經濟性門檻**：同一來源強調 wafer-level testing 可降低後段高價封裝的浪費，支持光電 ATE、探針與對位等測試環節的長期需求；個別供應商份額仍待驗證。

## 技術瓶頸 / 風險

- **材料與平台認證仍是硬限制**：SOI 長約或異質雷射 demo 不等於系統良品已放量；InP die、SOI、鍵合與封裝每段都可能限制有效產出（Omdia，2026-09，pp.12、21–22）。
- **矽調變器 RC 頻寬牆**：50–60 GHz 上限（電導率 + 自由電子吸收），需要 TFLN 或 plasmonics 接棒
- **光纖耦合**：邊緣耦合（±1 µm 精度需求）vs 光柵耦合（溫度敏感），CPO 量產的隱形關卡
- **散熱管理**：光元件與 ASIC 共封裝後散熱路徑複雜（KYOCERA 面朝下散熱方案：雷射溫降 15.3°C）
- **雷射光源**：CW DFB 雷射仍採 InP 異質整合，功率/可靠度/成本三角
- **電性互連寄生效應**：200G per lane 後 Wire Bond 路徑對 SNR 的影響放大，Gold Bump／Flip-Chip 的製程能力、良率與客製化報價成為新瓶頸

## 關鍵廠商

![[20260522_矽光子發展趨勢：技術演進與機會_019.png]]
*圖（知識力科技，2026-05）：SiPh 生態系 IC 設計與製造廠商全圖——ASIC/xPU（NVDA/MRVL/AVGO/INTC/AMD/聯發科）→ 光子IC（NVDA/MRVL/AVGO/Lumentum/Coherent）→ 電子IC（+ MACOM MTSI）→ 晶圓代工（TSM/Tower TSEM/GF GFS/UMC）。*

| 環節 | 廠商 | 角色 |
|------|------|------|
| 代工平台 | [[2330_台積電（市）]] | COUPE N65+N7，SoIC 混合鍵合 |
| 代工平台 | [[GFS.US(globalfoundries)]] | Fotonix 300mm，O/C-band |
| plasmonics 調變器 | [[MRVL.US(marvell)]] | 收購 Polariton，~10µm、~1 THz |
| TFLN 調變器 | Nokia Bell Labs（研究）| ECTC 2026 TFLN CPO 發射器 |
| 光源 ELS | [[LITE.US(lumentum)]] | NVIDIA CPO 光源主供 |
| 光源 / 光模組 | [[COHR.US(coherent)]] | NVIDIA 入股 $20億 |
| Gold Bump 與後段延伸 | [[6147_頎邦（櫃）]] | TIA／PD／Driver／Modulator 的短距離電性互連；由 Bumping 向 Testing／Dicing 延伸 |
| CPO 平台客戶 | [[NVDA.US(nvidia)]] | COUPE，Spectrum-X CPO |
| CPO 平台客戶 | [[AVGO.US(broadcom)]] | COUPE，Humboldt → Davisson |
| 可拆連接器 | [[GLW.US(corning)]] | GLASSBRIDGE 離子交換玻璃連接器 |

## 應用場景

- **scale-up 光互連**（AI 叢集 GPU↔GPU）：OCI MSA、NVLink 光版本、NVIDIA Spectrum-X
- **scale-out 可插拔光模組**：400G→800G→1.6T→3.2T，DR/FR 規格
- **CPO 共封裝**：COUPE 平台整合 PIC+EIC+光纖耦合

## 相關技術

- [[技術_CPO]]（SiPh 作為 CPO 的 PIC 平台）
- [[技術_TFLN]]（突破矽調變器頻寬牆的材料路線）
- [[技術_OCI]]（OCI 200G MSA 規格 → 矽光子調變器選型）
- [[技術_混合鍵合]]（SoIC/CoW HB 整合 PIC+EIC）
- [[技術_聚合物波導]]（板級光互連的互補技術）
- [[技術_光互連]]
- [[技術_光模塊]]

## 市場規模與 CPO 滲透率

![[20260522_矽光子發展趨勢：技術演進與機會_001.png]]
*圖（知識力科技，2026-05）：Silicon PIC 收入按應用分類——2024 $404M → 2030 ~$2.1B（CAGR 31%）；Datacom pluggables 主導，CPO（scale-out + scale-up）從 ~$4M 成長至 $761M（+188x）為最快成長子類別。*

![[20260522_矽光子發展趨勢：技術演進與機會_005.png]]
*圖（TrendForce，2026-03）：CPO 在 800G+1.6T+3.2T 光模組出貨中的滲透率——2025: 0.05% → 2026F: 0.55% → 2027F: 2.21% → 2028F: 7.23% → 2029F: 22.07% → 2030F: 35.74%。CPO 真正放量在 2028-2030，與 Rubin Ultra/Feynman 世代時程吻合。*

| 年份 | CPO 滲透率（TrendForce Mar 2026） |
|------|--------------------------------|
| 2025 | 0.05% |
| 2026F | 0.55% |
| 2027F | 2.21% |
| 2028F | 7.23% |
| 2029F | 22.07% |
| 2030F | 35.74% |

## 光傳輸技術光源比較

| 技術 | 最大傳輸距離 | 速率（Gbps/lane）| 能耗（pJ/bit）| CMOS 整合難度 | 相對成本 |
|------|-----------|----------------|-------------|-------------|---------|
| PCIe（銅）| 1m | 4 | >10 | 易 | 低 |
| Micro LED | 10–50m | 2–4 | 1–2 | 易 | 低 |
| VCSEL | 100m | 10–50 | 4 | 中 | 中 |
| **CW 雷射（SiPh CPO）** | **1,000m** | **50** | **5** | 難 | 高 |
| EML | 40,000m | 100 | 4.5 | 中 | 中 |

MicroLED CPO 為短距（<50m）低成本方案，適合伺服器內部 scale-up 光互連；SiPh CW 雷射 CPO 適合跨機架 scale-out（1,000m）。（來源：[[20260522_矽光子發展趨勢：技術演進與機會]]）

## 關鍵廠商更新

Tower Semiconductor（[[TSEM.US(tower semiconductor)]]）是目前全球最重要的獨立 SiPh 純晶圓代工廠：2025 年 Q4 季營收 $80–95M → 5× 擴產後 2027E 年化 $1.6–1.9B；已與客戶簽署 2027 年 $1.3B 產能保留合約（20% 預付款），顯示超算 AI 資料中心客戶對 SiPh 產能長期鎖定的信心。即使 CPO 封裝最終交由 TSMC COUPE 執行，Tower 的 SiPh 晶圓仍可獨立供應（不綁定 TSMC 生態）。

## 來源

- [[報告_Omdia_CIOE展會回顧_202609]] — Omdia／Mingyang Lyu，2026-09（僅揭露月份；pp.12、21–22）。
- [[報告_國泰_嘉晶_20260924]] — 國泰證期研究部，2026-09-24；Ge／Si 磊晶、產能測算與客戶流程。

- [[報告_BofA_台積電_20260831]] — BofA Securities，2026-08-31；COUPE lane／WDM 擴展、耦合器損耗與晶圓級測試
- [[web_SEMICON_Taiwan_2026_矽光子國際論壇_20260831]] — Simple Tech Trend，2026-08-31

## 2026-08-24 代工平台更新

[[報告_開源證券_Tower半導體矽光代工_20260818]] 估算 2025 年 Tower 在矽光晶圓代工市占約 42%，並指出其差異化在於開放型「矽光＋矽鍺」協同量產平台，可同步製造 PIC 與 TIA／Driver 高速電晶片；2025–2031 年全球矽光晶圓代工市場 CAGR 約 29.5%–30.4% 為券商估計，需與其他市場資料交叉驗證。

### 代工擴產與路線觀察

- Tower 規劃投入約 49.2 億美元於 Fab 2、Fab 3、Fab 7、Fab 9 的矽光／矽鍺產能；日本 Arai Fab 6 改造的 300mm 產線目標 2027Q4 具備量產能力，屬公司規劃／券商整理。
- 矽光子需求不只由 CPO 驅動，也包含 1.6T 可插拔模組、NPO 與外部 CW 雷射架構；因此 CPO 滲透若延後，仍可能由可插拔與 NPO 需求支撐部分晶圓代工量。
- 主要風險為「銅改光」速度、Fab 7 重組執行與其他代工廠同步擴產；不得把產能預訂、客戶名單或市占估算改寫為已確認訂單。

來源：[[報告_開源證券_Tower半導體矽光代工_20260818]]（開源證券，2026-08-18）。

- [[20260522_矽光子發展趨勢：技術演進與機會]]（知識力科技 張勤煜，臺大電機博士，2026-05-22；MRM vs MZM 比較、CPO 滲透率 TrendForce、SiPh 生態系圖、MicroLED vs CW 雷射 CPO）
- [[research_simpletechtrend_CPO矽光子ECTC2026_20260629]]（STT 20 篇，2026-06-29）
- [[技術_光互連]]（全球 SiPh 代工格局）
- [[Yuanta Tower Semiconductor silicon photonics AI datacenter capacity reservation 260701]]（元大，2026-07-01；Tower SiPh 業務深度）
- [[CPO 250815 Latitude silicon photonics supply chain]]（Latitude，2025-08-15；SiPh Tx/Rx 引擎架構、供應鏈格局）
- [[Optical Networking 260417 GS AI scale out scale up]]（Goldman Sachs，2026-04-17；全球光通供應鏈地圖）
- [[活動_JPM_頎邦訪談_20260527]]（J.P. Morgan NDR 訪談，2026-05-27；200G per lane 的 Wire Bond → Gold Bump 轉換、TIA／PD／Driver／Modulator 後段製程）

## 相關頁面

- [[3587_閎康（櫃）]]
- [[6257_矽格（市）]]
- [[INTC.US(intel)]]
- [[供應鏈_CPO]]
- [[分析_Omdia_CIOE2026_NPO部署與InP供給風險]]
- [[分析_2026Q3先進封裝與光互連供給瓶頸]]
- [[分析_光通訊產業2026]]
- [[供應鏈_AI光互聯]]
- [[分析_頎邦矽光GoldBump與營運轉型2026]]
- [[分子尼奧（私）]]
- [[技術_InP磷化銦]]
- [[TSEM.US(tower semiconductor)]]
- [[KYOCERA（未）]]
- [[Mitsubishi Electric（未）]]
- [[Nokia Bell Labs（未）]]
- [[Polariton（未）]]
- [[Sumitomo Electric（未）]]
- [[技術_玻璃基板]]

## 2026-08-20 Lumentum IR：SiPh 光源需求延伸至 CPO／NPO

- [[活動_Lumentum_Fubon_LITE_IR_20260820]] 顯示，200G lane speed CW 雷射已開始供應矽光子光模組；其重新設計使占用空間縮小 30%，反映 SiPh 光引擎對高密度、可整合外部光源的需求。
- SiPh 的需求不只來自可插拔 1.6T，也延伸至 CPO 的 ELS 與 NPO 的中／高功率雷射；因此 CPO 時程若延後，仍可能由 1.6T 可插拔與 NPO 需求支撐部分光源需求。這是由來源產品組合推導的產業 inference，信心中低。
## 本次 ingest 更新（2026-08-22）

- DIGITIMES 報告整理矽光子晶片業者的競合策略，重點從單一光元件競爭轉向光電整合、共同封裝與 AI 互連平台競爭；來源仍屬產業觀察，信心中。
- 需持續追蹤 CPO、光引擎、雷射與封裝測試的分工變化，避免把「合作夥伴」誤寫成已確認供應商。
- 來源：[[矽光子晶片業者的競合策略 - DIGITIMES]]。

## 2026-09 SEMICON 與論壇：滲透率、代工與成本（LINE 群組 Memo）

- **滲透率：** 台積電先進封裝技術開發副總 K.C. Hsu 預估 2027 年矽光子占光收發模組市場逾 50%；光收發模組銷售 2025 年 +25%、2026 年再 +50%；100G 以上高速光通訊市場 2024 年翻倍、2025 年再 +60%。群友延伸 thesis：SiPh 放量後最缺的是雷射、光纖連接器、InP 與測試（信心低）。
- **代工平台：** 國泰 PIC 論壇稱聯電與 SILITH 已由新加坡 12 吋廠交付首批量產矽光子晶圓，1.6T 平台由開發至量產準備 18 個月、累計出貨逾 800 萬顆 100G／200G 每通道 PIC，後續開發 400G／lane 純矽光子與 TFLN；台積電被稱為唯一公開具成熟 SiPh PDK 的晶圓廠，COUPE 以 6nm EIC＋65nm PIC 面對面 SoIC 堆疊。
- **COUPE 成本推估（元大論壇講者估算）：** PIC 約 10.5 美元、EIC 約 17 美元、SoIC 約 14 美元，單顆 OE 約 41.5 美元，加 FAU 與測試約 100 美元，ASP 約 450 美元。
- **3.2T 路線爭議：** Lumentum 認為 3.2T（400G／lane）時矽光可能因雜訊與功耗問題讓 EML 重新取得份額；聯亞稱 EML 與 CW 非替代關係、3.2T 已在其 roadmap；Semtech 估 3.2T 設計視窗約 12 個月後開啟、規模部署約 2 年後。
- **測試：** 多位講者把測試列為矽光子關鍵瓶頸；閎康稱矽光子 wafer 測試時間由 IC 的 10 分鐘至數小時拉長到 16 小時以上。
- 來源：[[活動_SEMICON_Taiwan_2026_矽光子論壇與展會Memo_20260831]]、[[活動_元大投資論壇_設備CPO與CoPoS產業Memo_20260909]]、[[活動_Lumentum_法說與投資論壇彙整_202608]]、[[活動_聯亞3081_法說Memo彙整_20260812]]、[[活動_Semtech_FY2Q27法說_20260826]]、[[活動_閎康3587_元大論壇Memo_20260909]]、[[memo_LINE投資人超商_產業消息與群友討論彙整_20260725-20261004]]（I050、I054）。

## 2026-10 矽格 Call Memo：SiPh 三段測試流程與測試定價

- **三段 insertion 流程（公司說法，信心中高）：** SiPh wafer 先在封裝／Bump 廠（如台星科）完成 Bumping，再進入 Insertion 1 PIC Wafer Sorting → Wafer-to-die Process → Insertion 2 光電測試 → Insertion 3 Optical Engine Die Test；[[6257_矽格（市）]] 稱可一站式完成 Insertion 1–3。
- **測試尚未標準化：** 矽光測試缺乏標準化平台，測試廠以自製設備（矽格 MAP 平台涵蓋 224Gbps TIA／Driver、PIC／OE，448Gbps TIA 研發中）在客戶研發階段共同開發，形成先行者黏著度；與上方閎康「單片 wafer 測試 16 小時以上」的觀察一致，顯示測試 cell 數量是 SiPh 放量的實體瓶頸之一。
- **價格與分工：** 矽格稱光測試價格遠高於一般 IC 測試，且目前測試有在漲價；[[6147_頎邦（櫃）]] 以 Bump 為主，部分共同客戶 Bump 後送矽格測試，兩者目前偏合作。2027 年光通訊測試營收倍數成長為公司目標（estimate）。
- 來源：[[活動_矽格6257_國泰CallMemo_20261006]]（國泰證期研究部，2026-10-06）。
