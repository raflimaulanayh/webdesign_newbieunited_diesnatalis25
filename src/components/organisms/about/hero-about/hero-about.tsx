'use client'

import { ABOUT_DATA } from '@/constants/about-data'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const HeroAbout = () => {
  return (
    <section className="relative w-full pt-20 pb-0">
      <div className="relative z-20 flex w-full justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="translate-y-1/2 -rotate-2 transform bg-secondary px-6 py-3 text-lg font-bold text-white md:px-10 md:text-3xl"
        >
          {ABOUT_DATA.badge.map((line, index) => (
            <span key={index} className="block text-center">
              {line}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 rounded-t-xl bg-primary px-6 pt-24 pb-16 text-white md:rounded-t-4xl md:px-12 lg:px-[150px]">
        <div className="flex flex-col justify-center gap-12  md:gap-16 lg:flex-row lg:gap-24">
          <div className="relative h-[300px] w-full rounded-sm md:rounded-2xl lg:h-[400px]">
            <Image src={ABOUT_DATA.image} alt="Ilustrasi Food Waste" fill className="rounded-2xl object-cover" />
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl leading-tight font-bold md:text-4xl">{ABOUT_DATA.title}</h2>

            <div className="space-y-5 text-justify text-base leading-relaxed font-medium text-white/90">
              {ABOUT_DATA.paragraphs.map((text, index) => (
                <p key={index}>
                  {text.includes('Meal Up') ? (
                    <>
                      <span className="font-extrabold text-white">Meal Up</span>
                      {text.replace('Meal Up', '')}
                    </>
                  ) : (
                    text
                  )}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
