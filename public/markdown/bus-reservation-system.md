---
---

**🚌 Bus Reservation System (C Language)**
## 🎓 Academic Project — B.Tech CSE (2nd Semester)


> A command-line based bus reservation management system built using the C programming language that simulates a real-world ticket booking workflow including authentication, booking management, and reservation lifecycle handling.


---

---

# 🎓 Academic Context

Developed as a **semester project during B.Tech CSE (2nd Semester)** to demonstrate understanding of:

        • Modular C programming  
        • File-based data storage  
        • Authentication systems  
        • Real-world application logic  



---

**👨‍💻 Role**
### Individual Developer

Responsible for:

        • Designing the overall system architecture  
        • Implementing authentication logic  
        • Developing ticket booking workflows  
        • Managing reservation cancellation and confirmation logic  
        • Creating the command-line navigation interface  



---

**🧠 Problem Statement**

Traditional reservation systems require structured workflows for:

        • User authentication  
        • Trip discovery  
        • Ticket booking  
        • Reservation management  
        • Cancellation and confirmation handling  


The goal of this project was to simulate a simplified **bus ticket reservation system** that allows users to manage bookings efficiently through a command-line interface.



---

**🚀 Solution**

Developed a modular command-line application where users can:

        • Register or log in to the system  
        • Browse available bus trips  
        • Book tickets  
        • View existing reservations  
        • Cancel bookings  
        • Finalize confirmed tickets  


The system maintains structured booking records and handles the full reservation lifecycle.



---

**🔧 Core Features**


### 👤 User Authentication

        • Secure login system  
        • New user registration  
        • Session-based interaction  



### 🎫 Ticket Booking

        • View available trips  
        • Book bus tickets  
        • Manage multiple bookings  



### 📂 Reservation Management

        • View booked tickets  
        • Cancel reservations  
        • Finalize ticket confirmation  



### 🛠 Administrative Capabilities

        • Add new bus routes  
        • Manage schedules  
        • View booking records  



---

**🛠 Tech Stack**

        • C Programming Language  
        • GCC Compiler  
        • File-Based Data Storage  
        • Modular Header-Based Architecture  



---

**🏗 System Architecture**

The application follows a **modular architecture** with separate functional components.

        1️⃣ Authentication Module  
        → Handles user login and registration.


        2️⃣ Booking Module  
        → Manages ticket booking workflow.


        3️⃣ Cancellation Module  
        → Handles booking cancellation.


        4️⃣ Confirmation Module  
        → Finalizes ticket reservations.


        5️⃣ Trip Management Module  
        → Maintains bus trip information.



---

**📂 Project Structure**

```
Bus Reservation System/
├── authentication.c
├── booking.c
├── cancellation.c
├── confirmed.c
├── trip.c
├── main.c
├── header/
│   ├── authentication.h
│   ├── booking.h
│   ├── cancellation.h
│   ├── confirmed.h
│   └── trip.h
├── files/
└── demo_photos/
```

---

**⚙️ Compilation**

Compile the system using GCC:

```
gcc -o bus_system main.c authentication.c booking.c cancellation.c confirmed.c trip.c
```

Run the program:

```
./bus_system
```



---

**🎯 Key Outcomes**

        • Demonstrated modular C program design  

        • Implemented a functional CLI-based reservation workflow  

        • Applied file handling for persistent data storage  

        • Built a structured multi-module application  



---

**📌 Learning Impact**

        • Strengthened understanding of C programming fundamentals  

        • Learned modular software architecture  

        • Practiced file handling for persistent data storage  

        • Developed structured CLI interaction design  



---

**📂 Repository**

🔗 Source Code  

https://github.com/naitikdhimandev-cyber/II-Sem_PBL_Bus_Reservation_System/tree/main/II-Sem_PBL_Bus_Reservation_System