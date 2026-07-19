import { governmentSchemesData } from '../../data/new-pages-data';

export const metadata = {
  title: 'Government Schemes GK In Hindi 2026 - सरकारी योजनाएं | Sarkari Yojana GK',
  description: 'Government Schemes GK in Hindi (सरकारी योजनाएं 2024-2026) - PM किसान, आयुष्मान भारत, स्वच्छ भारत, जन धन, उज्ज्वला सभी प्रमुख सरकारी योजनाओं के प्रश्न उत्तर। SSC, UPSC, Banking परीक्षाओं के लिए।',
  keywords: 'government schemes gk in hindi, सरकारी योजनाएं gk, sarkari yojana gk, pm yojana gk, government schemes 2026, important schemes for ssc',
  alternates: { canonical: 'https://gkhindi.moneycal.in/government-schemes-gk' },
  openGraph: { title: 'Government Schemes GK - सरकारी योजनाएं GK', url: 'https://gkhindi.moneycal.in/government-schemes-gk' },
};

export default function GovernmentSchemesPage() {
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: governmentSchemesData.questions.slice(0,5).map(q=>({'@type':'Question',name:q.q,acceptedAnswer:{'@type':'Answer',text:`${q.a}। ${q.explanation}`}})) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span className="sep">›</span><span className="current">Government Schemes GK</span></nav>
        <div className="main-layout">
          <article>
            <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>🏛️ Government Schemes GK In Hindi - सरकारी योजनाएं 2026</h1>
            <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              <strong>प्रमुख सरकारी योजनाएं (Government Schemes)</strong> - PM किसान सम्मान निधि, आयुष्मान भारत, स्वच्छ भारत मिशन, 
              प्रधानमंत्री जन धन योजना, उज्ज्वला योजना, मेक इन इंडिया आदि सभी महत्वपूर्ण केंद्र सरकार की योजनाओं के प्रश्न उत्तर। 
              SSC, UPSC, Banking, State PCS परीक्षाओं में &quot;सरकारी योजनाएं&quot; से 3-5 प्रश्न ज़रूर आते हैं।
            </p>

            <section>
              <h2 className="section-title">📋 सरकारी योजनाएं प्रश्न उत्तर | Government Schemes Q&A</h2>
              <div className="question-wrapper">
                {governmentSchemesData.questions.map((q, i) => (
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
            {[{href:'/current-affairs',icon:'📰',title:'Current Affairs'},{href:'/constitution-gk',icon:'⚖️',title:'Constitution GK'},{href:'/economics-gk',icon:'📊',title:'Economics GK'},{href:'/india-gk',icon:'🇮🇳',title:'India GK'},{href:'/upsc-gk',icon:'🎓',title:'UPSC GK'}].map(l=>(<a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>))}
          </nav></div></aside>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('click',function(e){var b=e.target.closest('.show-answer-btn');if(!b)return;var c=b.closest('.question-card');if(!c)return;var x=c.querySelector('.answer-box');if(!x)return;x.classList.toggle('show');b.textContent=x.classList.contains('show')?'Hide Answer ▲':'Show Answer ▼';});` }} />
    </>
  );
}
