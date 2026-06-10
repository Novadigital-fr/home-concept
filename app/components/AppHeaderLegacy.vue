<script setup lang="ts">
import { navLinks, site } from '~/utils/site'

const open = ref(false)
const hideTop = ref(false)
const headerEl = ref<HTMLElement | null>(null)

// Expose la hauteur réelle (non repliée) du header dans --header-h
// pour que le hero puisse faire 100vh - header.
const setHeaderHeight = () => {
  if (headerEl.value)
    document.documentElement.style.setProperty('--header-h', `${headerEl.value.offsetHeight}px`)
}
let lastY = 0
let downAccum = 0
let upAccum = 0
let cooldownUntil = 0
let ticking = false

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const y = window.scrollY
    const delta = y - lastY
    const now = performance.now()

    if (y < 60) {
      hideTop.value = false
      downAccum = 0
      upAccum = 0
    } else if (now > cooldownUntil) {
      if (delta > 0) {
        downAccum += delta
        upAccum = 0
        if (downAccum > 20 && !hideTop.value) {
          hideTop.value = true
          cooldownUntil = now + 400
        }
      } else if (delta < 0) {
        upAccum += -delta
        downAccum = 0
        if (upAccum > 20 && hideTop.value) {
          hideTop.value = false
          cooldownUntil = now + 400
        }
      }
    }

    lastY = y
    ticking = false
  })
}

onMounted(() => {
  lastY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
  setHeaderHeight()
  window.addEventListener('resize', setHeaderHeight, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', setHeaderHeight)
})
</script>

<template>
  <header ref="headerEl" class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-100">
    <!-- Row 1 : identité + contacts -->
    <div
      :class="[
        'grid grid-cols-1 grid-rows-[1fr] border-b border-neutral-100 opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-out',
        hideTop ? 'lg:grid-rows-[0fr] lg:border-b-0 lg:opacity-0' : '',
      ]"
    >
      <div class="overflow-hidden">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-3">
          <NuxtImg src="/img/logo-noir.jpg" alt="Home Concept" class="h-10 w-auto" format="webp" />
          <span class="flex flex-col leading-tight">
            <span class="text-sm font-bold text-ink">{{ site.name }}</span>
            <span class="text-xs text-neutral-500">{{ site.tagline }}</span>
          </span>
        </NuxtLink>

        <div class="flex items-center gap-5">
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
          <button
            type="button"
            class="lg:hidden"
            aria-label="Ouvrir le menu"
            @click="open = !open"
          >
            <Icon :name="open ? 'lucide:x' : 'lucide:menu'" size="24" />
          </button>
        </div>
        </div>
      </div>
    </div>

    <!-- Row 2 : nav + CTA (desktop only) -->
    <div class="mx-auto hidden h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:flex lg:px-8">
      <nav class="hidden items-center gap-7 text-sm font-medium text-ink lg:flex lg:text-base">
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

      <div class="flex flex-1 items-center justify-end lg:flex-none">
        <div class="hidden lg:block">
          <UiButton to="/votre-projet" variant="cream">
            Votre projet
          </UiButton>
        </div>
        <button
          type="button"
          class="lg:hidden"
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
      <div v-if="open" class="border-t border-neutral-100 bg-white lg:hidden">
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
          <UiButton to="/votre-projet" variant="cream" block class="mt-2" @click="open = false">
            Votre projet
          </UiButton>
        </nav>
      </div>
    </Transition>
  </header>
</template>
