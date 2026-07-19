import { firstInIndiaData } from '../../data/new-pages-data';

export const metadata = {
  title: 'First In India GK In Hindi - भारत में प्रथम | सामान्य ज्ञान 2026',
  description: 'भारत में प्रथम (First in India) GK in Hindi - प्रथम राष्ट्रपति, प्रथम प्रधानमंत्री, प्रथम महिला IPS, प्रथम उपग्रह, प्रथम रेलगाड़ी आदि सभी महत्वपूर्ण तथ्य। SSC, UPSC, Banking परीक्षाओं के लिए।',
  keywords: 'first in india gk in hindi, भारत में प्रथम, bharat me pratham, first in india 2026, first woman in india, first man in india gk',
  alternates: { canonical: 'https://gkhindi.moneycal.in/first-in-india' },
  openGraph: { title: 'First In India - भारत में प्रथम GK', url: 'https://gkhindi.moneycal.in/first-in-india' },
};

export default function FirstInIndiaPage() {
  const grouped = {};
  firstInIndiaData.questions.forEach(q => {
    if (!grouped[q.category]) grouped[q.category] = [];
    grouped[q.category].push(q);
  });

  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span className="sep">›</span><span className="current">First in India</span></nav>
      <div className="main-layout">
        <article>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>🥇 First In India GK - भारत में प्रथम</h1>
          <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
            <strong>भारत में प्रथम (First in India)</strong> - राजनीति, विज्ञान, खेल, शिक्षा, परिवहन, मनोरंजन सभी क्षेत्रों में भारत में पहली बार 
            हुई घटनाओं और व्यक्तियों का संपूर्ण संग्रह। ये प्रश्न SSC, UPSC, Banking और सभी प्रतियोगी परीक्षाओं में बार-बार पूछे जाते हैं।
          </p>

          {Object.entries(grouped).map(([category, items]) => (
            <section key={category} style={{ marginBottom: '32px' }}>
              <h2 className="section-title">📌 {category} - भारत में प्रथम</h2>
              <div style={{ display: 'grid', gap: '8px' }}>
                {items.map((q, i) => (
                  <div key={q.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', minWidth: '24px' }}>{i+1}.</span>
                    <div>
                      <p className="font-hindi" style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{q.q}</p>
                      <p style={{ color: 'var(--success)', fontWeight: 600, fontSize: '0.95rem' }}>✅ {q.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section style={{ marginTop: '40px' }}>
            <h2 className="section-title">📝 भारत में प्रथम - परीक्षा टिप्स</h2>
            <div className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.95rem' }}>
              <p>&quot;भारत में प्रथम&quot; से संबंधित प्रश्न लगभग हर प्रतियोगी परीक्षा में पूछे जाते हैं। विशेष रूप से &quot;प्रथम महिला&quot; से जुड़े प्रश्न SSC और UPSC में अक्सर आते हैं। <a href="/gk-tricks" style={{color:'var(--primary)'}}>GK Tricks</a> से इन्हें आसानी से याद करें।</p>
            </div>
          </section>
        </article>
        <aside className="sidebar"><div className="sidebar-box"><div className="sidebar-head">🔗 Related</div><nav className="sidebar-links">
          {[{href:'/top-100-gk',icon:'🏆',title:'Top 100 GK'},{href:'/important-days',icon:'📅',title:'Important Days'},{href:'/constitution-gk',icon:'⚖️',title:'Constitution GK'},{href:'/lucent-gk',icon:'📘',title:'Lucent GK'},{href:'/india-gk',icon:'🇮🇳',title:'India GK'},{href:'/history-gk',icon:'🏛️',title:'History GK'}].map(l=>(<a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>))}
        </nav></div></aside>
      </div>
    </div>
  );
}
