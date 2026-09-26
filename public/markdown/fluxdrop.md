# ⚡ FluxDrop — Encrypted P2P File Transfer Engine

A browser-based, peer-to-peer file transfer application that sends files directly between two devices with military-grade encryption — no server, no cloud, no account required. Just scan a QR code and transfer.

---

## 🎯 Overview

Most file sharing tools upload your files to a third-party server. FluxDrop eliminates the middleman entirely. Using WebRTC, files travel directly from sender to receiver, encrypted with AES-256-GCM from the moment they leave your device. The encryption keys are negotiated via ECDH (Elliptic Curve Diffie-Hellman) using an animated QR code pairing flow — no passwords, no accounts, no data ever touches a server.

---

## ✨ Key Features

- **End-to-End Encryption**: AES-256-GCM authenticated encryption — every 64KB chunk encrypted with a unique random IV.
- **True Peer-to-Peer**: Powered by WebRTC data channels — zero server file storage, ever.
- **ECDH QR Pairing**: Animated multi-frame QR code camera pairing using Elliptic Curve Diffie-Hellman (P-256) — both devices independently derive identical keys.
- **Streaming Architecture**: Memory-efficient 64KB chunked streaming — no file size limits, no RAM bottlenecks.
- **SHA-256 Verification**: Cryptographic checksum verified at completion — guaranteed zero file corruption.
- **No Account Required**: Works on any browser, any device, instantly.

---

## 🏗️ Architecture

```
[Sender Browser]                        [Receiver Browser]
      │                                        │
      │  1. Generate ECDH P-256 keypair        │
      │  2. Render animated QR frames ─────────► Camera Scan
      │                                        │ 3. Reassemble QR frames
      │◄──── Shared AES-256 Key (ECDH) ────────│
      │                                        │
      │  4. WebRTC Offer ──► WebSocket ──────► │
      │◄──────────────── WebRTC Answer ────────│
      │                                        │
      │  5. Direct P2P DataChannel Opens       │
      │  6. AES-256-GCM Encrypted Chunks ─────►│
      │                                        │
      │  7. SHA-256 Checksum Verification      │
```

---

## 💻 Tech Stack

| Layer | Technology |
|:---|:---|
| **Security & Crypto** | WebCrypto API (ECDH P-256, AES-256-GCM, SHA-256) |
| **Networking & P2P** | WebRTC (RTCPeerConnection, RTCDataChannel), WebSocket, STUN |
| **Frontend & Vision** | HTML5, CSS3, Vanilla JS, qrcode-generator, ZXing Camera Scanner |
| **Server & Tunnel** | Node.js, ws WebSocket signaling, Cloudflare Tunnel (HTTPS) |

---

## 🚀 How It Works

1. **Sender** generates an ECDH P-256 keypair and renders the public key as an animated multi-frame QR stream.
2. **Receiver** scans the QR frames with their camera and reassembles the public key.
3. Both devices independently derive an **identical shared AES-256 secret** via ECDH — no key is ever transmitted.
4. A **direct P2P WebRTC channel** opens via lightweight WebSocket signaling.
5. The file is split into 64KB chunks, each **encrypted with AES-256-GCM** (unique random 12-byte IV per chunk) and streamed directly to the receiver.
6. On completion, **SHA-256 checksum** is verified to guarantee integrity.

---

## 🔐 Disclaimer

FluxDrop is a personal research project exploring WebRTC security and cryptographic key exchange in the browser. It is intended for personal use and authorized file transfers only.
