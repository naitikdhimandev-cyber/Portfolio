# 🏏 3D Cricket Simulator
### Real-Time Browser Cricket Game with Mobile Gyroscope Control

A fully interactive 3D cricket batting simulator built with Three.js, WebGL, and a real-time WebSocket motion engine. Players face AI bowlers in a dynamic stadium, using their mobile phone's gyroscope as a virtual wireless bat controller with zero-latency 60fps quaternion smoothing and haptic vibration feedback.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/3D_Gyro_Cricket)

---

## 🎯 Overview

Most web games rely on keyboard controls. This simulator turns any smartphone into a physical wireless bat controller. Built on Three.js and custom physics, the system runs an isolated **Motion System** backend that bridges mobile DeviceOrientation sensors directly into the 3D scene over WebSockets — complete with HTTPS/WSS encryption for iOS Safari support, real-time calibration, and impact vibration feedback.

---

## ✨ Key Features

- **Mobile Gyroscope Motion Control**: Connects any smartphone over Wi-Fi to control the 3D bat in real time using raw device orientation sensors.
- **HTTPS & Secure WebSockets (WSS)**: Dual HTTP/HTTPS server architecture (`8765`/`8768`) engineered specifically to comply with iOS Safari's strict HTTPS requirement for DeviceOrientation access.
- **60fps Render-Loop Slerp Smoothing**: Smooths bat rotation in the rendering loop via Spherical Linear Interpolation (`wsSmoothing = 0.25`) rather than per network packet for fluid, jitter-free motion.
- **Real-Time Haptic Feedback**: Triggers target phone vibration alerts upon bat-ball impact over WebSocket (`haptics.js`).
- **Dynamic Orientation Calibration**: Single-tap calibration aligns phone orientation with a straight-bat stance.
- **7 Delivery Types & Physics**: Fast, Bouncer, Yorker, Off-Spin, Leg-Spin, Normal, and Practice Wicket Ball with spin drift and ground bounce mechanics.
- **3 Camera Perspectives**: Field View, First-Person Batting View (with FPV helmet overlay), and Ball Tracking Camera.
- **Auto-Discovery Network Config**: Served via `/api/config` to resolve local Wi-Fi IP endpoints dynamically without manual configuration.

---

## 🚀 How It Works

1. **Start Server**: Node backend starts dual HTTP/HTTPS servers and WebSocket channels.
2. **Pair Phone**: Player opens the game on laptop and scans/opens the HTTPS URL on their phone.
3. **Calibrate**: Player holds phone like a straight bat and taps **Calibrate** — setting initial reference quaternions.
4. **Swing & Pitch**: AI bowler delivers — user swings their phone; 60fps slerp transforms gyro Euler angles ($Z-X'-Y''$) into bat quaternions.
5. **Hit & Haptics**: On collision, trajectory vectors compute runs (4s/6s) and a haptic pulse triggers on the phone.

---

## 🏗️ Architecture

```
[Phone Browser (phone.html)] 
      ├── DeviceOrientation Sensor (Euler Z-X'-Y'')
      └── Haptic Feedback Receiver
             │
             │ HTTPS / WSS (Port 8768 - iOS Compliant)
             ▼
[Node.js Motion Server (start.cjs)]
      ├── Auto-IP Config API (/api/config)
      └── Dual HTTP (8765) + HTTPS (8768) + WS (8766/8768)
             │
             │ WebSocket Bridge
             ▼
[Laptop Browser (game.js + bat-scene.js)]
      ├── 60fps Quaternion Slerp Smoother (wsSmoothing)
      ├── Three.js 3D Stadium & Player Model
      ├── Physics Engine (Collision & Spin)
      └── Audio & Camera Systems
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **3D Engine & Graphics** | Three.js, WebGL, HTML5 Canvas |
| **Networking & Motion** | Node.js, WebSockets (ws), HTTPS / TLS, WSS |
| **Sensor Processing** | DeviceOrientation API, Euler-to-Quaternion Math, Slerp |
| **Mobile Haptics** | Web Vibration API (`navigator.vibrate`) |
| **Assets & Audio** | GLTF / OBJ 3D Models, Web Audio API |
| **Build & Dev Tool** | Vite, Express.js |

---

## 🧩 Challenges & Key Learnings

- **iOS Safari Motion Restrictions**: iOS Safari blocks `DeviceOrientation` on standard HTTP. Solved by implementing self-signed TLS certificates for dual HTTP/HTTPS (`8765`/`8768`) and Secure WebSockets (`wss://`).
- **Network Jitter vs Smooth Motion**: Updating bat rotation directly on WebSocket packet arrival caused stuttering. Decoupled packet parsing from rendering — network packets update target quaternions while the 60fps render loop interpolates towards target via `slerp`.
- **Gyroscope Axis Mapping**: Mapping 3-axis phone tilt to realistic cricket bat swings required custom Euler transformation matrix ($90^\circ X + 180^\circ Z$) and initial offset calibration.