<script setup lang="ts">
const items = [
  { label: 'Porte d\'entrée', img: '/img/accueil/porte-entree.jpg' },
  { label: 'Fenêtres', img: '/img/accueil/fenetre.jpg' },
  { label: 'Volets', img: '/img/accueil/volets.jpg' },
  { label: 'Baie vitrée', img: 'https://picsum.photos/seed/baie-vitree/800/900' },
  { label: 'Porte de garage', img: 'https://picsum.photos/seed/porte-garage/800/900' },
  { label: 'Pergola', img: 'https://picsum.photos/seed/pergola/800/900' },
  { label: 'Portail', img: 'https://picsum.photos/seed/portail/800/900' },
]
</script>

<template>
  <section class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-sm font-medium tracking-wide text-neutral-700">
          Notre cœur de métier,
        </p>
        <h2 class="mt-1 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          LA MENUISERIE
        </h2>
        <p class="mt-2 text-lg font-light text-neutral-500">
          Intérieure &amp; Extérieure
        </p>
      </div>

      <div class="mt-12">
        <CenterCarousel :items="items" />
      </div>
    </div>
  </section>
</template>
