'use client';

import { useEffect } from 'react';

const ADSENSE_CLIENT = 'ca-pub-6815277662449747';

export default function AdBanner({ dataAdSlot, dataAdFormat = 'auto', dataFullWidthResponsive = 'true', style = {} }) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const adsbygoogle = window.adsbygoogle || [];
        // Only push if there are ads that need to be filled
        if (adsbygoogle.length === 0 || document.querySelectorAll('.adsbygoogle').length > adsbygoogle.length) {
          adsbygoogle.push({});
        }
      }
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', margin: '20px auto', ...style }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive}
    />
  );
}
