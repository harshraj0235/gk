import { lucentGKData } from '../../data/new-pages-data';

export const metadata = {
  title: 'Lucent GK In Hindi 2026 - ल्यूसेंट सामान्य ज्ञान | Lucent GK Questions',
  description: 'Lucent GK in Hindi (ल्यूसेंट सामान्य ज्ञान) - ल्यूसेंट GK पुस्तक पर आधारित महत्वपूर्ण प्रश्न उत्तर विस्तृत व्याख्या के साथ। SSC, UPSC, Railway, Banking सभी परीक्षाओं के लिए Lucent GK Questions in Hindi।',
  keywords: 'lucent gk in hindi, lucent gk, ल्यूसेंट सामान्य ज्ञान, lucent gk questions, lucent gk book hindi, lucent general knowledge',
  alternates: { canonical: 'https://gkhindi.moneycal.in/lucent-gk' },
  openGraph: { title: 'Lucent GK In Hindi - ल्यूसेंट सामान्य ज्ञान', url: 'https://gkhindi.moneycal.in/lucent-gk' },
};

export default function LucentGKPage() {
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: lucentGKData.questions.slice(0,5).map(q=>({'@type':'Question',name:q.q,acceptedAnswer:{'@type':'Answer',text:`${q.a}। ${q.explanation}`}})) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span className="sep">›</span><span className="current">Lucent GK</span></nav>
        <div className="main-layout">
          <article>
            <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>📘 Lucent GK In Hindi - ल्यूसेंट सामान्य ज्ञान</h1>
            <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              <strong>ल्यूसेंट सामान्य ज्ञान (Lucent GK)</strong> भारत की सबसे लोकप्रिय GK पुस्तक है। यहाँ Lucent GK पुस्तक पर आधारित 
              <strong> महत्वपूर्ण प्रश्न उत्तर विस्तृत व्याख्या</strong> के साथ दिए गए हैं। ये प्रश्न SSC CGL, SSC CHSL, UPSC, RRB NTPC, IBPS 
              और सभी प्रतियोगी परीक्षाओं में बार-बार पूछे जाते हैं।
            </p>
            <div className="tag-list" style={{ marginBottom: '24px' }}>
              <a href="/gk-notes" className="tag">📓 GK Notes</a>
              <a href="/top-100-gk" className="tag">🏆 Top 100 GK</a>
              <a href="/gk-tricks" className="tag">🧠 GK Tricks</a>
            </div>

            <section>
              <h2 className="section-title">📖 Lucent GK Questions with Answers</h2>
              <div className="question-wrapper">
                {lucentGKData.questions.map((q, i) => (
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

            <section style={{ marginTop: '40px' }}>
              <h2 className="section-title">📝 Lucent GK Book के बारे में</h2>
              <div className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '12px' }}>
                  <strong>ल्यूसेंट सामान्य ज्ञान</strong> (Lucent&apos;s General Knowledge) डॉ. बिनय कर्ण एवं मनवेन्द्र मुकुल द्वारा लिखित एक 
                  बेस्टसेलर पुस्तक है। यह SSC, UPSC, Banking, Railway और State PCS की तैयारी करने वाले लाखों छात्रों की पहली पसंद है।
                </p>
                <p>इस पेज पर Lucent GK के सबसे महत्वपूर्ण प्रश्न दिए गए हैं। पूरी तैयारी के लिए <a href="/gk-notes" style={{color:'var(--primary)'}}>GK Notes</a> और <a href="/quiz" style={{color:'var(--primary)'}}>Online Quiz</a> भी ज़रूर देखें।</p>
              </div>
            </section>
          </article>
          <aside className="sidebar"><div className="sidebar-box"><div className="sidebar-head">🔗 Related</div><nav className="sidebar-links">
            {[{href:'/gk-notes',icon:'📓',title:'GK Notes'},{href:'/top-100-gk',icon:'🏆',title:'Top 100 GK'},{href:'/gk-tricks',icon:'🧠',title:'GK Tricks'},{href:'/first-in-india',icon:'🥇',title:'First in India'},{href:'/history-gk',icon:'🏛️',title:'History GK'},{href:'/india-gk',icon:'🇮🇳',title:'India GK'}].map(l=>(<a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>))}
          </nav></div></aside>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('click',function(e){var b=e.target.closest('.show-answer-btn');if(!b)return;var c=b.closest('.question-card');if(!c)return;var x=c.querySelector('.answer-box');if(!x)return;x.classList.toggle('show');b.textContent=x.classList.contains('show')?'Hide Answer ▲':'Show Answer ▼';});` }} />
    </>
  );
}
