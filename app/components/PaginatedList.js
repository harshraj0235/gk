'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

function MCQCard({ q, index }) {
  const labels = ['A', 'B', 'C', 'D'];
  return (
    <div className="question-card" data-correct={q.answer}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <span className="question-num">{index + 1}</span>
        <div style={{ flex: 1 }}>
          <p className="question-text">{q.question}</p>
          <ul className="options-list">
            {q.options.map((opt, i) => (
              <li key={i} className="option-item" role="button" tabIndex={0}>
                <span className="option-label">({labels[i]})</span>
                <span className="font-hindi">{opt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PaginatedContent({ items, type, itemsPerPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

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
    router.push(`${pathname}${query}`, { scroll: false });
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  return (
    <div>
      {/* RENDER ITEMS */}
      {type === 'mcq' && (
        <div className="question-wrapper">
          {currentItems.map((q, i) => (
            <MCQCard key={q.id} q={q} index={startIndex + i} />
          ))}
        </div>
      )}

      {type === 'oneliner' && (
        <div className="oneliner-list">
          {currentItems.map((q, i) => (
            <div key={q.id} className="oneliner-item">
              <span className="oneliner-num">{startIndex + i + 1}.</span>
              <span className="oneliner-q">{q.question}</span>
              <span className="oneliner-a">✅ {q.answer}</span>
            </div>
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
