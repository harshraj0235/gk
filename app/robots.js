export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://gk.moneycal.in/sitemap.xml',
    host: 'https://gk.moneycal.in',
  };
}
