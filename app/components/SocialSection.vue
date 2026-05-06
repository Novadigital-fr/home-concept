<script setup lang="ts">
import { site } from '~/utils/site'

type Post =
  | { kind: 'image', src: string, alt: string, area: string, mobile: string }
  | { kind: 'text', title: string, subtitle?: string, bg: string, text: string, border?: boolean, area: string, mobile: string }

const posts: Post[] = [
  { kind: 'image', src: 'https://picsum.photos/seed/realisation-1/600/900', alt: 'Réalisation 1', area: 'lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-4', mobile: 'aspect-[3/4]' },
  { kind: 'text', title: 'EXIGENCE\nPRÉCISION\nPASSION', bg: 'bg-transparent', text: 'text-ink', area: 'lg:col-start-3 lg:col-span-3 lg:row-start-2 lg:row-span-2', mobile: 'aspect-square' },
  { kind: 'image', src: 'https://picsum.photos/seed/stone-interior/600/900', alt: 'Intérieur pierre', area: 'lg:col-start-6 lg:col-span-3 lg:row-start-2 lg:row-span-5', mobile: 'aspect-[3/4]' },
  { kind: 'image', src: 'https://picsum.photos/seed/home-concept-equipe/600/600', alt: 'Notre équipe', area: 'lg:col-start-9 lg:col-span-2 lg:row-start-1 lg:row-span-3', mobile: 'aspect-square' },
  { kind: 'text', title: 'AVANT\nAPRÈS', subtitle: 'SWIPEZ POUR VOIR', bg: 'bg-brand', text: 'text-white', area: 'lg:col-start-11 lg:col-span-2 lg:row-start-1 lg:row-span-3', mobile: 'aspect-[3/4]' },
  { kind: 'image', src: 'https://picsum.photos/seed/chair/400/400', alt: 'Fauteuil', area: 'lg:col-start-1 lg:col-span-2 lg:row-start-5 lg:row-span-2', mobile: 'aspect-square' },
  { kind: 'text', title: 'RGE', subtitle: "qu'est-ce que c'est ?", bg: 'bg-ink', text: 'text-white', area: 'lg:col-start-3 lg:col-span-3 lg:row-start-5 lg:row-span-3', mobile: 'aspect-[4/3]' },
  { kind: 'image', src: 'https://picsum.photos/seed/kitchen/600/600', alt: 'Cuisine', area: 'lg:col-start-9 lg:col-span-2 lg:row-start-5 lg:row-span-3', mobile: 'aspect-square' },
  { kind: 'image', src: 'https://picsum.photos/seed/wood-beams/600/600', alt: 'Poutres bois', area: 'lg:col-start-11 lg:col-span-2 lg:row-start-5 lg:row-span-3', mobile: 'aspect-square' },
]
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

      <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-12 lg:auto-rows-[90px] lg:gap-5">
        <div
          v-for="(post, i) in posts"
          :key="i"
          :class="[
            'overflow-hidden rounded-md lg:aspect-auto',
            post.mobile,
            post.area,
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
