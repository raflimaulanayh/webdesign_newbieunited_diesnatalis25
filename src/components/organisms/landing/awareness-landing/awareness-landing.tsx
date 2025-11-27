'use client'

import { AWARENESS_DATA } from '@/constants/awareness-data'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

import { AwarenessCard } from '@/components/molecules/card/awareness-card'
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const worldLeftVariants: Variants = {
  hidden: { opacity: 0, x: -100, rotate: -10 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2
    }
  }
}

const worldRightVariants: Variants = {
  hidden: { opacity: 0, x: 100, rotate: 10 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.3
    }
  }
}

export const AwarenessLanding = () => (
  <section className="relative overflow-hidden bg-primary pt-10 pb-32 lg:pt-20">
    <Container className="relative z-10 flex flex-col items-center gap-7 text-center lg:gap-10">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-7"
      >
        <h2 className="mx-auto flex flex-wrap justify-center gap-2 text-2xl font-bold text-white max-sm:w-9/12 sm:text-3xl lg:text-4xl">
          Selamatkan Makanan
          <span className="bg-secondary px-2.5 text-nowrap">Diskon hingga 50%</span>
        </h2>

        <p className="mx-auto font-medium text-white max-sm:w-11/12 lg:text-lg">
          Dapatkan makanan berkualitas dengan harga hemat hingga 50%, hanya di aplikasi <b>Meal Up</b>
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full max-w-lg flex-col gap-5"
      >
        {AWARENESS_DATA.map((item, index) => (
          <motion.div variants={itemVariants} key={index}>
            <AwarenessCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </Container>

    <motion.div
      variants={worldLeftVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="pointer-events-none absolute bottom-0 left-0 z-0"
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
      variants={worldRightVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="pointer-events-none absolute right-0 bottom-6 z-0 max-sm:hidden"
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
