<script setup lang="ts">
const services = [
  { label: 'Électricité', img: '/img/accueil/electricite.jpg' },
  { label: 'Plaquisterie', img: '/img/accueil/plaquisterie.jpg' },
  { label: 'Isolation', img: '/img/accueil/isolation.jpg' },
  { label: 'Peinture', img: '/img/accueil/peinture.jpg' },
  { label: 'Sols', img: '/img/accueil/revetement-sol.jpg' },
]
</script>

<template>
  <section class="overflow-x-hidden bg-white py-20 sm:py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-8">
      <!-- Titre noir (visible sur fond blanc, déborde au-dessus du carrousel) -->
      <div class="flex min-w-0 items-center">
        <h2 class="relative z-10 text-3xl leading-[0.95] font-black tracking-tight text-ink sm:text-5xl lg:text-7xl lg:whitespace-nowrap">
          Nos<br>métiers<br>complémentaires
        </h2>
      </div>

      <!-- Carrousel : sort vers le bord droit du viewport -->
      <div class="min-w-0 lg:col-start-2 lg:row-start-1 lg:-mr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
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
                <span class="text-sm font-bold text-ink" style="font-family: var(--font-display);">{{ item.label }}</span>
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

      <!-- Overlay : duplicata du titre en blanc, clippé sur la cellule du carrousel
           Sa partie gauche (alignée avec le titre noir) est masquée par overflow-hidden,
           seule la portion qui chevauche le carrousel reste visible, en vrai blanc. -->
      <div
        aria-hidden="true"
        class="pointer-events-none relative hidden self-stretch overflow-hidden lg:col-start-2 lg:row-start-1 lg:block"
      >
        <h2
          class="absolute top-1/2 z-20 -translate-y-1/2 text-3xl leading-[0.95] font-black tracking-tight text-white sm:text-5xl lg:text-7xl lg:whitespace-nowrap"
          style="left: calc(-66.6667% - 3rem);"
        >
          Nos<br>métiers<br>complémentaires
        </h2>
      </div>
    </div>
  </section>
</template>
