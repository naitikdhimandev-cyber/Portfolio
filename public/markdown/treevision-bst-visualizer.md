# 🌲 TreeVision — Binary Search Tree Visualizer
### Terminal-Based ASCII BST Renderer in C

A lightweight C library and developer CLI tool that generates clean ASCII visualizations of Binary Search Trees directly in the terminal console.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/TreeVision)

---

## 🎯 Overview

Debugging binary search trees and tree balancing algorithms in C is notoriously tedious when relying solely on print statements. TreeVision solves this by rendering fully formatted ASCII tree structures in the terminal, making node relationships, child pointers, and tree heights immediately visible.

---

## ✨ Key Features

- **Terminal ASCII Rendering**: Visualizes BST structures with clear branch pointers (`/` and `\`).
- **Dynamic Insertion & Deletion**: Interactive terminal menu to insert, delete, search, and balance nodes.
- **Tree Traversals**: In-order, pre-order, post-order, and level-order traversal displays.
- **Zero External Dependencies**: Pure standard C library implementation (`stdio.h`, `stdlib.h`).

---

## 🚀 How It Works

1. **Construct**: Users add integer values via the interactive CLI or library functions.
2. **Compute**: The rendering algorithm calculates depth levels and horizontal spacing arrays.
3. **Render**: The tree structure is printed line-by-line using ASCII branches.

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Language** | C (C11) |
| **Output** | Terminal Console (ANSI) |

---

## 🧩 Challenges & Key Learnings

- **Horizontal Spacing Algorithms**: Calculating multi-level padding dynamics so child branches do not overlap regardless of tree depth or imbalance.
- **Pointer Manipulation**: Reinforcing dynamic memory allocation and recursive tree traversal principles in raw C.