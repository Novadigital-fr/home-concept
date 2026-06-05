<script setup lang="ts">
const metiers = [
  { label: 'Plaquisterie', icon: '/img/services/plaquisterie.svg' },
  { label: 'Isolation', icon: '/img/services/isolation.svg' },
  { label: 'Électricité', icon: '/img/services/electricite.svg' },
  { label: 'Plâtrerie & peinture', icon: '/img/services/peinture.svg' },
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

      <div class="mt-12">
        <ul class="flex flex-wrap items-end justify-center gap-10 sm:gap-14 lg:gap-20">
          <li
            v-for="m in metiers"
            :key="m.label"
            class="flex flex-col items-center gap-4 text-center"
          >
            <img
              :src="m.icon"
              :alt="m.label"
              class="h-24 w-auto object-contain"
            />
            <p class="text-base font-medium text-neutral-700">
              {{ m.label }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
