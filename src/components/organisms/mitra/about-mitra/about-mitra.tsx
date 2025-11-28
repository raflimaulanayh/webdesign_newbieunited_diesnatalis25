'use client'

import { MITRA_VALUE } from '@/constants/mitra-data'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

import { Container } from '@/components/templates/container'

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2
    }
  }
}

const contentContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const AboutMitra = () => (
  <section className="py-16 lg:py-20">
    <Container className="flex max-w-6xl! flex-col-reverse gap-5 sm:gap-8 lg:flex-row xl:gap-14">
      <motion.article
        className="space-y-7 lg:w-[55%]"
        variants={contentContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="text-2xl font-bold text-slate-800 sm:text-3xl lg:max-w-lg lg:text-4xl">
          Kelola Stok Lebih Mudah dengan <span className="text-primary">Meal Up</span>
        </motion.h2>

        <div className="flex w-full flex-col gap-5 lg:gap-7">
          {MITRA_VALUE?.map((item, index) => (
            <motion.figure
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-4 rounded-2xl bg-slate-100 p-5 transition-colors hover:shadow sm:flex-row lg:items-center lg:gap-7"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-white lg:size-14">
                {<item.icon className="size-6 sm:size-8" />}
              </span>
              <figcaption className="space-y-1 sm:w-10/12">
                <h3 className="text-lg font-bold text-slate-600">{item.title}</h3>
                <p className="font-medium text-slate-500 max-sm:text-sm">{item.description}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.article>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto lg:w-[45%]"
      >
        <Image
          src="/static/images/mockup-mitra.png"
          alt="Mockup Application Meal Up"
          width={400}
          height={430}
          className="h-auto w-full object-contain"
        />
      </motion.div>
    </Container>
  </section>
)
