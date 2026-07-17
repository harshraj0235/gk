export const metadata = {
  title: 'Search GK Questions | GK Hindi Pro',
  description: 'Search 20,000+ GK Questions in Hindi. Find answers to any general knowledge question.',
  robots: { index: false },
};

export default function SearchPage({ searchParams }) {
  const query = searchParams?.q || '';

  return (
    <div className="container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
      <nav className="breadcrumb">
        <a href="/">Home</a><span className="sep">›</span>
        <span className="current">Search</span>
      </nav>

      <h1 style={{ marginBottom: '24px' }}>
        🔍 GK Search {query && <span style={{ color: 'var(--primary)' }}>: "{query}"</span>}
      </h1>

      <form action="/search" method="GET" style={{ marginBottom: '32px' }}>
        <div style={{
          display: 'flex', gap: '12px', background: 'var(--bg-card)',
          border: '1px solid var(--border)', borderRadius: '50px',
          padding: '12px 20px', maxWidth: '600px',
          transition: 'var(--transition)', alignItems: 'center'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-dim)', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="GK खोजें... (Search any GK question)"
            autoFocus
            style={{
              background: 'none', border: 'none', outline: 'none',
              color: 'var(--text)', fontSize: '1rem', flex: 1,
              fontFamily: 'var(--font-hindi)'
            }}
          />
          <button type="submit" style={{
            background: 'var(--grad-primary)', color: 'white',
            border: 'none', borderRadius: '50px', padding: '8px 20px',
            fontWeight: '600', cursor: 'pointer', flexShrink: 0
          }}>
            Search
          </button>
        </div>
      </form>

      {!query && (
        <div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            Popular searches:
          </p>
          <div className="tag-list">
            {['भारत के राष्ट्रपति', 'Current Affairs 2025', 'Science GK', 'History GK', 'SSC GK', 'India GK', 'Computer GK', 'Sports GK'].map(tag => (
              <a key={tag} href={`/search?q=${encodeURIComponent(tag)}`} className="tag">{tag}</a>
            ))}
          </div>
        </div>
      )}

      {query && (
        <div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.9rem' }}>
            Showing results for &quot;{query}&quot; — Please browse our categories for more GK:
          </p>
          <div className="info-box">
            <strong>💡 Tip:</strong> Use our category pages for best results. We have 50+ categories covering all competitive exam topics in Hindi.
          </div>

          {/* Show related categories */}
          <div className="categories-grid" style={{ marginTop: '24px' }}>
            {[
              { slug: 'india-gk', title: 'India GK', titleHindi: 'भारत सामान्य ज्ञान', icon: '🇮🇳' },
              { slug: 'current-affairs', title: 'Current Affairs', titleHindi: 'करेंट अफेयर्स', icon: '📰' },
              { slug: 'science-gk', title: 'Science GK', titleHindi: 'विज्ञान GK', icon: '🔬' },
              { slug: 'history-gk', title: 'History GK', titleHindi: 'इतिहास GK', icon: '🏛️' },
              { slug: 'ssc-gk', title: 'SSC GK', titleHindi: 'SSC GK', icon: '📝' },
              { slug: 'upsc-gk', title: 'UPSC GK', titleHindi: 'UPSC GK', icon: '🎓' },
            ].map(cat => (
              <a key={cat.slug} href={`/${cat.slug}`} className="category-card">
                <span className="category-icon">{cat.icon}</span>
                <span className="category-title">{cat.title}</span>
                <span className="category-title-hindi">{cat.titleHindi}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
