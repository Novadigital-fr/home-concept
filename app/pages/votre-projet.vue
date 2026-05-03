<script setup lang="ts">
useHead({
  title: 'Votre projet — Home Concept',
  meta: [
    {
      name: 'description',
      content:
        'Demandez votre devis gratuit pour vos projets de menuiserie, électricité, plaquisterie, peinture ou sols à Aix-les-Bains et alentours.',
    },
  ],
})
</script>

<template>
  <div>
    <ContactHeroPage />
    <MenuiseriePourquoiNousSection variant="white" />
    <ContactFormSection />
  </div>
</template>
