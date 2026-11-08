<script setup lang="ts">
import { site } from '~/utils/site'

// Données structurées (schema.org) : fiche entreprise locale lue par Google
// pour la recherche locale et le panneau d'information.
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${site.url}/#entreprise`,
  name: site.name,
  description: site.description,
  url: `${site.url}/`,
  logo: `${site.url}/img/logo-noir.jpg`,
  image: `${site.url}${site.ogImage}`,
  telephone: site.phoneHref.replace('tel:', ''),
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  // Horaires identiques à la fiche Google Business Profile.
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  }],
  areaServed: site.areaServed.map(name => ({ '@type': 'Place', name })),
  knowsAbout: ['Menuiserie', 'Fenêtres', 'Portes', 'Volets', 'Isolation', 'Plaquisterie', 'Plâtrerie', 'Peinture', 'Sols', 'Électricité'],
  sameAs: [site.social.instagram, site.social.facebook],
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#site`,
  name: site.name,
  url: `${site.url}/`,
  inLanguage: 'fr-FR',
  publisher: { '@id': localBusiness['@id'] },
}

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(localBusiness) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(website) },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
