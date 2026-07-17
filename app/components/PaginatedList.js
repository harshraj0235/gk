'use client';

import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

function MCQCard({ q, index, globalShow }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const labels = ['A', 'B', 'C', 'D'];

  // Sync with global toggle
  useEffect(() => {
    setShowAnswer(globalShow);
  }, [globalShow]);

  return (
    <div className="question-card" data-correct={q.answer}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <span className="question-num">{index + 1}</span>
        <div style={{ flex: 1 }}>
          <p className="question-text">{q.question}</p>
          <ul className="options-list">
            {q.options.map((opt, i) => {
               const isCorrect = showAnswer && i === q.answer;
               return (
                <li key={i} className="option-item" style={{ 
                  background: isCorrect ? 'rgba(34,197,94,0.1)' : 'var(--bg-secondary)', 
                  borderColor: isCorrect ? 'var(--success)' : 'var(--border)',
                  color: isCorrect ? 'var(--success)' : 'var(--text)'
                }}>
                  <span className="option-label">({labels[i]})</span>
                  <span className="font-hindi">{opt}</span>
                </li>
               );
            })}
          </ul>
          
          <button 
            onClick={() => setShowAnswer(!showAnswer)}
            style={{
              marginTop: '12px', padding: '6px 14px', background: 'var(--bg-card)', 
              border: '1px solid var(--border)', borderRadius: '50px',
              color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: '600'
            }}
          >
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: showAnswer ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function OnelinerCard({ q, index, globalShow }) {
  const [showAnswer, setShowAnswer] = useState(false);

  // Sync with global toggle
  useEffect(() => {
    setShowAnswer(globalShow);
  }, [globalShow]);

  return (
    <div className="oneliner-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
        <span className="oneliner-num">{index + 1}.</span>
        <span className="oneliner-q" style={{ flex: 1 }}>{q.question}</span>
      </div>
      
      <div style={{ width: '100%', marginTop: '8px', paddingLeft: '24px' }}>
        <button 
          onClick={() => setShowAnswer(!showAnswer)}
          style={{
            padding: '4px 12px', background: 'var(--bg-card)', 
            border: '1px solid var(--border)', borderRadius: '50px',
            color: 'var(--primary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: '600'
          }}
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: showAnswer ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        
        {showAnswer && (
          <div className="oneliner-a animate-fadeInUp" style={{ display: 'block', marginTop: '12px' }}>
            ✅ {q.answer}
          </div>
        )}
      </div>
    </div>
  );
}

function PaginatedContent({ items, type, itemsPerPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [globalShow, setGlobalShow] = useState(false);

  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  if (!items || items.length === 0) return null;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('page', page);
    const search = current.toString();
    const query = search ? `?${search}` : '';
    setGlobalShow(false); // Reset global toggle on page change
    router.push(`${pathname}${query}`, { scroll: false });
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <button 
          onClick={() => setGlobalShow(!globalShow)}
          style={{
            padding: '8px 16px', background: 'var(--grad-primary)', 
            border: 'none', borderRadius: '50px',
            color: 'white', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: '600',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {globalShow ? 'Hide All Answers' : 'Show All Answers'}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: globalShow ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </div>

      {/* RENDER ITEMS */}
      {type === 'mcq' && (
        <div className="question-wrapper">
          {currentItems.map((q, i) => (
            <MCQCard key={q.id} q={q} index={startIndex + i} globalShow={globalShow} />
          ))}
        </div>
      )}

      {type === 'oneliner' && (
        <div className="oneliner-list">
          {currentItems.map((q, i) => (
            <OnelinerCard key={q.id} q={q} index={startIndex + i} globalShow={globalShow} />
          ))}
        </div>
      )}

      {/* PAGINATION CONTROLS */}
      {totalPages > 1 && (
        <div className="pagination" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '32px', flexWrap: 'wrap'
        }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            style={{
              padding: '8px 16px', borderRadius: '50px', border: '1px solid var(--border)',
              background: currentPage <= 1 ? 'transparent' : 'var(--bg-card)',
              color: currentPage <= 1 ? 'var(--text-dim)' : 'var(--text)',
              cursor: currentPage <= 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Prev
          </button>
          
          <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            style={{
              padding: '8px 16px', borderRadius: '50px', border: '1px solid var(--border)',
              background: currentPage >= totalPages ? 'transparent' : 'var(--bg-card)',
              color: currentPage >= totalPages ? 'var(--text-dim)' : 'var(--text)',
              cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer'
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default function PaginatedList({ items, type, itemsPerPage = 20 }) {
  return (
    <Suspense fallback={<div>Loading questions...</div>}>
      <PaginatedContent items={items} type={type} itemsPerPage={itemsPerPage} />
    </Suspense>
  );
}
