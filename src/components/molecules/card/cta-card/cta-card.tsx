'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { ReactNode } from 'react'

import { Button } from '@/components/atoms/ui/button'

interface CTACardProps {
  title: ReactNode
  description?: string
  ctaLabel?: string
  ctaLink?: string
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const contentVariants: Variants = {
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
      delay: 0.3
    }
  }
}

export const CTACard = ({ title, description, ctaLabel, ctaLink }: CTACardProps) => {
  return (
    <motion.figure
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-cta-gradient relative flex w-full flex-col-reverse items-center justify-between gap-8 overflow-hidden rounded-xl p-8 md:p-12 lg:flex-row lg:gap-12 lg:p-16"
    >
      <figcaption className="relative z-10 flex max-w-2xl flex-1 flex-col items-center gap-y-8 text-center lg:items-start lg:text-left">
        <header className="space-y-2 lg:space-y-5">
          <motion.h2
            variants={contentVariants}
            className="text-2xl leading-snug font-bold text-white sm:text-3xl md:text-4xl"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p variants={contentVariants} className="font-medium text-white/90 max-sm:text-sm">
              {description}
            </motion.p>
          )}
        </header>

        {ctaLabel && (
          <motion.div variants={contentVariants}>
            <Button
              size="lg"
              variant="outline"
              url={ctaLink}
              className="bg-white text-primary hover:bg-white/90 hover:text-primary"
            >
              {ctaLabel}
            </Button>
          </motion.div>
        )}
      </figcaption>

      <motion.div variants={imageVariants}>
        <Image
          src="/static/images/logo-white.png"
          alt="Meal Up Logo"
          width={300}
          height={150}
          className="h-auto w-40 object-contain md:w-52 lg:w-64"
        />
      </motion.div>
    </motion.figure>
  )
}
