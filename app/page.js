import { categories, groups, getGroupCategories } from '../data/categories';
import { generalGKData } from '../data/general-gk';

const ADSENSE_CLIENT = 'ca-pub-6815277662449747';
const ADSENSE_SLOT_ATF = '2683916778';
const ADSENSE_SLOT_BTF = '7744671760';

export const metadata = {
  title: 'GK In Hindi - GK Questions In Hindi 2025-2026 | सामान्य ज्ञान',
  description: 'यह वेबसाइट सामान्य ज्ञान को बढ़ाने का प्रयास है। SSC, IBPS, UPSC, RBI, CTET, TET, BED के लिए 20,000+ GK प्रश्न हिंदी में।',
  keywords: 'GK in Hindi, GK Questions In Hindi, सामान्य ज्ञान, Current Affairs 2025, SSC GK, UPSC GK, Hindi GK',
  alternates: { canonical: 'https://gk.moneycal.in' },
  openGraph: {
    title: 'GK Hindi Pro - Best GK Questions In Hindi 2025',
    description: '20,000+ GK Questions in Hindi for SSC, UPSC, Banking, Railway. Free online quiz & current affairs.',
  },
};

// JSON-LD FAQ structured data for SEO
function HomeFAQJsonLd() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalGKData.homepageQuestions.slice(0, 5).map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HomeFAQJsonLd />

      {/* HERO */}
      <section className="hero" aria-label="Hero section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              🏆 India&apos;s #1 GK Website in Hindi
            </div>
            <h1>
              <span className="highlight">GK In Hindi</span>
              <br />
              सामान्य ज्ञान 2025-2026
            </h1>
            <p className="hero-sub">
              SSC, UPSC, Banking, Railway, CTET और सभी प्रतियोगी परीक्षाओं के लिए
              <strong style={{ color: 'var(--accent)' }}> 20,000+</strong> प्रश्न हिंदी में
            </p>
            <div className="hero-stats">
              <div className="hero-stat"><span className="num">20,000+</span><span className="label">GK Questions</span></div>
              <div className="hero-stat"><span className="num">50+</span><span className="label">Categories</span></div>
              <div className="hero-stat"><span className="num">2026</span><span className="label">Current Affairs</span></div>
              <div className="hero-stat"><span className="num">Free</span><span className="label">Online Quiz</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section style={{ background: 'var(--bg-secondary)', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="tag-list">
            {[
              ['/', '1000 GK'],
              ['/one-line-gk', 'One Line GK'],
              ['/current-affairs', 'Current Affairs 2026'],
              ['/static-gk', 'Static GK - 5000+'],
              ['/india-gk', 'India GK'],
              ['/science-gk', 'Science GK'],
              ['/ssc-gk', 'SSC GK'],
              ['/upsc-gk', 'UPSC GK'],
              ['/quiz', '🎯 Online Quiz'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="tag">{label}</a>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="main-layout">
          {/* MAIN CONTENT */}
          <div>
            {/* Page intro */}
            <div style={{ paddingTop: '24px' }}>
              <h1 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
                GK In Hindi – GK Questions In Hindi – सामान्य ज्ञान 2025
              </h1>
              <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                यह वेबसाइट सामान्य ज्ञान को बढ़ाने का एक प्रयास है। यह विभिन्न विषयों से संबन्धित सामान्य ज्ञान के प्रश्नों
                का एक संग्रह है जो की सभी तरह के प्रतियोगिता परीक्षाओं जैसे{' '}
                <strong>SSC, IBPS Clerk, IBPS PO, RBI Assistant, IBPS SO, RRB, CTET, TET, BED, SCRA, UPSC</strong>{' '}
                और इसी तरह के कई अन्य परीक्षाओं के लिए महत्वपूर्ण है।
              </p>

              {/* Exam buttons */}
              <div className="exam-buttons">
                {[
                  { href: '/ssc-gk', label: '📝 SSC Practice Paper' },
                  { href: '/indian-army-gk', label: '🪖 Indian Army GK' },
                  { href: '/upsc-gk', label: '🎓 UPSC GK' },
                  { href: '/bank-gk', label: '🏦 Bank GK' },
                  { href: '/quiz', label: '🎯 Online GK Test' },
                ].map(btn => (
                  <a key={btn.href} href={btn.href} className="exam-btn">{btn.label}</a>
                ))}
              </div>
            </div>

            {/* ATF AD */}
            <div className="ad-container">
              <span className="ad-label">Advertisement</span>
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={ADSENSE_CLIENT}
                data-ad-slot={ADSENSE_SLOT_ATF}
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
              <AdPushScript />
            </div>

            {/* TOP 20 GK 2025 */}
            <section aria-labelledby="top20-heading">
              <h2 id="top20-heading" className="section-title">
                🔥 2025 में टॉप 20 GK प्रश्न | Top 20 GK Questions In 2025
              </h2>
              <div className="oneliner-list">
                {generalGKData.top20_2025.map((item, i) => (
                  <div key={i} className="oneliner-item">
                    <span className="oneliner-num">{i + 1}.</span>
                    <span className="oneliner-q">{item.q}</span>
                    <span className="oneliner-a">✅ {item.a}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* POPULAR LINKS */}
            <section style={{ marginTop: '32px' }} aria-labelledby="popular-heading">
              <h2 id="popular-heading" className="section-title">📚 Popular GK Categories</h2>
              <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  ['/current-affairs', '2026 Current Affairs GK - हिंदी करेंट अफेयर्स प्रश्नोत्तरी 2026'],
                  ['/india-gk', 'India GK In Hindi - भारत सामान्य ज्ञान'],
                  ['/current-affairs', 'Daily Current Affairs GK - हिंदी करेंट अफेयर्स प्रश्नोत्तरी 2024, 2025'],
                  ['/indian-polity-gk', 'Indian Polity Quiz - भारतीय राजनीति सामान्य ज्ञान'],
                  ['/science-gk', 'Human Body GK - मानव शरीर सामान्य ज्ञान'],
                  ['/one-line-gk', 'One Line GK - 20,000+ One Line GK Questions'],
                  ['/static-gk', 'Static GK - 5000+ प्रश्नों का संग्रह'],
                  ['/ssc-gk', 'SSC GK In Hindi - SSC सामान्य ज्ञान'],
                  ['/upsc-gk', 'UPSC GK In Hindi - UPSC सामान्य ज्ञान'],
                  ['/quiz', 'Online GK Test - General Knowledge Test'],
                  ['/kbc-gk', 'KBC GK - KBC सामान्य ज्ञान'],
                  ['/technology-gk', 'Technology GK In Hindi - टेक्नोलॉजी GK'],
                  ['/sports-gk', 'Sports GK - खेल सामान्य ज्ञान'],
                  ['/history-gk', 'History GK - इतिहास सामान्य ज्ञान'],
                  ['/geography-gk', 'Geography GK - भूगोल सामान्य ज्ञान'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="font-hindi" style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            {/* MID AD */}
            <div className="ad-container">
              <span className="ad-label">Advertisement</span>
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={ADSENSE_CLIENT}
                data-ad-slot={ADSENSE_SLOT_ATF}
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
              <AdPushScript />
            </div>

            {/* INTERACTIVE GK QUESTIONS */}
            <section aria-labelledby="gk-questions-heading">
              <h2 id="gk-questions-heading" className="section-title">
                📖 GK Questions in Hindi with Answers | 20,000+ Questions
              </h2>
              <div className="question-wrapper" id="questions-container">
                {generalGKData.homepageQuestions.map((item, i) => (
                  <QuestionCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </section>

            {/* General Awareness */}
            <section style={{ marginTop: '40px' }} aria-labelledby="ga-heading">
              <h2 id="ga-heading" className="section-title">
                🌐 Top 20 General Awareness GK | जनरल अवेयरनेस सामान्य ज्ञान
              </h2>
              <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {generalGKData.generalAwareness.map((item, i) => (
                  <li key={i} className="font-hindi" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                    <strong style={{ color: 'var(--text)' }}>{item.q}</strong>
                    <br />
                    <span style={{ color: 'var(--success)' }}>➡ {item.a}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Science & Tech */}
            <section style={{ marginTop: '40px' }} aria-labelledby="sci-heading">
              <h2 id="sci-heading" className="section-title">
                🔬 Science & Technology GK | विज्ञान प्रौद्योगिकी GK 2025
              </h2>
              <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {generalGKData.scienceTech.map((item, i) => (
                  <li key={i} className="font-hindi" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                    <strong style={{ color: 'var(--text)' }}>{item.q}</strong>
                    <br />
                    <span style={{ color: 'var(--success)' }}>➡ {item.a}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Quick link tags */}
            <div style={{ marginTop: '32px' }}>
              <div className="tag-list">
                {[
                  ['/history-gk', 'Modern History Quiz'],
                  ['/one-line-gk', 'One Line GK'],
                  ['/static-gk', 'Static GK'],
                  ['/india-gk', 'India GK'],
                  ['/ssc-gk', 'SSC GK'],
                  ['/technology-gk', 'Technology GK'],
                  ['/sports-gk', 'Sports GK'],
                  ['/kbc-gk', 'KBC GK'],
                  ['/bollywood-gk', 'Bollywood GK'],
                  ['/ramayan-gk', 'Ramayan GK'],
                  ['/hindi-grammar-gk', 'Hindi Grammar GK'],
                  ['/reasoning', 'Reasoning'],
                  ['/upsc-gk', 'UPSC GK'],
                  ['/current-affairs', 'Current Affairs 2026'],
                ].map(([href, label]) => (
                  <a key={href} href={href} className="tag">{label}</a>
                ))}
              </div>
            </div>

            {/* BTF AD */}
            <div className="ad-container" style={{ marginTop: '32px' }}>
              <span className="ad-label">Advertisement</span>
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={ADSENSE_CLIENT}
                data-ad-slot={ADSENSE_SLOT_BTF}
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
              <AdPushScript />
            </div>

            {/* Social links */}
            <div style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <p>
                📘 Like Our Facebook Page:{' '}
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                {' '} | 📱 Join Telegram:{' '}
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer">Telegram</a>
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar" aria-label="GK Categories sidebar">
            <div className="sidebar-box">
              <div className="sidebar-head">📚 General Knowledge</div>
              <nav className="sidebar-links">
                {categories.map(cat => (
                  <a key={cat.slug} href={`/${cat.slug}`} className="sidebar-link">
                    <span className="link-icon">{cat.icon}</span>
                    {cat.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* ALL CATEGORIES SECTION */}
      <section style={{ background: 'var(--bg-secondary)', padding: '48px 0', marginTop: '40px' }}>
        <div className="container">
          {Object.entries(groups).map(([groupKey, groupLabel]) => (
            <div key={groupKey} style={{ marginBottom: '40px' }}>
              <h2 className="section-title">
                {groupLabel}
              </h2>
              <div className="categories-grid">
                {getGroupCategories(groupKey).map(cat => (
                  <a key={cat.slug} href={`/${cat.slug}`} className="category-card">
                    <span className="category-icon">{cat.icon}</span>
                    <span className="category-title">{cat.title}</span>
                    <span className="category-title-hindi">{cat.titleHindi}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz CTA */}
      <section style={{ padding: '60px 0', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(0,78,146,0.08) 100%)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>🎯 अपना GK टेस्ट करें</h2>
          <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
            हमारे इंटरैक्टिव क्विज से अपनी तैयारी जाँचें
          </p>
          <a
            href="/quiz"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'var(--grad-primary)', color: 'white',
              padding: '16px 40px', borderRadius: '50px',
              fontSize: '1.1rem', fontWeight: '700',
              textDecoration: 'none', boxShadow: 'var(--shadow-glow)',
              transition: 'var(--transition)'
            }}
          >
            🚀 Start Free Quiz
          </a>
        </div>
      </section>

      {/* Client-side script for show-answer buttons */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('click', function(e) {
              const btn = e.target.closest('.show-answer-btn');
              if (!btn) return;
              const card = btn.closest('.question-card');
              if (!card) return;
              const box = card.querySelector('.answer-box');
              if (!box) return;
              box.classList.toggle('show');
              btn.textContent = box.classList.contains('show') ? 'Hide Answer ▲' : 'Show Answer ▼';
            });
          `,
        }}
      />
    </>
  );
}

function QuestionCard({ item, index }) {
  return (
    <div className="question-card">
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <span className="question-num">{index + 1}</span>
        <div style={{ flex: 1 }}>
          <p className="question-text">{item.question}</p>
          <div className="answer-box" id={`ans-${item.id}`}>
            <span className="answer-label">Answer:</span>
            {item.answer}
          </div>
          <button
            type="button"
            className="show-answer-btn"
            aria-controls={`ans-${item.id}`}
          >
            Show Answer ▼
          </button>
        </div>
      </div>
    </div>
  );
}

function AdPushScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
      }}
    />
  );
}
