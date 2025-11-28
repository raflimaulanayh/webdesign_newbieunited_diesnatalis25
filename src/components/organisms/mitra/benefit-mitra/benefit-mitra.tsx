'use client'

import { BENEFIT_DATA } from '@/constants/mitra-data'
import { motion, Variants } from 'framer-motion'

import { Container } from '@/components/templates/container'

import { cn } from '@/utils/cn'

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },

  show: ({ rotation, index }: { rotation: number; index: number }) => ({
    opacity: 1,
    scale: 1,
    y: [0, -6, 0],
    rotate: [rotation, rotation + 0.5, rotation - 0.5, rotation],

    transition: {
      opacity: { duration: 0.5, ease: 'easeOut' },
      scale: { type: 'spring', stiffness: 100, damping: 15 },

      y: {
        duration: 3 + (index % 3),
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: 0.2
      },
      rotate: {
        duration: 4 + (index % 2),
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }
    }
  })
}

export const BenefitMitra = () => {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 lg:pb-24!">
      <Container className="relative z-10 flex max-w-3xl! flex-col gap-12 lg:gap-16">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto flex flex-wrap justify-center gap-2 text-2xl font-bold text-slate-800 max-sm:w-10/12 sm:text-3xl lg:text-4xl"
        >
          Keuntungan Mitra
          <span className="text-primary">Meal Up</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center gap-10 px-4 sm:gap-14"
        >
          {BENEFIT_DATA.map((item, index) => {
            const isEven = (index + 1) % 2 === 0
            const zIndex = 10 + index

            return (
              <motion.figure
                key={index}
                custom={{ rotation: item.rotation, index }}
                variants={cardVariants}
                style={{ zIndex }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={cn(
                  'relative flex w-full max-w-2xl gap-5 rounded-xl p-6 shadow-lg transition-shadow max-sm:flex-col-reverse sm:items-center sm:justify-between sm:p-8 lg:gap-7',
                  index !== 0 && '-mt-8 sm:-mt-10 lg:-mt-12',
                  isEven
                    ? 'bg-primary text-white shadow-primary/30 sm:flex-row-reverse'
                    : 'border border-slate-200 bg-white text-slate-600 shadow-slate-200/60'
                )}
              >
                <figcaption className="space-y-1.5 sm:w-11/12">
                  <h3 className={cn('text-xl font-bold sm:text-2xl', isEven ? 'text-white' : 'text-slate-800')}>
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      'leading-relaxed font-medium max-sm:text-sm',
                      isEven ? 'text-slate-100' : 'text-slate-500'
                    )}
                  >
                    {item.description}
                  </p>
                </figcaption>

                <span
                  className={cn(
                    'flex size-12 shrink-0 items-center justify-center rounded-lg text-xl font-extrabold shadow-inner sm:size-14 sm:text-2xl',
                    isEven ? 'bg-secondary text-white shadow-primary/20' : 'bg-primary text-white shadow-primary/20'
                  )}
                >
                  {index + 1}
                </span>
              </motion.figure>
            )
          })}
        </motion.div>
      </Container>
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center opacity-15 select-none">
        <span className="text-7xl leading-snug font-black tracking-widest whitespace-nowrap text-primary uppercase sm:text-9xl">
          EAT BETTER, SPEND <br /> LESS, WASTE NOTHING
        </span>
      </div>
    </section>
  )
}
