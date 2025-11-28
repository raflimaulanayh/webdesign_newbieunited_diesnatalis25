'use client'

import { CATEGORY_DATA } from '@/constants/category-data'

import { CategoryCard } from '@/components/molecules/card/category-card'
import { Container } from '@/components/templates/container'

export const CategoryMitra = () => (
  <section className="py-16 lg:py-20">
    <Container className="flex max-w-6xl! flex-col gap-10 lg:gap-14">
      <p className="text-center text-2xl font-bold text-slate-800 sm:text-3xl lg:text-4xl">
        Melayani Berbagai Macam Kategori
      </p>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-7">
        {CATEGORY_DATA.map((item, index) => (
          <div key={index}>
            <CategoryCard {...item} isEven={index % 2 === 0} />
          </div>
        ))}
      </div>
    </Container>
  </section>
)
