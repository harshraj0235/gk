export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://gkhindi.moneycal.in/sitemap.xml',
    host: 'https://gkhindi.moneycal.in',
  };
}
