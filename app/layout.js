import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import ScrollEffects from './components/ScrollEffects';

const ADSENSE_CLIENT = 'ca-pub-6815277662449747';

export const metadata = {
  metadataBase: new URL('https://gkhindi.moneycal.in'),
  title: {
    default: 'GK Hindi Pro - GK Questions In Hindi 2025 | सामान्य ज्ञान',
    template: '%s | GK Hindi Pro - सामान्य ज्ञान'
  },
  description: 'Best GK in Hindi website with 20,000+ questions for SSC, UPSC, Banking, Railway, CTET. Current Affairs 2025-2026 in Hindi. Free online GK test.',
  keywords: ['GK in Hindi', 'GK Questions In Hindi', 'सामान्य ज्ञान', 'Current Affairs Hindi', 'SSC GK', 'UPSC GK', 'GK Quiz Hindi'],
  authors: [{ name: 'GK Hindi Pro' }],
  creator: 'GK Hindi Pro',
  publisher: 'GK Hindi Pro',
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://gkhindi.moneycal.in',
    siteName: 'GK Hindi Pro',
    title: 'GK Hindi Pro - GK Questions In Hindi 2025 | सामान्य ज्ञान',
    description: 'Best GK in Hindi website with 20,000+ questions for SSC, UPSC, Banking, Railway. Free quiz & current affairs 2025.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GK Hindi Pro - सामान्य ज्ञान' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GK Hindi Pro - GK Questions In Hindi 2025',
    description: 'Best GK in Hindi - 20,000+ questions for all competitive exams',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://gkhindi.moneycal.in',
    languages: { 'hi-IN': 'https://gkhindi.moneycal.in' },
  },
};

export default function RootLayout({ children }) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GK Hindi Pro',
    url: 'https://gkhindi.moneycal.in',
    description: 'Best GK in Hindi - 20,000+ General Knowledge Questions for SSC, UPSC, Banking, Railway, CTET',
    inLanguage: 'hi',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: 'https://gkhindi.moneycal.in/search?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GK Hindi Pro',
    url: 'https://gkhindi.moneycal.in',
    logo: 'https://gkhindi.moneycal.in/og-image.jpg',
    description: 'भारत की सबसे बेहतरीन GK वेबसाइट - 20,000+ सामान्य ज्ञान प्रश्न हिंदी में',
    sameAs: ['https://t.me/', 'https://facebook.com/'],
  };

  return (
    <html lang="hi" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="text/markdown" title="LLM-friendly version" href="/llms.txt" />
        {/* Google AdSense */}
        <Script
          id="adsense"
          strategy="lazyOnload"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
        {/* JSON-LD */}
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var theme = savedTheme || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body>
        <ReadingProgress />
        <Header />
        <ScrollEffects />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

// Reading Progress Bar
function ReadingProgress() {
  return (
    <div
      id="reading-progress"
      className="reading-progress"
      style={{ width: '0%' }}
      role="progressbar"
      aria-label="Reading progress"
    />
  );
}

// ---- Inline Footer ----
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  background: 'var(--primary)', 
                  color: 'white', 
                  borderRadius: '8px', 
                  width: '32px', 
                  height: '32px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.2rem',
                  boxShadow: '0 2px 8px rgba(255, 107, 53, 0.4)'
                }}>📚</span>
                <span style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', fontSize: '1.4rem', letterSpacing: '-0.5px' }}>
                  GK Hindi Pro
                </span>
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '40px', marginTop: '-2px', fontWeight: '500', letterSpacing: '0.5px' }}>by moneycal</span>
            </div>
            <p style={{ marginTop: '16px' }}>
              यह वेबसाइट सामान्य ज्ञान को बढ़ाने का एक प्रयास है। यहाँ SSC, UPSC, Banking, Railway, CTET और अन्य सभी प्रतियोगी परीक्षाओं के लिए 20,000+ प्रश्न उपलब्ध हैं।
            </p>
            <div className="social-links" style={{ marginTop: '16px' }}>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="social-btn telegram">📱 Telegram</a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">📘 Facebook</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Popular GK</h4>
            <ul className="footer-links">
              {[
                { href: '/india-gk', label: 'India GK' },
                { href: '/current-affairs', label: 'Current Affairs' },
                { href: '/science-gk', label: 'Science GK' },
                { href: '/history-gk', label: 'History GK' },
                { href: '/geography-gk', label: 'Geography GK' },
                { href: '/sports-gk', label: 'Sports GK' },
                { href: '/one-line-gk', label: 'One Line GK' },
              ].map(link => (
                <li key={link.href}><a href={link.href}>→ {link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Competitive Exams</h4>
            <ul className="footer-links">
              {[
                { href: '/ssc-gk', label: 'SSC GK' },
                { href: '/upsc-gk', label: 'UPSC GK' },
                { href: '/bank-gk', label: 'Banking GK' },
                { href: '/rail-gk', label: 'Railway GK' },
                { href: '/ctet-gk', label: 'CTET/TET GK' },
                { href: '/indian-army-gk', label: 'Indian Army GK' },
                { href: '/bpsc-gk', label: 'BPSC GK' },
              ].map(link => (
                <li key={link.href}><a href={link.href}>→ {link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>State GK</h4>
            <ul className="footer-links">
              {[
                { href: '/bihar-gk', label: 'Bihar GK' },
                { href: '/up-gk', label: 'UP GK' },
                { href: '/rajasthan-gk', label: 'Rajasthan GK' },
                { href: '/mp-gk', label: 'MP GK' },
                { href: '/haryana-gk', label: 'Haryana GK' },
                { href: '/delhi-gk', label: 'Delhi GK' },
                { href: '/about', label: 'About Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
              ].map(link => (
                <li key={link.href}><a href={link.href}>→ {link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} GK Hindi Pro. All Rights Reserved. | Made with ❤️ for competitive exam aspirants</p>
          <div className="social-links">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-btn twitter">Twitter</a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---- Back to Top ----
function BackToTop() {
  return (
    <button
      id="back-to-top"
      className="back-to-top"
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
        <polygon points="12 8 6 16 18 16"/>
      </svg>
    </button>
  );
}
