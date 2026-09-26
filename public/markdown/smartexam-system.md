# 🎓 SmartExam System — AI Proctoring & Blockchain Verification
### Desktop Examination Platform with Vision Proctoring & Blockchain Hashing

A Java-based desktop examination platform featuring real-time OpenCV computer vision proctoring and 256-bit cryptographic blockchain certificate hashing to prevent academic dishonesty and diploma forgery.

🔗 [GitHub Repository](https://github.com/naitikdhimandev-cyber)

---

## 🎯 Overview

Remote online examinations face challenges with student cheating, unauthorized absence, and fraudulent credential generation. SmartExam System addresses these issues by running real-time video proctoring during exams and hashing issued certificates onto a cryptographic block ledger for instant employer verification.

---

## ✨ Key Features

- **Real-Time Vision Proctoring**: Uses OpenCV computer vision to detect gaze deviation, multiple faces, or candidate absence during exams.
- **Cryptographic Certificate Blockchain**: Issues 256-bit hashed digital certificates stored on an immutable ledger.
- **Desktop Examination Engine**: Secure Java-based test interface with timer, auto-submission, and randomized question banks.
- **Local SQLite Storage**: Encrypted user profiles, test logs, and proctoring violation alerts.

---

## 🚀 How It Works

1. **Authentication**: Student logs in and completes pre-exam webcam check.
2. **Proctored Session**: OpenCV actively analyzes webcam stream while student answers questions.
3. **Automated Evaluation**: Answers are scored and proctoring violation logs are appended to the candidate record.
4. **Certificate Generation**: Passed exams generate a SHA-256 hash block on the verification ledger.

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Core Application** | Java (JavaFX / Swing GUI) |
| **Computer Vision** | OpenCV Java Bindings |
| **Blockchain** | Java SHA-256 Cryptographic Hash Engine |
| **Database** | SQLite3 |

---

## 🧩 Challenges & Key Learnings

- **OpenCV Integration in Java**: Managing native JNI memory bindings for OpenCV frame processing without causing Java heap crashes during long exam sessions.
- **False-Positive Reduction**: Fine-tuning face detection thresholds and temporal frame buffers to distinguish natural head movement from actual cheating behavior.
