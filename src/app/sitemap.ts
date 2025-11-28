import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL ?? 'https://www.meal-up.my.id'

  const paths = [
    '',
    '/article',
    '/chatbot',
    '/faq',
    '/kebijakan-privasi',
    '/mitra',
    '/registrasi',
    '/syarat-ketentuan',
    '/tentang-kami'
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8
  }))
}
