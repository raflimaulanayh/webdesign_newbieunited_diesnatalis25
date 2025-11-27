'use client'

import { SPONSOR_DATA } from '@/constants/sponsor-data'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

import { Container } from '@/components/templates/container'

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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
}

export const SponsorLanding = () => {
  return (
    <section className="py-10 lg:py-16">
      <Container className="flex flex-col gap-10 lg:gap-14">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl"
        >
          Didukung oleh
        </motion.h2>

        <motion.article
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-10 lg:gap-16"
        >
          {SPONSOR_DATA.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Sponsor Link"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={item.logo}
                alt={'Logo of ' + item.name}
                width={200}
                height={100}
                className="h-20 w-auto object-contain transition-all duration-300 hover:grayscale lg:h-24"
              />
            </motion.a>
          ))}
        </motion.article>
      </Container>
    </section>
  )
}
