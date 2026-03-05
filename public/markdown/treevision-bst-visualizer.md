---
---

**🌳 TreeVision — Binary Search Tree Visualizer**
## 🖥 Console-Based Data Structure Visualization Tool


> A lightweight C library that generates clear ASCII visualizations of Binary Search Trees directly in the terminal.


---

---

# 📄 Project Overview

TreeVision is a console-based C library designed to produce **clean, readable ASCII visualizations of Binary Search Trees (BSTs).**

The library automatically calculates spacing, draws connectors between nodes, and clearly marks NULL nodes to help developers and students better understand tree structures and traversal behavior.



---

**👨‍💻 Author**
### Naitik Dhiman



---

**🧠 Problem Statement**

Understanding tree data structures from raw console output is often difficult.

Many beginner implementations simply print values sequentially, which makes it hard to visualize:

        • Tree hierarchy  

        • Parent–child relationships  

        • Missing branches  

        • Structural balance of nodes  


Students frequently struggle to mentally reconstruct the logical tree structure from plain terminal output.



---

**🚀 Solution**

TreeVision provides a **console-based visualization engine** that converts Binary Search Trees into structured ASCII diagrams.

The library automatically:

        • Calculates tree height  

        • Determines node spacing dynamically  

        • Draws visual connectors between nodes  

        • Displays NULL markers for missing branches  


This makes debugging and understanding BST behavior significantly easier.



---

**🔧 Core Features**


### ⚙ Automatic Layout Engine

        • Calculates tree height  

        • Adjusts spacing dynamically  

        • Maintains readable visual structure  



### 🌳 Visual Tree Rendering

        • Uses ASCII characters to represent tree hierarchy  

        • Draws continuous connector lines between nodes  

        • Displays left and right branches clearly  



### ⭕ Explicit NULL Representation

        • Uses `NULL` markers to represent empty child nodes  

        • Prevents ambiguity in tree structure  



### 🔁 Traversal Outputs

Supports common Binary Search Tree traversal methods:

        • Inorder Traversal  

        • Preorder Traversal  

        • Postorder Traversal  



---

**🛠 Library Functions**

Include the library:

```
#include "treevision.h"
```

Available functions:

```
insertBST(root, value);
```
Insert a node into the Binary Search Tree.

```
printTreeVisual(root);
```
Print the visual ASCII representation of the tree.

```
printTraversals(root);
```
Display inorder, preorder, and postorder traversals.

```
freeTree(root);
```
Free memory allocated for the tree.



---

**⚙ Installation & Setup**

Clone the repository:

```
git clone https://github.com/Naitik615/TreeVision
```

Navigate into the directory:

```
cd TreeVision
```

Ensure the following files are present:

        • treevision.h  

        • treevision.c  


Compile your program with the library:

```
gcc myfile.c treevision.c -o myprogram
```

Run the program:

```
./myprogram
```



---

**🗒 Example Output**

Tree visualization (Optimized):

```
    100
   /   \
  20   NULL
 /  \
5    45
/ \  / \
NULL NULL 60
           / \
        NULL NULL
```

Traversals:

```
Inorder: 25 30 35 40 50 65 70 75 85
Preorder: 50 30 25 40 35 70 65 85 75
Postorder: 25 35 40 30 65 75 85 70 50
```



---

**🎯 Key Outcomes**

        • Created a reusable C library for tree visualization  

        • Simplified debugging of Binary Search Trees  

        • Improved conceptual understanding of tree structures  

        • Designed a tool useful for data structure education  



---

**📌 Learning Impact**

        • Deepened understanding of Binary Search Trees  

        • Practiced memory management in C  

        • Designed console-based visual rendering logic  

        • Built modular reusable library code  



---

**📂 Repository**

🔗 Source Code  

https://github.com/naitikdhimandev-cyber/TreeVision



---

**📦 Version**

Version: **25.1.0**