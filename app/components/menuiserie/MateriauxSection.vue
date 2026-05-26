<script setup lang="ts">
const materiaux = [
  { label: 'Aluminium', desc: 'Modernité, finesse, grandes ouvertures', img: '/img/menuiserie/aluminium.webp', sub: '' },
  { label: 'Bois', desc: 'Chaleur, authenticité, noblesse', img: '/img/menuiserie/bois.jpg', sub: '' },
  { label: 'PVC', desc: 'Performance, entretien facile, abordable', img: '/img/menuiserie/pvc.jpg', sub: '' },
  { label: 'Hybride', desc: 'Le meilleur des deux mondes', img: '/img/menuiserie/hybride.jpg', sub: 'bois/aluminium ou aluminium/pvc' },
  { label: 'Acier', desc: 'Robustesse, caractère, sur-mesure', img: '/img/menuiserie/acier.jpg', sub: '' },
]
</script>

<template>
  <section class="overflow-x-hidden bg-white py-20 sm:py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-8">
      <div class="min-w-0">
        <h2 class="pointer-events-none relative z-10 text-5xl leading-[0.95] font-black tracking-tight text-white mix-blend-difference sm:text-6xl lg:text-7xl lg:whitespace-nowrap">
          Nos<br>matériaux
        </h2>
        <p class="mt-6 max-w-sm text-lg sm:text-xl leading-relaxed text-ink/80">
          Nous vous conseillerons le matériau le plus
          <strong class="font-bold">adapté</strong> à vos
          <strong class="font-bold">besoins</strong>, à votre
          <strong class="font-bold">budget</strong> et à votre
          <strong class="font-bold">habitat</strong>.
        </p>
      </div>

      <div class="min-w-0 lg:-mr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <EdgeCarousel :items="materiaux">
          <template #card="{ item }">
            <NuxtImg
              :src="item.img"
              :alt="item.label"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              format="webp"
            />
            <div class="absolute inset-x-4 bottom-4">
              <div class="flex items-stretch">
                <div class="flex flex-col items-start bg-white/75 px-5 py-3 shadow-lg backdrop-blur">
                  <p class="text-lg font-bold text-ink" style="font-family: var(--font-display);">{{ item.label }}</p>
                  <p v-if="item.sub" class="mt-0.5 text-xs text-ink/75">{{ item.sub }}</p>
                </div>
                <button
                  type="button"
                  class="grid w-11 shrink-0 place-items-center bg-ink text-white shadow-lg transition-colors hover:bg-black"
                  :aria-label="`En savoir plus sur ${item.label}`"
                >
                  <Icon name="lucide:arrow-right" size="18" />
                </button>
              </div>
              <p class="mt-3 text-base text-white drop-shadow-md sm:text-lg" style="font-family: var(--font-display);">{{ item.desc }}</p>
            </div>
          </template>
        </EdgeCarousel>
      </div>
    </div>
  </section>
</template>
