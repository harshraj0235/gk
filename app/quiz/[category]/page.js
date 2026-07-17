'use client';

import { useState, useEffect, useCallback } from 'react';
import { categories, getCategoryBySlug } from '../../../data/categories';
import { indiaGKData } from '../../../data/india-gk';
import { scienceGKData, historyGKData } from '../../../data/general-gk';

const QUIZ_TIME = 30; // seconds per question

function getCategoryQuestions(slug) {
  switch (slug) {
    case 'india-gk': return indiaGKData.questions.filter(q => q.type === 'mcq');
    case 'science-gk': return scienceGKData.questions.filter(q => q.type === 'mcq');
    case 'history-gk': return historyGKData.questions.filter(q => q.type === 'mcq');
    default: {
      // fallback generic questions
      const cat = getCategoryBySlug(slug);
      return [
        { id: 1, question: `${cat?.title || slug} - Question 1: What is General Knowledge?`, options: ['GK is fun', 'GK is knowledge', 'GK is study', 'All of above'], answer: 3, type: 'mcq' },
        { id: 2, question: `${cat?.title || slug} - Question 2: How to prepare for exams?`, options: ['Read daily', 'Practice MCQ', 'Watch videos', 'All of above'], answer: 3, type: 'mcq' },
        { id: 3, question: `${cat?.title || slug} - Question 3: Best way to remember GK?`, options: ['Flashcards', 'Repetition', 'Notes', 'All methods work'], answer: 3, type: 'mcq' },
      ];
    }
  }
}

