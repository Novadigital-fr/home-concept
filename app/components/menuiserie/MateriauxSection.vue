<script setup lang="ts">
const materiaux = [
  { label: 'Aluminium', desc: 'Modernité, finesse, grandes ouvertures', img: '/img/menuiserie/aluminium.png' },
  { label: 'Bois', desc: 'Chaleur, authenticité, sur-mesure', img: '/img/menuiserie/bois.png' },
  { label: 'PVC', desc: 'Performance, entretien facile, abordable', img: '/img/menuiserie/pvc.png' },
  { label: 'Mixte', desc: 'Le meilleur des deux mondes', img: 'https://picsum.photos/seed/mixte/700/900' },
]
</script>

<template>
  <section class="overflow-x-hidden bg-cream-light py-20 sm:py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-8">
      <div>
        <h2 class="text-5xl leading-[0.95] font-black tracking-tight text-ink sm:text-6xl">
          Nos<br>matériaux
        </h2>
        <p class="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink/80">
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
            <div class="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
              <div class="rounded-md bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
                <p class="text-base font-bold text-ink">{{ item.label }}</p>
                <p class="mt-0.5 text-xs text-neutral-600">{{ item.desc }}</p>
              </div>
              <button
                type="button"
                class="grid size-11 shrink-0 place-items-center rounded-md bg-ink text-white transition-colors hover:bg-black"
                :aria-label="`En savoir plus sur ${item.label}`"
              >
                <Icon name="lucide:plus" size="18" />
              </button>
            </div>
          </template>
        </EdgeCarousel>
      </div>
    </div>
  </section>
</template>
