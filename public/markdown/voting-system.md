# 🗳️ Decentralized Secure Online Voting System
### Microsoft Imagine Cup 2026 | ICP WHCL Global Rank 238

A multi-layer secure digital election platform combining biometric face verification, AI-based fraud detection, and blockchain-backed vote immutability — built to make digital elections tamper-proof, transparent, and coercion-resistant.

- 🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/Imagine_Cup_2026_Microsoft-/tree/main/Imagine_Cup_2026_Microsoft)
- 🚀 [DoraHacks BUIDL Profile #31592](https://dorahacks.io/buidl/31592)
- 📊 [Official ICP Regional Round Result Sheet (Row 238)](https://docs.google.com/spreadsheets/d/1jbIeX10oE4eV-iQUmt5E3xyREdoSNRFYdfdUmvUICSw/edit?gid=1533726982#gid=1533726982)

---

## 🎯 Overview

Traditional digital voting systems are centralized — one database breach or admin-level manipulation can compromise an entire election. This system eliminates those single points of failure by combining multi-factor biometric identity verification, real-time AI threat monitoring during the voting window, and a custom blockchain ledger where every vote is an immutable transaction. Developed and refined across ICP WHCL (Global Rank 238) and Microsoft Imagine Cup 2026.

---

## ✨ Key Features

- **Biometric Identity Verification**: Face recognition with liveness detection, random gesture challenge, and location verification — all within a 20-second controlled voting window.
- **Real-Time Threat Monitoring**: Microphone-based anomaly detection, multiple face detection, mask/spoof attempt detection — any anomaly blocks the vote and alerts admin instantly.
- **Blockchain Vote Ledger**: Every vote is encrypted, hashed, and permanently recorded on a custom blockchain — immutable, auditable, tamper-evident.
- **Multi-Role System**: Admin (election creation), Inspector (voter registration), Voter (biometric voting), Results Portal (authenticated result validation).
- **Audit Trail**: Complete log of every event — verifications, votes cast, anomalies detected — exportable and hash-verifiable.
- **Performance**: < 2s average vote casting, < 1s biometric verification, supports 1000+ concurrent users.

---

## 🚀 How It Works

1. **Setup**: Admin creates the election, defines candidates, and sets the voting window.
2. **Registration**: Inspector registers voters and maps their biometric identity.
3. **Vote**: Voter authenticates — face scan, liveness check, gesture challenge, location verify — then casts vote in a 20-second window.
4. **Record**: Vote is encrypted and appended to the blockchain as an immutable transaction.
5. **Monitor**: AI continuously watches the voting session for anomalies — flags and blocks on detection.
6. **Result**: Authenticated result portal validates the blockchain tally and generates a verifiable report.

---

## 🏗️ Architecture

```
[Admin Panel] → Election config
[Inspector Panel] → Voter registration + biometric enrollment
[Voter Interface]
    ├── Identity Layer: Face recognition, liveness, gesture, location
    ├── Security Layer: AI threat monitor, anomaly detection
    └── Vote Layer: Encrypted submission → Blockchain record
[Results Portal] → Hash-verified blockchain tally
[Blockchain Ledger] → Immutable vote transactions
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Backend** | Node.js, Express.js, MongoDB, JWT Auth |
| **AI & Biometrics** | Python Flask, OpenCV, dlib, face_recognition |
| **Gesture Recognition** | Custom module |
| **Frontend** | React, JavaScript |
| **Blockchain** | Custom implementation (hash-chain vote ledger) |
| **APIs** | RESTful, secured with role-based access control |

---

## 🧩 Challenges & Key Learnings

- **Liveness detection**: Preventing photo spoofing required combining face recognition with a randomized gesture challenge (blink, turn head) — static image attacks fail immediately.
- **Blockchain performance**: A full blockchain for every vote creates write latency — solved by batching votes in 5-second blocks with a Merkle root for integrity.
- **20-second window design**: Too short frustrates real voters, too long allows coercion. Tuned to 20s based on testing — enough for biometrics + casting, not enough for external instruction.
- **Competition pressure**: Advancing through Qualification → National → Regional rounds of ICP WHCL forced rapid iterations and hardening of the security model under judge scrutiny.

---

**🌍 Competition Track** — ICP World Computer Hacker League (Qualification ✅ → National ✅ → Regional ✅, Global Rank 238) | Microsoft Imagine Cup 2026