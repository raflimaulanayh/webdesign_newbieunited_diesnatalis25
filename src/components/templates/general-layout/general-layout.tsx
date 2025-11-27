'use client'

import dynamic from 'next/dynamic'
import { Fragment } from 'react'

import { useSplashStore } from '@/hooks/useSplashStore'

const Navbar = dynamic(() => import('@/components/organisms/navbar').then((mod) => mod.Navbar), {
  ssr: false,
  loading: () => <div className="sticky top-0 h-23 w-full bg-gray-50 shadow-sm" />
})

const Footer = dynamic(() => import('@/components/organisms/footer').then((mod) => mod.Footer), {
  ssr: false
})

interface GeneralLayoutProps {
  children: React.ReactNode
  className?: string
}

export const GeneralLayout = ({ children, className }: GeneralLayoutProps) => {
  const isDone = useSplashStore((s) => s.isDone)

  return (
    <Fragment>
      <Navbar />
      <div className={className}>{isDone && children}</div>
      <Footer />
    </Fragment>
  )
}
