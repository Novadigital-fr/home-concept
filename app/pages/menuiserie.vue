<script setup lang="ts">
useHead({
  title: 'La menuiserie — Home Concept',
  meta: [
    {
      name: 'description',
      content:
        'Spécialiste de la menuiserie sur mesure — portes, fenêtres, volets, baies vitrées, à Aix-les-Bains, Chambéry, Annecy. Certifié RGE.',
    },
  ],
})
</script>

<template>
  <div>
    <MenuiserieHeroPage />
    <MenuiserieIntroSection />
    <SignatureSection variant="dark" />
    <MenuiserieMateriauxSection />
    <MenuiseriePourquoiNousSection />
    <MenuiserieFournisseursSection />
    <MenuiserieRgeSection />
    <MenuiserieRealisationsSection />
  </div>
</template>
