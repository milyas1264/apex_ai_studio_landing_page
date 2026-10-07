# 🚀 Apex AI Studio - Next-Gen Intelligence Landing Page

A modern, high-performance, and fully responsive landing page built for **Apex AI Studio**, a fictional enterprise artificial intelligence startup. The page features dark-mode aesthetics, glowing gradients, glass morphism UI elements, canvas particle animations, and interactive JavaScript components.

## ✨ Features

* **📱 Fully Responsive Design**: Built with desktop-first design principles and adapted seamlessly for mobile and tablet screens.

* **🎨 Dark Mode & Glass morphism Aesthetic**: Styled using Tailwind CSS with futuristic gradients, frosted glass UI components, and ambient lighting effects.

* **🍔 Interactive Mobile Navigation**: Smooth slide-down menu with a hamburger menu button toggling dynamically via JavaScript.

* **🕸️ Live Canvas Particle Network**: Dynamic background particle connections rendered via HTML5 Canvas in the hero preview block.

* **⚡ Interactive Neural Prompt Simulator**: Live terminal-style interactive demo allowing users to test sample AI response prompts.

* **💬 Testimonials & Features Grid**: Clean multi-card displays highlighting enterprise key features and customer reviews.

* **📧 Working Feedback Form & Toast Notification**: Contact form logic complete with floating dynamic toast alerts upon submission.

* **🎯 Smooth Scrolling**: Native CSS smooth scrolling across all internal navigation anchor links.

## 🛠️ Tech Stack

* **HTML5**: Semantic markup structure.

* **Tailwind CSS (v3 CDN)**: Utility-first styling, grid layouts, animations, and custom theme extensions.

* **Vanilla JavaScript (ES6+)**: Canvas animations, DOM manipulation, mobile menu toggle, and interactive demo engines.

* **Google Fonts**: `Inter` font family for modern tech UI typography.

## 📁 File Structure

```
.
├── index.html   # Main single-file document containing HTML, CSS configuration & JavaScript
└── README.md    # Project documentation and quick-start guide

```

## 🚀 Quick Start / How to Run

Because this project is built as a single-file solution using standard Web APIs and Tailwind CDN, no build steps or `npm` installations are required!

1. **Clone or Download** the project repository.

2. Open `index.html` directly in any modern web browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).

3. Alternatively, launch it using a local development server like VS Code **Live Server**.

## 💻 Customization & Configuration

### Updating Tailwind Theme & Colors

Tailwind colors and custom keyframe animations are defined inside the `<script>` tag in the header:

```
tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: {base: '#0B0F19', card: '#111827', border: '#1F2937'},
                accent: {purple: '#8B5CF6', cyan: '#06B6D4', amber: '#F59E0B'}
            }
        }
    }
}

```

### Modifying Hero Canvas Animation

Adjust particle counts or node connection thresholds in the JavaScript section of `index.html`:

```
const node Count = 35; // Adjust total particle count
const dist. = Math. sqrt (dx * dx + dy * dy);
if (dist. < 120) {...} // Adjust maximum line connection distance

```

## 📄 License

This project is open-source and free to use for personal or commercial portfolio projects.