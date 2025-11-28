import { CallToAction } from '@/components/organisms/call-to-action'
import { FAQSection } from '@/components/organisms/faq'
import { HeroBanner } from '@/components/organisms/hero-banner'
import { CategoryMitra } from '@/components/organisms/mitra'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function TentangPage() {
  return (
    <GeneralLayout className="min-h-screen">
      <HeroBanner
        title="Level Up Your Profit"
        description="Jangan biarkan profit tergerus limbah. Naikkan level bisnismu dengan mengubah potensi kerugian menjadi pendapatan tambahan yang pasti."
      />
      <CategoryMitra />
      <CallToAction />
      <FAQSection />
    </GeneralLayout>
  )
}
