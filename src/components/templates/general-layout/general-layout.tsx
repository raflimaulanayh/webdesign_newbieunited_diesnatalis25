'use client'

import dynamic from 'next/dynamic'
import { Fragment } from 'react'

const Navbar = dynamic(() => import('@/components/organisms/navbar').then((mod) => mod.Navbar), {
  ssr: false
})

const Footer = dynamic(() => import('@/components/organisms/footer').then((mod) => mod.Footer), {
  ssr: false
})

interface SiteLayoutProps {
  children: React.ReactNode
  className?: string
}

export const SiteLayout = ({ children, className }: SiteLayoutProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className={className}>{children}</div>
      <Footer />
    </Fragment>
  )
}
