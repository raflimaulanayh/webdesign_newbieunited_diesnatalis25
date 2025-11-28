import { HeroRegist, RegisterForm, CallToAction } from '@/components/organisms/registrasi'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function TentangPage() {
  return (
    <GeneralLayout className="min-h-screen">
      <HeroRegist />
      <RegisterForm />
      <CallToAction />
    </GeneralLayout>
  )
}
