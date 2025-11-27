'use client'

import { CtaBanner } from '@/components/molecules/card/cta-card'
import { Container } from '@/components/templates/container'

export const CallToAction = () => {
  return (
    <Container className="mb-32">
      <CtaBanner
        title="Siap Level Up Bisnis Kulinermu?"
        highlightText="Level Up"
        description="Ubah overstock makanan menjadi pendapatan tambahan. Balik modal setiap hari, tanpa ada yang terbuang."
        ctaLabel="Lihat program mitra"
        ctaLink="/mitra"
      />
    </Container>
  )
}
