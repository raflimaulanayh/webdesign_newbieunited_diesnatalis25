import { CallToAction } from '@/components/organisms/call-to-action'
import { HeroBanner } from '@/components/organisms/hero-banner'
import { Container } from '@/components/templates/container'
import { GeneralLayout } from '@/components/templates/general-layout'

export const metadata = {
  title: 'Kebijakan Privasi',
  description: 'Baca kebijakan privasi kami untuk memahami bagaimana data Anda dilindungi dan digunakan.'
}

export default function KebijakanPrivasiPage() {
  return (
    <GeneralLayout>
      <HeroBanner
        title="Kebijakan Privasi"
        description="Kami berkomitmen untuk melindungi privasi dan data pribadi Anda. Baca kebijakan privasi kami untuk memahami bagaimana informasi Anda dikumpulkan, digunakan, dan dilindungi saat menggunakan layanan Meal Up."
      />

      <section className="py-16">
        <Container className="mx-auto max-w-4xl space-y-6">
          <h1 className="mb-4 text-2xl font-bold">Kebijakan Privasi Meal Up</h1>
          <ol className="list-decimal space-y-6 pl-6 text-base">
            <li>
              <strong>Pengumpulan Informasi</strong>
              <br />
              Kami mengumpulkan data pribadi seperti nama, email, nomor telepon, dan informasi transaksi saat Anda
              menggunakan layanan Meal Up. Data dikumpulkan untuk keperluan pendaftaran, pemesanan, pembayaran, dan
              peningkatan layanan.
            </li>
            <li>
              <strong>Penggunaan Informasi</strong>
              <br />
              Informasi yang dikumpulkan digunakan untuk memproses pesanan, memberikan layanan terbaik, menghubungi Anda
              terkait layanan, serta mengembangkan fitur baru di Meal Up.
            </li>
            <li>
              <strong>Perlindungan Data</strong>
              <br />
              Kami berkomitmen menjaga keamanan data pribadi Anda dengan menerapkan standar perlindungan data dan teknologi
              yang sesuai. Data Anda tidak akan dibagikan kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh
              hukum.
            </li>
            <li>
              <strong>Cookies & Teknologi Pelacakan</strong>
              <br />
              Meal Up menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman pengguna, menganalisis
              penggunaan aplikasi, dan menyesuaikan konten.
            </li>
            <li>
              <strong>Hak Pengguna</strong>
              <br />
              Anda berhak mengakses, memperbaiki, atau menghapus data pribadi yang tersimpan di Meal Up. Silakan hubungi kami
              untuk permintaan terkait data Anda.
            </li>
            <li>
              <strong>Perubahan Kebijakan</strong>
              <br />
              Meal Up dapat memperbarui kebijakan privasi sewaktu-waktu. Perubahan akan diinformasikan melalui aplikasi atau
              website resmi.
            </li>
            <li>
              <strong>Kontak & Bantuan</strong>
              <br />
              Untuk pertanyaan atau permintaan terkait privasi, silakan hubungi tim Meal Up melalui WhatsApp di{' '}
              <a href="https://wa.me/6285128025700" className="text-blue-600 underline">
                0851-2802-5700
              </a>
              .
            </li>
          </ol>
          <p className="mt-6 text-sm text-gray-500">
            Privasi Anda adalah prioritas kami. Terima kasih telah mempercayai Meal Up sebagai solusi kuliner Anda!
          </p>
        </Container>
        <CallToAction className="pb-10!" />
      </section>
    </GeneralLayout>
  )
}
