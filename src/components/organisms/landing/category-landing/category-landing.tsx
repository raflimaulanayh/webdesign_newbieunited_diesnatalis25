'use client'

import { CATEGORY_DATA } from '@/constants/category-data'
import { motion, Variants } from 'framer-motion'

import { CategoryCard } from '@/components/molecules/card/category-card'
import { Container } from '@/components/templates/container'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20
    }
  }
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const CategoryLanding = () => (
  <section className="bg-slate-50 py-16 lg:py-20">
    <Container className="flex max-w-6xl! flex-col gap-10 lg:gap-14">
      <motion.header
        className="flex flex-col items-center gap-y-2.5 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={headerVariants}
      >
        <motion.h2 className="inline rounded-lg bg-accent-orange px-2 py-1.5 text-xl font-semibold text-white">
          Kategori Meal Up
        </motion.h2>
        <p className="text-2xl font-bold text-slate-800 sm:text-3xl lg:text-4xl">Mau pilih yang mana hari ini?</p>
      </motion.header>

      <motion.article
        className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CATEGORY_DATA.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <CategoryCard {...item} isEven={index % 2 === 0} />
          </motion.div>
        ))}
      </motion.article>
    </Container>
  </section>
)
