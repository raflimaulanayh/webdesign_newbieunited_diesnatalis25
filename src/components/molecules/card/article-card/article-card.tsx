import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Badge } from '@/components/atoms/ui/badge'
import { Button } from '@/components/atoms/ui/button'

export interface ArticleProps {
  id: string
  title: string
  category: string
  imageUrl: string
  slug: string
}

export const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Link
      href={article.slug}
      className="group relative block h-[450px] w-full overflow-hidden rounded-4xl shadow-xl transition-all duration-500 hover:shadow-2xl"
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 lg:opacity-100 lg:group-hover:opacity-0" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-0 transition-transform duration-500 ease-in-out lg:translate-y-[15%] lg:group-hover:translate-y-0">
        <div className="relative w-full translate-y-1 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
          <svg viewBox="0 0 1440 320" className="w-full fill-primary" preserveAspectRatio="none" style={{ height: '140px' }}>
            <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="h-[250px] w-full bg-primary opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100" />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pb-10">
        <div className="mb-3 translate-y-0 opacity-100 transition-all delay-75 duration-500 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <Badge label={article.category} />
        </div>

        <h3 className="mb-6 -translate-y-2 text-3xl leading-tight font-bold text-white transition-transform duration-500 lg:translate-y-0 lg:group-hover:-translate-y-2">
          {article.title}
        </h3>

        <div className="translate-y-0 opacity-100 transition-all delay-100 duration-500 lg:translate-y-8 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <Button size="lg" variant="outline">
            Selengkapnya
          </Button>
        </div>
      </div>
    </Link>
  )
}
