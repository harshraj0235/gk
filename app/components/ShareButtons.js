'use client';
import { useState, useEffect } from 'react';

export default function ShareButtons({ title, text, url }) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (url) {
      setCurrentUrl(url);
    } else {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const shareText = text || title || 'GK In Hindi - सामान्य ज्ञान प्रश्न उत्तर';

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || 'GK In Hindi',
          text: shareText,
          url: currentUrl,
        });
      } catch (error) {
        console.error('Error sharing', error);
      }
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: '💬',
      color: '#25D366',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`
    },
    {
      name: 'Facebook',
      icon: '📘',
      color: '#1877F2',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Telegram',
      icon: '✈️',
      color: '#0088cc',
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`
    }
  ];

  return (
    <div style={{
      margin: '32px 0',
      padding: '24px',
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <h3 style={{
        fontSize: '0.9rem',
        fontWeight: '700',
        color: 'var(--text-muted)',
        marginBottom: '16px',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        इस पेज को शेयर करें
      </h3>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '12px'
      }}>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '50px',
              color: 'white',
              background: link.color,
              fontWeight: '600',
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'var(--transition)',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <span style={{ fontSize: '1.2rem' }}>{link.icon}</span> {link.name}
          </a>
        ))}
        {typeof navigator !== 'undefined' && navigator.share && (
          <button
            onClick={handleNativeShare}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '50px',
              background: 'var(--bg-secondary)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--bg-card-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'var(--bg-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>📤</span> अन्य
          </button>
        )}
      </div>
    </div>
  );
}
