import { ChatbotSection } from '@/components/organisms/chatbot'
import { ChatbotLayout } from '@/components/templates/chatbot-layout'

export const metadata = {
  title: 'Chatbot',
  description: 'Interact with our AI-powered chatbot to get instant assistance and information.'
}

export default function ChatbotPage() {
  return (
    <ChatbotLayout>
      <ChatbotSection />
    </ChatbotLayout>
  )
}
