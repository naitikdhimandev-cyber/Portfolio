# 🛡️ Kavach — AI-Powered Real-Time Ransomware Defense System

An advanced, behavioral-based cybersecurity shield built as part of an internship research project. Kavach monitors live filesystem activity, traps threats using decoy honeyfiles, scores risk using hybrid heuristic + ML analysis, and autonomously executes mitigations — all visualized on a real-time security dashboard.

---

## 🎯 Overview

Ransomware attacks encrypt user files and demand payment. Kavach combats this by watching *how* files are being accessed — not just *what* is being accessed. By combining behavioral rules with an unsupervised machine learning model, the system can detect ransomware-like patterns before significant damage occurs and respond automatically without human intervention.

---

## ✨ Key Features

- **Real-Time Filesystem Monitoring**: Uses Python `watchdog` to observe file creation, modification, deletion, and movement in a targeted sandbox environment.
- **Deception-Based Honeypots**: Generates decoy files (`.xlsx`, `.sql`, `.txt`, `.pdf`) with enticing names like `users_passwords.txt`. Any access immediately triggers a high-priority alert.
- **Behavioral Traversal Detection**: Evaluates sliding-window statistics of file access patterns. Rapidly modifying files across multiple subfolders triggers traversal alarms.
- **Active Process Monitoring**: Uses `psutil` to track CPU, memory, and thread telemetry of offending processes in real-time.
- **Hybrid Threat Scoring**: Combines rule-based behavioral heuristics with ML anomaly scores to compute a threat index from 0 to 100.
- **Machine Learning Anomaly Engine**: Unsupervised `IsolationForest` (Scikit-Learn) model that analyzes behavior vectors and can be retrained live from logged telemetry.
- **Autonomous Defense**:
  - **Process Termination**: Safely halts malicious PIDs (with dry-run mode and critical process whitelist).
  - **Compromise Isolation**: Moves affected files to a secure `.quarantine` directory.
  - **Instant Restoration**: Maintains proactive copies in `secure_backup/` and restores originals automatically if ransomware begins modifications.
- **Security Dashboard**: Responsive Flask web UI with real-time AJAX polling showing metrics, alerts, quarantine logs, and system controls.

---

## 🏗️ Architecture

```
[Filesystem Sandbox]
        │
        ▼
[Watchdog Monitor] ──► [Behavioral Engine] ──► [Threat Score 0-100]
                                │                        │
                         [Honeypot Traps]        [IsolationForest ML]
                                │                        │
                                └──────────┬─────────────┘
                                           ▼
                              [Autonomous Response Engine]
                         ┌─────────────────────────────────┐
                         │  Kill PID │ Quarantine │ Restore │
                         └─────────────────────────────────┘
                                           │
                                           ▼
                              [Flask Dashboard (Real-Time)]
```

---

## 💻 Tech Stack

| Layer | Technology |
|:---|:---|
| **Core Language** | Python 3.10+ |
| **Filesystem Observer** | `watchdog` |
| **Process Telemetry** | `psutil` |
| **Machine Learning** | Scikit-learn (IsolationForest), NumPy, Pandas, Joblib |
| **Database** | SQLite3 |
| **Web Server** | Flask |
| **UI Design** | Custom CSS (Dark Mode, Glassmorphism, Neon Indicators) |

---

## 🚀 How It Works

1. **Monitor**: `watchdog` observes all file events in the sandbox directory in real-time.
2. **Analyze**: The behavioral engine checks traversal speed, honeypot access, and modification rates.
3. **Score**: A hybrid heuristic + IsolationForest model computes a live threat index.
4. **Respond**: If the score crosses the threshold, Kavach terminates the process, quarantines files, and restores backups.
5. **Visualize**: All events, scores, and actions stream to the Flask dashboard via AJAX polling.

---

## 🔐 Disclaimer

This tool was developed for authorized security research and academic purposes only. All testing was performed in isolated sandbox environments with no real user data.
