import { Icon } from '@phosphor-icons/react'

interface Props {
  className?: string
  title: string
  icon: Icon
}

export const AwarenessCard = ({ title, icon: Icon, className }: Props) => {
  return (
    <figure className={`flex w-full items-center gap-4 rounded-xl bg-slate-100 p-5 sm:gap-7 ${className}`}>
      <div className="flex size-14 items-center justify-center rounded-lg bg-secondary">
        <Icon className="size-8 text-white" />
      </div>

      <figcaption className="w-10/12 text-start font-bold text-slate-600 lg:text-lg">{title}</figcaption>
    </figure>
  )
}
