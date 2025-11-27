'use client'

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

const mapVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2
    }
  }
}

export const MapLanding = () => {
  return (
    <section className="py-10 lg:py-16">
      <Container className="flex flex-col gap-8 lg:gap-10">
        <motion.header
          className="space-y-2 text-center lg:space-y-2.5"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Kolaborasi di Berbagai Kota Indonesia
          </h2>
          <p className="font-medium text-slate-500 max-sm:text-sm lg:text-xl">
            Sudah Digunakan Lebih dari 20+ Kota di Indonesia
          </p>
        </motion.header>

        <motion.div
          variants={mapVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto sm:w-11/12"
        >
          <Image
            src="/static/images/indonesia-map.png"
            alt="Peta sebaran wilayah"
            width={982}
            height={387}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </Container>
    </section>
  )
}
