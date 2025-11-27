import { Icon } from '@phosphor-icons/react'

import { cn } from '@/utils/cn'

interface Props {
  title: string
  icon: Icon
  description: string
  isEven?: boolean
  className?: string
}

export const CategoryCard = ({ title, icon: Icon, description, isEven, className }: Props) => {
  return (
    <figure className={cn('flex flex-col items-center gap-2.5', className)}>
      <div
        className={cn(
          'flex size-24 items-center justify-center rounded-full text-white',
          isEven ? 'bg-primary' : 'bg-secondary'
        )}
      >
        <Icon className="size-19" />
      </div>

      <figcaption className="mx-auto max-w-64 space-y-1 text-center lg:space-y-2.5">
        <h3 className="text-lg font-bold text-slate-700 lg:text-xl">{title}</h3>
        <p className="text-xs text-slate-500 sm:text-sm">{description}</p>
      </figcaption>
    </figure>
  )
}
