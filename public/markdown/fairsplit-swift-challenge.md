# 🍎 FairSplit — Smart Expense Splitting App
### 🏆 Apple Swift Student Challenge 2025 Solo Submission

An offline-first iOS application that enables fair, item-level expense splitting using receipt OCR scanning, automated settlement calculations, and clean MVVM architecture.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/FairLedger)

---

## 🎯 Overview

Traditional expense-splitting apps divide total bills equally, creating unfairness when group members consume different items. FairSplit solves this by tracking expenses at the individual item level. Built natively in SwiftUI for iOS, it combines on-device receipt OCR scanning via Apple Vision with an optimized debt minimization algorithm to compute minimal peer-to-peer settlement transactions.

---

## ✨ Key Features

- **Item-Level Cost Distribution**: Assign specific item portions to individual members rather than splitting totals blindly.
- **On-Device Receipt OCR**: Camera-based receipt scanning powered by the Apple Vision framework extracts items, prices, and quantities automatically.
- **Smart Settlement Engine**: Calculates the optimal minimal set of transactions required to settle group balances cleanly.
- **Privacy-First Offline Architecture**: Stores all data locally on device via Codable & UserDefaults — zero cloud accounts or internet access required.
- **Group & Event Management**: Track multiple trips, shared apartments, or events with reactive SwiftUI charts.

---

## 🚀 How It Works

1. **Scan or Add**: User scans a receipt via camera (Vision OCR) or enters items manually into an event.
2. **Assign**: Assign specific group members to consumed items with quantity splits.
3. **Settle**: The algorithm computes member balances and generates optimized settlement payments (e.g. "A pays B $12").

---

## 🏗️ Architecture

```
[SwiftUI Views] ──► [MVVM ViewModels] ──► [Vision OCR / Debt Engine] ──► [Codable Local Persistence]
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **UI Framework** | SwiftUI, Combine, Swift Charts |
| **OCR & Vision** | Vision Framework (Apple) |
| **Architecture** | MVVM (Model-View-ViewModel) |
| **Data Persistence** | Codable, UserDefaults |

---

## 🧩 Challenges & Key Learnings

- **OCR Parser Accuracy**: Real-world receipt layouts vary wildly. Created regex heuristics to reliably separate item descriptions, tax lines, and totals.
- **Minimizing Transactions**: Implemented a greedy cash-flow minimization algorithm to reduce N group debts down to the fewest possible payments.