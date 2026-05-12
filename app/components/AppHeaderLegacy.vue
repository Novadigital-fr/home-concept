<script setup lang="ts">
import { navLinks, site } from '~/utils/site'

const open = ref(false)
const hideTop = ref(false)
let lastY = 0
let ticking = false

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const y = window.scrollY
    if (y < 60) {
      hideTop.value = false
    } else if (y > lastY + 8) {
      hideTop.value = true
    } else if (y < lastY - 8) {
      hideTop.value = false
    }
    lastY = y
    ticking = false
  })
}

onMounted(() => {
  lastY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-100">
    <!-- Row 1 : identité + contacts -->
    <div
      :class="[
        'overflow-hidden border-neutral-100 transition-all duration-300 ease-out',
        hideTop ? 'max-h-0 opacity-0' : 'max-h-24 border-b opacity-100',
      ]"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-3">
          <NuxtImg src="/img/logo.png" alt="Home Concept" class="h-12 w-auto" format="webp" />
          <span class="flex flex-col leading-tight">
            <span class="text-sm font-bold text-ink">{{ site.name }}</span>
            <span class="text-xs text-neutral-500">{{ site.tagline }}</span>
          </span>
        </NuxtLink>

        <div class="hidden items-center gap-5 text-xs text-neutral-700 sm:flex">
          <a :href="`mailto:${site.email}`" class="flex items-center gap-1.5 hover:text-brand">
            <Icon name="lucide:mail" size="14" />
            {{ site.email }}
          </a>
          <a :href="site.phoneHref" class="flex items-center gap-1.5 hover:text-brand">
            <Icon name="lucide:phone" size="14" />
            {{ site.phone }}
          </a>
        </div>
      </div>
    </div>

    <!-- Row 2 : nav + CTA -->
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <nav class="hidden items-center gap-7 text-sm font-medium text-ink md:flex">
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

      <div class="flex flex-1 items-center justify-end md:flex-none">
        <UiButton to="/votre-projet" variant="cream-light" class="hidden md:inline-flex">
          Votre projet
        </UiButton>
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
      <div v-if="open" class="border-t border-neutral-100 bg-white md:hidden">
        <nav class="flex flex-col px-4 py-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="py-2 text-sm font-medium text-ink hover:text-brand"
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
