'use client'

import React from 'react'

import { ArticleCard, ArticleProps } from '@/components/molecules/card/article-card'
import { Container } from '@/components/templates/container'

interface ArticleListProps {
  articles: ArticleProps[]
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <Container className="py-24">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((item) => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </div>
    </Container>
  )
}
