'use client'

import { STORE_LINKS } from '@/constants/general-data'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

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
  hidden: { opacity: 0, y: 20 },
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

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
}

export const DownloadLanding = () => (
  <section className="py-16 pb-20!">
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto flex max-w-[900px]! flex-col items-center gap-8 max-md:text-center md:flex-row md:justify-between md:gap-14"
      >
        <header className="space-y-3 lg:space-y-5">
          <motion.h2 variants={itemVariants} className="text-3xl leading-snug font-bold text-slate-800 lg:text-4xl">
            Lindungi Bumi, <br /> <span className="text-primary">Level Up Your</span>{' '}
            <span className="text-accent-orange"> Meal!</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg font-medium text-slate-700 lg:text-2xl">
            Eat better, spend less, waste nothing
          </motion.p>
        </header>

        <motion.nav className="flex items-center gap-3 py-2.5 lg:gap-5" variants={containerVariants}>
          {STORE_LINKS.BLACK.map(({ href, label, src }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:opacity-80"
            >
              <Image src={src} alt={`Logo of ${label}`} width={180} height={55} className="h-14 w-auto" />
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>
    </Container>
  </section>
)
