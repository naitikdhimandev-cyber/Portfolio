# 🎵 DataTune — Advanced Music Player
### Data Structures Visualized in a Real GTK3 Music Player (C)

A GTK3-based desktop music player written in C that makes data structures visible — Linked Lists manage the playlist, a Stack tracks playback history, and a Queue handles upcoming tracks — all visualized in real-time as you listen.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/III-Semester_DSA_PBL/tree/main/Datatune)

---

## 🎯 Overview

Most data structure projects are academic exercises disconnected from anything real. DataTune does the opposite — it builds a fully working music player and makes the underlying data structures visible to the user while they use it. Every skip, shuffle, and repeat operation is a real Linked List traversal, Stack push, or Queue dequeue happening live. Built as a 3rd Semester DSA project in C11 with GTK3.

---

## ✨ Key Features

- **Music Playback**: MP3 and common audio format support with play, pause, skip, shuffle, repeat, and crossfade transitions.
- **Linked List Playlist**: The entire playlist is a doubly linked list — each node is a song. Skip forward/backward is pointer traversal in real-time.
- **Stack for History**: Recently played tracks use a LIFO Stack — the "back" button pops from the stack.
- **Queue for Upcoming**: Songs queued to play next use a FIFO Queue — visible and interactive.
- **Real-Time DS Visualization**: A side panel shows the current state of each data structure as music plays and operations happen.
- **User Accounts**: SQLite-backed user registration, login, and personal playlist management.
- **Friend System**: Friend management and collaborative playlist blending.
- **Audio Visualization**: Visual feedback synchronized to audio output.

---

## 🚀 How It Works

1. **Load**: User selects a folder — songs are loaded into a Linked List playlist.
2. **Play**: Current node in the Linked List plays. DS panel shows the list with current position highlighted.
3. **Skip**: Forward = `node->next`, Back = `node->prev` OR pop from Stack history.
4. **Queue**: User right-clicks a song to add to Queue (FIFO) — next plays from queue head.
5. **Visualize**: Every operation updates the data structure panel in real-time — educational and functional simultaneously.

---

## 🏗️ Architecture

```
[GTK3 UI Layer]         → Desktop interface, menus, controls
[Application Logic]     → Playback engine, playlist management
[Data Structure Layer]
    ├── Linked List     → Playlist (doubly linked, circular option)
    ├── Stack           → Playback history (LIFO)
    └── Queue           → Upcoming tracks (FIFO)
[Database Layer]        → SQLite: users, playlists, song metadata
[Networking]            → libcurl (future streaming)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Language** | C (C11) |
| **GUI Framework** | GTK3 |
| **Database** | SQLite3 |
| **Networking** | libcurl |
| **Build System** | Make |

---

## 🧩 Challenges & Key Learnings

- **Memory management in C**: Dynamically allocated Linked List nodes, Stack frames, and Queue entries without garbage collection — every free() had to be tracked manually. Learned to use Valgrind for memory leak detection.
- **GTK3 threading**: GTK is not thread-safe — audio playback runs on a background thread but all UI updates must dispatch back to the main GTK thread via `g_idle_add()`. Took significant debugging to understand this model.
- **Crossfade implementation**: Smooth audio crossfade between tracks required mixing two audio streams simultaneously during a 3-second overlap window — implemented with a linear volume ramp on both tracks.