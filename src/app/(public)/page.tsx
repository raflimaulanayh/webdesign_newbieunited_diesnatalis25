import { AwarenessLanding, HeroLanding } from '@/components/organisms/landing'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function LandingPage() {
  return (
    <GeneralLayout className="min-h-screen">
      <HeroLanding />
      <AwarenessLanding />
    </GeneralLayout>
  )
}
