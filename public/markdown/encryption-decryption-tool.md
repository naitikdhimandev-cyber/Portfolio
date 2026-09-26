# 🔐 Encryption & Decryption Tool
### Secure Symmetric Encryption Web Application

A web-based text encryption and decryption tool built using Python, Flask, and the Fernet symmetric encryption library, allowing users to securely encode and decode messages with automatic key management.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/Encryption_Decrytpion_Using_Fernet/tree/main/Encryption-Decryption_Tool)

---

## 🎯 Overview

Sensitive data transmission requires robust encryption to prevent unauthorized interception. This tool was developed to demonstrate practical cryptographic principles using modern Python libraries, providing a clean browser interface where users can transform plain text into encrypted ciphertext and safely decrypt it using symmetric keys.

---

## ✨ Key Features

- **Fernet Symmetric Encryption**: Utilizes AES-128 in CBC mode with HMAC-SHA256 for authenticated encryption.
- **Automatic Key Management**: Generates and securely stores cryptographic keys for consistent encryption/decryption cycles.
- **Web Interface**: Clean, minimal browser UI built with Flask to handle message input and instant cryptographic operations.
- **Safe Input Sanitation**: Handles invalid ciphertext, wrong keys, and decoding errors gracefully without crashing the server.

---

## 🚀 How It Works

1. **Key Generation**: The application checks for an existing key or generates a new Fernet key.
2. **Encryption**: Plain text input is encrypted into base64 URL-safe ciphertext using the secret key.
3. **Decryption**: Users input ciphertext and key to recover the original plain text message.

---

## 🏗️ Architecture

```
[Web UI Input] ──► [Flask Controller] ──► [Fernet Cipher Engine] ──► [Base64 Ciphertext Output]
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Backend** | Python, Flask |
| **Cryptography** | Fernet (cryptography library) |
| **Frontend** | HTML5, CSS3 |

---

## 🧩 Challenges & Key Learnings

- **Key persistence vs generation**: Learned how key management systems store and retrieve secret keys while preventing unintended key regeneration from invalidating past ciphertexts.
- **Fernet guarantees**: Understood how Fernet ensures confidentiality (AES) and integrity (HMAC) simultaneously in real-world cryptographic applications.