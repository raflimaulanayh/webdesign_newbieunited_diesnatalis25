import { DATASET_BOT } from '@/constants/chatbot-data'
import { google } from '@ai-sdk/google'
import { streamText, convertToCoreMessages } from 'ai'

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const coreMessages = convertToCoreMessages(messages)

    const result = streamText({
      model: google('gemini-2.0-flash'),
      system: DATASET_BOT,
      messages: coreMessages
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error('Chat API Error:', error)

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
