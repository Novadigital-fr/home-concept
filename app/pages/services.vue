<script setup lang="ts">
useHead({
  title: 'Nos métiers complémentaires — Home Concept',
  meta: [
    {
      name: 'description',
      content:
        'Électricité, isolation, plaquisterie, sols, peinture — Home Concept assure un accompagnement global de vos projets de rénovation et d\'aménagement.',
    },
  ],
})

const blocks = [
  {
    title: "L'Électricité",
    description:
      "Chez Home Concept, l'électricité est pensée comme un élément clé du confort et de la sécurité de votre habitat. De l'installation complète à la rénovation, en passant par la mise aux normes, l'éclairage ou les équipements connectés, chaque intervention est réalisée avec précision et dans le respect des réglementations en vigueur. L'objectif : vous offrir un réseau fiable, performant et adapté à vos usages au quotidien.",
    image: '/img/services/electricite.jpg',
    variant: 'dark' as const,
    imagePosition: 'right' as const,
  },
  {
    title: "L'Isolation",
    description:
      "L'isolation est étroitement liée à la qualité de vos menuiseries. Fenêtres, portes et ouvertures jouent un rôle essentiel dans la performance thermique de votre habitat. En optimisant ces points clés, nous limitons les déperditions de chaleur, améliorons votre confort au quotidien et réduisons votre consommation énergétique. Une approche globale, où menuiserie et isolation travaillent main dans la main pour un résultat durable et efficace.",
    image: '/img/services/isolation.jpg',
    variant: 'white' as const,
    imagePosition: 'left' as const,
  },
  {
    title: 'La Plaquisterie',
    description:
      "La plaquisterie structure et valorise vos espaces intérieurs. Création de cloisons, faux plafonds, doublages ou aménagements sur mesure : chaque réalisation est pensée pour optimiser les volumes, améliorer l'isolation et offrir des finitions soignées. Un savoir-faire précis pour des intérieurs fonctionnels, esthétiques et durables.",
    image: '/img/services/plaquisterie.jpg',
    variant: 'cream' as const,
    imagePosition: 'right' as const,
  },
  {
    title: 'Les Sols',
    description:
      "Le revêtement de sol vient sublimer vos espaces tout en répondant à vos contraintes du quotidien. Parquet, carrelage, vinyle ou sols techniques : chaque matériau est sélectionné avec soin et posé avec précision pour garantir esthétisme, durabilité et confort. Une finition essentielle pour donner du caractère et de la cohérence à votre intérieur.",
    image: '/img/services/sols.jpg',
    variant: 'white' as const,
    imagePosition: 'left' as const,
  },
  {
    title: 'La Plâtrerie & Peinture',
    description:
      "La peinture apporte la touche finale qui révèle tout le potentiel de vos espaces. Préparation des supports, choix des teintes et finitions soignées : chaque étape est réalisée avec exigence pour un rendu harmonieux et durable. Une intervention précise qui valorise votre intérieur et crée l'ambiance qui vous ressemble.",
    image: '/img/services/peinture.jpg',
    variant: 'dark' as const,
    imagePosition: 'right' as const,
  },
]
</script>

<template>
  <div>
    <ServicesHeroPage />
    <ServicesMetiersListSection />
    <ServicesBlock
      v-for="block in blocks"
      :key="block.title"
      :title="block.title"
      :description="block.description"
      :image="block.image"
      :variant="block.variant"
      :image-position="block.imagePosition"
    />
    <ServicesEquipeCtaSection />
    <AccompagnementSection variant="cream" />
  </div>
</template>
