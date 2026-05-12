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
        <div class="inline-block">
          <p class="font-display text-center text-2xl font-bold tracking-wide text-ink sm:text-3xl lg:text-4xl">
            notre cœur de métier
          </p>
          <h2 class="font-display mt-1 text-3xl leading-none font-bold tracking-tight text-ink sm:text-5xl lg:text-7xl">
            LA MENUISERIE
          </h2>
          <p class="mt-3 text-right text-lg tracking-wider text-ink italic sm:text-xl lg:text-2xl" style="font-family: var(--font-display);">
            INTÉRIEURE &amp; EXTÉRIEURE
          </p>
        </div>
      </div>

      <div class="mt-12">
        <CenterCarousel :items="items" />
      </div>
    </div>
  </section>
</template>
