<script setup lang="ts">
usePageSeo({
  title: 'Home Concept — Menuiserie & rénovation intérieure à Aix-les-Bains',
  description:
    'Home Concept, spécialiste de la menuiserie sur mesure et de la rénovation intérieure à Aix-les-Bains, Chambéry, Annecy et alentours.',
})

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)
</script>

<template>
  <div ref="root">
    <div data-reveal="fade">
      <HeroSection />
    </div>
    <div data-reveal>
      <MenuiserieSection />
    </div>
    <div data-reveal>
      <SignatureSection />
    </div>
    <div data-reveal>
      <ServicesSection />
    </div>
    <div data-reveal>
      <AccompagnementSection />
    </div>
    <div data-reveal>
      <SocialSection />
    </div>
  </div>
</template>
