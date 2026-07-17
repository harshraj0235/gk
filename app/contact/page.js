export const metadata = {
  title: 'Contact Us | GK Hindi Pro',
  description: 'Contact GK Hindi Pro team for any queries, suggestions, or feedback.',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '700px', margin: '0 auto' }}>
      <nav className="breadcrumb">
        <a href="/">Home</a><span className="sep">›</span>
        <span className="current">Contact</span>
      </nav>

      <h1 className="page-title" style={{ marginTop: '16px', marginBottom: '8px' }}>Contact Us</h1>
      <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
        हमसे संपर्क करें - किसी भी प्रश्न या सुझाव के लिए
      </p>

      <div className="card" style={{ marginBottom: '24px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text)' }}>
              Your Name
            </label>
            <input type="text" placeholder="Enter your name" style={{
              width: '100%', padding: '12px 16px',
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)', color: 'var(--text)',
              fontSize: '1rem', outline: 'none', fontFamily: 'var(--font-ui)',
              transition: 'var(--transition)'
            }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text)' }}>
              Email Address
            </label>
            <input type="email" placeholder="your@email.com" style={{
              width: '100%', padding: '12px 16px',
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)', color: 'var(--text)',
              fontSize: '1rem', outline: 'none', fontFamily: 'var(--font-ui)',
              transition: 'var(--transition)'
            }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text)' }}>
              Message (संदेश)
            </label>
            <textarea rows={5} placeholder="अपना संदेश लिखें..." style={{
              width: '100%', padding: '12px 16px', resize: 'vertical',
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)', color: 'var(--text)',
              fontSize: '1rem', outline: 'none', fontFamily: 'var(--font-hindi)',
              transition: 'var(--transition)'
            }} />
          </div>
          <button type="submit" style={{
            background: 'var(--grad-primary)', color: 'white',
            border: 'none', borderRadius: 'var(--radius-sm)',
            padding: '14px 32px', fontSize: '1rem', fontWeight: '700',
            cursor: 'pointer', alignSelf: 'flex-start'
          }}>
            📤 Send Message
          </button>
        </form>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'var(--text)', transition: 'var(--transition)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📱</div>
          <h3 style={{ color: '#0088CC' }}>Telegram</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Join our Telegram channel</p>
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'var(--text)', transition: 'var(--transition)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📘</div>
          <h3 style={{ color: '#1877F2' }}>Facebook</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Like our Facebook page</p>
        </a>
      </div>
    </div>
  );
}
