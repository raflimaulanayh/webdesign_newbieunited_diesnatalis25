import { CallToAction, HeroAbout, VisiMisiAbout } from '@/components/organisms/about'
import { GeneralLayout } from '@/components/templates/general-layout'

export const metadata = {
  title: 'Tentang Kami',
  description:
    'Pelajari lebih lanjut tentang misi Meal Up dalam mengurangi limbah makanan dan dampak positif yang kami ciptakan bagi lingkungan serta komunitas.'
}

export default function TentangPage() {
  return (
    <GeneralLayout className="min-h-screen">
      <HeroAbout />
      <VisiMisiAbout />
      <CallToAction className="py-0! pb-20! lg:pb-32!" />
    </GeneralLayout>
  )
}
