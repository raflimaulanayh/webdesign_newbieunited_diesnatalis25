'use client'

import { useState } from 'react'

import { Button } from '@/components/atoms/ui/button'
import { ArticleCard, ArticleProps } from '@/components/molecules/card/article-card'
import { Container } from '@/components/templates/container'

interface ArticleListProps {
  articles: ArticleProps[]
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  const [visibleCount, setVisibleCount] = useState(3)

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <Container className="py-24">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, visibleCount).map((item) => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </div>

      {visibleCount < articles.length && (
        <div className="mt-12 flex justify-center">
          <Button onClick={handleShowMore} size="lg" variant="secondary">
            Tampilkan Lebih Banyak
          </Button>
        </div>
      )}
    </Container>
  )
}
