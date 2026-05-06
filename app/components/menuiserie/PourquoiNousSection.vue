<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'cream' | 'white'
}>(), {
  variant: 'cream',
})

const features = [
  {
    title: 'Solutions sur mesure',
    desc: 'Des réalisations adaptées à vos besoins et à votre habitat.',
    icon: 'lucide:ruler',
  },
  {
    title: 'Amélioration des performances énergétiques',
    desc: 'Des menuiseries conçues pour renforcer votre isolation.',
    icon: 'lucide:thermometer',
  },
  {
    title: 'Pose réalisée avec soin',
    desc: 'Une installation précise pour un résultat durable.',
    icon: 'lucide:hammer',
  },
  {
    title: 'Accompagnement de A à Z',
    desc: 'Un suivi complet, de la conception à la réalisation.',
    icon: 'lucide:hand-helping',
  },
]
</script>

<template>
  <section :class="['py-16 sm:py-20', variant === 'cream' ? 'bg-cream' : 'bg-white']">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 :class="['text-center text-3xl font-bold tracking-tight sm:text-4xl', variant === 'cream' ? 'text-white' : 'text-ink']">
        Pourquoi nous&nbsp;?
      </h2>
      <ul class="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="feature in features"
          :key="feature.title"
          class="mx-auto max-w-[250px] text-center"
        >
          <div :class="['mx-auto grid size-12 place-items-center rounded-full text-brand shadow-sm', variant === 'cream' ? 'bg-white' : 'bg-cream-light']">
            <Icon :name="feature.icon" size="22" />
          </div>
          <h3 :class="['mt-4 text-base leading-snug font-bold', variant === 'cream' ? 'text-white' : 'text-ink']">
            {{ feature.title }}
          </h3>
          <p :class="['mt-2 text-sm leading-relaxed', variant === 'cream' ? 'text-white/85' : 'text-ink/75']">
            {{ feature.desc }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
