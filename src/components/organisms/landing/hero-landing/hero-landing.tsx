'use client'

import { motion } from 'framer-motion'

import { Button } from '@/components/atoms/ui/button'
import { Container } from '@/components/templates/container'

export const HeroLanding = () => {
  return (
    <motion.section
      className='relative overflow-hidden bg-[url("/static/images/background/bg-hero.webp")] bg-cover bg-bottom bg-no-repeat pb-20'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Container className="relative flex min-h-[50vh] flex-col items-center justify-center gap-8 text-center lg:min-h-[70vh] lg:gap-12">
        <header className="space-y-3 lg:space-y-5">
          <motion.h1
            className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Level Up Your Meal!!
          </motion.h1>

          <motion.p
            className="mx-auto font-semibold text-slate-600 max-sm:w-10/12 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
          >
            Nikmati makanan berkualitas dengan <span className="text-accent-orange">diskon 50%</span> tanpa syarat
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: 'easeOut'
          }}
        >
          <Button size="lg" url="/mitra">
            Gabung sebagai mitra
          </Button>
        </motion.div>
      </Container>
    </motion.section>
  )
}
