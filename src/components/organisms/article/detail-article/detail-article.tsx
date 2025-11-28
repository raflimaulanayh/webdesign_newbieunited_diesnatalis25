'use client'

import { articles } from '@/constants/article-data'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { ArticleMeta } from '@/components/molecules/meta/article-meta'
import { ArticleShare } from '@/components/molecules/share/article-share'
import { ArticleSidebar } from '@/components/molecules/sidebar/article-sidebar'
import { Container } from '@/components/templates/container'

interface ArticleDetailProps {
  article: {
    id: string
    title: string
    category: string
    imageUrl: string
    date?: string
    readTime?: string
    content?: string
  }
}

export const ArticleDetail = ({ article }: ArticleDetailProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const contentHtml = article.content || '<p>Konten belum tersedia.</p>'
  const tags = [article.category, 'Tips', 'Hemat', 'Anak Kos']

  const relatedArticles = articles.filter((item) => item.id !== article.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div
          className={`absolute inset-0 h-full w-full transition-transform duration-[2000ms] ease-out ${mounted ? 'scale-105' : 'scale-100'}`}
        >
          <Image src={article.imageUrl} alt={article.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>

        <div className="absolute top-0 left-0 z-30 w-full p-6">
          <Container>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Container>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 sm:pb-24">
          <Container>
            <div
              className={`transition-all duration-1000 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <ArticleMeta
                title={article.title}
                category={article.category}
                date={article.date || ''}
                readTime={article.readTime || ''}
              />
            </div>
          </Container>
        </div>

        <div className="absolute bottom-0 left-0 z-20 w-full translate-y-1">
          <svg viewBox="0 0 1440 320" className="w-full fill-white" preserveAspectRatio="none" style={{ height: '80px' }}>
            <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="pt-8 lg:col-span-8">
            <article
              className={`article-content transition-all delay-300 duration-1000 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            <div className="mt-12 flex items-center gap-4 border-t border-gray-100 pt-8">
              <ArticleShare />
            </div>
          </div>

          <aside className="hidden lg:col-span-4 lg:block">
            <ArticleSidebar tags={tags} relatedArticles={relatedArticles} />
          </aside>
        </div>
      </Container>
    </div>
  )
}
