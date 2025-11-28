import { FAQSection } from '@/components/organisms/faq'
import { GeneralLayout } from '@/components/templates/general-layout'

export const metadata = {
  title: 'FAQ',
  description: 'Temukan jawaban atas pertanyaan umum seputar penggunaan layanan Meal Up.'
}

export default function FaqPage() {
  return (
    <GeneralLayout>
      <FAQSection />
    </GeneralLayout>
  )
}
