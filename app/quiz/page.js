import { categories } from '../../data/categories';

export const metadata = {
  title: 'GK Quiz In Hindi - Online GK Test 2025 | Free Quiz',
  description: 'Free Online GK Quiz in Hindi. Practice 50+ categories with timer-based interactive quiz for SSC, UPSC, Banking, Railway exams.',
  alternates: { canonical: 'https://gk.moneycal.in/quiz' },
};

export default function QuizIndexPage() {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <nav className="breadcrumb">
        <a href="/">Home</a><span className="sep">›</span>
        <span className="current">Online GK Quiz</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 className="page-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          🎯 Online GK Quiz In Hindi
        </h1>
        <p className="font-hindi" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          टाइमर के साथ मुफ्त इंटरैक्टिव GK क्विज - अपनी तैयारी जाँचें
        </p>

        {/* Features */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '32px', flexWrap: 'wrap' }}>
          {[
            ['⏱️', '30s per question', 'Timed Quiz'],
            ['📊', 'Instant results', 'Score Card'],
            ['🔄', 'Shuffle questions', 'Random Mode'],
            ['🆓', 'Free forever', 'No Login'],
          ].map(([icon, val, label]) => (
            <div key={label} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '16px 20px', minWidth: '120px'
            }}>
              <div style={{ fontSize: '1.5rem' }}>{icon}</div>
              <div style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.9rem' }}>{val}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <h2 className="section-title">📚 Choose Quiz Category</h2>
      <div className="categories-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {categories.map(cat => (
          <a key={cat.slug} href={`/quiz/${cat.slug}`} className="category-card" style={{ padding: '24px 20px' }}>
            <span className="category-icon" style={{ fontSize: '2.5rem' }}>{cat.icon}</span>
            <span className="category-title" style={{ fontSize: '1rem' }}>{cat.title}</span>
            <span className="category-title-hindi">{cat.titleHindi}</span>
            <span style={{
              display: 'inline-block', marginTop: '12px', padding: '4px 12px',
              background: 'var(--grad-primary)', color: 'white',
              borderRadius: '50px', fontSize: '0.75rem', fontWeight: '600'
            }}>
              Start Quiz →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
