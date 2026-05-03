<script setup lang="ts">
const photos = [
  '/img/fenetres.png',
  '/img/porte-entree.png',
  '/img/volets.png',
  '/img/menuiserie/aluminium.png',
  '/img/menuiserie/bois.png',
  '/img/menuiserie/pvc.png',
  '/img/menuiserie/interieur-baie.png',
  '/img/menuiserie-pierre.png',
  '/img/interieur-plante.png',
]
</script>

<template>
  <section class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-sm font-medium tracking-wide text-neutral-700">
          Nos réalisations
        </p>
        <h2 class="mt-1 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          MENUISERIE
        </h2>
      </div>

      <div class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div
          v-for="(src, i) in photos"
          :key="i"
          class="aspect-square overflow-hidden rounded-md"
        >
          <NuxtImg
            :src="src"
            alt=""
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
