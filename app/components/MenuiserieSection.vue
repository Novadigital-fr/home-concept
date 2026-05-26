<script setup lang="ts">
const items = [
  { label: 'Porte d\'entrée', img: '/img/accueil/slider/porte.png' },
  { label: 'Fenêtres', img: '/img/accueil/slider/fenetre.png' },
  { label: 'Volets', img: '/img/accueil/slider/volet.png' },
  { label: 'Baie coulissante', img: '/img/accueil/slider/baie-coulissante.png' },
  { label: 'BSO', img: '/img/accueil/slider/bso.png' },
  { label: 'Garde-corps', img: '/img/accueil/slider/garde-corps.png' },
  { label: 'Vitrine', img: '/img/accueil/slider/vitrine.png' },
  { label: 'Escaliers', img: '/img/accueil/slider/escaliers.png' },
  { label: 'Stores', img: '/img/accueil/slider/stores.png' },
  { label: 'Clôture', img: '/img/accueil/slider/cloture.png' },
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
