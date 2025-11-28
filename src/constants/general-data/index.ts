import {
  EnvelopeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
  WhatsappLogoIcon,
  YoutubeLogoIcon
} from '@phosphor-icons/react'

export const HELP_LINKS = [
  { href: '/', label: 'Cara Pesan' },
  { href: '/chatbot', label: 'FAQ (Tanya Jawab)' },
  { href: '/kebijakan-privasi', label: 'Kebijakan Privasi' },
  { href: '/syarat-ketentuan', label: 'Syarat dan Ketentuan' }
]

export const COMPANY_LINKS = [
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/article', label: 'Blog & Edukasi' },
  { href: '/mitra', label: 'Gabung Mitra' }
]

export const CONTACT_INFO = [
  {
    href: 'mailto:hello@mealup.my.id',
    label: 'Email',
    icon: EnvelopeIcon,
    text: 'hello@mealup.my.id'
  },
  {
    href: 'tel:6281234567890',
    label: 'Phone Number',
    icon: PhoneIcon,
    text: '0812-3456-7890'
  }
]

export const SOCIAL_LINKS = [
  { href: 'https://instagram.com/mealup.my.id', label: 'Instagram', icon: InstagramLogoIcon },
  { href: 'https://wa.me/6281234567890', label: 'WhatsApp', icon: WhatsappLogoIcon },
  { href: 'https://linkedin.com/mealup-my-id', label: 'LinkedIn', icon: LinkedinLogoIcon },
  { href: 'https://youtube.com/mealup-my-id', label: 'YouTube', icon: YoutubeLogoIcon }
]

export const STORE_LINKS = {
  WHITE: [
    {
      href: 'https://play.google.com/store',
      label: 'Play Store',
      src: '/static/icons/store/play-store.svg'
    },
    {
      href: 'https://www.apple.com/id/app-store',
      label: 'App Store',
      src: '/static/icons/store/app-store.svg'
    }
  ],
  BLACK: [
    {
      href: 'https://play.google.com/store',
      label: 'Play Store',
      src: '/static/icons/store/play-store-black.svg'
    },
    {
      href: 'https://www.apple.com/id/app-store',
      label: 'App Store',
      src: '/static/icons/store/app-store-black.svg'
    }
  ]
}
