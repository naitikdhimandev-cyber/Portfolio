---
---

**🍎 FairSplit — Smart Expense Splitting App**
## 🏆 Apple Swift Student Challenge 2026 | Solo Project Submission


> An offline-first iOS application that enables fair expense splitting using item-level consumption tracking, receipt OCR, and automated settlement calculations.


---

---

# 🍎 Apple Swift Student Challenge 2026

This project was developed as a **solo submission for the Apple Swift Student Challenge 2026.**

The application demonstrates practical iOS engineering concepts including:

        • State management  
        • Receipt OCR integration  
        • Algorithmic cost distribution  
        • Clean MVVM architecture  



---

**👨‍💻 Role**
### Solo Developer

Responsible for:

        • Full system architecture design  
        • UI development using SwiftUI  
        • Expense calculation algorithms  
        • Receipt scanning and OCR integration  
        • Data persistence and state management  



---

**🧠 Problem Statement**

Splitting expenses in group activities such as trips, shared apartments, or events often becomes confusing and unfair when costs are divided equally without considering individual consumption.

Traditional expense apps usually:

        • Split costs equally  

        • Ignore item-level consumption  

        • Require manual calculations  

        • Lack receipt automation  


This creates friction and inaccurate settlements between group members.



---

**🚀 Solution**

FairSplit introduces a smarter way to manage shared expenses by allowing users to track expenses at the **item level** instead of splitting everything equally.

Users can:

        • Create groups for trips or shared expenses  

        • Add members to each group  

        • Record events where expenses occur  

        • Assign who consumed which items  

        • Automatically calculate fair balances  

        • Generate optimized settlement suggestions  


The system ensures **transparency and fairness in expense distribution.**



---

**🔧 Core Features**


### 👥 Group Management

        • Create and manage multiple expense groups  

        • Add and manage group members  

        • Organize expenses by group activities  



### 📅 Event-Based Expense Tracking

        • Record events such as dinners, groceries, or activities  

        • Track who paid for each event  



### 🧾 Item-Level Cost Distribution

        • Add items with price and quantity  

        • Assign portions consumed by each member  

        • Automatically calculate fair cost allocation  



### 📷 Receipt Scanning (OCR)

        • Scan receipts using the device camera  

        • Extract items using Apple Vision framework  

        • Review and edit detected items before adding  



### 💰 Smart Settlement Calculation

        • Automatically calculate balances between members  

        • Generate minimal transactions required to settle debts  



### 📊 Expense Insights

        • Visualize spending distribution using charts  

        • Understand group spending patterns  



### 🔒 Privacy First Design

        • Fully offline system  

        • No internet connection required  

        • All data stored locally on the device  



### 💾 Automatic Data Persistence

        • Trip and expense data saved using Codable + UserDefaults  

        • Seamless state restoration  



---

**🛠 Tech Stack**

        • SwiftUI  

        • Combine  

        • Vision Framework (OCR)  

        • Swift Charts  

        • UIKit Integration  

        • Codable  

        • UserDefaults  



---

**🏗 System Architecture**

The application follows the **Model–View–ViewModel (MVVM)** architecture.

        1️⃣ Data Models Layer  
        Trip, Event, Item, Person models.


        2️⃣ ViewModel Layer  
        Expense logic and settlement calculations.


        3️⃣ UI Layer  
        SwiftUI views and user interaction.


        4️⃣ Service Layer  
        OCR processing and receipt parsing.


This architecture keeps business logic separate from UI while enabling reactive updates and maintainable code structure.



---

**🎯 Key Outcomes**

        • Built a complete iOS application using SwiftUI  

        • Implemented receipt scanning with on-device OCR  

        • Designed an algorithm for optimized expense settlement  

        • Demonstrated clean architecture using MVVM  

        • Delivered a fully functional offline expense management system  



---

**📌 Learning Impact**

        • Building scalable iOS applications using SwiftUI  

        • Designing reactive data flows with Combine  

        • Implementing OCR pipelines using Vision framework  

        • Architecting maintainable mobile applications  

        • Applying algorithmic thinking to financial calculations  



---

**📂 Repository**

🔗 Source Code  

https://github.com/naitikdhimandev-cyber/FairLedger