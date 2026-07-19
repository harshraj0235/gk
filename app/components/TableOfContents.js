'use client';
import { useState } from 'react';

export default function TableOfContents({ sections, title = "विषय सूची (Table of Contents)" }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!sections || sections.length === 0) return null;

  return (
    <div style={{
      margin: '32px 0',
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          background: 'var(--bg-secondary)',
          cursor: 'pointer',
          transition: 'var(--transition)'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-card-hover)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
      >
        <h3 className="font-hindi" style={{
          fontSize: '1.1rem',
          fontWeight: '700',
          color: 'var(--text)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          margin: 0
        }}>
          <span>📑</span> {title}
        </h3>
        <span style={{
          color: 'var(--text-muted)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          ▼
        </span>
      </div>
      
      {isOpen && (
        <div style={{
          padding: '20px',
          borderTop: '1px solid var(--border)'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            {sections.map((section, index) => (
              <li key={index} style={{ margin: 0 }}>
                <a 
                  href={`#${section.id}`}
                  className="font-hindi"
                  style={{
                    color: 'var(--primary-light)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '1.05rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--primary-light)'}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    display: 'inline-block'
                  }}></span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
