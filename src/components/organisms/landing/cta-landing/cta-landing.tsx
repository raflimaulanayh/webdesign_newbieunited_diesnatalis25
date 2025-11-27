'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@/components/atoms/ui/button'
import { Container } from '@/components/templates/container'

const contentContainerVariants: Variants = {
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
      stiffness: 60,
      damping: 20
    }
  }
}

const earthVariants: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.3
    }
  }
}

export const CTALanding = () => (
  <section className="bg-cta-gradient relative overflow-hidden py-16 lg:py-20">
    <Container className="relative z-10 max-w-[900px]!">
      <motion.div
        variants={contentContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-start gap-8 lg:gap-10"
      >
        <header className="max-w-[460px] space-y-4">
          <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Tingkatkan Level Bisnismu Bersama Meal Up
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-100 max-sm:text-sm lg:text-xl">
            Ubah potensi kerugian stok menjadi keuntungan, perluas jangkauan pelanggan.
          </motion.p>
        </header>

        <motion.div variants={itemVariants} className="flex items-center gap-4 lg:gap-6">
          <Button size="lg" url="/registrasi" variant="accent-orange">
            Daftar mitra gratis
          </Button>
          <Button size="lg" url="/mitra" variant="outline">
            Lihat cara kerja
          </Button>
        </motion.div>
      </motion.div>
    </Container>

    <motion.div
      variants={earthVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="absolute right-0 bottom-0 z-0 max-sm:hidden md:right-20"
    >
      <Image
        src="/static/images/earth.png"
        alt=""
        width={500}
        height={500}
        className="w-[300px] object-contain sm:w-[350px] lg:w-[450px]"
      />
    </motion.div>
  </section>
)
