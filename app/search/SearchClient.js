'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [catResults, setCatResults] = useState([]);
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
        const indexData = await res.json();
        
        // Handle older format fallback if needed
        const allQuestions = Array.isArray(indexData) ? indexData : (indexData.questions || []);
        const allCategories = indexData.categories || [];

        const lowerQ = query.toLowerCase();
        
        // Filter categories
        const matchedCats = allCategories.filter(c => 
          c.title.toLowerCase().includes(lowerQ) || 
          c.titleHindi.toLowerCase().includes(lowerQ) ||
          c.description.toLowerCase().includes(lowerQ)
        );
        setCatResults(matchedCats);

        // Filter questions
        const matchedQs = allQuestions.filter(q => 
          q.q.toLowerCase().includes(lowerQ) || 
          q.a.toLowerCase().includes(lowerQ) ||
          (q.c && q.c.toLowerCase().includes(lowerQ))
        );
        
        // Deduplicate
        const unique = [];
        const seen = new Set();
        matchedQs.forEach(m => {
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
        Found {catResults.length} categories and {results.length}{results.length === 100 ? '+' : ''} questions for &quot;{query}&quot;
      </p>

      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>Searching...</div>
      ) : (
        <>
          {catResults.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>📂 Matching Categories</h2>
              <div className="categories-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
                {catResults.map(cat => (
                  <a key={cat.slug} href={`/${cat.slug}`} className="category-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--primary)', textDecoration: 'none' }}>
                    <span className="category-icon">{cat.icon}</span>
                    <span className="category-title">{cat.title}</span>
                    <span className="category-title-hindi">{cat.titleHindi}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {results.length > 0 ? (
            <div>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>📝 Matching Questions</h2>
              <div className="question-wrapper">
                {results.map((item, i) => (
                  <div key={i} className="question-card" style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span className="question-num" style={{ background: 'var(--bg-secondary)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '8px', fontWeight: 'bold' }}>{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        {item.c && <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '8px', display: 'block' }}>🏷️ {item.c}</span>}
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
            </div>
          ) : (
            catResults.length === 0 && (
              <div className="info-box" style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <strong>No exact matches found.</strong> Try checking our main categories or use different keywords.
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}

