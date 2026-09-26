# 🚌 Bus Reservation System
### Command-Line Ticket Booking System in C

A fully functional terminal-based bus reservation system built in C implementing user authentication, seat management, booking lifecycle, and ticket generation — developed as a 2nd Semester B.Tech project.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/II-Sem_PBL_Bus_Reservation_System/tree/main/II-Sem_PBL_Bus_Reservation_System)

---

## 🎯 Overview

This project demonstrates core systems programming concepts applied to a real-world use case. The system lets passengers register, search available buses, book and cancel tickets, and view their booking history — all through an interactive CLI. Admins can manage bus records, view all bookings, and generate passenger manifests. Data is persisted using file I/O so the system survives restarts.

---

## ✨ Key Features

- **User Authentication**: Passenger registration and login with credential validation.
- **Bus Search**: Filter available buses by route, date, and seat availability.
- **Seat Booking**: Interactive seat selection with real-time availability checking.
- **Ticket Generation**: Formatted ticket output with PNR, route, seat number, and fare.
- **Cancellation & Refunds**: Passengers can cancel tickets with booking record updates.
- **Admin Panel**: Manage bus schedules, view all bookings, generate passenger lists.
- **File Persistence**: All user, bus, and booking data stored in structured files — persists across sessions.

---

## 🚀 How It Works

1. **Login/Register**: User creates an account or logs in with credentials.
2. **Search**: Enter source, destination, and date — system lists available buses with seat counts.
3. **Book**: Select a bus, choose a seat — PNR generated and ticket printed.
4. **Cancel**: Enter PNR to cancel — booking record updated, seat freed.
5. **Admin**: Admin logs in to add/remove buses, view all bookings, or generate manifests.

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Language** | C (C11) |
| **I/O** | Standard terminal (CLI) |
| **Data Storage** | File I/O (structured text files) |
| **Build** | GCC compiler |

---

## 🧩 Challenges & Key Learnings

- **Concurrent seat conflicts**: Two users selecting the same seat required file-locking logic to prevent double booking — first practical lesson in race conditions.
- **File structure design**: Designing flat-file storage schemas (user records, bus records, booking records) that could be reliably parsed and updated taught real database schema thinking.
- **C string handling**: Managing dynamic strings safely in C without buffer overflows was a constant discipline — learned to use `strncpy`, `fgets`, and proper bounds checking throughout.