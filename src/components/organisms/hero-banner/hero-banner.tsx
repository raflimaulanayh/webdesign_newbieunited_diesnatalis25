'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/atoms/ui/button'

interface HeroProps {
  title: string
  description: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20
    }
  }
}

const decorLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.4
    }
  }
}

const decorRightVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.5
    }
  }
}

export const HeroBanner = ({ title, description }: HeroProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-primary pt-16 md:pt-24">
      <motion.div
        className="relative z-10 mx-auto w-11/12 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-[850px] leading-relaxed text-white/90 max-sm:text-sm"
        >
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 pb-14">
          <Button size="lg" variant="accent-orange" url="/registrasi">
            Daftar sekarang
          </Button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://play.google.com" target="_blank" className="transition-opacity hover:opacity-90">
              <Image
                src="/static/images/link/google-play.png"
                alt="Get it on Google Play"
                width={180}
                height={53}
                className="h-[46px] w-auto md:h-12"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={decorLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pointer-events-none absolute -bottom-5 -left-5 hidden w-40 opacity-90 select-none md:bottom-0 md:-left-16 md:w-72 lg:block"
        >
          <Image
            src="/static/images/decoration/brand-left.png"
            alt="Decoration Left"
            width={400}
            height={150}
            unoptimized
            className="object-contain"
          />
        </motion.div>

        <motion.div
          variants={decorRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pointer-events-none absolute -right-5 -bottom-5 hidden w-40 opacity-90 select-none md:-right-16 md:bottom-0 md:w-72 lg:block"
        >
          <Image
            src="/static/images/decoration/brand-right.png"
            alt="Decoration Right"
            width={400}
            height={150}
            unoptimized
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
