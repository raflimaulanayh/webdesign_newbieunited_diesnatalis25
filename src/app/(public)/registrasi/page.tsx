import { CallToAction } from '@/components/organisms/call-to-action'
import { HeroBanner } from '@/components/organisms/hero-banner'
import { RegisterForm } from '@/components/organisms/registrasi'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function TentangPage() {
  return (
    <GeneralLayout className="min-h-screen">
      <HeroBanner
        title="Langkah Awal Menjadi Mitra Meal Up"
        description="Jangan biarkan profit tergerus limbah. Naikkan level bisnismu dengan mengubah potensi kerugian menjadi pendapatan tambahan yang pasti."
      />
      <RegisterForm />
      <CallToAction />
    </GeneralLayout>
  )
}
