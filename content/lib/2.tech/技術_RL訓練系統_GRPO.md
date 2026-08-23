---
title: "技術_RL訓練系統_GRPO"
tags:
  - 技術/RL訓練
  - 技術/GRPO
  - 產業/AI
updated: 2026-08-12
aliases:
  - GRPO
  - PipelineRL
  - 強化學習訓練基礎設施
  - RL Training Infrastructure
  - Async RL
  - 非同步強化學習
image_status: 有來源圖
---

# 技術_RL訓練系統_GRPO

## 技術定義

強化學習（RL）訓練系統是 post-training 階段讓 LLM 掌握推理、coding、agentic 能力的核心基礎設施。RL training 效率決定可以負擔多少 RL、以及模型能力能走多遠（Dario Amodei：RL 效能提升如同 pre-training 的算力 scaling，log-linear 關係）。

**核心挑戰**：如何在**訓練吞吐量（trainer consumption rate）**與**推理吞吐量（generator production rate）**之間取得平衡（throughput matching），是決定系統效率的關鍵瓶頸。

資料來源：報告_SemiAnalysis_RL_Systems_Mind_The_Gap_20260616（SemiAnalysis，2026-06-16）

## 原理 / 流程

### 三個 Actor

| Actor | 功能 | 說明 |
|-------|------|------|
| Generator（生成器）| 對 prompt 進行推理，產生 rollout（prompt + model response）| LLM inference；決定 production rate |
| RL Environment（環境）| 評估 rollout，給出 reward score | 代碼執行 → 測試通過率；或 LLM judge |
| Trainer（訓練器）| 消費 rollout + reward，更新模型權重 | 決定 consumption rate |

## 圖解

![[rl-systems-mind-the-gap_original_002.png]]

RL 訓練系統三 Actor 架構：Generator（藍）→ RL Env（綠）→ Trainer（紅），循環更新權重。Trainer 推送新權重給 Generator，完成一個訓練步驟。

### GRPO 算法

- **GRPO（Group-Relative Policy Optimization）**：目前主流開源 RL 算法
- 對每個 prompt 生成一組 rollout，計算每個 rollout 的 advantage（相對組平均 reward 的偏差）
- Advantage > 0 的 rollout 被強化，< 0 被抑制
- 關鍵問題：若 task 太難（全失）或太易（全過），advantage 均為 0，無訓練信號 → **curriculum 管理**至關重要

### 同步 vs 非同步執行

| 模式 | 特點 | 問題 |
|------|------|------|
| 同步（Synchronous）| Trainer 等 Generator 完成才更新 | Trainer idle 時間長，GPU 浪費大 |
| 非同步 PipelineRL | Trainer 在 rollout 進行中推送新權重 | 引入 **policy staleness**（樣本由舊 policy 生成但以新 policy 訓練）|

**Policy Staleness Budget**：限制 Generator 最多能比 Trainer 超前幾個 step，防止 off-policy 信號過度偏差。PipelineRL 是目前非同步 RL 訓練的事實標準。

### Sandbox 基礎設施

- RL Environment 以 sandbox 形式存在（容器化 runtime 執行代碼）
- 輕量：Firecracker micro-VM
- 重量：QEMU VM（完整 SWEBench 環境）
- 挑戰：Sandbox 啟動延遲、並發規模（每個 rollout 至少一個 sandbox）、模型異常行為（生成百萬檔案耗盡資源）

## 關鍵參數

| 參數 | 說明 | 典型值 |
|------|------|--------|
| Group Size（N）| 每個 prompt 的 rollout 數量 | 8–16；困難任務可達 64 |
| Max Sequence Length | rollout 最大長度 | 32K–128K |
| Policy Staleness Budget | Generator 最多超前 Trainer 的 step 數 | 16 steps |
| Trainer MFU | 模型 FLOP 利用率（generation-bound 系統）| 10–15%（低！）|
| Batch Size | 每個 training step 消費的 samples | 512 |

## 瓶頸與挑戰

### Generation-Bound 系統（最常見）

- Generator（推理）速度慢於 Trainer（訓練），Trainer idle 30-70% 時間
- 主因：長推理 trace（reasoning models）、tail latency 極大（straggler rollout 決定組完成時間）
- 緩解：Oversampling（多生成捨棄未完成）、Early Pruning、PD Disaggregation（prefill/decode 分離）

### Sandbox Scaling

- 高並發 rollout（~960）遇到 sandbox 初始化死鎖、straggler 啟動延遲高達 1 小時
- Modal、Prime Intellect Sandbox 在高並發下仍有挑戰

### Partial Rollout 與 Stateful Sandbox

- slime 框架支援 Partial Rollout：將超時 rollout 存入 buffer，下一 batch 繼續
- 但 SWEBench 環境有狀態（新 policy 繼承舊 policy 的中間編輯狀態）→ environment state-level staleness

## 應用場景

- AI Coding Assistants（最大 B2B SaaS 市場：$30B ARR 2026，預計 2026 年底突破 $100B）
- 推理模型（Claude Opus 4.8：SWE-bench Pro 69.2%，RL 為主要推動力）
- Agentic 系統訓練

## 相關公司

| 公司 | 角色 | 說明 |
|------|------|------|
| [[Anthropic（未）]] | AI Lab | Claude Opus 4.8 使用 RL post-training |
| Prime Intellect | 開源 RL 框架 | Prime RL（verison：verl 基礎，Torch Titan 訓練，vLLM 生成）|
| Modal | Sandbox 服務 | 提供 RL Environment sandbox 即服務 |
| Thinking Machines Lab | AI Lab（Tinker）| 商業 RL 訓練服務 |

## 來源
- 報告_SemiAnalysis_RL_Systems_Mind_The_Gap_20260616 — SemiAnalysis（Kimbo Chen, Cheang Kang Wen, Dylan Patel），2026-06-16
