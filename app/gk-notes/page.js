import { gkNotesData } from '../../data/new-pages-data';

export const metadata = {
  title: 'GK Notes In Hindi 2026 - सामान्य ज्ञान नोट्स | Study Material',
  description: 'GK Notes in Hindi (सामान्य ज्ञान नोट्स) - इतिहास, भूगोल, विज्ञान, राजव्यवस्था के विषयवार व्यवस्थित नोट्स। SSC, UPSC, Banking, Railway सभी परीक्षाओं के लिए GK Study Material हिंदी में।',
  keywords: 'gk notes in hindi, gk notes pdf, सामान्य ज्ञान नोट्स, gk study material hindi, gk notes for ssc, gk notes for upsc, samanya gyan notes',
  alternates: { canonical: 'https://gkhindi.moneycal.in/gk-notes' },
  openGraph: { title: 'GK Notes In Hindi - सामान्य ज्ञान नोट्स', description: 'विषयवार GK नोट्स हिंदी में', url: 'https://gkhindi.moneycal.in/gk-notes' },
};

export default function GKNotesPage() {
  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a><span className="sep">›</span><span className="current">GK Notes</span>
      </nav>
      <div className="main-layout">
        <article>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>
            📓 GK Notes In Hindi - सामान्य ज्ञान नोट्स
          </h1>
          <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
            विषयवार व्यवस्थित <strong>सामान्य ज्ञान नोट्स</strong> जो SSC, UPSC, Banking, Railway और सभी प्रतियोगी परीक्षाओं के लिए 
            तैयार किए गए हैं। प्रत्येक विषय के Key Points और महत्वपूर्ण तथ्य एक ही स्थान पर।
          </p>
          <div className="tag-list" style={{ marginBottom: '24px' }}>
            <a href="/gk-tricks" className="tag">🧠 GK Tricks</a>
            <a href="/top-100-gk" className="tag">🏆 Top 100 GK</a>
            <a href="/lucent-gk" className="tag">📘 Lucent GK</a>
          </div>

          {gkNotesData.sections.map((section, si) => (
            <section key={si} style={{ marginBottom: '40px' }}>
              <h2 className="section-title">{section.icon} {section.title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {section.topics.map((topic, ti) => (
                  <div key={ti} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--primary)' }}>{topic.title}</h3>
                    <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '12px', fontSize: '0.95rem' }}>{topic.content}</p>
                    {topic.keyPoints && (
                      <div style={{ background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,180,216,0.15)', borderRadius: '8px', padding: '12px 16px' }}>
                        <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '6px' }}>📌 Key Points:</p>
                        <ul style={{ paddingLeft: '16px', margin: 0 }}>
                          {topic.keyPoints.map((point, pi) => (
                            <li key={pi} className="font-hindi" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '4px' }}>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section style={{ marginTop: '40px' }}>
            <h2 className="section-title">📝 GK Notes कैसे पढ़ें?</h2>
            <div className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '12px' }}>प्रभावी तैयारी के लिए इन टिप्स का पालन करें:</p>
              <ol style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}><strong>पहले Key Points पढ़ें</strong> - हर टॉपिक के Key Points सबसे पहले याद करें</li>
                <li style={{ marginBottom: '8px' }}><strong>GK Tricks का उपयोग करें</strong> - <a href="/gk-tricks" style={{ color: 'var(--primary)' }}>GK Tricks</a> से जटिल जानकारी आसानी से याद होगी</li>
                <li style={{ marginBottom: '8px' }}><strong>रोज़ाना रिवीज़न करें</strong> - <a href="/daily-gk" style={{ color: 'var(--primary)' }}>Daily GK</a> से प्रतिदिन अभ्यास करें</li>
                <li><strong>Quiz लें</strong> - <a href="/quiz" style={{ color: 'var(--primary)' }}>Online Quiz</a> से अपनी तैयारी का परीक्षण करें</li>
              </ol>
            </div>
          </section>
        </article>
        <aside className="sidebar">
          <div className="sidebar-box">
            <div className="sidebar-head">📚 Study Resources</div>
            <nav className="sidebar-links">
              {[{href:'/gk-tricks',icon:'🧠',title:'GK Tricks'},{href:'/top-100-gk',icon:'🏆',title:'Top 100 GK'},{href:'/daily-gk',icon:'📅',title:'Daily GK'},{href:'/first-in-india',icon:'🥇',title:'First in India'},{href:'/lucent-gk',icon:'📘',title:'Lucent GK'},{href:'/important-days',icon:'📅',title:'Important Days'},{href:'/constitution-gk',icon:'⚖️',title:'Constitution GK'},{href:'/government-schemes-gk',icon:'🏛️',title:'Govt Schemes'},{href:'/india-gk',icon:'🇮🇳',title:'India GK'},{href:'/science-gk',icon:'🔬',title:'Science GK'}].map(l=>(
                <a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
