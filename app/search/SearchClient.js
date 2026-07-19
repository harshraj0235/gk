'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

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
    
    const fetchAndSearch = async () => {
      try {
        const res = await fetch('/search-index.json');
        if (!res.ok) throw new Error('Failed to fetch search index');
        const allQuestions = await res.json();

        const lowerQ = query.toLowerCase();
        
        const matched = allQuestions.filter(q => 
          q.q.toLowerCase().includes(lowerQ) || 
          q.a.toLowerCase().includes(lowerQ)
        );
        
        // Deduplicate
        const unique = [];
        const seen = new Set();
        matched.forEach(m => {
          if (!seen.has(m.q)) {
            seen.add(m.q);
            unique.push(m);
          }
        });

        setResults(unique.slice(0, 100)); // limit to 100
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSearch();
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
                  <p className="question-text" style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px', color: 'var(--text)' }}>{item.q}</p>
                  <div className="answer-box show" style={{ display: 'block', background: 'var(--bg-secondary)', padding: '12px', borderRadius: '8px', borderLeft: '4px solid var(--success)' }}>
                    <span className="answer-label" style={{ fontWeight: 'bold', color: 'var(--success)', marginRight: '8px' }}>Answer:</span>
                    <span style={{ color: 'var(--text)' }}>{item.a}</span>
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

