# 🎙️ AI Customer Support & Voice Automation System
### 🏆 2nd Position — ENCODE 2025 | IIT Guwahati Hackathon

A dual-purpose AI platform that handles both outbound promotional calls and inbound customer support using real-time conversational voice AI — simulating natural human interaction without a human agent.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/IITG-2nd.Pos._EnCode_2025/tree/main/IITG-2ndPos_EnCode_2025)

---

## 🎯 Overview

Modern businesses struggle to scale customer communication without ballooning support costs. This system addresses both sides of that problem — AI that initiates outbound promotional calls (asking if it's a good time to talk, explaining products, booking orders) and AI that handles inbound support queries (identity verification, order tracking, contextual resolution). All interactions happen via real-time voice using Web Speech API and text-to-speech synthesis.

**🏆 Secured 2nd Position at ENCODE 2025 — IIT Guwahati Hackathon**

---

## ✨ Key Features

- **Promotion AI**: Initiates outbound conversations, presents product info dynamically, handles objections contextually, generates order IDs on booking.
- **Support AI**: Handles inbound queries, verifies user identity before service, resolves order tracking and product questions.
- **Voice Interaction**: Speech-to-text user input + AI-synthesized voice responses — full conversation in voice with no typing required.
- **Context-Aware Responses**: Maintains conversation history within a session so the AI doesn't repeat itself or lose context mid-call.
- **Human-Like Tone**: GPT prompt engineering crafted for natural pacing, polite interruptions, and realistic conversational flow.

---

## 🚀 How It Works

1. **Outbound mode**: AI initiates conversation, checks availability, pitches product, handles Q&A, and books the order with a generated order ID.
2. **Inbound mode**: Customer contacts support — AI verifies identity, reads context, and resolves the query conversationally.
3. **Voice loop**: Web Speech API captures user speech → text sent to backend → GPT generates response → text-to-speech plays back → loop continues.

---

## 🏗️ Architecture

```
[Web Interface]
      │
      ▼
[Web Speech API] ──► Speech-to-Text
      │
      ▼
[Node.js + Express Backend]
      │
      ▼
[OpenAI GPT API] ──► Contextual response generation
      │
      ▼
[Text-to-Speech Output] ──► Plays back to user
      │
[Logic Layer] ──► Order booking, identity check, session tracking
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **AI** | OpenAI API (GPT) |
| **Voice Input** | Web Speech API (Speech-to-Text) |
| **Voice Output** | AI Text-to-Speech synthesis |
| **Data** | JSON-based session and order storage |

---

## 🧩 Challenges & Key Learnings

- **Latency in voice loop**: GPT response + TTS playback needs to feel natural. Added typing indicators and pre-buffered TTS to reduce dead air between turns.
- **Conversation state management**: Keeping the AI "in character" as a customer rep across multiple turns required careful system prompt design and session context trimming.
- **Hackathon delivery**: Built and demoed a fully working voice AI system — two modes, live interaction, order booking — under a tight deadline as team lead.

---

**👥 Team** — Naitik Dhiman (Team Leader)