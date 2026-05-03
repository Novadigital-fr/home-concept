<script setup lang="ts">
const metiers = [
  { label: 'Peinture', icon: 'lucide:paintbrush' },
  { label: 'Isolation', icon: 'lucide:home' },
  { label: 'Électricité', icon: 'lucide:zap' },
  { label: 'Plaquisterie', icon: 'lucide:layout-panel-top' },
  { label: 'Sols', icon: 'lucide:square-stack' },
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
          class="absolute top-1/2 -left-2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2.5 shadow-md ring-1 ring-neutral-200 hover:bg-neutral-50 sm:block"
        >
          <Icon name="lucide:chevron-left" size="18" />
        </button>
        <button
          type="button"
          aria-label="Suivant"
          class="absolute top-1/2 -right-2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2.5 shadow-md ring-1 ring-neutral-200 hover:bg-neutral-50 sm:block"
        >
          <Icon name="lucide:chevron-right" size="18" />
        </button>

        <ul class="flex flex-wrap items-end justify-center gap-10 sm:gap-14 lg:gap-20">
          <li
            v-for="(m, i) in metiers"
            :key="m.label"
            class="flex flex-col items-center gap-4 text-center"
          >
            <Icon
              :name="m.icon"
              :size="i === 2 ? 80 : 64"
              :class="i === 2 ? 'text-ink' : 'text-neutral-700'"
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
