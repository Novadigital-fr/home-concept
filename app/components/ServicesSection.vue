<script setup lang="ts">
const services = [
  { label: 'Électricité', img: '/img/electricite.png' },
  { label: 'Plaquisterie', img: '/img/plaquisterie.png' },
  { label: 'Revêtements', img: '/img/services/isolation.png' },
  { label: 'Peinture', img: '/img/services/peinture.png' },
  { label: 'Sols', img: '/img/services/sols.png' },
]
</script>

<template>
  <section class="overflow-x-hidden bg-white py-20 sm:py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-8">
      <!-- Titre -->
      <div class="flex items-center">
        <h2 class="text-3xl leading-[0.95] font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
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
            <div class="absolute inset-x-4 bottom-4 flex items-stretch">
              <div class="flex items-center bg-white/75 px-5 py-3 shadow-lg backdrop-blur">
                <span class="text-sm font-bold text-ink">{{ item.label }}</span>
              </div>
              <NuxtLink
                :to="`/services/${item.label.toLowerCase()}`"
                class="grid w-11 shrink-0 place-items-center bg-ink text-white shadow-lg transition-colors hover:bg-black"
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
