---
title: "分析_DevSecOps_AI安全衝擊"
query_date: 2026-07-07
updated: 2026-07-07
sources:
  - "[[memo_資安_ClaudeCode安全衝擊_凱基_2025]]"
  - "[[memo_DDOG_深度分析_韭菜王_20260500]]"
  - "[[報告_JPMorgan_資安_20260427]]"
  - "[[報告_Truist_MythosAndDaybreak_20260608]]"
tags:
  - 分析/產業
  - 產業/資安
  - 公司/Datadog
  - 主題/Mythos資安衝擊
related_companies:
  - "[[DDOG.US(datadog)]]"
  - "[[FROG.US(jfrog)]]"
  - "[[GTLB.US(gitlab)]]"
  - "[[CRWD.US(crowdstrike)]]"
  - "[[PANW.US(palo alto networks)]]"
related_topics:
  - "[[技術_可觀測性]]"
  - "[[技術_EDR與XDR]]"
  - "[[技術_SASE]]"
---

# 分析：Claude Code Security 衝擊—DevSecOps 受壓 > SASE/EDR

> **⚠️ 重要更新（2026-07-07）：原始論點（Claude Code Security 衝擊集中在 DevSecOps，SASE/EDR 不受影響）在 Anthropic Project Glasswing 與 Mythos 發布（2026-04-07）後已需大幅修訂。**
>
> Mythos 不是 Claude Code Security 的延伸——Mythos 是專為全域資安設計的前沿 AI 模型，影響 EDR、SASE、Threat Intel、Incident Response 全領域。原論點「SASE/EDR 護城河不受 AI 衝擊」仍成立（基礎建設護城河不變），但「AI 對資安的衝擊集中在 DevSecOps」的論述已過時。更完整的框架請見 [[分析_AI驅動資安支出2026]]。

---

## 2026 年 Mythos 後的論點修訂

### 原始論點（2025 年凱基）
> Claude Code Security 衝擊集中在 DevSecOps（FROG/GTLB），SASE/EDR 護城河來自基礎建設，短期不受影響。

### 修訂後的理解（2026-07，基於 Glasswing / JPM / Truist）

| 領域 | 原論點 | 2026 修訂 |
|---|---|---|
| DevSecOps（FROG/GTLB） | 衝擊高（Code Security 重疊） | 維持：AI 繼續壓縮 Code Security 點工具 |
| SASE（PANW/ZS/NET） | 護城河強，不受 AI 衝擊 | **更新**：Mythos 強化 SASE 需求（AI Agent 流量控管），SASE 廠商是受益者，非受害者 |
| EDR/XDR（CRWD/S） | 護城河強，不受 AI 衝擊 | **更新**：Mythos 大幅加速 EDR 升級需求（攻擊自動化），CRWD 是最大受益者（Glasswing 創始夥伴） |
| 可觀測性（DDOG） | 相對受益（競品受損） | **更新**：DDOG 在 BMO 的 AI 感知四象限中被列為「AI 感知領導者」，DASH 2026 強化 Agentic Ops 定位 |
| Anthropic 自身 | 短期非威脅（無基礎建設） | **更新**：Anthropic 透過 Glasswing 商業化，選擇以合作而非競爭方式進入資安生態系 |

**核心修正**：AI 對資安的衝擊不是「集中在 DevSecOps」——而是**驅動全域資安需求加速**，同時壓縮點工具（DevSecOps）和強化平台廠商（CRWD/PANW/ZS/DDOG）的護城河。

---

## 問題背景

Anthropic 於 2025 年釋出 Claude Code Security 工具，可掃描程式庫並理解程式間互動，相較傳統規則式靜態分析（SAST）更強，且解決了資安領域人力不足的問題。市場疑慮：這對資安股的衝擊是廣泛的（PANW、CRWD、ZS 等）？還是集中在特定次產業？凱基研究論點：**衝擊集中在 DevSecOps，非 SASE/EDR**；原因在於 Code Security 與動態威脅防禦在技術護城河與市場定位上差異極大。

來源：[[memo_資安_ClaudeCode安全衝擊_凱基_2025]]（凱基証券，約 2025 年）

## 關鍵發現

- 根據 [[memo_資安_ClaudeCode安全衝擊_凱基_2025]]：Claude Code Security 屬「shift-left」型工具，偏向程式碼釋出前的事先防禦（蓋城牆），與 SASE/EDR 的動態威脅防禦（守城）在技術層次不同
- DevSecOps 業者（FROG、GTLB）的資安產品（Xray、Code Security 整合）與 Claude Code Security 功能重疊度高，且資安 TAM 擴張是這類業者的核心成長敘事，因此受到的業績論述衝擊最大
- 股價反映差異（2025 年，來源：[[memo_資安_ClaudeCode安全衝擊_凱基_2025]]）：FROG -25%、GTLB -8%、DDOG（佈局較廣）影響有限
- 根據 [[memo_資安_ClaudeCode安全衝擊_凱基_2025]]：EDR（CRWD、S）部署在 Kernel 層，替換難度極高；SASE（PANW、ZS、NET）具備 PoP 網路節點，進入壁壘非 AI 代理短期可複製
- [[memo_DDOG_深度分析_韭菜王_20260500]]：DDOG 已成為「市場唯一能同時提供應用級 Observability 和資安的主流廠商」，Grafana 無原生資安整合，DevSecOps 廠商（FROG/GTLB）無 Observability 整合

## 投資重點 memo

