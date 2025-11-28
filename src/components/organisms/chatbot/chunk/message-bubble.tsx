import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import { MarkdownComponents } from '@/components/atoms/ui/markdown'

import { cn } from '@/utils/cn'

export const MessageBubble = ({ message }: { message: ChatMessage }) => {
  const isUser = message.role === 'user'
  let contentToDisplay = message.content
  if (!contentToDisplay && message.parts && message.parts.length > 0) {
    const textPart = message.parts.find((p) => p.type === 'text')
    if (textPart) {
      contentToDisplay = textPart.text
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn('flex w-full gap-4', isUser ? 'justify-end' : 'justify-start')}
    >
      {!isUser && (
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
          <Image src="/static/icons/mealbot.svg" alt="Bot" width={28} height={28} className="h-6 w-6" />
        </div>
      )}

      <div
        className={cn(
          'relative max-w-[85%] p-4 text-sm shadow-sm md:max-w-[75%] md:text-base',
          isUser
            ? 'rounded-xl rounded-tr-none bg-primary text-white'
            : 'rounded-xl rounded-tl-none border border-slate-100 bg-white text-slate-800'
        )}
      >
        {isUser ? (
          <p className="leading-relaxed whitespace-pre-wrap">{contentToDisplay}</p>
        ) : (
          <ReactMarkdown components={MarkdownComponents}>{contentToDisplay || ''}</ReactMarkdown>
        )}
      </div>

      {isUser && (
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
          <User className="h-5 w-5 text-primary" />
        </div>
      )}
    </motion.div>
  )
}
