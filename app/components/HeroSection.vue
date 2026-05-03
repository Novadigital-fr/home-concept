<script setup lang="ts">
import { site } from '~/utils/site'
</script>

<template>
  <section class="relative overflow-hidden bg-ink text-white">
    <!-- Image fond bois -->
    <div class="absolute inset-0">
      <NuxtImg
        src="/img/hero-bg.png"
        alt=""
        class="h-full w-full object-cover"
        loading="eager"
        format="webp"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/30" />
    </div>

    <div class="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 md:py-32 lg:px-8 lg:py-36">
      <!-- Logo Home Concept -->
      <div class="flex items-center justify-center md:justify-start">
        <NuxtImg
          src="/img/logo.png"
          alt="Home Concept"
          class="w-64 sm:w-80 lg:w-96"
          format="webp"
        />
      </div>

      <!-- Bloc titre -->
      <div class="flex flex-col justify-center">
        <h1 class="text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl lg:text-7xl">
          Expert en<br>
          menuiserie<br>
          <span class="text-white">&amp; rénovation</span><br>
          intérieure
        </h1>
        <p class="mt-7 max-w-xl text-sm text-neutral-200 sm:text-base">
          {{ site.metiers }}
        </p>
        <div class="mt-9">
          <UiButton to="/votre-projet" variant="cream" size="lg" icon="lucide:arrow-right">
            Demander votre devis
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>
