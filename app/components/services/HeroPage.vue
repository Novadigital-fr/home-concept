<script setup lang="ts">
</script>

<template>
  <section class="relative h-[28rem] overflow-hidden bg-ink text-white sm:h-[34rem] lg:h-[38rem]">
    <NuxtImg
      src="/img/services/hero.jpg"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-50"
      loading="eager"
      format="webp"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-ink/60" />

    <div class="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <p class="font-display translate-x-16 text-2xl font-medium tracking-wide text-white/95 sm:translate-x-32 sm:text-3xl lg:translate-x-56 lg:text-4xl">
        nos métiers
      </p>
      <h1 class="mt-1 text-3xl leading-none font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
        COMPLÉMENTAIRES
      </h1>
    </div>
  </section>
</template>
