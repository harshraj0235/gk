import { importantDaysData } from '../../data/new-pages-data';

export const metadata = {
  title: 'Important Days 2026 In Hindi - महत्वपूर्ण दिवस | National & International Days',
  description: 'Important Days in Hindi 2026 (महत्वपूर्ण राष्ट्रीय एवं अंतर्राष्ट्रीय दिवस) - जनवरी से दिसंबर तक सभी महत्वपूर्ण दिवस। गणतंत्र दिवस, स्वतंत्रता दिवस, शिक्षक दिवस, योग दिवस आदि। SSC, UPSC परीक्षाओं के लिए।',
  keywords: 'important days in hindi, महत्वपूर्ण दिवस 2026, national days india, international days hindi, special days gk, important days for ssc, important days for upsc',
  alternates: { canonical: 'https://gkhindi.moneycal.in/important-days' },
  openGraph: { title: 'Important Days 2026 - महत्वपूर्ण दिवस', url: 'https://gkhindi.moneycal.in/important-days' },
};

export default function ImportantDaysPage() {
  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span className="sep">›</span><span className="current">Important Days</span></nav>
      <div className="main-layout">
        <article>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>📅 Important Days In Hindi - महत्वपूर्ण दिवस 2026</h1>
          <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
            <strong>महत्वपूर्ण राष्ट्रीय एवं अंतर्राष्ट्रीय दिवस</strong> की पूरी सूची महीने के अनुसार। SSC, UPSC, Banking, Railway और सभी प्रतियोगी 
            परीक्षाओं में &quot;Important Days&quot; से हर बार 2-3 प्रश्न ज़रूर आते हैं। इस पेज को बुकमार्क कर लें!
          </p>

          {importantDaysData.months.map((month) => (
            <section key={month.month} style={{ marginBottom: '32px' }}>
              <h2 className="section-title">📌 {month.month} के महत्वपूर्ण दिवस</h2>
              <div style={{ display: 'grid', gap: '6px' }}>
                {month.days.map((day, i) => (
                  <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px 16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ background: day.type === 'national' ? 'rgba(255,107,53,0.1)' : day.type === 'international' ? 'rgba(0,180,216,0.1)' : 'rgba(123,47,190,0.1)', color: day.type === 'national' ? 'var(--primary)' : day.type === 'international' ? '#00B4D8' : '#7B2FBE', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, minWidth: '90px', textAlign: 'center', flexShrink: 0 }}>
                      {day.date}
                    </span>
                    <p className="font-hindi" style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.95rem' }}>{day.name}</p>
                    <span style={{ marginLeft: 'auto', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '50px', fontWeight: 600, flexShrink: 0, background: day.type === 'national' ? 'rgba(255,107,53,0.08)' : day.type === 'international' ? 'rgba(0,180,216,0.08)' : 'rgba(123,47,190,0.08)', color: day.type === 'national' ? 'var(--primary)' : '#00B4D8' }}>
                      {day.type === 'national' ? '🇮🇳 राष्ट्रीय' : day.type === 'international' ? '🌍 अंतर्राष्ट्रीय' : '🌐 दोनों'}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section style={{ marginTop: '40px' }}>
            <h2 className="section-title">📝 Important Days से परीक्षा में कैसे प्रश्न आते हैं?</h2>
            <div className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '12px' }}>परीक्षा में आमतौर पर इस तरह के प्रश्न पूछे जाते हैं: &quot;विश्व पर्यावरण दिवस कब मनाया जाता है?&quot;, &quot;राष्ट्रीय खेल दिवस किसकी जयंती पर मनाया जाता है?&quot; आदि।</p>
              <p><strong>टिप:</strong> राष्ट्रीय दिवसों में विशेष व्यक्तियों की जयंती/पुण्यतिथि पर ध्यान दें। <a href="/gk-tricks" style={{color:'var(--primary)'}}>GK Tricks</a> से इन्हें याद करें।</p>
            </div>
          </section>
        </article>
        <aside className="sidebar"><div className="sidebar-box"><div className="sidebar-head">🔗 Related</div><nav className="sidebar-links">
          {[{href:'/first-in-india',icon:'🥇',title:'First in India'},{href:'/top-100-gk',icon:'🏆',title:'Top 100 GK'},{href:'/current-affairs',icon:'📰',title:'Current Affairs'},{href:'/constitution-gk',icon:'⚖️',title:'Constitution GK'},{href:'/india-gk',icon:'🇮🇳',title:'India GK'}].map(l=>(<a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>))}
        </nav></div></aside>
      </div>
    </div>
  );
}
