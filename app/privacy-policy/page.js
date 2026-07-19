import AdBanner from '../components/AdBanner';

export const metadata = {
  title: 'Privacy Policy | GK Hindi Pro',
  description: 'Privacy Policy for GK Hindi Pro - How we collect, use, and protect your information.',
  alternates: { canonical: 'https://gk.moneycal.in/privacy-policy' },
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <nav className="breadcrumb">
        <a href="/">Home</a><span className="sep">›</span>
        <span className="current">Privacy Policy</span>
      </nav>

      <AdBanner dataAdSlot="2683916778" />

      <h1 style={{ marginBottom: '8px', marginTop: '16px' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Last updated: July 2026</p>

      {[
        {
          title: '1. Information We Collect',
          content: 'GK Hindi Pro does not require user registration. We may collect anonymous usage data through Google Analytics to improve our services. No personal information is collected without your consent.',
        },
        {
          title: '2. Google AdSense',
          content: 'We use Google AdSense to display advertisements. Google uses cookies to serve ads based on users\' prior visits to our website or other websites. You may opt out of personalized advertising by visiting Google\'s Ads Settings.',
        },
        {
          title: '3. Cookies',
          content: 'We use cookies to improve user experience. These include analytics cookies (Google Analytics) and advertising cookies (Google AdSense). You can control cookie settings through your browser.',
        },
        {
          title: '4. Third-Party Links',
          content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.',
        },
        {
          title: '5. Data Security',
          content: 'We take appropriate security measures to protect against unauthorized access to or alteration of your personal information.',
        },
        {
          title: '6. Children\'s Privacy',
          content: 'Our service is educational and suitable for all ages. We do not knowingly collect personal information from children under 13.',
        },
        {
          title: '7. Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us through our Contact page.',
        },
      ].map((section, i) => (
        <div key={i} className="card" style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--primary)' }}>{section.title}</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{section.content}</p>
        </div>
      ))}
    </div>
  );
}
