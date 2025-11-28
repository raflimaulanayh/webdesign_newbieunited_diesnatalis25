import { articles } from '@/constants/article-data'

import { HeroArticle, ArticleList } from '@/components/organisms/article'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function ArticlePage() {
  return (
    <GeneralLayout className="min-h-screen">
      <HeroArticle />
      <ArticleList articles={articles} />
    </GeneralLayout>
  )
}
