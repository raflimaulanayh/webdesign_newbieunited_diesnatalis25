'use client'

import { motion, AnimatePresence } from 'framer-motion' // Import animasi
import { CheckCircle, X } from 'lucide-react' // Import Icon
import { useState } from 'react'

import { Button } from '@/components/atoms/ui/button'
import { InputGroup, SelectGroup, TextareaGroup, CheckboxCustom } from '@/components/atoms/ui/form'
import { Container } from '@/components/templates/container'

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    fullName: '',
    businessType: '',
    position: '',
    categories: [] as string[],
    whatsapp: '',
    email: '',
    instagram: '',
    overstock: '',
    city: '',
    address: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleCategory = (category: string) => {
    setFormData((prev) => {
      const exists = prev.categories.includes(category)
      if (exists) {
        return { ...prev, categories: prev.categories.filter((c) => c !== category) }
      } else {
        return { ...prev, categories: [...prev.categories, category] }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitted(true)
  }

  const handleClosePopup = () => {
    setIsSubmitted(false)
    setFormData({
      brandName: '',
      fullName: '',
      businessType: '',
      position: '',
      categories: [],
      whatsapp: '',
      email: '',
      instagram: '',
      overstock: '',
      city: '',
      address: ''
    })
  }

  const BUSINESS_TYPES = ['Restoran / Cafe', 'Bakery / Toko Roti', 'Hotel / Katering', 'Supermarket / Ritel', 'UMKM Rumahan']
  const POSITIONS = ['Pemilik Usaha', 'Manajer Toko', 'Staf Operasional', 'Lainnya']
  const FOOD_CATEGORIES = ['Siap Saji', 'Roti & Pastry', 'Bahan Segar', 'Surprise Box']
  const OVERSTOCK_ESTIMATES = ['< 5 kg / hari', '5 - 10 kg / hari', '10 - 20 kg / hari', '> 20 kg / hari']
  const CITIES = ['Jakarta', 'Bandung', 'Surabaya', 'Bali', 'Lainnya']

  return (
    <Container className="relative pt-24 pb-16">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        <div className="space-y-6">
          <InputGroup
            label="Nama Brand Usaha"
            placeholder="Kopi Senja, Dapur Bu Sinta, Hotel Grand..."
            value={formData.brandName}
            onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
          />

          <SelectGroup
            label="Jenis Usaha"
            options={BUSINESS_TYPES}
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          />

          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-800">Kategori Makanan</label>
            <div className="grid grid-cols-2 gap-4">
              {FOOD_CATEGORIES.map((cat) => (
                <CheckboxCustom
                  key={cat}
                  label={cat}
                  checked={formData.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
              ))}
            </div>
          </div>

          <InputGroup
            label="Akun Instagram Bisnis (Opsional)"
            placeholder="@username_bisnis"
            value={formData.instagram}
            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
          />

          <SelectGroup
            label="Kota / Lokasi Usaha"
            options={CITIES}
            placeholder="Pilih Kota"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />

          <TextareaGroup
            label="Alamat Lengkap"
            placeholder="Jl. Jendral Sudirman No. 10..."
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>

        <div className="space-y-6">
          <InputGroup
            label="Nama Lengkap Anda"
            placeholder="Nama pemilik atau manajer toko"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />

          <SelectGroup
            label="Jabatan / Posisi"
            options={POSITIONS}
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          />

          <InputGroup
            label="Nomor WhatsApp Aktif"
            placeholder="0812-xxxx-xxxx"
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            required
          />

          <InputGroup
            label="Alamat Email Bisnis"
            placeholder="nama@bisnis.com"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <SelectGroup
            label="Estimasi Overstock"
            options={OVERSTOCK_ESTIMATES}
            value={formData.overstock}
            onChange={(e) => setFormData({ ...formData, overstock: e.target.value })}
          />

          <Button size="lg" variant="secondary" className="w-full md:w-auto">
            Kirim data
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePopup}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
            >
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 p-2 text-slate-400 transition-colors hover:text-slate-600"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center gap-4">
                <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle className="h-10 w-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800">Pendaftaran Terkirim!</h3>
                  <p className="text-slate-600">
                    Terima kasih telah mendaftar sebagai mitra Meal Up. Tim kami akan menghubungi Anda melalui WhatsApp dalam
                    waktu 1x24 jam.
                  </p>
                </div>

                <Button className="mt-4 w-full" onClick={handleClosePopup}>
                  Kembali
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Container>
  )
}
