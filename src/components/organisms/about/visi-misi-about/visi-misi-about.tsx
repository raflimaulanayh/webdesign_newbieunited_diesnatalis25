'use client'

import { VISI_MISI_DATA } from '@/constants/visi-misi'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Container } from '@/components/templates/container'

export const VisiMisiAbout = () => {
  const { visi, misi } = VISI_MISI_DATA

  return (
    <Container>
      <div className="container mx-auto px-4 py-24 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block rounded-sm bg-accent-orange px-4 py-2 text-sm font-bold tracking-wide text-white shadow-sm">
              {visi.tag}
            </span>

            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">{visi.title}</h2>

            <p className="text-justify text-lg leading-relaxed text-slate-600">{visi.description}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              {visi.sdgs.map((sdg) => (
                <div
                  key={sdg.id}
                  className="relative h-28 w-28 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
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
            className="space-y-6"
          >
            <span className="inline-block rounded-md bg-accent-orange px-4 py-2 text-sm font-bold tracking-wide text-white shadow-sm">
              {misi.tag}
            </span>

            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">{misi.title}</h2>

            <ul className="mt-4 space-y-6">
              {misi.points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                  <p className="text-justify text-lg leading-relaxed text-slate-600">
                    <span className="mb-1 block font-bold text-slate-800">{point.title}</span>
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
