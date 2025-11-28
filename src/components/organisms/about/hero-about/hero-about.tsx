'use client'

import { ABOUT_DATA } from '@/constants/about-data'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { Fragment } from 'react/jsx-runtime'

import { Container } from '@/components/templates/container'

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
}

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const badgeVariants: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: -10, y: '50%' },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: -2,
    y: '50%',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  }
}

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

export const HeroAbout = () => {
  return (
    <section className="relative w-full pt-10">
      <div className="relative z-20 flex w-full justify-center">
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="transform bg-secondary px-6 py-3 text-lg font-bold text-white shadow-lg md:px-10 md:text-3xl"
        >
          {ABOUT_DATA.badge.map((line, index) => (
            <span key={index} className="block text-center leading-tight">
              {line}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 rounded-t-xl bg-primary py-16 text-white sm:pt-28! md:rounded-t-[3rem] lg:py-24">
        <Container className="flex flex-col justify-center gap-12 xl:flex-row xl:gap-16">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg md:rounded-3xl lg:h-[400px]"
          >
            <Image
              src={ABOUT_DATA.image}
              alt="Ilustrasi Food Waste"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.h2 variants={fadeUpVariants} className="text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl">
              {ABOUT_DATA.title}
            </motion.h2>

            <div className="space-y-3 leading-relaxed font-medium text-white/90 max-sm:text-sm lg:space-y-5">
              {ABOUT_DATA.paragraphs.map((text, index) => (
                <motion.p key={index} variants={fadeUpVariants} className="text-left">
                  {text.includes('Meal Up') ? (
                    <Fragment>
                      {text.split('Meal Up').map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i !== arr.length - 1 && <span className="font-extrabold text-white">Meal Up</span>}
                        </span>
                      ))}
                    </Fragment>
                  ) : (
                    text
                  )}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
