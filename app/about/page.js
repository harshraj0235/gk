import AdBanner from '../components/AdBanner';

export const metadata = {
  title: 'About Us | GK Hindi Pro - सामान्य ज्ञान',
  description: 'About GK Hindi Pro - India\'s best Hindi GK website with 20,000+ questions for SSC, UPSC, Banking, Railway exams.',
  alternates: { canonical: 'https://gk.moneycal.in/about' },
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <nav className="breadcrumb">
        <a href="/">Home</a><span className="sep">›</span>
        <span className="current">About Us</span>
      </nav>

      <AdBanner dataAdSlot="2683916778" />

      <h1 className="page-title" style={{ marginBottom: '8px', marginTop: '16px' }}>About GK Hindi Pro</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>हमारे बारे में</p>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '16px', color: 'var(--primary)' }}>🎯 Our Mission</h2>
        <p className="font-hindi" style={{ lineHeight: '1.9', color: 'var(--text-muted)' }}>
          GK Hindi Pro का उद्देश्य भारत के प्रतियोगी परीक्षा के उम्मीदवारों को उच्च गुणवत्ता वाली मुफ्त GK सामग्री प्रदान करना है।
          हम SSC, UPSC, Banking, Railway, CTET और अन्य सभी सरकारी परीक्षाओं के लिए सबसे बेहतर और अद्यतन सामान्य ज्ञान प्रश्न प्रदान करते हैं।
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {[
          { icon: '📚', num: '20,000+', label: 'GK Questions' },
          { icon: '🗂️', num: '50+', label: 'Categories' },
          { icon: '🎯', num: '100%', label: 'Free Content' },
          { icon: '📱', num: 'All Devices', label: 'Responsive' },
        ].map(item => (
          <div key={item.label} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)' }}>{item.num}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.label}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '16px', color: 'var(--primary)' }}>📋 What We Cover</h2>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            'India GK, World GK, Current Affairs 2025-2026',
            'Science GK - Biology, Physics, Chemistry',
            'History GK, Geography GK, Political Science',
            'SSC, UPSC, Banking, Railway, CTET exam preparation',
            'State GK - Bihar, Rajasthan, UP, MP, Haryana and more',
            'Computer GK, Technology GK, Sports GK',
            'Hindi Grammar, Reasoning Questions',
            'Daily Current Affairs updates',
          ].map((item, i) => (
            <li key={i} className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: '16px', color: 'var(--primary)' }}>📞 Contact Us</h2>
        <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
          किसी भी प्रश्न, सुझाव या सहयोग के लिए हमसे संपर्क करें:
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="/contact" style={{
            background: 'var(--grad-primary)', color: 'white', padding: '10px 24px',
            borderRadius: '50px', textDecoration: 'none', fontWeight: '600'
          }}>
            📧 Contact Us
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" style={{
            background: 'rgba(0,136,204,0.15)', color: '#0088CC',
            border: '1px solid rgba(0,136,204,0.3)', padding: '10px 24px',
            borderRadius: '50px', textDecoration: 'none', fontWeight: '600'
          }}>
            📱 Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
