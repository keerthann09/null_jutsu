# null_jutsu

Project Name:ReadEase

Problem Statement ID: PS02EDU

Team Name:NULL_JUTSU

College Name: Shri Dharmansthala Manjunatheshwara College Of Business Management Kodialbail Mangaluru


  ReadEase: Adaptive Reading for Dyslexic Learners

**ReadEase** is a  designed to bridge the literacy gap for dyslexic learners. By combining a fully customizable reading interface with an adaptive skill-training engine, we move beyond simple accessibility to active empowerment.

---

## 🚀 The Problem

Dyslexia affects approximately **20% of the global population**, yet most digital educational content remains static and visually overwhelming. This leads to:

* **Cognitive Fatigue:** Standard layouts cause "visual crowding."
* **Low Confidence:** Static difficulty levels discourage struggling readers.
* **Access Barriers:** Tools are often expensive or lack offline capabilities.

## ✨ Key Features

* **Personalized Reading Profile:** A "First-Run" evaluation that sets baseline reading speed and preferred visual styles (font, spacing, overlays).
* **Dynamic UI Customization:** * **Fonts:** Support for OpenDyslexic and Atkinson Hyperlegible.
* **Visual Aids:** Adjustable letter spacing, line height, and high-contrast background presets.
* **Focus Mode:** A digital reading ruler to help track lines without distraction.


* **Web Speech Integration:** High-quality Read-Aloud (TTS) functionality for multi-modal learning.
* **Adaptive Skill Lab:** Exercises that adjust in real-time based on user performance to improve fluency and phonological awareness.
* **Progress Dashboard:** Visualizes improvements in reading speed (WPM), comprehension scores, and total learning time.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Application Type:** Progressive Web App (PWA) — for offline access and mobile-first experience.
* **Authentication:** [Firebase Auth](https://firebase.google.com/) (Secure user sign-in/sign-up).
* **Database:** [Supabase](https://supabase.com/) (PostgreSQL for storing user profiles, reading metrics, and library content).
* **Voice Engine:** Web Speech API (Synthesis) for text-to-speech support.

## ⚙️ Architecture

LexiLift uses a dual-backend approach to maximize hackathon efficiency:

1. **Firebase** handles the sensitive authentication handshake.
2. **Supabase** manages the relational data, ensuring that a user's progress in the "Skill Lab" is mapped accurately to their "Reading Profile."

---

## 📦 Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/lexilift-pwa.gi
cd lexilift-pwa

```


2. **Configuration:**
Create a `config.js` file (or use environment variables) to initialize your Firebase and Supabase keys:
```javascript
const firebaseConfig = { ... };
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';

```


3. **Run Locally:**
Since this is Vanilla JS, you can use **Live Server** in VS Code or any local HTTP server:
```bash
# If using Python
python -m http.server 8000

```



---

## 📈 The Adaptive Logic

The platform uses a performance-based algorithm to scale difficulty.

* If a user completes an exercise with >90% accuracy and a speed improvement of $\Delta S$, the next module introduces more complex phonemes or increased text density.
* $Progress_{score} = (\frac{Accuracy}{100}) \times WPM_{normalized}$

---

## 🚧 Challenges We Overcame

* **State Syncing:** Managing UI preferences across different sessions using Supabase real-time updates.
* **PWA Compliance:** Ensuring the manifest and service workers allow for a seamless "Install to Home Screen" experience.
* **Accessibility Design:** Balancing a modern aesthetic with strict WCAG accessibility guidelines for dyslexic users.

## 🗺️ Roadmap

* **AI Simplification:** Integration of LLMs to summarize complex academic text into "Easy-to-Read" versions.
* **Gamification:** Badges and streaks to encourage daily reading habits.
* **Teacher Portal:** Allowing educators to upload custom curriculum-aligned PDFs.

---

### **Would you like me to add a section specifically explaining how the PWA Service Worker handles offline reading for your demo?**
