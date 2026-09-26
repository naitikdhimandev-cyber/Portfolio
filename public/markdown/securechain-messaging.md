# ⛓️ SecureChain — Blockchain Secure Messaging
### Immutable & Encrypted Decentralized Messaging Platform

A blockchain-backed secure messaging platform that encrypts messages end-to-end and records every communication transaction onto an immutable decentralized ledger.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/III-Semester_Crypto_PBL/tree/main/III-Semester_Crypto_PBL)

---

## 🎯 Overview

Centralized messaging platforms suffer from single-point-of-failure vulnerabilities, message tampering, and server-side logging risks. SecureChain solves this by coupling end-to-end encryption with a custom blockchain ledger. Messages are encrypted locally, hashed, and appended into verifiable blocks — creating a permanent, tamper-proof record of communications.

---

## ✨ Key Features

- **End-to-End Encryption**: Encrypts message payloads using asymmetric/symmetric cipher suites prior to storage.
- **Blockchain Message Ledger**: Every message is stored as an immutable block transaction with SHA-256 block hashing.
- **Secure Authentication**: User registration and login protected with bcrypt password hashing and session tokens.
- **Admin & Explorer Dashboard**: Real-time blockchain block viewer and network verification panel.

---

## 🚀 How It Works

1. **Authenticate**: User logs into the platform via bcrypt-secured authentication.
2. **Encrypt & Hash**: Message body is encrypted and hashed with SHA-256.
3. **Block Creation**: The transaction is added to a candidate block and mined onto the ledger chain.
4. **Verification**: Recipients decrypt the payload while verifying block hash continuity.

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Backend Framework** | Python (Flask) |
| **Blockchain** | Custom Python Blockchain Implementation |
| **Security** | bcrypt, Crypto utilities |
| **Database** | SQLite + Blockchain JSON Ledger |
| **Frontend** | HTML5, CSS3, JavaScript |

---

## 🧩 Challenges & Key Learnings

- **Ledger Verification**: Implementing block hash validation to detect any manual modification of message history instantly.
- **Combining Crypto & Blockchain**: Structuring data pipelines so payload encryption and block transaction hashing work seamlessly together.