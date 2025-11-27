'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/atoms/ui/button'

interface HeroProps {
  title: string
  description: string
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-primary pt-20 md:pt-24">
      <div className="relative z-10 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mb-10 max-w-4xl leading-relaxed text-white/90">{description}</p>

        <div className="flex flex-col items-center justify-center gap-8 pb-14 sm:flex-row">
          <Button size="lg" variant="accent-orange" url="/register">
            Daftar sekarang
          </Button>
          <Link href="https://play.google.com" target="_blank" className="transition-opacity hover:opacity-90">
            <Image
              src="/static/images/link/google-play.png"
              alt="Get it on Google Play"
              width={180}
              height={53}
              className="h-[46px] w-auto md:h-[48px]"
            />
          </Link>
        </div>

        <div className="pointer-events-none absolute -bottom-5 -left-5 hidden w-40 opacity-90 select-none md:bottom-0 md:left-0 md:w-72 lg:block">
          <Image
            src="/static/images/decoration/brand-left.png"
            alt="Decoration Left"
            width={400}
            height={150}
            unoptimized
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute -right-5 -bottom-5 hidden w-40 opacity-90 select-none md:right-0 md:bottom-0 md:w-72 lg:block">
          <Image
            src="/static/images/decoration/brand-right.png"
            alt="Decoration Right"
            width={400}
            height={150}
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
