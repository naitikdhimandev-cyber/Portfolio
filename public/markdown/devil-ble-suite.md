# 📡 DEVIL V4.0 — ESP32 BLE Intelligence Suite

An advanced Bluetooth Low Energy security research toolkit built entirely on an ESP32 microcontroller. DEVIL V4.0 features a custom Behavioral Fingerprinting Engine that defeats MAC randomization, a full Interactive GATT Exploitation Shell, and a real-time web dashboard — operated 100% over serial with no external hardware required.

---

## 🎯 Overview

Modern devices like iPhones and Samsung phones rotate their Bluetooth MAC address every 15 minutes — making traditional tracking useless. DEVIL V4.0 sidesteps this by profiling *how* a device behaves rather than *who* it is. Built on a single ESP32, the tool scans, fingerprints, connects, and exploits BLE GATT layers through a styled interactive serial shell — all for security research and education.

---

## ✨ Key Features

- **AFRE Fingerprinting Engine**: Analyzes MAC type, advertising UUIDs, manufacturer CID data, and name heuristics to identify hidden devices (Apple `0x004C`, Samsung `0x0075`, CMF `0xFE2C`).
- **Interactive GATT Shell**: Full command shell for dumping GATT profiles, reading characteristics, injecting raw HEX payloads, fuzzing, and forcing pairing handshakes.
- **Ninja Mode**: Instant MAC identity rotation to evade security blacklisting.
- **Sniper Mode**: BLE 5.0 Coded PHY long-range communication (experimental).
- **HoneyPot Mode**: Peripheral emulation — makes the ESP32 advertise as a target device to lure incoming connections.
- **5-Strike Connection Loop**: Aggressive reconnection algorithm to bypass session-rejection algorithms on target devices.
- **Real-Time Dashboard**: Web-based visualization at `devil_dashboard.html` for session monitoring.
- **Brute-Force Lockout**: Built-in 3-attempt limit with 60-second cooldown to protect authorized use.

---

## 🏗️ Architecture

```
[ESP32 Firmware — DEVIL V4.0]
    ├── AFRE Engine (Behavioral Fingerprinting)
    │       ├── MAC Type Analysis
    │       ├── UUID Signature Matching
    │       └── Manufacturer CID Parsing
    ├── Interactive Serial Shell (ANSI UI)
    │       ├── [S] Fast Scan (5s)
    │       ├── [D] Deep Scan + PII Extract (15s)
    │       ├── [P] AFRE Dashboard
    │       └── [C] Connect → GATT Shell
    │               ├── [1] GATT Profile Dump
    │               ├── [3] HEX Payload Inject
    │               ├── [5] PII Fuzzer
    │               └── [8] Rogue Bonding (MITM)
    ├── Ninja Mode (MAC Rotation)
    ├── Sniper Mode (Coded PHY)
    └── HoneyPot Mode (Peripheral Emulation)

[devil_dashboard.html — Web Dashboard]
[Test Emulator Suite]
    ├── mac_ble_emulator/ (Node.js)
    ├── mac_target.swift
    ├── win_design_machine.py
    └── chakra_target_sim.ino
```

---

## 💻 Tech Stack

| Layer | Technology |
|:---|:---|
| **Hardware** | ESP32-WROOM-32 (no external hardware) |
| **Firmware** | Arduino C++ (ESP-IDF) |
| **BLE Libraries** | BLEDevice, BLEScan, BLEUtils, BLEAdvertisedDevice |
| **UI** | ANSI terminal serial interface (full color output) |
| **Dashboard** | Vanilla HTML5 / JavaScript |
| **Emulators** | Node.js BLE server, Python, Swift, Arduino |
| **Protocols** | BLE GATT, BLE 5.0 Coded PHY |

---

## 🚀 How It Works

1. **Scan**: The AFRE engine passively scans all BLE advertisements in range.
2. **Fingerprint**: MAC type, UUID signatures, and manufacturer CID are analyzed to classify each device — even if the name is hidden.
3. **Target**: User selects a device index from the ANSI-styled results list.
4. **Connect**: A 5-strike aggressive connection loop establishes a GATT client session.
5. **Exploit**: The interactive shell allows reading characteristics, injecting payloads, fuzzing handles, or forcing a pairing handshake.
6. **Monitor**: Live session data streams to the web dashboard.

---

## 🔐 Disclaimer

DEVIL V4.0 is developed exclusively for authorized security research, hardware auditing, and education. All testing was conducted on personally-owned devices in isolated environments. The author is committed to responsible disclosure and ethical security practices.
