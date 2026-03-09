import { useState } from "react";
import { questions, animals } from "./quiz-data.js";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');

  .aq-wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    font-family: 'DM Sans', sans-serif;
  }
  .aq-card {
    width: 100%;
    max-width: 560px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 48px;
    box-shadow: 0 32px 80px rgba(0,0,0,0.5);
  }
  .aq-progress-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .aq-progress-label {
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
  }
  .aq-progress-track {
    height: 3px;
    background: rgba(255,255,255,0.1);
    border-radius: 99px;
    margin-bottom: 36px;
    overflow: hidden;
  }
  .aq-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #a78bfa, #60a5fa);
    border-radius: 99px;
    transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
  }
  .aq-question {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: #fff;
    line-height: 1.4;
    margin-bottom: 28px;
  }
  .aq-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .aq-option {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    padding: 16px 20px;
    color: rgba(255,255,255,0.8);
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
  }
  .aq-option:hover {
    background: rgba(167,139,250,0.15);
    border-color: rgba(167,139,250,0.4);
    transform: translateX(6px);
    color: #fff;
  }
  .aq-option.selected {
    background: rgba(167,139,250,0.2);
    border-color: rgba(167,139,250,0.6);
    color: #fff;
  }

  /* Intro */
  .aq-intro { text-align: center; }
  .aq-intro-emoji { font-size: 64px; margin-bottom: 16px; }
  .aq-intro-subtitle {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 16px;
  }
  .aq-intro-title {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: #fff;
    margin-bottom: 16px;
    line-height: 1.2;
  }
  .aq-intro-desc {
    color: rgba(255,255,255,0.5);
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 36px;
  }
  .aq-btn-start {
    background: linear-gradient(135deg, #a78bfa, #60a5fa);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 16px 40px;
    font-size: 15px;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .aq-btn-start:hover { opacity: 0.9; transform: translateY(-2px); }

  /* Result */
  .aq-result { text-align: center; }
  .aq-result-emoji { font-size: 80px; margin-bottom: 16px; }
  .aq-result-subtitle {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(167,139,250,0.8);
    margin-bottom: 12px;
  }
  .aq-result-title {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    color: #fff;
    margin-bottom: 20px;
  }
  .aq-traits {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-bottom: 24px;
  }
  .aq-trait {
    background: rgba(167,139,250,0.15);
    border: 1px solid rgba(167,139,250,0.3);
    color: #a78bfa;
    border-radius: 99px;
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
  .aq-result-desc {
    color: rgba(255,255,255,0.6);
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 36px;
  }
  .aq-btn-reset {
    background: rgba(255,255,255,0.08);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 14px 32px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .aq-btn-reset:hover { background: rgba(255,255,255,0.15); }
`;

export default function App() {
  const [phase, setPhase] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({});
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const handleAnswer = (animal) => {
    if (selected) return;
    setSelected(animal);

    const newScores = { ...scores, [animal]: (scores[animal] || 0) + 1 };

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
        setScores(newScores);
      } else {
        const winner = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
        setResult(animals[winner]);
        setPhase("result");
      }
    }, 400);
  };

  const reset = () => {
    setPhase("intro");
    setCurrent(0);
    setScores({});
    setSelected(null);
    setResult(null);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <>
      <style>{styles}</style>
      <div className="aq-wrap">
        <div className="aq-card">

          {phase === "intro" && (
            <div className="aq-intro">
              <div className="aq-intro-emoji">🐾</div>
              <p className="aq-intro-subtitle">Personality Quiz</p>
              <h1 className="aq-intro-title">Koja si ti životinja?</h1>
              <p className="aq-intro-desc">
                10 pitanja. 7 mogućih životinja. Otkrij koja životinja
                najbolje opisuje tvoju ličnost.
              </p>
              <button className="aq-btn-start" onClick={() => setPhase("quiz")}>
                Počni kviz →
              </button>
            </div>
          )}

          {phase === "quiz" && (
            <div>
              <div className="aq-progress-row">
                <span className="aq-progress-label">Pitanje</span>
                <span className="aq-progress-label">{current + 1} / {questions.length}</span>
              </div>
              <div className="aq-progress-track">
                <div className="aq-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <h2 className="aq-question">{questions[current].question}</h2>
              <div className="aq-options">
                {questions[current].options.map((opt, i) => (
                  <button
                    key={i}
                    className={`aq-option${selected === opt.animal ? " selected" : ""}`}
                    onClick={() => handleAnswer(opt.animal)}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {phase === "result" && result && (
            <div className="aq-result">
              <div className="aq-result-emoji">{result.emoji}</div>
              <p className="aq-result-subtitle">Tvoja životinja je</p>
              <h2 className="aq-result-title">{result.name}</h2>
              <div className="aq-traits">
                {result.traits.map(t => (
                  <span key={t} className="aq-trait">{t}</span>
                ))}
              </div>
              <p className="aq-result-desc">{result.description}</p>
              <button className="aq-btn-reset" onClick={reset}>↩ Uradi ponovo</button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
