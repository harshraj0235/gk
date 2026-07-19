import { gkForKidsData } from '../../data/new-pages-data';

export const metadata = {
  title: 'GK For Kids In Hindi - बच्चों के लिए सामान्य ज्ञान | Kids GK Questions',
  description: 'GK for Kids in Hindi (बच्चों के लिए सामान्य ज्ञान) - आसान भाषा में मजेदार GK प्रश्न उत्तर। इंद्रधनुष, ग्रह, जानवर, भारत की राजधानी, ताजमहल सब कुछ बच्चों के लिए। Class 1-8 के लिए।',
  keywords: 'gk for kids in hindi, बच्चों के लिए gk, kids gk questions hindi, gk for class 1 to 5 in hindi, children gk hindi, bacho ke liye gk',
  alternates: { canonical: 'https://gkhindi.moneycal.in/gk-for-kids' },
  openGraph: { title: 'GK For Kids - बच्चों के लिए सामान्य ज्ञान', url: 'https://gkhindi.moneycal.in/gk-for-kids' },
};

export default function GKForKidsPage() {
  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span className="sep">›</span><span className="current">GK for Kids</span></nav>
      <div className="main-layout">
        <article>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>👶 GK For Kids In Hindi - बच्चों के लिए सामान्य ज्ञान</h1>
          <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
            <strong>बच्चों के लिए सामान्य ज्ञान (GK for Kids)</strong> - आसान और मजेदार भाषा में GK प्रश्न उत्तर जो Class 1 से 8 तक के बच्चों के 
            लिए उपयुक्त हैं। हर प्रश्न के साथ रोचक जानकारी दी गई है ताकि बच्चे सीखते हुए मज़ा करें! 🌟
          </p>

          <section>
            <h2 className="section-title">🌈 बच्चों के लिए मजेदार GK प्रश्न</h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {gkForKidsData.questions.map((q, i) => (
                <div key={q.id} style={{ background: 'var(--bg-card)', border: '2px solid var(--border)', borderRadius: '16px', padding: '20px', transition: 'var(--transition)' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ background: `hsl(${i * 25}, 70%, 50%)`, color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1rem', flexShrink: 0 }}>{i + 1}</span>
                    <div style={{ flex: 1 }}>
                      <p className="font-hindi" style={{ fontWeight: 700, color: 'var(--text)', fontSize: '1.05rem', marginBottom: '8px' }}>❓ {q.q}</p>
                      <div style={{ background: 'rgba(45,198,83,0.08)', border: '1px solid rgba(45,198,83,0.2)', borderRadius: '10px', padding: '10px 14px', marginBottom: '6px' }}>
                        <p style={{ color: 'var(--success)', fontWeight: 700, fontSize: '1rem' }}>✅ {q.a}</p>
                      </div>
                      {q.explanation && (
                        <p className="font-hindi" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.7' }}>
                          💡 <em>{q.explanation}</em>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: '40px' }}>
            <h2 className="section-title">📝 माता-पिता के लिए टिप्स</h2>
            <div className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '12px' }}>बच्चों को GK पढ़ाने के लिए:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '6px' }}>रोज़ाना 5-10 प्रश्न खेल-खेल में पूछें</li>
                <li style={{ marginBottom: '6px' }}>गलत उत्तर पर हतोत्साहित न करें, सही उत्तर बताएं</li>
                <li style={{ marginBottom: '6px' }}>हमारे <a href="/quiz" style={{color:'var(--primary)'}}>Online Quiz</a> से इंटरैक्टिव तरीके से सिखाएं</li>
                <li>चित्रों और कहानियों के माध्यम से समझाएं</li>
              </ul>
            </div>
          </section>
        </article>
        <aside className="sidebar"><div className="sidebar-box"><div className="sidebar-head">🔗 More GK</div><nav className="sidebar-links">
          {[{href:'/top-100-gk',icon:'🏆',title:'Top 100 GK'},{href:'/gk-tricks',icon:'🧠',title:'GK Tricks'},{href:'/first-in-india',icon:'🥇',title:'First in India'},{href:'/science-gk',icon:'🔬',title:'Science GK'},{href:'/india-gk',icon:'🇮🇳',title:'India GK'},{href:'/quiz',icon:'🎯',title:'Online Quiz'}].map(l=>(<a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>))}
        </nav></div></aside>
      </div>
    </div>
  );
}
