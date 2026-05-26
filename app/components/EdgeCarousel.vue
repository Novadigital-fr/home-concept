<script setup lang="ts" generic="T">
const props = withDefaults(defineProps<{
  items: T[]
  cardWidth?: string
  activeHeight?: string
  inactiveHeight?: string
  trackHeight?: string
}>(), {
  cardWidth: 'w-[20rem] sm:w-[24rem]',
  activeHeight: 'h-[22rem] sm:h-[32rem]',
  inactiveHeight: 'h-[18rem] sm:h-[28rem]',
  trackHeight: 'h-[24rem] sm:h-[34rem]',
})

const REPEAT = 3
const baseLen = computed(() => Math.max(props.items.length, 1))
const repeatedItems = computed(() =>
  Array.from({ length: REPEAT }, () => props.items).flat(),
)

const trackRef = ref<HTMLElement | null>(null)
const activeFullIndex = ref(0)
const activeRealIndex = computed(() => activeFullIndex.value % baseLen.value)

let isAdjusting = false

const findLeftmost = () => {
  const el = trackRef.value
  if (!el) return 0
  const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'))
  let leftmost = 0
  let minDist = Infinity
  cards.forEach((card, i) => {
    const dist = Math.abs(card.offsetLeft - el.scrollLeft)
    if (dist < minDist) {
      minDist = dist
      leftmost = i
    }
  })
  return leftmost
}

const scrollToCard = (idx: number, smooth = false) => {
  const el = trackRef.value
  if (!el) return
  const card = el.querySelectorAll<HTMLElement>('[data-card]')[idx] as HTMLElement | undefined
  if (!card) return
  if (smooth) el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  else el.scrollLeft = card.offsetLeft
}

const onScroll = () => {
  if (isAdjusting) return
  const el = trackRef.value
  if (!el) return

  const leftmost = findLeftmost()
  activeFullIndex.value = leftmost

  if (leftmost < baseLen.value) {
    isAdjusting = true
    scrollToCard(leftmost + baseLen.value)
    activeFullIndex.value = leftmost + baseLen.value
    requestAnimationFrame(() => { isAdjusting = false })
  } else if (leftmost >= baseLen.value * 2) {
    isAdjusting = true
    scrollToCard(leftmost - baseLen.value)
    activeFullIndex.value = leftmost - baseLen.value
    requestAnimationFrame(() => { isAdjusting = false })
  }
}

const scrollByCard = (dir: 1 | -1) => {
  const el = trackRef.value
  if (!el) return
  const card = el.querySelector<HTMLElement>('[data-card]')
  const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.6
  el.scrollBy({ left: step * dir, behavior: 'smooth' })
}

const goTo = (i: number) => {
  scrollToCard(i + baseLen.value, true)
}

onMounted(async () => {
  await nextTick()
  isAdjusting = true
  activeFullIndex.value = baseLen.value
  scrollToCard(baseLen.value)
  requestAnimationFrame(() => { isAdjusting = false })
})
</script>

<template>
  <div class="relative min-w-0">
    <div
      ref="trackRef"
      :class="[
        'no-scrollbar flex snap-x snap-mandatory items-end gap-4 overflow-x-auto pb-4 pl-4 sm:pl-6 lg:pl-0',
        trackHeight,
      ]"
      @scroll.passive="onScroll"
    >
      <article
        v-for="(item, i) in repeatedItems"
        :key="i"
        data-card
        :class="[
          'group relative shrink-0 snap-start overflow-hidden rounded-md transition-[height] duration-300',
          cardWidth,
          i === activeFullIndex ? activeHeight : inactiveHeight,
        ]"
      >
        <slot name="card" :item="item" :active="i === activeFullIndex" />
      </article>
      <div aria-hidden="true" class="w-4 shrink-0 sm:w-6" />
    </div>

    <button
      type="button"
      aria-label="Précédent"
      class="absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 size-11 place-items-center rounded-full bg-white shadow-lg ring-1 ring-neutral-200 hover:bg-neutral-50 sm:grid"
      @click="scrollByCard(-1)"
    >
      <Icon name="lucide:chevron-left" size="20" />
    </button>
    <button
      type="button"
      aria-label="Suivant"
      class="absolute top-1/2 right-4 z-10 hidden -translate-y-1/2 size-11 place-items-center rounded-full bg-white shadow-lg ring-1 ring-neutral-200 hover:bg-neutral-50 sm:grid"
      @click="scrollByCard(1)"
    >
      <Icon name="lucide:chevron-right" size="20" />
    </button>

    <div class="mt-6 flex items-center justify-center gap-2">
      <button
        v-for="(_, i) in items"
        :key="i"
        type="button"
        :aria-label="`Aller au slide ${i + 1}`"
        :class="[
          'size-2.5 rounded-full transition-colors',
          i === activeRealIndex ? 'bg-ink' : 'bg-neutral-300 hover:bg-neutral-400',
        ]"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>
