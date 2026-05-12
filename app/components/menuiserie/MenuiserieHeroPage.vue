<script setup lang="ts">
</script>

<template>
  <section class="relative h-[28rem] overflow-hidden bg-ink text-white sm:h-[34rem] lg:h-[38rem]">
    <NuxtImg
      src="/img/menuiserie/hero.jpg"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
      loading="eager"
      format="webp"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-ink/40 via-ink/20 to-ink/50" />

    <div class="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="text-right">
        <p class="font-display text-center text-3xl font-bold tracking-wide text-white/95 sm:text-4xl lg:text-5xl">
          notre cœur de métier
        </p>
        <h1 class="font-display mt-1 text-4xl leading-none font-bold tracking-tight sm:text-7xl lg:text-9xl">
          LA MENUISERIE
        </h1>
        <p class="mt-3 text-xl tracking-wider text-white/95 italic sm:text-2xl lg:text-3xl" style="font-family: var(--font-display);">
          INTÉRIEURE &amp; EXTÉRIEURE
        </p>
      </div>
    </div>
  </section>
</template>
