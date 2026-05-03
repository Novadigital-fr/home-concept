<script setup lang="ts">
useHead({
  title: 'Qui sommes-nous ? — Home Concept',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez l\'équipe Home Concept : des artisans qualifiés et polyvalents au service de vos projets de rénovation à Aix-les-Bains et alentours.',
    },
  ],
})
</script>

<template>
  <div>
    <EquipeHeroPage />
    <EquipeIntroSection />
    <EquipeTeamSection />
    <MenuiseriePourquoiNousSection variant="white" />
    <section class="bg-white pb-16 sm:pb-20">
      <div class="text-center">
        <UiButton to="/votre-projet" variant="cream" size="lg">
          DEMANDER VOTRE DEVIS
        </UiButton>
      </div>
    </section>
  </div>
</template>
