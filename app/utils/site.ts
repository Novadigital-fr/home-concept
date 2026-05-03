export const site = {
  name: 'Home Concept',
  tagline: 'Aix les Bains & alentours',
  email: 'contact@homeconcept-renov.fr',
  phone: '06 95 59 44 64',
  phoneHref: 'tel:+33695594464',
  address: {
    street: '46 Chemin des Simons',
    city: '73100 AIX-LES-BAINS',
  },
  metiers: 'Menuiserie • Plaquisterie & Isolation • Peinture • Sols • Électricité',
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
} as const

export const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'La menuiserie', to: '/menuiserie' },
  { label: 'Nos services complémentaires', to: '/services' },
  { label: 'Qui sommes-nous ?', to: '/qui-sommes-nous' },
] as const
