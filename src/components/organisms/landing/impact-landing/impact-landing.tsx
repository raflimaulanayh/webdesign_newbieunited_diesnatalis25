'use client'

import { IMPACT_DATA } from '@/constants/impact-data'
import { motion, Variants } from 'framer-motion'

import { ImpactCard } from '@/components/molecules/card/impact-card'
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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15
    }
  }
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const ImpactLanding = () => (
  <section className="bg-primary py-16 lg:py-20">
    <Container className="flex max-w-6xl! flex-col gap-10 lg:gap-14">
      <motion.h2
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto flex flex-wrap justify-center gap-2 text-2xl font-bold text-white max-sm:w-10/12 sm:text-3xl lg:text-4xl"
      >
        <span className="text-nowrap">Dampak Nyata Pahlawan</span>
        <span className="bg-secondary px-2.5">Meal Up</span>
      </motion.h2>

      <motion.article
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 lg:grid-cols-2 lg:gap-10"
      >
        {IMPACT_DATA.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <ImpactCard {...item} index={index} length={IMPACT_DATA.length} order={index + 1} />
          </motion.div>
        ))}
      </motion.article>
    </Container>
  </section>
)
