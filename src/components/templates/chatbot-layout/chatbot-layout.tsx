'use client'

import dynamic from 'next/dynamic'
import { Fragment } from 'react'

import { useSplashStore } from '@/hooks/useSplashStore'

const Navbar = dynamic(() => import('@/components/organisms/navbar').then((mod) => mod.Navbar), {
  ssr: false,
  loading: () => <div className="sticky top-0 h-23 w-full bg-slate-50" />
})

interface ChatbotLayoutProps {
  children: React.ReactNode
  className?: string
}

export const ChatbotLayout = ({ children, className }: ChatbotLayoutProps) => {
  const isDone = useSplashStore((s) => s.isDone)

  if (!isDone) return null

  return (
    <Fragment>
      <Navbar variant="chatbot" />
      <div className={className}>{children}</div>
    </Fragment>
  )
}