export default function QuizPage({ params }) {
  const { category } = params;
  const cat = getCategoryBySlug(category);
  const allQuestions = getCategoryQuestions(category);

  const [gameState, setGameState] = useState('start'); // start | playing | results
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  // Shuffle and select questions
  const startQuiz = useCallback(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, Math.min(10, allQuestions.length));
    setQuestions(shuffled);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setTimeLeft(QUIZ_TIME);
    setAnswers([]);
    setGameState('playing');
  }, [allQuestions]);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (timeLeft <= 0) {
      handleNext(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, gameState]);

  const handleSelect = (idx) => {
    if (selected !== null) return;
    const q = questions[currentQ];
    const isCorrect = idx === q.answer;
    setSelected(idx);
    if (isCorrect) setScore(s => s + 1);
    setAnswers(a => [...a, { question: q.question, correct: q.answer, selected: idx, isCorrect }]);
  };

  const handleNext = (timeout = false) => {
    if (timeout && selected === null) {
      const q = questions[currentQ];
      setAnswers(a => [...a, { question: q.question, correct: q.answer, selected: -1, isCorrect: false }]);
    }
    if (currentQ + 1 >= questions.length) {
      setGameState('results');
    } else {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setTimeLeft(QUIZ_TIME);
    }
  };

  const labels = ['A', 'B', 'C', 'D'];
  const timerColor = timeLeft > 15 ? 'var(--success)' : timeLeft > 7 ? 'var(--warning)' : 'var(--error)';

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <nav className="breadcrumb">
        <a href="/">Home</a><span className="sep">›</span>
        <a href="/quiz">Quiz</a><span className="sep">›</span>
        <span className="current">{cat?.title || category} Quiz</span>
      </nav>

      {/* START SCREEN */}
      {gameState === 'start' && (
        <div className="quiz-container" style={{ textAlign: 'center', padding: '60px 32px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>{cat?.icon || '🎯'}</div>
          <h1 style={{ fontSize: '2rem', marginBottom: '12px' }}>
            {cat?.title || category} Quiz
          </h1>
          <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
            {cat?.titleHindi || category} - ऑनलाइन क्विज
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '32px 0', flexWrap: 'wrap' }}>
            {[
              ['📝', `${Math.min(10, allQuestions.length)} Questions`, 'Total Questions'],
              ['⏱️', `${QUIZ_TIME}s`, 'Per Question'],
              ['🏆', '10 Points', 'Per Correct Answer'],
            ].map(([icon, val, label]) => (
              <div key={label} style={{ textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '16px 24px' }}>
                <div style={{ fontSize: '1.5rem' }}>{icon}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary)' }}>{val}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{label}</div>
              </div>
            ))}
          </div>
          <button onClick={startQuiz} style={{
            background: 'var(--grad-primary)', color: 'white',
            border: 'none', borderRadius: '50px', padding: '16px 48px',
            fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer',
            boxShadow: 'var(--shadow-glow)', transition: 'var(--transition)'
          }}>
            🚀 Quiz शुरू करें
          </button>
          <p style={{ marginTop: '16px', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
            All GK categories available • Free • No registration needed
          </p>
        </div>
      )}

      {/* PLAYING */}
      {gameState === 'playing' && questions.length > 0 && (
        <div className="quiz-container">
          {/* Header */}
          <div className="quiz-header">
            <div className="quiz-progress">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span>Question {currentQ + 1}/{questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${((currentQ) / questions.length) * 100}%` }} />
              </div>
            </div>
            <div className="quiz-timer" style={{ color: timerColor, borderColor: timerColor, background: `${timerColor}15` }}>
              ⏱️ {timeLeft}s
            </div>
          </div>

          {/* Question */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '8px' }}>
              Q{currentQ + 1} of {questions.length}
            </p>
            <h2 className="font-hindi" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: '700', lineHeight: '1.6', color: 'var(--text)' }}>
              {questions[currentQ].question}
            </h2>
          </div>

          {/* Options */}
          <ul className="options-list" style={{ gap: '12px' }}>
            {questions[currentQ].options.map((opt, i) => {
              let extraStyle = {};
              if (selected !== null) {
                if (i === questions[currentQ].answer) extraStyle = { borderColor: 'var(--success)', background: 'rgba(34,197,94,0.15)' };
                else if (i === selected && i !== questions[currentQ].answer) extraStyle = { borderColor: 'var(--error)', background: 'rgba(239,68,68,0.12)' };
              }
              return (
                <li key={i}
                  className="option-item"
                  onClick={() => handleSelect(i)}
                  style={{ cursor: selected === null ? 'pointer' : 'default', ...extraStyle }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && handleSelect(i)}
                >
                  <span className="option-label" style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ({labels[i]})
                  </span>
                  <span className="font-hindi" style={{ flex: 1 }}>{opt}</span>
                  {selected !== null && i === questions[currentQ].answer && <span>✅</span>}
                  {selected !== null && i === selected && i !== questions[currentQ].answer && <span>❌</span>}
                </li>
              );
            })}
          </ul>

          {/* Next button */}
          {selected !== null && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <div style={{
                marginBottom: '16px', padding: '12px 20px',
                background: selected === questions[currentQ].answer ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                border: `1px solid ${selected === questions[currentQ].answer ? 'var(--success)' : 'var(--error)'}`,
                borderRadius: 'var(--radius)', fontSize: '0.95rem', fontWeight: '600',
                color: selected === questions[currentQ].answer ? 'var(--success)' : 'var(--error)'
              }}>
                {selected === questions[currentQ].answer
                  ? `✅ Correct! सही जवाब: ${questions[currentQ].options[questions[currentQ].answer]}`
                  : `❌ Wrong! सही जवाब: ${questions[currentQ].options[questions[currentQ].answer]}`}
              </div>
              <button onClick={() => handleNext(false)} style={{
                background: 'var(--grad-primary)', color: 'white', border: 'none',
                borderRadius: '50px', padding: '12px 36px', fontSize: '1rem',
                fontWeight: '700', cursor: 'pointer'
              }}>
                {currentQ + 1 >= questions.length ? '📊 See Results' : 'Next Question →'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* RESULTS */}
      {gameState === 'results' && (
        <div className="quiz-container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>
            {score >= 8 ? '🏆' : score >= 5 ? '🥈' : '📚'}
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quiz Complete!</h2>
          <div style={{
            fontSize: '3.5rem', fontWeight: '900', margin: '20px 0',
            background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            {score}/{questions.length}
          </div>
          <p className="font-hindi" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '24px' }}>
            {score >= 8 ? 'बहुत बढ़िया! आपने शानदार प्रदर्शन किया! 🎉' :
             score >= 5 ? 'अच्छा प्रयास! और अभ्यास करें। 💪' :
             'कोई बात नहीं! फिर से कोशिश करें। 📖'}
          </p>

          {/* Score breakdown */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid var(--success)', borderRadius: 'var(--radius)', padding: '16px 24px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--success)' }}>{score}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>✅ Correct</div>
            </div>
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid var(--error)', borderRadius: 'var(--radius)', padding: '16px 24px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--error)' }}>{questions.length - score}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>❌ Wrong</div>
            </div>
            <div style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid var(--accent)', borderRadius: 'var(--radius)', padding: '16px 24px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent)' }}>{Math.round((score / questions.length) * 100)}%</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>📊 Score</div>
            </div>
          </div>

          {/* Answers review */}
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>📋 Answer Review</h3>
            {answers.map((a, i) => (
              <div key={i} style={{
                padding: '12px 16px', marginBottom: '8px', borderRadius: 'var(--radius-sm)',
                background: a.isCorrect ? 'rgba(34,197,94,0.05)' : 'rgba(239,68,68,0.05)',
                border: `1px solid ${a.isCorrect ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
                fontSize: '0.875rem'
              }}>
                <span style={{ color: a.isCorrect ? 'var(--success)' : 'var(--error)', fontWeight: '700', marginRight: '8px' }}>
                  {a.isCorrect ? '✅' : '❌'}
                </span>
                <span className="font-hindi">{a.question}</span>
                {!a.isCorrect && (
                  <div style={{ marginTop: '6px', color: 'var(--success)', fontSize: '0.8rem', fontWeight: '600' }}>
                    ✅ Correct: {questions[i]?.options[a.correct]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={startQuiz} style={{
              background: 'var(--grad-primary)', color: 'white', border: 'none',
              borderRadius: '50px', padding: '12px 32px', fontSize: '1rem',
              fontWeight: '700', cursor: 'pointer'
            }}>
              🔄 Try Again
            </button>
            <a href="/quiz" style={{
              background: 'var(--bg-card)', color: 'var(--text)', border: '1px solid var(--border)',
              borderRadius: '50px', padding: '12px 32px', fontSize: '1rem', fontWeight: '700',
              textDecoration: 'none', display: 'inline-block'
            }}>
              🎯 Other Quizzes
            </a>
          </div>
        </div>
      )}

      {/* Other category quizzes */}
      <div style={{ marginTop: '48px' }}>
        <h2 className="section-title">🎯 Other GK Quizzes</h2>
        <div className="categories-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
          {categories.filter(c => c.slug !== category).slice(0, 12).map(c => (
            <a key={c.slug} href={`/quiz/${c.slug}`} className="category-card">
              <span className="category-icon">{c.icon}</span>
              <span className="category-title">{c.title}</span>
              <span className="category-title-hindi">{c.titleHindi}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
