# 🔬 GAN-Based Facial Image Inpainting — Comparative Study

A deep learning research study comparing three GAN-based approaches for reconstructing damaged and masked facial regions. Models evaluated: Pix2Pix GAN, Partial Convolution, and MI-GAN — all tested on the CelebA dataset.

---

## 🎯 Overview

Image inpainting is a computer vision technique for reconstructing missing or damaged regions of an image. This research conducts a head-to-head comparison of three architecturally distinct models on 256×256 celebrity facial images. The goal was to evaluate which approach best preserves facial structure, texture realism, and identity consistency when reconstructing masked regions.

---

## ✨ Key Contributions

- **Multi-Model Benchmark**: Systematic comparison of three GAN architectures under identical conditions (same dataset, same masking strategy, same evaluation criteria).
- **CelebA Dataset**: 200,000+ celebrity facial images at 256×256 resolution used as the evaluation corpus.
- **Masking Strategy**: Central square masks applied to simulate realistically missing facial features.
- **Evaluation Criteria**: Reconstruction quality, texture generation, facial structure preservation, and visual realism.

---

## 🏗️ Model Architecture Comparisons

### 1. Pix2Pix GAN (Conditional GAN)
- Learns paired mapping between masked inputs and target ground truths.
- Fast and computationally light.
- Minor blurriness observed around high-frequency texture boundaries.

### 2. Partial Convolution (PConv)
- Re-normalizes convolution steps to operate strictly on unmasked valid pixels.
- Preserves mask border continuity and produces smooth transitions.
- Stronger boundary-handling than standard convolutions.

### 3. MI-GAN (Multi-Stage Inpainting GAN)
- Leverages deep context learning to synthesize high-resolution facial textures.
- **Best Performer** — preserved facial symmetry, fine detail, and identity consistency most effectively.

---

## 💻 Tech Stack

| Layer | Technology |
|:---|:---|
| **Deep Learning Framework** | PyTorch |
| **Dataset** | CelebA (200K+ facial images, 256×256) |
| **Computer Vision** | OpenCV |
| **Models** | Pix2Pix GAN, Partial Convolution, MI-GAN |
| **Evaluation** | Visual quality assessment + structural analysis |

---

## 🚀 How It Works

1. **Input**: A 256×256 facial image from CelebA is selected.
2. **Masking**: A central square mask is applied to simulate missing facial data.
3. **Inpainting**: The masked image is passed through each of the three models independently.
4. **Evaluation**: Reconstructed outputs are compared for texture quality, boundary smoothness, and facial identity preservation.
5. **Analysis**: Results are compiled into a comparative report with visual examples.

---

## 📊 Key Findings

| Model | Reconstruction Quality | Speed | Boundary Smoothness |
|:---|:---|:---|:---|
| **MI-GAN** | ⭐⭐⭐ Best | Slowest | Excellent |
| **Partial Convolution** | ⭐⭐ Good | Medium | Very Good |
| **Pix2Pix GAN** | ⭐ Baseline | Fastest | Acceptable |

MI-GAN generated the highest quality reconstructions with realistic skin textures and structural alignment. Partial Convolution outperformed standard convolutions along masked border boundaries. Pix2Pix GAN offered the fastest inference with acceptable baseline quality.
