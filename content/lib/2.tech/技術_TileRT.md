---
title: "技術_TileRT"
tags:
  - 技術/GPU推理
  - 技術/LLM推理
  - 環節/AI推理
updated: 2026-08-15
aliases:
  - TileRT
  - TileRT Engine
  - persistent kernel inference
  - 持久核推理引擎
related_companies:
  - "[[NVDA.US(nvidia)]]"
image_status: "有來源圖"
---

# 技術_TileRT

## 定義

**TileRT** 是一個開源持久核（persistent kernel）推理引擎，以靜態 AOT（ahead-of-time）編譯方式將整個解碼（decode）計算圖編譯為單一常駐 GPU 核心（Engine Kernel），從根本上消除傳統 kernel launch/teardown 開銷。由 TileLang DSL 社群維護者開發。

**核心目標**：在 NVIDIA GPU 上實現接近專用推理晶片（Cerebras WSE / Groq LPU）的超低延遲（ultra-high interactivity）解碼，同時維持 GPU 的硬體靈活性與可複用性。

## 圖解

![[報告_SemiAnalysis_TileRT_InferenceX_20260809_011.png]]
* 圖（SemiAnalysis，2026-08-09）：TileRT 把整個 decode graph 編譯為單一常駐 Engine Kernel，不只是降低 CUDA kernel launch 次數。*

![[tilert-inferencex_original_005.png]]
*圖（InferenceX, 2026-08-09）：TileRT 在 B200 8-GPU server 批大小=1 下的 interactivity（tokens/s/user）與 throughput 對比——340 tokens/s/user，是同精度 FP8 傳統引擎的 3.0x。*

![[tilert-inferencex_original_009.png]]
*圖（SemiAnalysis, 2026-08-09）：CUDA Graph vs TileRT 架構對比——CUDA Graph 優化 kernel launch，TileRT 徹底廢除「kernel 作為執行單元」的概念，全程單一常駐核心。*

## 原理 / 流程

### 傳統 GPU 推理的瓶頸

傳統引擎（vLLM/SGLang 等）以數千個獨立 CUDA kernel 順序執行：
- 每個 kernel 有 launch overhead + teardown + HBM writeback
- 批大小小（batch size=1）時，這些固定成本佔每個 token 延遲的大部分
- GPU HBM 頻寬每代提升 2-3x，但 **memory latency 從未改善**

### TileRT 的解法

1. **靜態 AOT 編譯**：將整個模型 decode 計算圖預先編譯為單一 Engine Kernel，host 只 launch 一次，執行全程常駐 GPU
2. **Tile 級任務分解 + warp/block 特化**：不同 warp group 分工（資料移動、張量計算、通訊），並行重疊
3. **GPU 特化**（Whole-GPU Specialization）：對 GLM5.1 等模型，GPU 0 專做 Sparse Indexer（Top-K 選路），GPU 1-7 做 MLA attention worker，消除同步放大
4. **通訊融入 tile 流**：allreduce/broadcast 直接內嵌於 tile 執行流，不再是外部 stage

與 CUDA Graph 的關鍵差異：CUDA Graph 優化 kernel launch 序列，但 kernel 仍是獨立單元，有界面開銷；TileRT 直接廢除 kernel 邊界。

## 關鍵參數（InferenceX 實測，2026-08-09）

| 配置 | Interactivity（tok/s/user）| 對比 |
|------|------|------|
| TileRT FP8，B200 8-GPU，8k/1k | **340** | 比最快傳統 FP8（113.6）快 3.0x；比最快傳統 FP4（181.4）快 1.9x |
| TileRT FP8，B200 8-GPU，1k/1k | **494.2** | 比最快傳統 FP4（256.3）快 1.9x；比最快傳統 FP8（136.3）快 3.6x |
| TileRT end-to-end 延遲（1k/1k）| decode tail 3.01s | vs NVFP4+MTP 6.54s；vs MI355X 18.18s |

**成本比較（GLM5.1，8k/1k）**：
- TileRT：$13.56/MTok（340 tok/s/user）
- GB200 FP4+MTP（176 tok/s/user）：$13.4/MTok
- 結論：TileRT 僅貴 1%，但 interactivity 高 1.9x

## 限制 / 瓶頸

1. **僅支援 batch size=1**（截至 2026-08）：一個 decode node 同時只服務一個請求，aggregate throughput 較低
2. **模型目錄極窄**：目前僅 GLM5/5.1、DeepSeek-V3.2（MiMo V2.5 Pro 為合作開發未開源）
3. **靜態編譯綁定**：改變 attention 機制或 routing 方案需重新編譯；開發速度慢
4. **軟體仿 dataflow**：仍受限於 GPU SIMT 架構與 HBM 延遲天花板；Cerebras 等 wafer-scale SRAM 在超密集模型上仍有無法比擬的優勢

## PD 拆分（Prefill-Decode Disaggregation）

TileRT 與 vLLM 組合使用：

- **vLLM**：高吞吐量 prefill pool + 調度/API 層（不被取代）
- **TileRT**：接收 latency-critical 請求的 decode pool（超低延遲 Pool A）
- **vLLM decode**：接收一般請求（Pool B）
- KV Cache 傳輸：Mooncake / NIXL Transfer Engine

共享 prefill pool 使算力分配更靈活，不需為「速度機器」另購專用硬體。

## 與 Cerebras / Groq / SambaNova 競爭

| 維度 | 專用推理晶片 | TileRT on GPU |
|------|------------|--------------|
| 延遲天花板 | SRAM roofline（更低）| HBM roofline（受限） |
| 硬體靈活性 | 固定算力比率（prefill/decode 比例嵌入硬體）| 軟體調度，按需重分配 |
| 模型支援 | 同樣有 AOT 編譯問題 | 目錄窄但理論可擴展 |
| 部署成本 | 需採購新硬體 | 利用既有 GPU 叢集 |

SemiAnalysis 結論：TileRT 重新定義大多數買家的需求——不再是「速度機器」，而是從既有 GPU 叢集中動態切出「速度層」。Cerebras/Groq/SambaNova 面臨挑戰，但最頂端超密集模型仍有其不可取代性。

## 生產部署

- **Xiaomi**：MiMo V2.5 Pro UltraSpeed（2026）
- **Z.ai**：GLM5.1 HighSpeed（2026）

## 來源

- [[報告_SemiAnalysis_TileRT_InferenceX_20260809]] — SemiAnalysis，2026-08-09
