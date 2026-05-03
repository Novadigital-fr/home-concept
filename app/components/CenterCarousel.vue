<script setup lang="ts">
type Item = { label: string; img: string }

const props = defineProps<{
  items: Item[]
}>()

const REPEAT = 3
const baseLen = computed(() => props.items.length)
const repeatedItems = computed(() =>
  Array.from({ length: REPEAT }, () => props.items).flat(),
)

const emit = defineEmits<{
  (e: 'update:active', index: number): void
}>()

const trackRef = ref<HTMLElement | null>(null)
const activeFullIndex = ref(0)
const activeRealIndex = computed(() => activeFullIndex.value % baseLen.value)

watch(activeRealIndex, (i) => emit('update:active', i))

let isAdjusting = false

const findCenter = () => {
  const el = trackRef.value
  if (!el) return 0
  const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'))
  const trackCenter = el.scrollLeft + el.clientWidth / 2
  let closest = 0
  let minDist = Infinity
  cards.forEach((card, i) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2
    const dist = Math.abs(cardCenter - trackCenter)
    if (dist < minDist) {
      minDist = dist
      closest = i
    }
  })
  return closest
}

const centerScrollTo = (idx: number, smooth = false) => {
  const el = trackRef.value
  if (!el) return
  const card = el.querySelectorAll<HTMLElement>('[data-card]')[idx] as HTMLElement | undefined
  if (!card) return
  const target = card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2
  if (smooth) el.scrollTo({ left: target, behavior: 'smooth' })
  else el.scrollLeft = target
}

const onScroll = () => {
  if (isAdjusting) return
  const el = trackRef.value
  if (!el) return

  const center = findCenter()
  activeFullIndex.value = center

  if (center < baseLen.value) {
    isAdjusting = true
    centerScrollTo(center + baseLen.value)
    activeFullIndex.value = center + baseLen.value
    requestAnimationFrame(() => { isAdjusting = false })
  } else if (center >= baseLen.value * 2) {
    isAdjusting = true
    centerScrollTo(center - baseLen.value)
    activeFullIndex.value = center - baseLen.value
    requestAnimationFrame(() => { isAdjusting = false })
  }
}

const scrollByCard = (dir: 1 | -1) => {
  const el = trackRef.value
  if (!el) return
  const card = el.querySelector<HTMLElement>('[data-card]')
  const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.6
  el.scrollBy({ left: step * dir, behavior: 'smooth' })
}

onMounted(async () => {
  await nextTick()
  activeFullIndex.value = baseLen.value
  isAdjusting = true
  centerScrollTo(baseLen.value)
  requestAnimationFrame(() => { isAdjusting = false })
})
</script>

<template>
  <div class="relative mx-auto max-w-7xl">
    <button
      type="button"
      aria-label="Précédent"
      class="absolute top-1/2 -left-4 z-10 hidden -translate-y-1/2 size-11 place-items-center rounded-full bg-white shadow-md ring-1 ring-neutral-200 hover:bg-neutral-50 sm:grid lg:-left-12"
      @click="scrollByCard(-1)"
    >
      <Icon name="lucide:chevron-left" size="20" />
    </button>
    <button
      type="button"
      aria-label="Suivant"
      class="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 size-11 place-items-center rounded-full bg-white shadow-md ring-1 ring-neutral-200 hover:bg-neutral-50 sm:grid lg:-right-12"
      @click="scrollByCard(1)"
    >
      <Icon name="lucide:chevron-right" size="20" />
    </button>

    <div
      ref="trackRef"
      class="no-scrollbar flex h-[34rem] snap-x snap-mandatory items-end gap-6 overflow-x-auto pb-2"
      @scroll.passive="onScroll"
    >
      <article
        v-for="(item, i) in repeatedItems"
        :key="i"
        data-card
        class="flex w-[18rem] shrink-0 snap-center flex-col gap-3 sm:w-[22rem] lg:w-[24rem]"
      >
        <div
          :class="[
            'overflow-hidden rounded-md transition-[height] duration-300',
            i === activeFullIndex ? 'h-[30rem]' : 'h-[26rem]',
          ]"
        >
          <NuxtImg
            :src="item.img"
            :alt="item.label"
            class="h-full w-full object-cover"
            format="webp"
          />
        </div>
        <p
          :class="[
            'text-center transition-all duration-300',
            i === activeFullIndex ? 'text-base font-bold text-ink' : 'text-sm font-medium text-neutral-700',
          ]"
        >
          {{ item.label }}
        </p>
      </article>
    </div>
  </div>
</template>
