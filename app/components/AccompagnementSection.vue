<script setup lang="ts">
type Variant = 'dark' | 'cream'
withDefaults(defineProps<{ variant?: Variant }>(), { variant: 'dark' })

const steps = [
  {
    n: 1,
    title: 'Écoute & Analyse personnalisée',
    desc: 'Comprendre votre mode de vie, vos envies, votre budget.',
  },
  {
    n: 2,
    title: 'Conception & Projection',
    desc: 'Vos idées deviennent un projet concret.',
  },
  {
    n: 3,
    title: 'Coordination & Suivi des travaux',
    desc: 'Planification, suivi de chantier et contrôle qualité.',
  },
  {
    n: 4,
    title: 'Livraison & Accompagnement final',
    desc: 'Accompagnement jusqu\'à la prise en main de votre nouvel espace.',
  },
]
</script>

<template>
  <section :class="[
    'py-20 sm:py-24',
    variant === 'cream' ? 'bg-cream text-white' : 'bg-black text-white',
  ]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl leading-none font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Votre projet&nbsp;?
        </h2>
        <p class="font-display text-3xl leading-none font-black tracking-tight sm:text-5xl lg:text-6xl">
          Notre accompagnement.
        </p>
      </div>

      <ol class="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="step in steps"
          :key="step.n"
          class="mx-auto flex max-w-[300px] flex-col items-center text-center"
        >
          <div class="grid size-14 place-items-center rounded-full bg-brand text-xl font-bold text-white shadow-lg">
            {{ step.n }}
          </div>
          <h3 class="mt-5 text-xl font-bold leading-snug sm:text-2xl">
            {{ step.title }}
          </h3>
          <p class="mt-3 max-w-sm text-base leading-relaxed text-white/90 sm:text-lg">
            {{ step.desc }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
