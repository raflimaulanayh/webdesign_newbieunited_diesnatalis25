import { CaretLeftIcon, HeadsetIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/templates/container'

export const ChatbotNavbar = () => {
  return (
    <Container className="flex items-center justify-between gap-4">
      <Link href="/">
        <CaretLeftIcon className="size-8 text-primary" />
      </Link>
      <Link href="/">
        <Image src="/static/images/logo-mealbot.png" alt="Logo of Meal Up" width={95} height={50} />
      </Link>
      <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-white">
        <HeadsetIcon className="size-7" />
      </div>
    </Container>
  )
}
