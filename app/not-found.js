export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '70vh', textAlign: 'center', padding: '40px 20px'
    }}>
      <div style={{ fontSize: '6rem', marginBottom: '24px' }}>📚</div>
      <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '16px', color: 'var(--primary)' }}>404</h1>
      <h2 style={{ marginBottom: '12px' }}>Page Not Found</h2>
      <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '400px' }}>
        यह पृष्ठ नहीं मिला। कृपया मुख्य पृष्ठ पर जाएं।
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="/" style={{
          background: 'var(--grad-primary)', color: 'white', padding: '12px 32px',
          borderRadius: '50px', textDecoration: 'none', fontWeight: '700'
        }}>
          🏠 Go to Home
        </a>
        <a href="/quiz" style={{
          background: 'var(--bg-card)', color: 'var(--text)',
          border: '1px solid var(--border)', padding: '12px 32px',
          borderRadius: '50px', textDecoration: 'none', fontWeight: '700'
        }}>
          🎯 Take a Quiz
        </a>
      </div>
    </div>
  );
}
