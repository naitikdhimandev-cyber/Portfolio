# 🛠️ ESP32 MultiTool — Dual-Chip Portable Cybersecurity Research Device

A fully custom-built hardware cybersecurity research platform running on two ESP32 microcontrollers. The device packs WiFi network auditing, infrared signal capture and replay, and an Evil Twin captive portal framework — all in a portable breadboard unit with dual displays, SD card storage, and physical controls.

---

## 🎯 Overview

The ESP32 MultiTool is a physical device I designed, assembled, and programmed from scratch for security research and education. Unlike software-only tools, this is real hardware — hand-wired components communicating over I2C, SPI, and UART, controlled via push buttons and a capacitive touch sensor, and displaying status on an OLED + LCD dual-display system.

---

## ✨ Key Features

- **WiFi Network Scanner**: Enumerates all 2.4 GHz networks with SSID, RSSI, encryption type, and channel. Performs authorized password strength testing using SD card wordlists.
- **Device Enumeration**: ARP + TCP probing (ports 80, 443, 22) to identify connected devices on a network with basic OS fingerprinting.
- **IR Capture & Replay**: Receives and decodes IR signals from any remote (TSOP1738), stores captures to SD card, and can replay them to any compatible device.
- **IR Blaster**: Sends pre-built IR command libraries to TVs and ACs.
- **Evil Twin Framework**: Clones any nearby WiFi SSID, broadcasts at max TX power (19.5 dBm), and serves a custom HTML captive portal from SD card.
- **Credential Capture**: DNS hijacking redirects all connected traffic to the login page; credentials saved to `/EVIL_TWIN/captured.txt`.
- **Dual Display UI**: OLED 128x64 (SH1106) for menus + LCD 16x2 for live status metrics.
- **Capacitive Touch Unlock**: Touch sensor-based device unlock gesture.
- **SD Card Storage**: FAT32 SD card for password lists, IR signal captures, HTML portal pages, and scan logs.

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────┐
│        PRIMARY ESP32 (Main Controller)        │
│  OLED 128x64 │ LCD 16x2 │ SD Card Reader      │
│  IR Receiver + Transmitter                    │
│  4x Push Buttons + Touch Sensor               │
│  Menu navigation & user interface logic       │
└────────────────────┬─────────────────────────┘
                     │ UART (115200 baud)
┌────────────────────▼─────────────────────────┐
│       SECONDARY ESP32 (Specialized)           │
│  WiFi AP Mode (19.5 dBm, 8 connections)       │
│  DNS Server → Captive Portal hijacking        │
│  Web Server → Custom HTML page serving        │
│  Credential Capture → SD card logging         │
└──────────────────────────────────────────────┘
```

---

## 💻 Tech Stack

| Layer | Technology |
|:---|:---|
| **Firmware** | Arduino C++ (ESP-IDF v4.4/v5.0, Xtensa GCC) |
| **IDE** | VS Code + PlatformIO |
| **Displays** | Adafruit SH1106 (OLED), LiquidCrystal I2C (LCD) |
| **IR** | IRremoteESP8266 |
| **Networking** | ESPmDNS, DNSServer, WebServer (built-in ESP32 libs) |
| **Storage** | FAT32 SD via SPI |
| **Communication** | UART (inter-ESP), I2C (displays), SPI (SD card) |

---

## 🚀 How It Works

1. **Boot**: Primary ESP32 initializes displays, SD card, and touch sensor. A touch gesture unlocks the device.
2. **Menu**: Physical buttons navigate through three operational modes on the OLED menu.
3. **Network Mode**: Scans WiFi networks, displays results, and optionally tests password strength against a loaded SD card wordlist.
4. **IR Mode**: Captures incoming IR signals from remotes, stores them as files, and can replay any stored capture.
5. **Evil Twin Mode**: Primary sends target SSID over UART to Secondary. Secondary broadcasts the clone AP, runs DNS hijacking, serves an HTML captive portal, and streams captured credentials back to Primary for display.

---

## 🔩 Hardware Components

| Component | Description |
|:---|:---|
| 2× ESP32-WROOM-32D | Dual-microcontroller system (Primary UI + Secondary WiFi AP) |
| OLED 128x64 (SH1106) | Primary UI display (I2C) |
| LCD 16x2 (I2C) | Secondary status metric display |
| SD Card Module | Storage for wordlists, captures, captive portal pages, and logs |
| IR Receiver (TSOP1738) + IR LED | Infrared signal capture and transmission |
| 4× Push Buttons + Touch Sensor | Navigation and touch gesture unlock |
| Breadboard, Wires, LEDs, Resistors | Circuit layout and visual status indicators |
| 5V Power Module | System power supply |

---

## 🔐 Disclaimer

This device was built and tested exclusively for educational purposes and authorized security research. All network testing was performed on personally-owned hardware in controlled environments. The author is committed to ethical security practices and responsible use.
