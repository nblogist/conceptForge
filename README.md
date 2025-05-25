# ConceptForge Mini-Demo

Interactive browser demo of concept blending in MeTTa, built for the DeepFunding RFP **“Experiment with Concept Blending in MeTTa.”**

Live demo: https://concept-forge.vercel.app/

RFP details: https://deepfunding.ai/rfp/experiment-with-concept-blending-in-metta/

---

## 🚀 What is this?

ConceptForge shows the “aha” moment of creativity inside an AGI: taking two separate ideas and fusing them into a novel concept.  
Humans do this all the time (e.g. “flying” + “car” → **flying car**). Here you can:

1. **Pick an example** preset  
2. **Enter** your own comma-separated lists  
3. **Click “Blend”** to see how an AGI might invent something new  

Under the hood it simply cross-concatenates each item in List A with each item in List B—demonstrating the core pattern of concept blending. In a full Hyperon/PRIMUS system, this code would be replaced with a formal MeTTa-based FCA module and feed into attention and planning components.

---

## 📦 Installation

```bash
git clone https://github.com/nblogist/conceptforge-ui.git
cd conceptforge-ui
npm install
npm start
```

## 🖥️ Usage
1. Examples: Choose one of the built-in “aha” presets.
2. Custom: Paste your own comma-separated words into the two text areas.
3. Blend: Click the button and watch the new ideas appear!

Hover the ℹ️ icon for a quick tooltip explaining the demo.

## 🔍 How it Works
- blendConcepts() (in `src/lib/conceptforge.ts`)
- Cross-concatenates each element of List A with each element of List B and deduplicates.
- UI (in React `src/App.tsx`) handles user input, presets, and displays results.
- Intro modal and tooltip guide AGI newcomers through the concept.

## 🤝 Contributing
- This is a toy demo meant for illustration. To swap in real MeTTa blending logic:
- Replace src/lib/conceptforge.ts with your MeTTa/FCA algorithm.
- Keep the UI components—just import your new blend function.
- Push changes and the live demo auto-updates on Vercel.
- Feel free to fork, experiment, and send pull requests!