<script setup lang="ts">
const metiers = [
  { label: 'Peinture', icon: '/img/services/peinture.svg' },
  { label: 'Isolation', icon: '/img/services/isolation.svg' },
  { label: 'Électricité', icon: '/img/services/electricite.svg' },
  { label: 'Plaquisterie', icon: '/img/services/plaquisterie.svg' },
  { label: 'Sols', icon: '/img/services/sols.svg' },
]
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="mx-auto max-w-2xl text-center text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
        Des métiers complémentaires pour un accompagnement global
        de vos projets de rénovation et d'aménagement.
      </h2>

      <div class="relative mt-12">
        <button
          type="button"
          aria-label="Précédent"
          class="absolute top-1/2 -left-2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full bg-white shadow-md ring-1 ring-neutral-200 hover:bg-neutral-50 sm:grid"
        >
          <Icon name="lucide:chevron-left" size="18" />
        </button>
        <button
          type="button"
          aria-label="Suivant"
          class="absolute top-1/2 -right-2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full bg-white shadow-md ring-1 ring-neutral-200 hover:bg-neutral-50 sm:grid"
        >
          <Icon name="lucide:chevron-right" size="18" />
        </button>

        <ul class="flex flex-wrap items-end justify-center gap-10 sm:gap-14 lg:gap-20">
          <li
            v-for="(m, i) in metiers"
            :key="m.label"
            class="flex flex-col items-center gap-4 text-center"
          >
            <img
              :src="m.icon"
              :alt="m.label"
              :class="[
                'w-auto object-contain',
                i === 2 ? 'h-28' : 'h-24',
              ]"
            />
            <p
              :class="[
                'transition-all',
                i === 2 ? 'text-lg font-bold text-ink' : 'text-base font-medium text-neutral-700',
              ]"
            >
              {{ m.label }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
