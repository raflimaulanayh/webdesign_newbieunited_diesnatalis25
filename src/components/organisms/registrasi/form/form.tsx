'use client'

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

  const BUSINESS_TYPES = ['Restoran / Cafe', 'Bakery / Toko Roti', 'Hotel / Katering', 'Supermarket / Ritel', 'UMKM Rumahan']
  const POSITIONS = ['Pemilik Usaha', 'Manajer Toko', 'Staf Operasional', 'Lainnya']
  const FOOD_CATEGORIES = ['Siap Saji', 'Roti & Pastry', 'Bahan Segar', 'Surprise Box']
  const OVERSTOCK_ESTIMATES = ['< 5 kg / hari', '5 - 10 kg / hari', '10 - 20 kg / hari', '> 20 kg / hari']
  const CITIES = ['Jakarta', 'Bandung', 'Surabaya', 'Bali', 'Lainnya']

  return (
    <Container className="py-24">
      <form className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
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

          <Button size="lg" variant="secondary">
            Kirim data
          </Button>
        </div>
      </form>
    </Container>
  )
}
