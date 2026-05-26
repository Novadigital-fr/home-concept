<script setup lang="ts">
const photos = [
  '/img/menuiserie/realisations/1.jpg',
  '/img/menuiserie/realisations/3.jpg',
  '/img/menuiserie/realisations/6.jpg',
  '/img/menuiserie/realisations/8.jpg',
  '/img/menuiserie/realisations/9.jpg',
  '/img/menuiserie/realisations/12.jpg',
  '/img/menuiserie/realisations/16.jpg',
  '/img/menuiserie/realisations/17.jpg',
  '/img/menuiserie/realisations/18.jpg',
  '/img/menuiserie/realisations/19.jpg',
  '/img/menuiserie/realisations/20.jpg',
  '/img/menuiserie/realisations/21.jpg',
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
            :src="photo"
            alt=""
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
