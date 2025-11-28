'use client'

import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

import { CTACard } from '@/components/molecules/card/cta-card'
import { Container } from '@/components/templates/container'

import { cn } from '@/utils/cn'

interface Props {
  variant?: 'default' | 'minimal'
  className?: string
}

export const CallToAction = ({ variant = 'default', className }: Props) => {
  const pathname = usePathname()

  return (
    <Container className={cn('py-14 lg:py-16', className)}>
      {variant === 'minimal' ? (
        <CTACard
          title={
            <Fragment>
              <span className="mx-1 inline-block bg-white px-2 py-0 text-primary">100.000+</span>
              orang <br /> telah menunjukkan minat
            </Fragment>
          }
        />
      ) : (
        <CTACard
          title={
            <Fragment>
              Siap
              <span className="mx-1 inline-block bg-white px-2 py-0 text-primary">Level Up</span>
              Bisnis Kulinermu?
            </Fragment>
          }
          description="Ubah overstock makanan menjadi pendapatan tambahan. Balik modal setiap hari, tanpa ada yang terbuang."
          ctaLabel={pathname.includes('/mitra') ? 'Daftar Sekarang' : 'Lihat Program Mitra'}
          ctaLink={pathname.includes('/mitra') ? '/registrasi' : '/mitra'}
        />
      )}
    </Container>
  )
}
