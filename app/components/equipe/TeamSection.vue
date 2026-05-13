<script setup lang="ts">
type Member = {
  label: string
  img: string
  role: string
  bio: string
  highlights?: string[]
}

const members: Member[] = [
  {
    label: 'Quentin',
    img: '/img/equipe/quentin.png',
    role: 'Gérant de Home Concept',
    bio: '"J\'ai été professionnel de santé pendant 12 ans, puis rugbyman semi-pro et président de club. Je me suis ensuite formé à la rénovation sur différents projets, avec un CAP électricien et une VAE de menuisier-poseur.\nJe me spécialise aujourd\'hui en {hl0} et en {hl1}, mes deux domaines de prédilection. Ce qui me motive, c\'est de concrétiser les projets de nos clients, dans un esprit d\'équipe, comme sur un terrain de rugby."',
    highlights: ['menuiserie', 'électricité'],
  },
  {
    label: 'Gérard',
    img: '/img/equipe/gerard.png',
    role: 'Menuisier-poseur',
    bio: '"Menuisier de formation, je mets mon expérience au service de chaque chantier. La précision de la pose et le soin apporté aux finitions sont pour moi essentiels pour garantir un travail durable et de qualité."',
  },
  {
    label: 'Cendric',
    img: '/img/equipe/cendric.png',
    role: 'Polyvalent rénovation',
    bio: '"Touche-à-tout passionné, j\'interviens sur l\'ensemble des corps de métier de la rénovation. La polyvalence me permet d\'apporter des solutions concrètes et adaptées à chaque étape du chantier."',
  },
]

const activeIndex = ref(0)
const active = computed(() => members[activeIndex.value]!)

const bioParts = computed(() => {
  const parts: { text: string; highlight: boolean }[] = []
  const text = active.value.bio
  const hls = active.value.highlights ?? []
  let cursor = 0
  const regex = /\{hl(\d+)\}/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(text)) !== null) {
    if (match.index > cursor) {
      parts.push({ text: text.slice(cursor, match.index), highlight: false })
    }
    parts.push({ text: hls[Number(match[1])] ?? match[0], highlight: true })
    cursor = match.index + match[0].length
  }
  if (cursor < text.length) {
    parts.push({ text: text.slice(cursor), highlight: false })
  }
  return parts
})
</script>

<template>
  <section class="bg-white py-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <CenterCarousel :items="members" @update:active="activeIndex = $event" />
        </div>

        <div class="min-h-[22rem] rounded-lg bg-cream px-8 py-10 text-center text-white shadow-sm sm:min-h-[26rem] sm:px-12 sm:py-12 lg:text-left">
          <p class="text-2xl font-bold sm:text-3xl">
            {{ active.role }}
          </p>
          <p class="mt-4 text-lg leading-relaxed whitespace-pre-line italic sm:text-xl">
            <template v-for="(part, i) in bioParts" :key="i">
              <strong v-if="part.highlight" class="font-bold not-italic">{{ part.text }}</strong>
              <template v-else>{{ part.text }}</template>
            </template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
