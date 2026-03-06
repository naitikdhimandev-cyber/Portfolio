---
---

**🏏 3D Cricket Simulator**
## 🎮 Interactive Web-Based Cricket Batting Game


> A fully interactive 3D cricket batting simulator built using Three.js and WebGL, replicating a realistic cricket experience with physics simulation, dynamic camera systems, multiple ball types, and real-time mobile sensor integration.


---

---

**👨‍💻 Role**
### Full Stack Developer

Responsible for:

        • Designing the complete 3D stadium environment  
        • Implementing custom cricket ball physics logic  
        • Building WebSocket communication for sensor input  
        • Developing real-time gameplay mechanics and scoring system  



---

**🧠 Problem Statement**

Most browser-based sports games lack immersive and realistic gameplay mechanics.

Common limitations include:

        • Simplified or unrealistic physics simulation  
        • Lack of immersive 3D environments  
        • Limited player control mechanisms  
        • No real-time hardware integration  


Traditional web games rely heavily on keyboard inputs and simple logic, reducing realism and engagement.



---

**🚀 Solution**

This project introduces a **fully interactive 3D cricket batting simulator** where players face AI bowlers inside a dynamic stadium environment.

The system includes:

        • Realistic cricket ball physics simulation  
        • Real-time bat control using mobile gyroscope sensors  
        • Multiple cinematic camera perspectives  
        • Various cricket delivery types  
        • Immersive stadium lighting and visual effects  


Players can use either **keyboard controls** or **mobile sensors connected through WebSockets** to swing the bat.



---

**🔧 Core Features**


### ⚙️ Realistic Physics Engine

        • Gravity-based ball trajectory simulation  
        • Air drag and ground friction modeling  
        • Ball spin and bounce mechanics  
        • Accurate bat-ball collision reflection  



### 🏏 Multiple Ball Types

        • Normal Delivery  
        • Fast Ball  
        • Bouncer  
        • Yorker  
        • Off Spin  
        • Leg Spin  
        • Practice Wicket Ball  



### 🎥 Dynamic Camera System

        • Field View  
        • First-Person Batting View  
        • Ball Tracking Camera  



### 📊 Scoring System

        • Boundary detection (4 runs)  
        • Over-boundary detection (6 runs)  
        • Ball count and wicket tracking  



### ✨ Visual Effects

        • Ball trail particle effects  
        • Boundary celebration effects  
        • Stadium lighting system  
        • Realistic pitch and ground textures  



---

**📱 Sensor-Based Bat Control**

One of the most unique features of the game is **real-time mobile sensor integration**.

Players can connect their phone to the game via WebSockets and use the device as a **virtual cricket bat controller**.

Features include:

        • Gyroscope-based bat angle control  
        • Real-time orientation tracking  
        • Vibration feedback for shot impact  
        • Low-latency communication  



This creates a far more immersive gameplay experience compared to traditional keyboard-only controls.



---

**🛠 Tech Stack**


### Frontend

        • HTML5  
        • CSS3  
        • JavaScript (ES6 Modules)  



### 3D Rendering

        • Three.js  
        • WebGL  



### Physics Engine

        • Custom physics simulation logic  



### Networking

        • WebSockets  



### Development Tools

        • Vite  



### Server

        • Node.js WebSocket Server  



### Assets

        • GLTF and OBJ 3D models  
        • Web Audio API  



---

**🏗 System Architecture**

The game operates through several modular layers.

        1️⃣ Rendering Layer  
        Three.js scene rendering, camera control, and lighting.


        2️⃣ Game Logic Layer  
        Ball physics simulation, player input processing, and collision detection.


        3️⃣ Networking Layer  
        WebSocket server enabling real-time sensor communication.


        4️⃣ Input Layer  
        Supports both keyboard controls and mobile gyroscope input.



---

**🎮 Gameplay Overview**

Players bat against incoming deliveries from an AI-controlled bowler.


### Desktop Controls

        • A / D → Rotate bat angle  
        • W / S → Swing bat  



### Mobile Controls

        • Phone gyroscope controls bat orientation  
        • WebSocket communication enables real-time bat movement  



### Scoring System

        • Hit ball to boundary → 4 runs  
        • Hit ball over boundary → 6 runs  
        • Avoid getting bowled or caught  



---

**🌟 Unique Features**

        • Realistic cricket stadium environment  
        • Phone-controlled bat mechanics  
        • Dynamic ball trajectory and spin simulation  
        • Multiple cinematic camera perspectives  
        • Particle-based ball trail visualization  
        • Stadium lighting and visual effects  



---

**🎯 Key Outcomes**

        • Demonstrated advanced browser-based 3D game development  
        • Built a realistic physics-based sports simulation  
        • Implemented real-time hardware interaction using WebSockets  
        • Created an immersive gameplay experience using web technologies  



---

**📌 Learning Impact**

        • Advanced Three.js and WebGL rendering techniques  
        • Real-time networking with WebSockets  
        • Physics simulation for interactive environments  
        • Sensor integration for immersive gameplay  
        • Optimization techniques for browser-based 3D games  



---

**📂 Repository**

🔗 Source Code  

https://github.com/naitikdhimandev-cyber/3D_Gyro_Cricket