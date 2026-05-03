<script setup lang="ts">
const fournisseurs = [
  { name: 'K-LINE', img: 'https://picsum.photos/seed/kline/700/500' },
  { name: 'Rima', img: 'https://picsum.photos/seed/rima/700/500' },
  { name: 'Internorm', img: 'https://picsum.photos/seed/internorm/700/500' },
  { name: 'Tryba', img: 'https://picsum.photos/seed/tryba/700/500' },
  { name: 'Bieber', img: 'https://picsum.photos/seed/bieber/700/500' },
]
</script>

<template>
  <section class="overflow-x-hidden bg-white py-20 sm:py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-8">
      <div>
        <h2 class="text-5xl leading-[0.95] font-black tracking-tight text-ink sm:text-6xl">
          Nos<br>fournisseurs
        </h2>
        <p class="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-neutral-700">
          Nous travaillons avec des fabricants
          <strong class="font-bold">français</strong> et
          <strong class="font-bold">européens</strong> reconnus pour la
          <strong class="font-bold">qualité</strong>, la
          <strong class="font-bold">durabilité</strong> et la
          <strong class="font-bold">performance</strong> de leurs menuiseries.
        </p>
      </div>

      <div class="min-w-0 lg:-mr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <EdgeCarousel :items="fournisseurs">
          <template #card="{ item }">
            <NuxtImg
              :src="item.img"
              :alt="item.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              format="webp"
            />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p class="text-sm font-bold tracking-wide text-white">{{ item.name }}</p>
            </div>
          </template>
        </EdgeCarousel>
      </div>
    </div>
  </section>
</template>
