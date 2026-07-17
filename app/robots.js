export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://gkhindipro.in/sitemap.xml',
    host: 'https://gkhindipro.in',
  };
}
