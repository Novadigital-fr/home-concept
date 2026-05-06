<script setup lang="ts">
const photos = [
  { src: '/img/fenetres.png', area: 'lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-3' },
  { src: '/img/menuiserie/interieur-baie.png', area: 'lg:col-start-4 lg:col-span-3 lg:row-start-1 lg:row-span-4' },
  { src: '/img/menuiserie/aluminium.png', area: 'lg:col-start-7 lg:col-span-3 lg:row-start-2 lg:row-span-3' },
  { src: '/img/porte-entree.png', area: 'lg:col-start-10 lg:col-span-2 lg:row-start-1 lg:row-span-4' },
  { src: '/img/menuiserie/bois.png', area: 'lg:col-start-12 lg:col-span-1 lg:row-start-1 lg:row-span-6' },
  { src: '/img/volets.png', area: 'lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:row-span-3' },
  { src: '/img/menuiserie/pvc.png', area: 'lg:col-start-4 lg:col-span-3 lg:row-start-5 lg:row-span-2' },
  { src: '/img/menuiserie-pierre.png', area: 'lg:col-start-7 lg:col-span-3 lg:row-start-5 lg:row-span-2' },
  { src: '/img/interieur-plante.png', area: 'lg:col-start-10 lg:col-span-2 lg:row-start-5 lg:row-span-2' },
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

      <div class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-12 lg:auto-rows-[90px] lg:gap-3">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          :class="[
            'aspect-square overflow-hidden lg:aspect-auto',
            photo.area,
          ]"
        >
          <NuxtImg
            :src="photo.src"
            alt=""
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
