export const site = {
  name: 'Home Concept',
  tagline: 'Aix les Bains & alentours',
  email: 'contact@homeconcept-renovation.com',
  phone: '06 76 72 79 35',
  phoneHref: 'tel:+33676727935',
  address: {
    street: '168 avenue Saint Simond',
    city: '73100 AIX-LES-BAINS',
  },
  metiers: 'Menuiserie • Plaquisterie & Isolation • Plâtrerie & peinture • Sols • Électricité',
  social: {
    instagram: 'https://www.instagram.com/homeconcept73/',
    facebook: 'https://www.facebook.com/homeconcept73',
    linkedin: 'https://www.linkedin.com/in/quentin-barbe-815551337/',
  },
} as const

export const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'La menuiserie', to: '/menuiserie' },
  { label: 'Nos métiers complémentaires', to: '/services' },
  { label: 'Qui sommes-nous ?', to: '/qui-sommes-nous' },
] as const
