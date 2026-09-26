# 🎭 CyberOS — Real-Time Cybersecurity Awareness Training Platform

A live, instructor-led cybersecurity education platform that simulates real-world social engineering and cyber attacks on connected student devices in real-time — teaching attack recognition through direct hands-on experience, not slides.

---

## 🎯 Overview

CyberOS is built for cybersecurity educators running live awareness sessions. Students connect their personal phones by scanning a QR code, and the instructor executes real simulated attack scenarios from an admin war room dashboard — phishing traps, fake permission requests, malicious downloads, and social engineering flows. Every student action is tracked, scored, and logged in real-time, making the invisible threats of cyber attacks visible and tangible.

---

## ✨ Key Features

- **QR Code Device Onboarding**: Students scan a QR code (auto-generated via Cloudflare Tunnel) and join the live session instantly on their own phone — any network, any device.
- **Admin War Room Dashboard**: Instructor sees all connected devices, per-student activity feeds, threat status, trap-fall counts, and session health scores live.
- **Live Attack Simulations**: Instructor remotely triggers attack scenarios across all connected student devices simultaneously.
- **Threat Scoring Engine**: Each student has a dynamic score (0–100) that drops when they fall for a simulated trap and recovers with correct defensive actions.
- **Session Telemetry Logs**: Every student action, trap trigger, and session event is logged with timestamps, device types, and risk classification.
- **Rate-Limited Peer Chat**: Admin-toggleable in-session communication — broadcast mode and peer-to-peer mode with rate limiting.
- **Cloudflare Tunnel Integration**: Uses `untun` to expose the local Node.js server over HTTPS automatically — enabling mobile students on any network to join.

---

## 🏗️ Architecture

```
[Admin Dashboard (admin.html)]
         │ WebSocket (Socket.IO)
         ▼
[Node.js + Socket.IO Server (server.js)]
         │
   ┌─────┴──────────────────────┐
   ▼                            ▼
[Student Phones              [Session Engine]
 (index.html via QR)]         ├── Device Registry (Map)
                               ├── Threat Score Calculator
                               ├── Rate Limiter
                               └── Session Log Store

[Cloudflare Tunnel (untun)]
 └── HTTPS public URL → QR Code → Student join
```

---

## 💻 Tech Stack

| Layer | Technology |
|:---|:---|
| **Server** | Node.js + Express.js |
| **Real-Time Engine** | Socket.IO (WebSockets) |
| **QR Code Generation** | `qrcode` + `qrcode-terminal` |
| **Network Tunneling** | Cloudflare Tunnel via `untun` |
| **Frontend** | Vanilla HTML5, CSS3, JavaScript |
| **Session Management** | In-memory `Map`-based device registry |

---

## 🚀 How It Works

1. **Instructor** starts the CyberOS server — a Cloudflare tunnel spins up automatically and a QR code is generated.
2. **Students** scan the QR code on their phones and join the live session with their name.
3. **Admin dashboard** shows all connected devices in real-time with device type, join time, and current status.
4. **Instructor** triggers attack scenarios — students' phones receive simulated threats (phishing pages, fake permission dialogs, etc.).
5. **Scoring engine** tracks how students respond — falling for traps reduces score, correct actions restore it.
6. **Session logs** capture every event for post-session review and teaching moments.

---

## 🔐 Disclaimer

CyberOS is designed for use only in authorized, instructor-led sessions in educational settings. All simulated attacks are performed on consenting participant devices within a controlled session. No actual malware or data exfiltration is involved.
