import { dailyGKData } from '../../data/new-pages-data';

export const metadata = {
  title: 'Daily GK In Hindi 2026 - आज का सामान्य ज्ञान | Today GK Questions',
  description: 'Daily GK in Hindi (आज का सामान्य ज्ञान) - प्रतिदिन अपडेट होने वाले GK प्रश्न उत्तर। SSC, UPSC, Banking, Railway सभी प्रतियोगी परीक्षाओं के लिए Today GK Questions in Hindi 2026.',
  keywords: 'daily gk in hindi, today gk question, आज का सामान्य ज्ञान, daily current affairs, gk today in hindi, today gk in hindi 2026, aaj ka gk, daily gk quiz',
  alternates: { canonical: 'https://gkhindi.moneycal.in/daily-gk' },
  openGraph: {
    title: 'Daily GK In Hindi - आज का सामान्य ज्ञान 2026',
    description: 'प्रतिदिन नए GK प्रश्न हिंदी में - SSC, UPSC, Banking सभी परीक्षाओं के लिए',
    url: 'https://gkhindi.moneycal.in/daily-gk',
  },
};

export default function DailyGKPage() {
  const today = new Date();
  const dateStr = today.toLocaleDateString('hi-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  // Rotate questions based on day of year
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const startIdx = (dayOfYear * 10) % dailyGKData.questions.length;
  const todayQuestions = [];
  for (let i = 0; i < 10; i++) {
    todayQuestions.push(dailyGKData.questions[(startIdx + i) % dailyGKData.questions.length]);
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: todayQuestions.slice(0, 5).map(q => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: `${q.a}। ${q.explanation}` },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gkhindi.moneycal.in' },
      { '@type': 'ListItem', position: 2, name: 'Daily GK', item: 'https://gkhindi.moneycal.in/daily-gk' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="sep">›</span>
          <span className="current">Daily GK</span>
        </nav>

        <div className="main-layout">
          <article>
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'inline-block', background: 'var(--grad-primary)', color: 'white', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '12px' }}>
                📅 {dateStr}
              </div>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>
                📅 Daily GK In Hindi - आज का सामान्य ज्ञान
              </h1>
              <p className="font-hindi" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
                प्रतिदिन अपडेट होने वाले <strong>सामान्य ज्ञान के प्रश्न उत्तर</strong> विस्तृत व्याख्या के साथ। SSC, UPSC, Banking, Railway, CTET
                और सभी प्रतियोगी परीक्षाओं के लिए महत्वपूर्ण। रोज़ाना अभ्यास करें और अपनी तैयारी मजबूत करें!
              </p>
              <div className="tag-list">
                <a href="/current-affairs" className="tag">📰 Current Affairs</a>
                <a href="/top-100-gk" className="tag">🏆 Top 100 GK</a>
                <a href="/quiz" className="tag">🎯 Quiz Mode</a>
                <a href="/gk-tricks" className="tag">🧠 GK Tricks</a>
              </div>
            </div>

            {/* Today's Questions */}
            <section aria-labelledby="today-gk-heading">
              <h2 id="today-gk-heading" className="section-title">
                🔥 आज के {todayQuestions.length} महत्वपूर्ण GK प्रश्न | Today&apos;s GK Questions
              </h2>
              <div className="question-wrapper">
                {todayQuestions.map((q, i) => (
                  <div key={q.id} className="question-card">
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span className="question-num">{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        <p className="question-text">{q.q}</p>
                        {q.category && (
                          <span style={{ display: 'inline-block', background: 'rgba(255,107,53,0.1)', color: 'var(--primary)', padding: '2px 10px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '600', marginBottom: '8px' }}>
                            {q.category}
                          </span>
                        )}
                        <div className="answer-box" id={`ans-${q.id}`}>
                          <span className="answer-label">Answer:</span>
                          <strong>{q.a}</strong>
                          {q.explanation && (
                            <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', borderTop: '1px dashed var(--border)', paddingTop: '8px' }}>
                              💡 <em>{q.explanation}</em>
                            </p>
                          )}
                        </div>
                        <button type="button" className="show-answer-btn" aria-controls={`ans-${q.id}`}>
                          Show Answer ▼
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* All Questions Section */}
            <section style={{ marginTop: '40px' }} aria-labelledby="all-daily-heading">
              <h2 id="all-daily-heading" className="section-title">
                📖 सभी Daily GK प्रश्न | Complete Question Bank
              </h2>
              <div className="oneliner-list">
                {dailyGKData.questions.map((q, i) => (
                  <div key={q.id} className="oneliner-item">
                    <span className="oneliner-num">{i + 1}.</span>
                    <span className="oneliner-q">{q.q}</span>
                    <span className="oneliner-a">✅ {q.a}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Links */}
            <div style={{ marginTop: '40px', background: 'var(--grad-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '12px' }}>🎯 Daily GK Quiz लें</h3>
              <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                रोज़ाना क्विज़ लें और अपनी तैयारी का स्तर जानें
              </p>
              <a href="/quiz" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', background: 'var(--grad-primary)', color: 'white', padding: '12px 32px', borderRadius: '50px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}>
                🚀 Start Daily Quiz
              </a>
            </div>

            {/* SEO Content */}
            <section style={{ marginTop: '40px' }}>
              <h2 className="section-title">📝 Daily GK In Hindi के बारे में</h2>
              <div className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '12px' }}>
                  <strong>Daily GK in Hindi (आज का सामान्य ज्ञान)</strong> पेज पर आपको प्रतिदिन नए-नए सामान्य ज्ञान के प्रश्न मिलेंगे जो सभी 
                  प्रतियोगी परीक्षाओं जैसे SSC CGL, SSC CHSL, UPSC, IBPS PO/Clerk, RRB NTPC, CTET, State PCS आदि के लिए अत्यंत महत्वपूर्ण हैं।
                </p>
                <p style={{ marginBottom: '12px' }}>
                  हर प्रश्न के साथ <strong>विस्तृत व्याख्या (Explanation)</strong> दी गई है ताकि आप न केवल उत्तर जानें बल्कि उसके पीछे का तर्क भी समझें। 
                  यह आपकी समझ को गहरा करता है और परीक्षा में ट्रिकी प्रश्नों को भी हल करने में मदद करता है।
                </p>
                <p>
                  रोज़ाना इस पेज पर आएं, नए प्रश्न पढ़ें, और अपने सामान्य ज्ञान को मजबूत करें। आप हमारे 
                  <a href="/quiz" style={{ color: 'var(--primary)' }}> Online GK Quiz</a> से अपनी तैयारी का परीक्षण भी कर सकते हैं।
                </p>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-box">
              <div className="sidebar-head">🔗 Quick Links</div>
              <nav className="sidebar-links">
                {[
                  { href: '/current-affairs', icon: '📰', title: 'Current Affairs 2026' },
                  { href: '/top-100-gk', icon: '🏆', title: 'Top 100 GK' },
                  { href: '/gk-tricks', icon: '🧠', title: 'GK Tricks' },
                  { href: '/gk-notes', icon: '📓', title: 'GK Notes' },
                  { href: '/first-in-india', icon: '🥇', title: 'First in India' },
                  { href: '/important-days', icon: '📅', title: 'Important Days' },
                  { href: '/lucent-gk', icon: '📘', title: 'Lucent GK' },
                  { href: '/constitution-gk', icon: '⚖️', title: 'Constitution GK' },
                  { href: '/government-schemes-gk', icon: '🏛️', title: 'Govt Schemes GK' },
                  { href: '/gk-for-kids', icon: '👶', title: 'GK for Kids' },
                  { href: '/india-gk', icon: '🇮🇳', title: 'India GK' },
                  { href: '/science-gk', icon: '🔬', title: 'Science GK' },
                ].map(link => (
                  <a key={link.href} href={link.href} className="sidebar-link">
                    <span className="link-icon">{link.icon}</span>
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
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
      }} />
    </>
  );
}
