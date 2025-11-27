'use client'

import { MENU } from '@/constants/menu'
import { HeadsetIcon, ListIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useState } from 'react'

import { useScrolling } from '@/hooks/useScrolling'

import { Button } from '@/components/atoms/ui/button'
import { Container } from '@/components/templates/container'

import { cn } from '@/utils/cn'

import { MobileNavbar } from './chunk'

export const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const scrolled = useScrolling()

  return (
    <Fragment>
      <header
        className={cn(
          'sticky top-0 z-50 flex w-full items-center transition-all duration-500',
          scrolled ? 'h-21 bg-gray-50/90 shadow-sm backdrop-blur-sm' : 'h-23 bg-gray-50'
        )}
      >
        <Container className="flex items-center justify-between gap-4">
          <Link href="/">
            <Image src="/static/images/logo.png" alt="Logo of Meal Up" width={95} height={50} />
          </Link>

          <nav className="flex h-23 items-center justify-between gap-10 py-4 max-lg:hidden">
            {MENU.map((item, index) => (
              <Link key={index} href={item.url} className="group relative font-semibold text-primary">
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-primary transition-all',
                    pathname === item.url ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          <nav className="flex items-center gap-5">
            <Button url="/chatbot" rounded="full" className="size-10 justify-center max-lg:hidden">
              <HeadsetIcon className="size-7" />
            </Button>

            <Button variant="outline-green" url="/registrasi">
              Gabung
            </Button>

            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="secondary"
              rounded="full"
              className="size-10 justify-center lg:hidden"
            >
              <ListIcon className="size-6" />
            </Button>
          </nav>
        </Container>
      </header>

      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </Fragment>
  )
}
