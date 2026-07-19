import { constitutionGKData } from '../../data/new-pages-data';

export const metadata = {
  title: 'Constitution GK In Hindi - भारतीय संविधान सामान्य ज्ञान | Sanvidhan GK 2026',
  description: 'भारतीय संविधान GK in Hindi (Sanvidhan GK) - संविधान सभा, मौलिक अधिकार, नीति निर्देशक तत्व, संशोधन, अनुच्छेद सभी महत्वपूर्ण प्रश्न। SSC, UPSC, Banking परीक्षाओं के लिए Constitution Questions in Hindi।',
  keywords: 'constitution gk in hindi, संविधान gk, sanvidhan gk in hindi, bhartiya samvidhan gk, indian constitution questions hindi, samvidhan ke prashn',
  alternates: { canonical: 'https://gkhindi.moneycal.in/constitution-gk' },
  openGraph: { title: 'Constitution GK - भारतीय संविधान GK', url: 'https://gkhindi.moneycal.in/constitution-gk' },
};

export default function ConstitutionGKPage() {
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: constitutionGKData.questions.slice(0,5).map(q=>({'@type':'Question',name:q.q,acceptedAnswer:{'@type':'Answer',text:`${q.a}। ${q.explanation}`}})) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span className="sep">›</span><span className="current">Constitution GK</span></nav>
        <div className="main-layout">
          <article>
            <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>⚖️ Constitution GK In Hindi - भारतीय संविधान सामान्य ज्ञान</h1>
            <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              <strong>भारतीय संविधान (Indian Constitution)</strong> से संबंधित सभी महत्वपूर्ण प्रश्न उत्तर विस्तृत व्याख्या के साथ। संविधान सभा, 
              प्रस्तावना, मौलिक अधिकार, नीति निर्देशक तत्व, मूल कर्तव्य, संशोधन, अनुसूचियाँ — सब कुछ एक ही स्थान पर। UPSC, SSC, State PCS, 
              CTET और सभी प्रतियोगी परीक्षाओं में संविधान से 5-10 प्रश्न ज़रूर आते हैं।
            </p>
            <div className="tag-list" style={{ marginBottom: '24px' }}>
              <a href="/indian-polity-gk" className="tag">⚖️ Indian Polity</a>
              <a href="/first-in-india" className="tag">🥇 First in India</a>
              <a href="/lucent-gk" className="tag">📘 Lucent GK</a>
            </div>

            <section>
              <h2 className="section-title">📖 भारतीय संविधान प्रश्न उत्तर | Constitution Questions</h2>
              <div className="question-wrapper">
                {constitutionGKData.questions.map((q, i) => (
                  <div key={q.id} className="question-card">
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span className="question-num">{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        <p className="question-text">{q.q}</p>
                        <div className="answer-box" id={`ans-${q.id}`}>
                          <span className="answer-label">Answer:</span><strong>{q.a}</strong>
                          {q.explanation && <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', borderTop: '1px dashed var(--border)', paddingTop: '8px' }}>💡 <em>{q.explanation}</em></p>}
                        </div>
                        <button type="button" className="show-answer-btn" aria-controls={`ans-${q.id}`}>Show Answer ▼</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>
          <aside className="sidebar"><div className="sidebar-box"><div className="sidebar-head">🔗 Related</div><nav className="sidebar-links">
            {[{href:'/indian-polity-gk',icon:'⚖️',title:'Indian Polity'},{href:'/first-in-india',icon:'🥇',title:'First in India'},{href:'/lucent-gk',icon:'📘',title:'Lucent GK'},{href:'/important-days',icon:'📅',title:'Important Days'},{href:'/upsc-gk',icon:'🎓',title:'UPSC GK'},{href:'/history-gk',icon:'🏛️',title:'History GK'}].map(l=>(<a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>))}
          </nav></div></aside>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('click',function(e){var b=e.target.closest('.show-answer-btn');if(!b)return;var c=b.closest('.question-card');if(!c)return;var x=c.querySelector('.answer-box');if(!x)return;x.classList.toggle('show');b.textContent=x.classList.contains('show')?'Hide Answer ▲':'Show Answer ▼';});` }} />
    </>
  );
}
