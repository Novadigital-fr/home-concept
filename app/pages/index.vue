<script setup lang="ts">
useHead({
  title: 'Home Concept — Expert en menuiserie & rénovation intérieure',
  meta: [
    {
      name: 'description',
      content:
        'Home Concept, spécialiste de la menuiserie sur mesure et de la rénovation intérieure à Aix-les-Bains, Chambéry, Annecy et alentours.',
    },
  ],
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
