'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SidebarArticleCardProps {
  title: string
  imageUrl: string
  slug: string
  date: string
}

export const SidebarArticleCard = ({ title, imageUrl, slug, date }: SidebarArticleCardProps) => {
  return (
    <Link href={slug} className="group flex items-start gap-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-1 py-1">
        <h4 className="line-clamp-2 text-sm font-bold text-gray-900 transition-colors group-hover:text-primary">{title}</h4>
        <span className="text-xs font-medium text-gray-500">{date}</span>
      </div>
    </Link>
  )
}
