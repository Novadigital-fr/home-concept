<script setup lang="ts">
import { site } from '~/utils/site'
</script>

<template>
  <section class="relative flex min-h-[calc(100svh-var(--header-h,0px))] items-center overflow-hidden bg-ink text-white">
    <!-- Image fond bois -->
    <div class="absolute inset-0">
      <img
        src="/img/accueil/hero.webp"
        alt=""
        class="h-full w-full object-cover"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/30" />
    </div>

    <div class="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
      <!-- Logo Home Concept -->
      <div class="hidden items-center justify-center md:flex md:justify-start">
        <NuxtImg
          src="/img/logo.png"
          alt="Home Concept"
          class="w-40 sm:w-72 lg:w-96"
          format="webp"
        />
      </div>

      <!-- Bloc titre -->
      <div class="flex flex-col justify-center">
        <h1 class="text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Expert en<br>
          menuiserie<br>
          <span class="text-white">&amp; rénovation</span><br>
          intérieure
        </h1>
        <p class="mt-7 max-w-xl text-lg text-neutral-200 sm:text-xl">
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
