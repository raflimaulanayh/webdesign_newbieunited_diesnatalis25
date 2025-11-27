import { useIsDesktop } from '@/hooks/useIsDesktop'

import { cn } from '@/utils/cn'

interface Props {
  title: string
  order: number
  description: string
  index: number
  length: number
  className?: string
}

export const ImpactCard = ({ title, order, description, index, length, className }: Props) => {
  const isDesktop = useIsDesktop()
  let orderBg = 'bg-slate-400'

  if (isDesktop) {
    if (index === 0 || index === length - 1) {
      orderBg = 'bg-primary'
    } else if (index === 1 || index === 2) {
      orderBg = 'bg-accent-orange'
    }
  } else {
    orderBg = index % 2 === 0 ? 'bg-primary' : 'bg-accent-orange'
  }

  return (
    <figure
      className={cn(
        'flex w-full gap-4 rounded-xl bg-slate-100 p-4 max-sm:flex-col-reverse sm:items-center sm:justify-center sm:gap-7 sm:px-6 sm:py-5',
        className
      )}
    >
      <figcaption className="w-full space-y-1 lg:w-10/12">
        <h3 className="text-lg font-bold text-slate-600">{title}</h3>
        <p className="font-medium text-slate-500 max-sm:text-sm">{description}</p>
      </figcaption>

      <span className={cn('flex size-12 items-center justify-center rounded-lg text-lg font-bold text-white', orderBg)}>
        {order}
      </span>
    </figure>
  )
}
