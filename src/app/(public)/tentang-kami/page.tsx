import { Tentang, VisiMisi, CallToAction } from '@/components/organisms/tentang-kami'
import { GeneralLayout } from '@/components/templates/general-layout'

export default function TentangPage() {
  return (
    <GeneralLayout className="min-h-screen">
      <Tentang />
      <VisiMisi />
      <CallToAction />
    </GeneralLayout>
  )
}
