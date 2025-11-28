'use client'

import React from 'react'

import { SidebarArticleCard } from '@/components/molecules/card/sidebar-article-card'

interface RelatedArticle {
  id: string
  title: string
  imageUrl: string
  slug: string
  date?: string
}

interface ArticleSidebarProps {
  tags: string[]
  relatedArticles: RelatedArticle[]
}

export const ArticleSidebar = ({ tags, relatedArticles }: ArticleSidebarProps) => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="rounded-3xl bg-gray-50 p-8">
        <h3 className="mb-4 text-lg font-bold text-gray-900">Tentang Artikel Ini</h3>
        <p className="text-sm leading-relaxed text-gray-500">
          Panduan ini dikurasi oleh tim ahli kami untuk membantu Anda berhemat dan hidup lebih sehat dengan mengurangi limbah
          makanan.
        </p>

        <div className="my-6 h-px w-full bg-gray-200" />

        <div>
          <span className="mb-3 block text-xs font-bold tracking-wider text-gray-400 uppercase">Topik Terkait</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="cursor-default rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-lg font-bold text-gray-900">Baca Juga</h3>
        <div className="flex flex-col gap-6">
          {relatedArticles?.map((item) => (
            <SidebarArticleCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              slug={item.slug}
              date={item.date || ''}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
