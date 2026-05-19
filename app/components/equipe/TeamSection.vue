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
    role: 'Commercial & chargé d\'affaires menuiserie',
    bio: '"Avec plus de 20 ans d\'expérience chez MGH en tant que commercial et chargé d\'affaires en menuiserie, j\'apporte aujourd\'hui une expertise solide et reconnue, renforcée par le rachat de MGH par Home Concept. Spécialiste des menuiseries {hl0}, j\'accompagne chaque projet avec précision, exigence et le souci du détail."',
    highlights: ['K·LINE'],
  },
  {
    label: 'Loïc',
    img: '/img/equipe/loic.png',
    role: 'Électricien',
    bio: '"Ancien dirigeant de ma propre entreprise d\'électricité, je suis aujourd\'hui l\'électricien de référence de Home Concept. Reconnu pour mon sérieux et mon exigence, j\'interviens principalement en {hl0}, avec la volonté de garantir des installations fiables, conformes et durables sur chaque projet."',
    highlights: ['électricité résidentielle'],
  },
  {
    label: 'André',
    img: '/img/equipe/andre.png',
    role: 'Plaquiste',
    bio: '"J\'ai suivi une formation de maçon et j\'ai ensuite exercé ce métier pendant 10 ans. Aujourd\'hui, je me spécialise dans la {hl0}, un domaine que j\'apprécie particulièrement car on passe de rien à des espaces entièrement structurés, que ce soit une maison ou un appartement.\nCe que j\'aime dans ce métier, c\'est le travail en équipe et le fait de transformer une idée de départ en un projet concret qui fait briller les yeux des clients comme de mes collègues."',
    highlights: ['pose de placo'],
  },
  {
    label: 'Fouzil',
    img: '/img/equipe/fouzil.png',
    role: 'Polyvalent rénovation',
    bio: '"J\'ai effectué 20 ans de carrière militaire avant de me reconvertir avec un bac pro en aménagement paysager, puis d\'être recruté par Quentin en 2024 chez Home Concept.\nAujourd\'hui, je touche à différents métiers, avec une préférence pour la {hl0} et la polyvalence du chantier. Ce qui me plaît le plus, c\'est de donner vie aux projets imaginés par nos clients et de voir leur satisfaction une fois le travail terminé, en laissant derrière nous un beau souvenir du passage de Home Concept, dans un esprit d\'équipe qui me rappelle celui du rugby."',
    highlights: ['menuiserie'],
  },
  {
    label: 'Cendric',
    img: '/img/equipe/cendric.png',
    role: 'Plaquiste & menuisier-poseur',
    bio: '"Licence STAPS en poche, j\'ai ensuite choisi de me réorienter vers le bâtiment avec un CAP de plaquiste obtenu en 2023. Aujourd\'hui, je me spécialise dans le {hl0} et la {hl1}, qui sont les deux domaines que je préfère.\nCe que j\'aime avant tout, c\'est partir d\'une coquille vide pour transformer l\'espace et donner vie aux projets de nos clients."',
    highlights: ['placo', 'pose de menuiseries'],
  },
  {
    label: 'Hervé',
    img: '/img/equipe/herve.png',
    role: 'Plaquiste — Spécialiste finitions',
    bio: '"Patron de l\'entreprise Decoligne, j\'ai rejoint l\'équipe pour renforcer le pôle placo. Fort de nombreuses années d\'expérience et d\'un solide réseau dans le milieu, je mets aujourd\'hui mon savoir-faire au service des projets Home Concept, avec une spécialité pour les {hl0} et les finitions impeccables."',
    highlights: ['calicots'],
  },
  {
    label: 'Daniel',
    img: '/img/equipe/daniel.png',
    role: 'Carreleur',
    bio: '"J\'ai passé 15 ans dans la Marine Nationale, avant de travailler en rénovation puis en tant que carreleur. Aujourd\'hui, je me spécialise dans le {hl0}, un métier que j\'aime particulièrement car on part de rien et on voit les lieux et la décoration prendre progressivement vie sous nos yeux.\nCe que j\'aime, c\'est anticiper, réfléchir et aller jusqu\'au bout pour obtenir un résultat le plus soigné possible… le tout avec les copains."',
    highlights: ['carrelage'],
  },
  {
    label: 'Eline',
    img: '/img/equipe/eline.png',
    role: 'Apprentie rénovation',
    bio: '"Je sors de ma 3ème générale et je suis aujourd\'hui en 1ère année de CAP, en début d\'apprentissage dans la rénovation.\nCe que je préfère, c\'est la {hl0} et le {hl1} : ce sont des finitions qui transforment complètement un logement et lui donnent une nouvelle vie. J\'ai encore beaucoup à apprendre et c\'est justement ce qui me motive au quotidien."',
    highlights: ['peinture', 'revêtement de sol'],
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
        <div class="min-w-0">
          <CenterCarousel :items="members" @update:active="activeIndex = $event" />
        </div>

        <div class="min-w-0 rounded-lg bg-cream px-6 py-8 text-center text-white shadow-sm sm:min-h-[26rem] sm:px-12 sm:py-12 lg:text-left">
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
