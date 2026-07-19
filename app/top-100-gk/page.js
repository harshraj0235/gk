import { top100GKData } from '../../data/new-pages-data';

export const metadata = {
  title: 'Top 100 GK Questions In Hindi 2026 - 100 महत्वपूर्ण सामान्य ज्ञान प्रश्न',
  description: 'Top 100 GK Questions in Hindi (100 सबसे महत्वपूर्ण सामान्य ज्ञान प्रश्न उत्तर) - SSC, UPSC, Banking, Railway परीक्षाओं में बार-बार पूछे जाने वाले प्रश्न विस्तृत व्याख्या के साथ।',
  keywords: 'top 100 gk questions in hindi, 100 gk questions, 100 महत्वपूर्ण gk प्रश्न, top gk questions in hindi, important gk questions, best gk questions in hindi',
  alternates: { canonical: 'https://gkhindi.moneycal.in/top-100-gk' },
  openGraph: {
    title: 'Top 100 GK Questions In Hindi - 100 महत्वपूर्ण प्रश्न',
    description: '100 सबसे महत्वपूर्ण GK प्रश्न जो हर परीक्षा में पूछे जाते हैं',
    url: 'https://gkhindi.moneycal.in/top-100-gk',
  },
};

export default function Top100GKPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: top100GKData.questions.slice(0, 10).map(q => ({
      '@type': 'Question', name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: `${q.a}। ${q.explanation}` },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span className="sep">›</span><span className="current">Top 100 GK</span>
        </nav>
        <div className="main-layout">
          <article>
            <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>
              🏆 Top 100 GK Questions In Hindi - 100 महत्वपूर्ण सामान्य ज्ञान प्रश्न
            </h1>
            <p className="font-hindi" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              यहाँ <strong>100 सबसे महत्वपूर्ण सामान्य ज्ञान प्रश्न</strong> दिए गए हैं जो SSC CGL, SSC CHSL, UPSC, IBPS, RRB, CTET और सभी 
              प्रतियोगी परीक्षाओं में बार-बार पूछे जाते हैं। प्रत्येक प्रश्न के साथ <strong>विस्तृत व्याख्या</strong> दी गई है। ये प्रश्न आपकी 
              परीक्षा की तैयारी के लिए अत्यंत उपयोगी हैं।
            </p>
            <div className="tag-list" style={{ marginBottom: '24px' }}>
              <a href="/daily-gk" className="tag">📅 Daily GK</a>
              <a href="/gk-tricks" className="tag">🧠 GK Tricks</a>
              <a href="/quiz" className="tag">🎯 Quiz</a>
              <a href="/one-line-gk" className="tag">⚡ One Line GK</a>
            </div>

            <section>
              <h2 className="section-title">📖 Top 100 GK Questions with Answers & Explanation</h2>
              <div className="question-wrapper">
                {top100GKData.questions.map((q, i) => (
                  <div key={q.id} className="question-card">
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span className="question-num">{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        <p className="question-text">{q.q}</p>
                        <div className="answer-box" id={`ans-${q.id}`}>
                          <span className="answer-label">Answer:</span>
                          <strong>{q.a}</strong>
                          {q.explanation && (
                            <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', borderTop: '1px dashed var(--border)', paddingTop: '8px' }}>
                              💡 <em>{q.explanation}</em>
                            </p>
                          )}
                        </div>
                        <button type="button" className="show-answer-btn" aria-controls={`ans-${q.id}`}>Show Answer ▼</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SEO paragraph */}
            <section style={{ marginTop: '40px' }}>
              <h2 className="section-title">📝 Top 100 GK Questions के बारे में</h2>
              <div className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '12px' }}>
                  <strong>Top 100 GK Questions in Hindi</strong> एक ऐसा संग्रह है जिसमें भारत और विश्व के सबसे महत्वपूर्ण सामान्य ज्ञान प्रश्न शामिल हैं। 
                  ये प्रश्न विभिन्न विषयों — इतिहास, भूगोल, विज्ञान, राजनीति, खेल, कंप्यूटर — से चुने गए हैं।
                </p>
                <p>
                  प्रत्येक प्रश्न के साथ दी गई व्याख्या से आपको विषय की गहरी समझ मिलेगी। इन प्रश्नों को नियमित रूप से दोहराएं 
                  और <a href="/quiz" style={{ color: 'var(--primary)' }}>Online Quiz</a> लेकर अपनी तैयारी का मूल्यांकन करें।
                </p>
              </div>
            </section>

            <div style={{ marginTop: '32px', background: 'var(--grad-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '12px' }}>🎯 अपना GK टेस्ट करें</h3>
              <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>इन 100 प्रश्नों पर क्विज़ लें</p>
              <a href="/quiz" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', background: 'var(--grad-primary)', color: 'white', padding: '12px 32px', borderRadius: '50px', fontWeight: '700', textDecoration: 'none' }}>🚀 Start Quiz</a>
            </div>
          </article>

          <aside className="sidebar">
            <div className="sidebar-box">
              <div className="sidebar-head">🔗 Related GK</div>
              <nav className="sidebar-links">
                {[
                  { href: '/daily-gk', icon: '📅', title: 'Daily GK' },
                  { href: '/gk-notes', icon: '📓', title: 'GK Notes' },
                  { href: '/gk-tricks', icon: '🧠', title: 'GK Tricks' },
                  { href: '/first-in-india', icon: '🥇', title: 'First in India' },
                  { href: '/lucent-gk', icon: '📘', title: 'Lucent GK' },
                  { href: '/important-days', icon: '📅', title: 'Important Days' },
                  { href: '/constitution-gk', icon: '⚖️', title: 'Constitution GK' },
                  { href: '/india-gk', icon: '🇮🇳', title: 'India GK' },
                  { href: '/science-gk', icon: '🔬', title: 'Science GK' },
                  { href: '/history-gk', icon: '🏛️', title: 'History GK' },
                ].map(l => (
                  <a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('click',function(e){var b=e.target.closest('.show-answer-btn');if(!b)return;var c=b.closest('.question-card');if(!c)return;var x=c.querySelector('.answer-box');if(!x)return;x.classList.toggle('show');b.textContent=x.classList.contains('show')?'Hide Answer ▲':'Show Answer ▼';});` }} />
    </>
  );
}
