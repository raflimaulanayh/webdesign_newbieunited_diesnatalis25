import { articles } from '@/constants/article-data'

import { ArticleList } from '@/components/organisms/article'
import { HeroBanner } from '@/components/organisms/hero-banner'
import { GeneralLayout } from '@/components/templates/general-layout'

export const metadata = {
  title: 'Jurnal Super Meal',
  description:
    'Selami fakta mengejutkan tentang sampah makanan, inspirasi dari mitra lokal, dan langkah kecil yang bisa kita lakukan untuk bumi yang lebih hijau'
}

export default function ArticlePage() {
  return (
    <GeneralLayout>
      <HeroBanner
        title="Jurnal Super Meal"
        description="Selami fakta mengejutkan tentang sampah makanan, inspirasi dari mitra lokal, dan langkah kecil yang bisa kita lakukan untuk bumi yang lebih hijau"
      />
      <ArticleList articles={articles} />
    </GeneralLayout>
  )
}
