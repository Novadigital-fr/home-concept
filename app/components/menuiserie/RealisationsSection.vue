<script setup lang="ts">
const photos = [
  { src: '/img/menuiserie/realisations/1.jpg', area: 'lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-3' },
  { src: '/img/menuiserie/realisations/3.jpg', area: 'lg:col-start-4 lg:col-span-3 lg:row-start-1 lg:row-span-4' },
  { src: '/img/menuiserie/realisations/6.jpg', area: 'lg:col-start-7 lg:col-span-3 lg:row-start-2 lg:row-span-3' },
  { src: '/img/menuiserie/realisations/8.jpg', area: 'lg:col-start-10 lg:col-span-2 lg:row-start-1 lg:row-span-4' },
  { src: '/img/menuiserie/realisations/9.jpg', area: 'lg:col-start-12 lg:col-span-1 lg:row-start-1 lg:row-span-6' },
  { src: '/img/menuiserie/realisations/12.jpg', area: 'lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:row-span-3' },
  { src: '/img/menuiserie/realisations/16.jpg', area: 'lg:col-start-4 lg:col-span-3 lg:row-start-5 lg:row-span-2' },
  { src: '/img/menuiserie/realisations/17.jpg', area: 'lg:col-start-7 lg:col-span-3 lg:row-start-5 lg:row-span-2' },
  { src: '/img/menuiserie/realisations/18.jpg', area: 'lg:col-start-10 lg:col-span-2 lg:row-start-5 lg:row-span-2' },
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
