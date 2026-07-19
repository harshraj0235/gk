'use client';
import { useState, useEffect } from 'react';

export default function ShareButtons({ title, text, url }) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (url) {
      setCurrentUrl(url);
    } else {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const shareText = text || title || 'GK In Hindi - सामान्य ज्ञान प्रश्न उत्तर';

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || 'GK In Hindi',
          text: shareText,
          url: currentUrl,
        });
      } catch (error) {
        console.error('Error sharing', error);
      }
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: '💬',
      color: 'bg-green-500',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`
    },
    {
      name: 'Facebook',
      icon: '📘',
      color: 'bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Telegram',
      icon: '✈️',
      color: 'bg-blue-400',
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`
    }
  ];

  return (
    <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
      <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 text-center uppercase tracking-wider">
        इस पेज को शेयर करें
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium text-sm transition hover:opacity-90 shadow-sm ${link.color}`}
          >
            <span>{link.icon}</span> {link.name}
          </a>
        ))}
        {typeof navigator !== 'undefined' && navigator.share && (
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-white font-medium text-sm transition hover:bg-gray-600 shadow-sm"
          >
            <span>📤</span> अन्य
          </button>
        )}
      </div>
    </div>
  );
}
