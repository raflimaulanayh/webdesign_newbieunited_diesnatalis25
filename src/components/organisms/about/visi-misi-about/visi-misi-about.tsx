'use client'

import { VISI_MISI_DATA } from '@/constants/visi-misi'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Container } from '@/components/templates/container'

export const VisiMisiAbout = () => {
  const { visi, misi } = VISI_MISI_DATA

  return (
    <Container className="py-14 lg:py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-6"
        >
          <span className="inline-block rounded-sm bg-accent-orange px-4 py-2 text-sm font-bold tracking-wide text-white shadow-sm">
            {visi.tag}
          </span>

          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl lg:text-4xl">{visi.title}</h2>

          <p className="text-justify leading-relaxed text-slate-600 max-sm:text-sm">{visi.description}</p>

          <div className="flex flex-wrap gap-4 pt-4">
            {visi.sdgs.map((sdg) => (
              <div
                key={sdg.id}
                className="relative size-20 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 sm:size-28"
              >
                <Image src={sdg.image} alt={sdg.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-6"
        >
          <span className="inline-block rounded-md bg-accent-orange px-4 py-2 text-sm font-bold tracking-wide text-white shadow-sm">
            {misi.tag}
          </span>

          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl lg:text-4xl">{misi.title}</h2>

          <ul className="space-y-6">
            {misi.points.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                <p className="text-justify leading-relaxed text-slate-600 max-sm:text-sm">
                  <span className="mb-1 block font-bold text-slate-800">{point.title}</span>
                  {point.description}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Container>
  )
}
