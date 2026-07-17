'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { generalGKData } from '../../data/general-gk';
import { indiaGKData } from '../../data/india-gk';
import { currentAffairsData } from '../../data/current-affairs';
import { subjectGKData } from '../../data/subject-gk';
import { examGKData } from '../../data/exam-gk';
import { moreGKData } from '../../data/more-gk';

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }
    
    // Aggregate questions from all modules
    const allQuestions = [];
    
    const extractQs = (dataObj) => {
      if (!dataObj) return;
      Object.values(dataObj).forEach(val => {
        if (Array.isArray(val)) {
          val.forEach(item => {
            if (item && item.question && item.answer) {
              allQuestions.push(item);
            } else if (item && item.q && item.a) {
              allQuestions.push({ question: item.q, answer: item.a });
            }
          });
        }
      });
    };

    try {
      extractQs(generalGKData);
      extractQs(indiaGKData);
      extractQs(currentAffairsData);
      extractQs(subjectGKData);
      extractQs(examGKData);
      extractQs(moreGKData);
    } catch(e) {
      console.error("Error extracting questions", e);
    }

    const lowerQ = query.toLowerCase();
    
    const matched = allQuestions.filter(q => 
      q.question.toLowerCase().includes(lowerQ) || 
      q.answer.toLowerCase().includes(lowerQ)
    );
    
    // Deduplicate
    const unique = [];
    const seen = new Set();
    matched.forEach(m => {
      if (!seen.has(m.question)) {
        seen.add(m.question);
        unique.push(m);
      }
    });

    setResults(unique.slice(0, 100)); // limit to 100
    setLoading(false);
  }, [query]);

  if (!query) return null;

  return (
    <div style={{ marginTop: '24px' }}>
      <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.9rem' }}>
        Found {results.length} {results.length === 100 ? '+' : ''} results for &quot;{query}&quot;
      </p>

      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>Searching...</div>
      ) : results.length > 0 ? (
        <div className="question-wrapper">
          {results.map((item, i) => (
            <div key={i} className="question-card" style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span className="question-num" style={{ background: 'var(--bg-secondary)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '8px', fontWeight: 'bold' }}>{i + 1}</span>
                <div style={{ flex: 1 }}>
                  <p className="question-text" style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: 'var(--text)' }}>{item.question}</p>
                  <div className="answer-box show" style={{ display: 'block', background: 'var(--bg-secondary)', padding: '12px', borderRadius: '8px', borderLeft: '4px solid var(--success)' }}>
                    <span className="answer-label" style={{ fontWeight: 'bold', color: 'var(--success)', marginRight: '8px' }}>Answer:</span>
                    <span style={{ color: 'var(--text)' }}>{item.answer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="info-box" style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <strong>No exact matches found.</strong> Try browsing our categories instead!
        </div>
      )}
    </div>
  );
}
