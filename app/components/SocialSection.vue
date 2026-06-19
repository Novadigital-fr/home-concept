<script setup lang="ts">
import { site } from '~/utils/site'

// Flux Instagram via le widget Behold (web component chargé côté client).
useHead({
  script: [
    { src: 'https://w.behold.so/widget.js', type: 'module' },
  ],
})
</script>

<template>
  <section class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-sm text-neutral-500" style="font-family: var(--font-display);">
          Réalisations, conseils, témoignages, ...
        </p>
        <h2 class="mt-1 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Suivez-nous&nbsp;!
        </h2>
        <div class="mt-4 flex items-center justify-center gap-4">
          <a :href="site.social.facebook" aria-label="Facebook" class="text-ink hover:text-brand">
            <Icon name="lucide:facebook" size="22" />
          </a>
          <a :href="site.social.linkedin" aria-label="LinkedIn" class="text-ink hover:text-brand">
            <Icon name="lucide:linkedin" size="22" />
          </a>
          <a :href="site.social.instagram" aria-label="Instagram" class="text-ink hover:text-brand">
            <Icon name="lucide:instagram" size="22" />
          </a>
        </div>
      </div>

      <div class="mt-12">
        <behold-widget feed-id="vxaxHogZ3iI560jCRZ4a"></behold-widget>
      </div>
    </div>
  </section>
</template>
