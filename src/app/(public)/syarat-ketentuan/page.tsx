import { CallToAction } from '@/components/organisms/call-to-action'
import { HeroBanner } from '@/components/organisms/hero-banner'
import { Container } from '@/components/templates/container'
import { GeneralLayout } from '@/components/templates/general-layout'

export const metadata = {
  title: 'Syarat dan Ketentuan',
  description: 'Baca syarat dan ketentuan penggunaan layanan kami di halaman ini.'
}

export default function SyaratKetentuanPage() {
  return (
    <GeneralLayout>
      <HeroBanner
        title="Syarat dan Ketentuan"
        description="Baca dengan seksama syarat dan ketentuan penggunaan aplikasi Meal Up. Kami berkomitmen memberikan layanan terbaik dan transparan untuk seluruh pengguna demi mendukung UMKM kuliner Indonesia."
      />
      <section className="py-16">
        <Container className="mx-auto max-w-4xl space-y-6">
          <h1 className="mb-4 text-2xl font-bold">Syarat dan Ketentuan Meal Up</h1>
          <ol className="list-decimal space-y-6 pl-6 text-base">
            <li>
              <strong>Penerimaan Syarat</strong>
              <br />
              Dengan menggunakan aplikasi Meal Up, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan
              ketentuan yang berlaku.
            </li>
            <li>
              <strong>Penggunaan Layanan</strong>
              <br />
              Meal Up menyediakan platform untuk menemukan, memesan, dan mendukung UMKM kuliner. Pengguna wajib menggunakan
              layanan secara bijak dan tidak melanggar hukum yang berlaku.
            </li>
            <li>
              <strong>Akun Pengguna</strong>
              <br />
              Pengguna bertanggung jawab atas keamanan akun dan data pribadi yang digunakan dalam aplikasi. Segala aktivitas
              yang terjadi melalui akun merupakan tanggung jawab pengguna.
            </li>
            <li>
              <strong>Transaksi & Pembayaran</strong>
              <br />
              Semua transaksi yang dilakukan melalui Meal Up wajib mengikuti prosedur dan metode pembayaran yang tersedia.
              Meal Up tidak bertanggung jawab atas kesalahan pembayaran yang dilakukan di luar platform.
            </li>
            <li>
              <strong>Konten & Informasi</strong>
              <br />
              Informasi dan konten yang tersedia di Meal Up dapat berubah sewaktu-waktu. Meal Up berusaha memberikan data
              yang akurat, namun tidak menjamin keakuratan dan kelengkapan informasi.
            </li>
            <li>
              <strong>Perlindungan Data</strong>
              <br />
              Meal Up berkomitmen menjaga privasi dan keamanan data pengguna sesuai dengan Kebijakan Privasi yang berlaku.
            </li>
            <li>
              <strong>Perubahan Syarat</strong>
              <br />
              Meal Up berhak mengubah syarat dan ketentuan sewaktu-waktu. Perubahan akan diinformasikan melalui aplikasi atau
              website resmi.
            </li>
            <li>
              <strong>Kontak & Bantuan</strong>
              <br />
              Untuk pertanyaan atau bantuan, silakan hubungi tim Meal Up melalui WhatsApp di{' '}
              <a href="https://wa.me/6285128025700" className="text-blue-600 underline">
                0851-2802-5700
              </a>
              .
            </li>
          </ol>
          <p className="mt-6 text-sm text-gray-500">
            Terima kasih telah menggunakan Meal Up dan mendukung UMKM kuliner Indonesia!
          </p>
        </Container>
        <CallToAction className="pb-10!" />
      </section>
    </GeneralLayout>
  )
}