| 重點 | 投資含義 | 相關標的 | 信心 |
|------|----------|----------|------|
| DevSecOps 業者論述受損 | FROG/GTLB Code Security 業務敘事核心被 AI 顛覆，近期估值重估風險 | [[FROG.US(jfrog)]]（未建頁）、[[GTLB.US(gitlab)]]（未建頁） | 中 |
| SASE/EDR 影響有限 | PoP 網路 / Kernel 層部署護城河短期不受 AI Code Security 衝擊 | [[DDOG.US(datadog)]]（SASE 競品 PANW/ZS/NET 未建頁） | 高 |
| DDOG 相對受益 | 唯一同時具備 Observability + Security 的主流平台，競品受損反而突顯整合平台優勢 | [[DDOG.US(datadog)]] | 中 |
| VM/EM 業者中期承壓 | QLYS、TENB、RPD 等漏洞管理業者技術護城河較淺，MSFT/PANW/CRWD/Wiz 平台化已在侵蝕其市場 | 未建頁（QLYS、TENB、RPD、Wiz） | 中 |
| Anthropic 長期跨足資安？ | 目前缺乏 TI 研究團隊、Kernel/PoP 技術佈局，短期非傳統資安大廠的威脅 | — | 低（長期才有意義） |

## 受壓鏈 / 受益鏈

| 業者類型 | 代表公司 | 短期衝擊 | 中期衝擊 | 長期衝擊 | 說明 |
|----------|----------|----------|----------|----------|------|
| DevSecOps | FROG（未建頁）、GTLB（未建頁） | 高（-25%/-8%） | 高 | 高 | Code Security 與其成長敘事核心直接重疊 |
| 可觀測性 + 資安整合 | [[DDOG.US(datadog)]] | 低（相對受益） | 低（相對受益） | 低 | 整合平台優勢強化，競品受損 |
| SASE | PANW（未建頁）、ZS（未建頁）、NET（未建頁） | 低 | 低 | 低 | PoP 網路護城河，非 Code Security 可替代 |
| EDR | CRWD（未建頁）、S（未建頁）、MSFT（未建頁） | 低 | 低 | 低 | Kernel 層部署，替換成本極高 |
| VM/EM | QLYS（未建頁）、TENB（未建頁）、RPD（未建頁） | 低（已在平台化衝擊下） | 中 | 高 | 技術護城河本就較淺，AI 加速侵蝕 |

## Insight 結論

| 結論 | 投資含義 | 信心 |
|------|----------|------|
| Claude Code Security 的衝擊高度集中在 DevSecOps 次產業 | FROG/GTLB 的資安成長敘事核心受損，估值重估風險較大 | 中 |
| SASE/EDR 護城河來自基礎建設（PoP/Kernel），非 AI 短期可打破 | PANW/ZS/CRWD/S 的市場地位短期穩固，長期需觀察 Anthropic 是否跨足基礎建設 | 高 |
| DDOG 是可觀測性 + 資安整合的相對受益者 | 競品論述受損反而突顯 DDOG 平台整合護城河；建議持續追蹤 Security ARR 成長率 | 中 |

> [!tip] 結論／投資觀點
> Claude Code Security 衝擊應聚焦在 DevSecOps（FROG/GTLB），非 SASE/EDR。DDOG 因整合平台地位反而相對受益。Anthropic 進入傳統資安（EDR/SASE）需要基礎建設投入，短期（1–2 年）可能性低。
> 信心水準：中

## 關鍵 Claim

| Claim | 類型 | 來源 | 日期 | 信心 |
|-------|------|------|------|------|
| FROG 股價反應 -25%，GTLB -8%，DDOG 相對穩定 | fact | [[memo_資安_ClaudeCode安全衝擊_凱基_2025]] | 2025 | 中（需補股價日期） |
| Claude Code Security 衝擊 DevSecOps >SASE/EDR | thesis | [[memo_資安_ClaudeCode安全衝擊_凱基_2025]] | 2025 | 中 |
| EDR 在 Kernel 層部署，替換需全端點重建 | fact | [[memo_資安_ClaudeCode安全衝擊_凱基_2025]] | 2025 | 高 |
| CRWD 藍屏事件說明 EDR 替換難度 | fact | 市場已知 | 2024 | 高 |
| Anthropic 官網職缺顯示有資安擴張意圖（AI SOC、威脅偵測） | fact | [[memo_資安_ClaudeCode安全衝擊_凱基_2025]] | 2025 | 中 |

> [!todo] 待確認事項
> - [ ] 確認 FROG / GTLB 股價反應的具體日期（目前僅知百分比變動）
> - [ ] 補充 Anthropic Claude Code Security 正式發布日期
> - [ ] 追蹤 FROG Security ARR 占比是否在後續季報中有明確拆分
> - [ ] 反證：若 Anthropic Claude Code Security 市占率有限（企業採用緩慢），DevSecOps 衝擊可能被高估
> - [ ] 確認 Anthropic 是否真正開始招募 EDR/SASE 相關人才（非只有 Code Security 方向）
> - [ ] 建立 FROG.US(jfrog)、GTLB.US(gitlab) 公司頁（目前數據不足）

## 來源引用

- [[memo_資安_ClaudeCode安全衝擊_凱基_2025]] — 凱基証券，約 2025 年
- [[memo_DDOG_深度分析_韭菜王_20260500]] — 韭菜王，2026 年（DDOG + Grafana 競爭部分）

## 相關頁面

- [[分析_DDOG_Observability投資thesis]]
