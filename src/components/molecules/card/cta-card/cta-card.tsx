'use client'

import Image from 'next/image'

import { Button } from '@/components/atoms/ui/button'

interface CtaBannerProps {
  title: string
  highlightText?: string
  description?: string
  ctaLabel: string
  ctaLink: string
}

export const CtaBanner = ({ title, highlightText, description, ctaLabel, ctaLink }: CtaBannerProps) => {
  const renderTitle = () => {
    if (!highlightText) return title

    const parts = title.split(highlightText)

    if (parts.length === 1) return title

    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="mx-1 inline-block bg-white px-2 py-0 text-primary">{highlightText}</span>
            )}
          </span>
        ))}
      </>
    )
  }

  return (
    <section className="w-full py-8">
      <div className="relative flex flex-col-reverse items-center justify-between gap-12 overflow-hidden rounded-3xl bg-primary p-8  md:p-12 lg:flex-row lg:p-16">
        <div className="relative z-10 max-w-2xl flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl leading-snug font-bold text-white md:text-4xl">{renderTitle()}</h2>

          {description && <p className=" font-medium text-white/90">{description}</p>}

          <div className="pt-2">
            <Button size="lg" variant="outline" url={ctaLink}>
              {ctaLabel}
            </Button>
          </div>
        </div>

        <div className="relative z-10 flex flex-shrink-0 justify-center">
          <Image
            src="/static/images/logo-white.png"
            alt="Meal Up Logo"
            width={300}
            height={150}
            className="h-auto w-40 object-contain md:w-52 lg:w-64"
          />
        </div>
      </div>
    </section>
  )
}
