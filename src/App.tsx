import React, { useState } from 'react'
import { blendConcepts } from './lib/conceptforge'
import './App.css'

const presets = [
  { label: 'Flying + Car → Flying Car',       a: 'flying',  b: 'car' },
  { label: 'Hover + Board → Hoverboard',       a: 'hover',   b: 'board' },
  { label: 'Coffee + Table → Coffee Table',    a: 'coffee',  b: 'table' },
  { label: 'Robot + Dog → Robot Dog',          a: 'robot',   b: 'dog' },
]

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [inputA, setInputA] = useState('')
  const [inputB, setInputB] = useState('')
  const [results, setResults] = useState<string[]>([])

  const runBlend = (listA: string[], listB: string[]) =>
    setResults(blendConcepts(listA, listB))

  const onBlend = () =>
    runBlend(inputA.split(','), inputB.split(','))

  const pickPreset = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const p = presets.find(x => x.label === e.target.value)
    if (p) {
      setInputA(p.a)
      setInputB(p.b)
      runBlend(p.a.split(','), p.b.split(','))
    }
  }

  return (
    <>
      {showIntro && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Welcome to ConceptForge!</h2>
            <p>
              This demo shows the spark of creativity inside an AGI—blending two ideas into one.
              For example, when you imagine <strong>“flying”</strong> combined with <strong>“car”</strong>,
              you immediately think of a <strong>flying car</strong>. Likewise, this AGI can take your
              inputs—say, “hover” and “board”—and invent a <strong>hoverboard</strong>. Pick a preset
              or enter your own concepts, then click “Blend” to see the AGI generate its novel idea!
            </p>
            <button onClick={() => setShowIntro(false)}>Got it!</button>
          </div>
        </div>
      )}

      <div className="app-container">
        <div className="card">
          <h1>ConceptForge Mini-Demo</h1>
          <p className="subtitle">
            DeepFunding RFP: Experiment with Concept Blending in MeTTa
          </p>
          <a
            href="https://deepfunding.ai/rfp/experiment-with-concept-blending-in-metta/"
            target="_blank"
            rel="noopener noreferrer"
            className="rfp-link"
          >
            View RFP ↗
          </a>

          <div className="presets">
            <label htmlFor="preset">Try an example:&nbsp;</label>
            <select id="preset" onChange={pickPreset}>
              <option value="">— pick one —</option>
              {presets.map(p => (
                <option key={p.label} value={p.label}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <p className="instructions">
            Enter two comma-separated lists
            <span className="tooltip-icon"> ℹ️
              <span className="tooltip-text">
                This blends every item from List A with every item from List B—simulating how an AGI fuses concepts to generate novel ideas.
              </span>
            </span>
            :
          </p>

          <textarea
            placeholder="e.g. flying"
            value={inputA}
            onChange={e => setInputA(e.target.value)}
          />
          <textarea
            placeholder="e.g. car"
            value={inputB}
            onChange={e => setInputB(e.target.value)}
          />

          <button onClick={onBlend}>Blend</button>

          {results.length > 0 && (
            <div className="results">
              <h2>Blended Concepts</h2>
              <ul>
                {results.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}

           <footer>
            Made with <span className="heart">❤️</span> in Pakistan by Furqan Ahmed &nbsp;|&nbsp;
            <a href="https://x.com/FurqanDotAhmed" target="_blank" rel="noopener noreferrer">
              @FurqanDotAhmed
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
