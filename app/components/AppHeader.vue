<script setup lang="ts">
import { navLinks, site } from '~/utils/site'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-black text-white">
    <div class="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 sm:px-6 lg:gap-10 lg:px-8">
      <NuxtLink to="/" class="flex items-center gap-3">
        <NuxtImg src="/img/logo.png" alt="Home Concept" class="h-14 w-auto shrink-0" format="webp" />
        <span class="flex flex-col leading-tight">
          <span class="font-display text-xl font-bold tracking-tight">{{ site.name }}</span>
          <span class="text-[11px] text-white/70">{{ site.tagline }}</span>
          <span class="text-[11px] text-white/70">{{ site.email }}</span>
          <span class="text-[11px] text-white/70">{{ site.phone }}</span>
        </span>
      </NuxtLink>

      <nav class="hidden flex-1 items-center justify-center gap-8 text-sm text-white md:flex lg:gap-12">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="transition-colors hover:text-brand"
          active-class="text-brand"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="ml-auto flex items-center md:ml-0">
        <div class="hidden md:block">
          <UiButton to="/votre-projet" variant="cream-light">
            Votre projet
          </UiButton>
        </div>
        <button
          type="button"
          class="md:hidden"
          aria-label="Ouvrir le menu"
          @click="open = !open"
        >
          <Icon :name="open ? 'lucide:x' : 'lucide:menu'" size="24" />
        </button>
      </div>
    </div>

    <Transition
      enter-from-class="opacity-0 -translate-y-2"
      enter-active-class="transition duration-150 ease-out"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="border-t border-white/10 bg-black md:hidden">
        <nav class="flex flex-col px-4 py-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="py-2 text-sm font-medium text-white hover:text-brand"
            @click="open = false"
          >
            {{ link.label }}
          </NuxtLink>
          <UiButton to="/votre-projet" variant="cream-light" block class="mt-2" @click="open = false">
            Votre projet
          </UiButton>
        </nav>
      </div>
    </Transition>
  </header>
</template>
