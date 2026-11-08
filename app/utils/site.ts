export const site = {
  name: 'Home Concept',
  // URL canonique de prod (HTTPS, sans www, sans slash final). Le .htaccess redirige les autres variantes ici.
  url: 'https://homeconcept-renovation.fr',
  description:
    'Home Concept, spécialiste de la menuiserie sur mesure et de la rénovation intérieure à Aix-les-Bains, Chambéry, Annecy et alentours.',
  ogImage: '/img/og-image.jpg',
  areaServed: ['Aix-les-Bains', 'Chambéry', 'Annecy', 'Savoie', 'Haute-Savoie'],
  tagline: 'Aix les Bains & alentours',
  email: 'contact@homeconcept-renovation.com',
  phone: '06 76 72 79 35',
  phoneHref: 'tel:+33676727935',
  address: {
    // Même libellé que la fiche Google Business Profile (cohérence NAP pour le SEO local).
    street: '168 avenue de Saint-Simond',
    city: '73100 AIX-LES-BAINS',
    postalCode: '73100',
    locality: 'Aix-les-Bains',
    region: 'Savoie',
    country: 'FR',
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
