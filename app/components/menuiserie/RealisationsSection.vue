<script setup lang="ts">
// alt : décrit la réalisation (accessibilité + référencement Google Images).
const photos = [
  { src: '/img/menuiserie/realisations/1.jpg', alt: 'Fenêtre de pignon sous charpente en bois apparente' },
  { src: '/img/menuiserie/realisations/3.jpg', alt: 'Grande fenêtre fixe à cadre noir dans un séjour' },
  { src: '/img/menuiserie/realisations/6.jpg', alt: 'Fenêtre de toit avec store dans des combles aménagés' },
  { src: '/img/menuiserie/realisations/8.jpg', alt: 'Porte-fenêtre cintrée bleue sur mesure pour une façade de boutique' },
  { src: '/img/menuiserie/realisations/9.jpg', alt: 'Portes intérieures finition bois dans un couloir' },
  { src: '/img/menuiserie/realisations/12.jpg', alt: 'Fenêtre coulissante noire donnant sur le jardin' },
  { src: '/img/menuiserie/realisations/16.jpg', alt: 'Porte d\'entrée vert de gris avec heurtoir' },
  { src: '/img/menuiserie/realisations/17.jpg', alt: 'Grandes fenêtres à petits bois ouvrant sur le jardin' },
  { src: '/img/menuiserie/realisations/18.jpg', alt: 'Fenêtre de toit avec volet roulant intégré' },
  { src: '/img/menuiserie/realisations/19.jpg', alt: 'Poignée K-Line sur une fenêtre blanche' },
  { src: '/img/menuiserie/realisations/20.jpg', alt: 'Pose d\'une fenêtre de toit en rénovation de combles' },
  { src: '/img/menuiserie/realisations/21.jpg', alt: 'Baies vitrées coulissantes noires sous charpente bois' },
]
</script>

<template>
  <section class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="font-display text-lg font-bold tracking-wide text-ink sm:text-xl lg:text-2xl">
          Nos réalisations
        </p>
        <h2 class="mt-1 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          MENUISERIE
        </h2>
      </div>

      <div class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          class="aspect-square overflow-hidden"
        >
          <NuxtImg
            :src="photo.src"
            :alt="photo.alt"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
