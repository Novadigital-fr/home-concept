<script setup lang="ts">
const services = [
  { label: 'Électricité', img: '/img/electricite.png' },
  { label: 'Plaquisterie', img: '/img/plaquisterie.png' },
  { label: 'Revêtements', img: 'https://picsum.photos/seed/revetements/700/900' },
  { label: 'Peinture', img: 'https://picsum.photos/seed/peinture/700/900' },
  { label: 'Sols', img: 'https://picsum.photos/seed/sols/700/900' },
]
</script>

<template>
  <section class="overflow-x-hidden bg-white py-20 sm:py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-8">
      <!-- Titre -->
      <div class="flex items-center">
        <h2 class="text-5xl leading-[0.95] font-black tracking-tight text-ink sm:text-6xl">
          Nos<br>services<br>complémentaires
        </h2>
      </div>

      <!-- Carrousel : sort vers le bord droit du viewport -->
      <div class="min-w-0 lg:-mr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <EdgeCarousel :items="services">
          <template #card="{ item }">
            <NuxtImg
              :src="item.img"
              :alt="item.label"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              format="webp"
            />
            <div class="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
              <div class="rounded-md bg-white px-5 py-3 shadow-lg">
                <span class="text-sm font-bold text-ink">{{ item.label }}</span>
              </div>
              <NuxtLink
                :to="`/services/${item.label.toLowerCase()}`"
                class="grid size-11 shrink-0 place-items-center rounded-md bg-ink text-white transition-colors hover:bg-black"
                :aria-label="`En savoir plus sur ${item.label}`"
              >
                <Icon name="lucide:arrow-right" size="18" />
              </NuxtLink>
            </div>
          </template>
        </EdgeCarousel>
      </div>
    </div>
  </section>
</template>
