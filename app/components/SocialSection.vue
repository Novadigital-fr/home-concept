<script setup lang="ts">
import { site } from '~/utils/site'

const posts = [
  { kind: 'text', title: 'EXIGENCE\nPRÉCISION\nPASSION', bg: 'bg-cream', text: 'text-ink' },
  { kind: 'image', src: 'https://picsum.photos/seed/realisation-1/600/600', alt: 'Réalisation 1' },
  { kind: 'text', title: 'HOME\nCONCEPT', subtitle: 'NOTRE ÉQUIPE', bg: 'bg-ink', text: 'text-white' },
  { kind: 'image', src: 'https://picsum.photos/seed/realisation-equipe/600/600', alt: 'Équipe' },
  { kind: 'text', title: 'AVANT\nAPRÈS', subtitle: 'SWIPEZ POUR VOIR', bg: 'bg-brand', text: 'text-white' },
  { kind: 'image', src: 'https://picsum.photos/seed/realisation-2/600/600', alt: 'Réalisation 2' },
  { kind: 'text', title: 'RGE', subtitle: 'QUALIBAT 2026', bg: 'bg-white', text: 'text-ink', border: true },
  { kind: 'image', src: 'https://picsum.photos/seed/realisation-3/600/600', alt: 'Réalisation 3' },
] as const
</script>

<template>
  <section class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-sm text-neutral-500">
          Réalisations, conseils, témoignages, ...
        </p>
        <h2 class="mt-1 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Suivez-nous&nbsp;!
        </h2>
        <div class="mt-4 flex items-center justify-center gap-4">
          <a :href="site.social.instagram" aria-label="Instagram" class="text-ink hover:text-brand">
            <Icon name="lucide:instagram" size="22" />
          </a>
          <a :href="site.social.facebook" aria-label="Facebook" class="text-ink hover:text-brand">
            <Icon name="lucide:facebook" size="22" />
          </a>
          <a :href="site.social.linkedin" aria-label="LinkedIn" class="text-ink hover:text-brand">
            <Icon name="lucide:linkedin" size="22" />
          </a>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div
          v-for="(post, i) in posts"
          :key="i"
          :class="[
            'aspect-square overflow-hidden',
            post.kind === 'text' ? `${post.bg} ${post.text} flex flex-col items-center justify-center p-4 text-center` : '',
            post.kind === 'text' && post.border ? 'ring-1 ring-neutral-200' : '',
          ]"
        >
          <template v-if="post.kind === 'image'">
            <NuxtImg :src="post.src" :alt="post.alt" class="h-full w-full object-cover" format="webp" />
          </template>
          <template v-else>
            <p class="text-2xl leading-tight font-bold whitespace-pre-line sm:text-3xl">
              {{ post.title }}
            </p>
            <p v-if="post.subtitle" class="mt-2 text-xs font-semibold tracking-widest uppercase opacity-80">
              {{ post.subtitle }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
