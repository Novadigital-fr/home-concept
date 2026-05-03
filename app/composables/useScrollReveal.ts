import type { Ref } from 'vue'

export function useScrollReveal(rootRef: Ref<HTMLElement | null>) {
  onMounted(() => {
    const root = rootRef.value
    if (!root) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const elements = root.querySelectorAll<HTMLElement>('[data-reveal]')

    if (reduce || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    elements.forEach((el) => io.observe(el))

    onBeforeUnmount(() => io.disconnect())
  })
}
