<script setup lang="ts">
const items = [
  { label: 'Porte d\'entrée', img: '/img/menuiserie/porte-entree.jpg' },
  { label: 'Fenêtres', img: '/img/menuiserie/fenetre.jpg' },
  { label: 'Volets', img: '/img/menuiserie/volets.jpg' },
  { label: 'Baie vitrée', img: 'https://picsum.photos/seed/baie-vitree/800/900' },
  { label: 'Porte de garage', img: 'https://picsum.photos/seed/porte-garage/800/900' },
  { label: 'Pergola', img: 'https://picsum.photos/seed/pergola/800/900' },
  { label: 'Portail', img: 'https://picsum.photos/seed/portail/800/900' },
]
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="text-center text-base text-neutral-700">
        Pour un habitat plus performant &amp; esthétique...
      </p>

      <div class="mt-10">
        <CenterCarousel :items="items" />
      </div>

      <p class="mx-auto mt-10 max-w-3xl text-center text-[0.95rem] leading-relaxed text-neutral-700">
        Nous (construisons) et installons vos portes, fenêtres et aménagements en bois,
        aluminium, PVC (mettre tous les matériaux), avec des solutions adaptées à
        chaque projet.
      </p>

      <div class="mt-8 text-center">
        <UiButton to="/votre-projet" variant="cream" size="lg">
          Demander votre devis menuiserie
        </UiButton>
      </div>
    </div>
  </section>
</template>
