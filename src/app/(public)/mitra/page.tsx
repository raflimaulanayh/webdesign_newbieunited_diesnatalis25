import { CallToAction } from '@/components/organisms/call-to-action'
import { FAQSection } from '@/components/organisms/faq'
import { HeroBanner } from '@/components/organisms/hero-banner'
import { AboutMitra, BenefitMitra, CategoryMitra } from '@/components/organisms/mitra'
import { GeneralLayout } from '@/components/templates/general-layout'

export const metadata = {
  title: 'Mitra',
  description:
    'Bergabunglah dengan program mitra Meal Up dan ubah overstock makanan menjadi pendapatan tambahan. Dapatkan keuntungan lebih setiap hari tanpa ada yang terbuang.'
}

export default function MitraPage() {
  return (
    <GeneralLayout>
      <HeroBanner
        title="Level Up Your Profit"
        description="Jangan biarkan profit tergerus limbah. Naikkan level bisnismu dengan mengubah potensi kerugian menjadi pendapatan tambahan yang pasti."
      />
      <AboutMitra />
      <CategoryMitra />
      <BenefitMitra />
      <CallToAction />
      <FAQSection />
    </GeneralLayout>
  )
}
