# 🚗 Smart Route Optimization Simulator
### Multi-Factor Shortest-Path Routing Engine (Bellman-Ford)

A multi-factor routing engine that calculates effective road travel costs using environmental multipliers (Traffic, Weather, Road Quality, Temperature) and finds optimal paths using the Bellman-Ford algorithm.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber)

---

## 🎯 Overview

Standard navigation software often measures raw physical distance. However, a shorter road with severe congestion, heavy rainfall, or poor pavement can take significantly longer than a longer, clear road. This simulator calculates an **Effective Cost** for each road segment based on live multi-factor multipliers and routes vehicles along the true optimal path.

---

## ✨ Key Features

- **Multi-Factor Weighting Formula**: `Effective Cost = Distance × Traffic × Weather × Road Condition × Temperature`.
- **Bellman-Ford Shortest Path**: Solves single-source shortest path while detecting negative weight cycles with $\epsilon$-safe precision.
- **Early-Exit Pass Optimization**: Skips unnecessary relaxation cycles when no edge distances change (best case $O(E)$).
- **Interactive HTML5 Canvas GUI**: Force-directed graph visualization with drag, zoom, and live node manipulation.
- **Real-Time Live SSE API**: Node.js Server-Sent Events stream live environmental updates directly to the web canvas.
- **C11 High-Performance Backend**: Native C routing engine compiled for high speed execution.

---

## 🚀 How It Works

1. **Environmental Data**: Node.js SSE API streams live traffic/weather conditions.
2. **Cost Calculation**: Multi-factor weights are computed for every road segment.
3. **Bellman-Ford Relaxation**: C engine iterates $V-1$ times across all edges to find the minimum cost path.
4. **Canvas Render**: HTML5 graph updates path highlights in real time.

---

## 🏗️ Architecture

```
[Node.js SSE Server] ──► [Live Factor Stream] ──► [HTML5 Canvas GUI] ──► [C11 Bellman-Ford Engine]
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Core Engine** | C11 (gcc), Adjacency List Data Structure |
| **Live API** | Node.js (Server-Sent Events) |
| **Web GUI** | HTML5 Canvas, Vanilla JavaScript |

---

## 🧩 Challenges & Key Learnings

- **Floating-Point Precision in Relaxation**: Preventing floating-point rounding errors during negative cycle checks by introducing epsilon comparison thresholds.
- **Force-Directed Graph Physics**: Implementing repulsion and spring attraction forces in JavaScript Canvas for clean topology rendering.
