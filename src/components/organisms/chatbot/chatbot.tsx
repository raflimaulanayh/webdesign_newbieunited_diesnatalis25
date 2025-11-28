'use client'

import { QUICK_ACTIONS } from '@/constants/chatbot-data'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

import { Button } from '@/components/atoms/ui/button'
import { Container } from '@/components/templates/container'

import { MessageBubble } from './chunk'

export const ChatbotSection = () => {
  const { messages, status, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      credentials: 'include',
      headers: { 'Custom-Header': 'value' }
    })
  })

  const [input, setInput] = useState<string>('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const isLoading = status === 'streaming' || status === 'submitted'

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  const handleQuickAction = (actionText: string) => {
    if (isLoading) return
    sendMessage({ text: actionText })
  }

  return (
    <section className="relative flex min-h-[85vh] flex-col bg-slate-50/50 lg:min-h-[90vh]">
      <Container className="flex h-full max-w-5xl! flex-1 flex-col px-4 md:px-6">
        <header className="mb-6 flex items-center justify-between border-b border-slate-200/60 py-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
                <Image src="/static/icons/mealbot.svg" alt="MealBot Mascot" width={40} height={40} className="h-8 w-8" />
              </div>
              <span className="absolute right-0 bottom-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800">
                MealBot AI <Sparkles className="h-4 w-4 fill-accent-orange text-accent-orange" />
              </h2>
              <p className="text-sm text-slate-500">Asisten Cerdas Anti-Food Waste</p>
            </div>
          </div>
        </header>

        <div className="scrollbar-thin scrollbar-thumb-slate-200 flex-1 space-y-6 overflow-y-auto pr-2 pb-4">
          <AnimatePresence initial={false}>
            {messages
              .filter((msg) => msg.role === 'assistant' || msg.role === 'user')
              .map((msg) => (
                <MessageBubble key={msg.id} message={msg as ChatMessage} />
              ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <Image src="/static/icons/mealbot.svg" alt="Bot" width={24} height={24} />
                </div>
                <div className="flex items-center gap-2 rounded-xl rounded-tl-none border border-slate-100 bg-white p-4 shadow-sm">
                  <Loader2 className="size-4 animate-spin text-primary" />
                  <span className="text-sm font-medium text-slate-500">Sedang berpikir...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} className="h-4" />
        </div>

        <div className="sticky bottom-0 z-10 bg-linear-to-t from-slate-50 via-slate-50 to-transparent pt-6 pb-6 lg:pb-10">
          <div className="scrollbar-hide mb-4 overflow-x-auto pb-2">
            <div className="flex gap-2 lg:justify-center">
              {QUICK_ACTIONS.map((action: string, index: number) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleQuickAction(action)}
                  disabled={isLoading}
                  className="shrink-0 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium whitespace-nowrap text-slate-600 shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md active:scale-95 disabled:opacity-50"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          <form
            className="relative flex items-center gap-3 rounded-xl border border-primary bg-white p-2 shadow-lg shadow-slate-200/50 transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya MealBot apa saja..."
              disabled={isLoading}
              className="flex-1 bg-transparent px-6 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none disabled:opacity-50"
            />
            <Button
              type="submit"
              aria-label="Send message"
              disabled={isLoading || !input.trim()}
              rounded="full"
              className="mr-2 size-9"
            >
              {isLoading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
            </Button>
          </form>

          <p className="mt-3 text-center text-xs text-slate-400">
            MealBot bisa saja salah. Mohon cek kembali informasi penting.
          </p>
        </div>
      </Container>
    </section>
  )
}
