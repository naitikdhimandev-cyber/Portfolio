# 🍎 AI Food Co-Pilot
### AI Food Label & Health Assistant — ENCODE 2026 Hackathon

An AI-powered food label analysis system that scans ingredient lists from packaging photos and explains the health impact of each ingredient through natural, conversational voice reasoning — built for the ENCODE 2026 Hackathon.

🔗 [GitHub Repository](https://github.com/CypherChaser/Encode_2026) &nbsp;&nbsp; 🌐 [Live Demo](https://cypherchaser.github.io)

---

## 🎯 Overview

Food labels are legally required but practically unreadable for most consumers. "Sodium benzoate," "carrageenan," "maltodextrin" — most people skip the ingredients list because it's overwhelming. AI Food Co-Pilot solves this by letting users scan any food label and ask questions in plain English — getting clear, reasoning-driven explanations about what each ingredient actually does to their body.

---

## ✨ Key Features

- **Camera Label Scanning**: Uses the Web Media API to capture food packaging directly from the device camera.
- **AI Ingredient Reasoning**: Sends ingredient data to an OpenAI reasoning model that explains health impacts in conversational language — not a database lookup.
- **Multi-Turn Conversation**: Users can ask follow-up questions ("Is this safe for diabetics?", "What does carrageenan do?") within the same session context.
- **Session-Based Memory**: Backend stores product context per session so the AI can reason across multiple questions without repetition.
- **No Persistent Data Storage**: Sessions expire after interaction — no user data is stored on the server.
- **Mobile-First**: Designed for phones — the primary use case is standing in a supermarket aisle scanning packaging.

---

## 🚀 How It Works

1. **Scan**: User points their phone camera at a food label — the app captures the ingredient list.
2. **Session**: Backend creates a temporary session ID and stores the product context in memory.
3. **Reason**: The AI model processes the full ingredient list and generates a plain-language health explanation.
4. **Converse**: User asks follow-up questions — the AI continues reasoning within the same session context.
5. **Expire**: Session clears after the interaction ends — no data is persisted.

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Frontend** | React, Web Media API (camera) |
| **Backend** | Node.js, Express.js |
| **AI Layer** | OpenAI API (reasoning model) |
| **Session Management** | Server-side context memory |
| **Hosting** | GitHub Pages (frontend) |

---

## 🧩 Challenges & Key Learnings

- **Prompt engineering for reasoning**: Getting the AI to explain *why* an ingredient is harmful (not just label it) required carefully structured system prompts with reasoning-first instructions.
- **Session context limits**: Learned to trim session context when it grew too large to avoid token limit errors while preserving the conversation thread.
- **Hackathon constraints**: Delivered a full working system — camera scanning, AI reasoning, multi-turn chat — in a single hackathon session as a 4-person team.

---

**👥 Team Cypher Chasers** — Naitik Dhiman (Lead), Akansh, Ashish Rautela, Sahil Negi