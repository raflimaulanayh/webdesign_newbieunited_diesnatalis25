'use client'

import { AWARENESS_DATA } from '@/constants/awareness-data'
import { motion } from 'framer-motion'
import type { Variants, Easing } from 'framer-motion'
import Image from 'next/image'

import { AwarenessCard } from '@/components/molecules/card/awareness-card'
import { Container } from '@/components/templates/container'

const easeStandard: Easing = [0.25, 1, 0.5, 1]
const easeWorld: Easing = [0.24, 0.65, 0.25, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeStandard }
  }
}

const staggerCards: Variants = {
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4
    }
  }
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeStandard }
  }
}

const worldLeft: Variants = {
  hidden: { opacity: 0, x: -180, rotate: -10 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: easeWorld,
      delay: 0.25
    }
  }
}

const worldRight: Variants = {
  hidden: { opacity: 0, x: 180, rotate: 10 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: easeWorld,
      delay: 0.35
    }
  }
}

export const AwarenessLanding = () => (
  <section className="relative overflow-hidden bg-primary pt-10 pb-32 lg:pt-20">
    <Container className="relative z-10 flex flex-col items-center gap-7 text-center lg:gap-10">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex flex-wrap justify-center gap-2 text-2xl font-bold text-white max-sm:w-9/12 sm:text-3xl lg:text-4xl"
      >
        Selamatkan Makanan
        <span className="bg-secondary px-2.5">Diskon hingga 50%</span>
      </motion.h2>

      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-lg flex-col gap-7 text-center"
      >
        <p className="mx-auto font-medium text-white max-sm:w-11/12 lg:text-lg">
          Dapatkan makanan berkualitas dengan harga hemat hingga 50%, hanya di aplikasi <b>Meal Up</b>
        </p>

        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          {AWARENESS_DATA.map((item, index) => (
            <motion.div variants={cardItem} key={index}>
              <AwarenessCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.article>
    </Container>

    <motion.div
      variants={worldLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="absolute bottom-0 left-0 "
    >
      <Image
        src="/static/images/decoration/world-left.png"
        width={400}
        height={400}
        alt=""
        className="w-52 object-contain lg:w-96"
      />
    </motion.div>

    <motion.div
      variants={worldRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="absolute right-0 max-sm:hidden lg:bottom-6"
    >
      <Image
        src="/static/images/decoration/world-right.png"
        width={400}
        height={400}
        alt=""
        className="w-52 object-contain lg:w-96"
      />
    </motion.div>
  </section>
)
