# 🤖 CodeDoc AI
### AI-Powered Code Documentation Generator

An AI tool that converts raw source code into structured, professional documentation — explaining purpose, logic flow, time/space complexity, and improvement suggestions — powered by GPT-4o-mini.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber/CodeDoc-AI/tree/main/CodeDoc%20AI)

---

## 🎯 Overview

Developers write code fast and document it never. CodeDoc AI fixes this by taking any raw source code as input and generating clean, structured documentation automatically — explaining what the code does, how it works, its algorithmic complexity, and what could be improved. The output is formatted in readable markdown and can be exported as a PDF.

---

## ✨ Key Features

- **Multi-Language Support**: Paste code in any language — JavaScript, Python, C, Java, and more.
- **Structured Documentation Output**: Generates purpose, detailed logic explanation, inputs/outputs, time/space complexity, and improvement suggestions.
- **Code Complexity Analysis**: Classifies code as Beginner / Intermediate / Advanced and breaks down Big-O complexity per function.
- **PDF Export**: Export the generated documentation as a downloadable PDF via html2pdf.js.
- **Clean Editor UI**: Split-panel interface with code input on left, formatted documentation preview on right.

---

## 🚀 How It Works

1. **Paste Code**: User pastes their source code into the editor panel.
2. **Process**: Backend sends the code to GPT-4o-mini with a structured documentation prompt.
3. **Generate**: AI returns a complete documentation object — purpose, explanation, complexity, suggestions.
4. **Preview**: Documentation renders in the right panel in formatted markdown.
5. **Export**: User downloads the documentation as a PDF with one click.

---

## 🏗️ Architecture

```
[Code Editor Input]
        │
        ▼
[Flask Backend] ──► GPT-4o-mini API
        │
        ▼
[Documentation Parser]
        │
        ▼
[Markdown Preview Panel] ──► [html2pdf.js Export]
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Backend** | Python, Flask |
| **AI** | OpenAI GPT-4o-mini |
| **Frontend** | HTML5, CSS3, JavaScript |
| **PDF Export** | html2pdf.js |

---

## 🧩 Challenges & Key Learnings

- **Prompt engineering for structured output**: Getting GPT to reliably return documentation in a consistent parseable format (not free-form text) required iterating on system prompts with strict JSON schemas.
- **Complexity edge cases**: AI sometimes hallucinates O(n²) for O(n) code. Added a post-processing validation step that cross-checks the AI's claim against loop nesting depth in the code.
- **PDF formatting**: html2pdf.js struggles with dark-mode CSS — learned to inject a print-safe light stylesheet at export time to get clean output.