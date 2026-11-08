<script setup lang="ts">
</script>

<template>
  <section class="relative h-[28rem] overflow-hidden bg-ink text-white sm:h-[34rem] lg:h-[38rem]">
    <img
      src="/img/menuiserie/hero.webp"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
      loading="eager"
      fetchpriority="high"
      decoding="async"
    >
    <div class="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/35 to-ink/65" />

    <div class="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="text-right">
        <p class="font-display text-center text-3xl font-bold tracking-wide text-white/95 sm:text-4xl lg:text-5xl">
          notre cœur de métier
        </p>
        <!-- H1 = « La menuiserie intérieure & extérieure » (2 lignes stylées séparément) -->
        <h1>
          <span class="font-display mt-1 block text-4xl leading-none font-bold tracking-tight sm:text-7xl lg:text-9xl">
            LA MENUISERIE
          </span>
          <span class="mt-3 block text-xl font-normal tracking-wider text-white/95 italic sm:text-2xl lg:text-3xl" style="font-family: var(--font-display);">
            INTÉRIEURE &amp; EXTÉRIEURE
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>
