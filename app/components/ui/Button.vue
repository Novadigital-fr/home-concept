<script setup lang="ts">
type Variant = 'cream' | 'cream-light' | 'ink' | 'brand' | 'white'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: Variant
  size?: Size
  icon?: string
  block?: boolean
}>(), {
  variant: 'cream',
  size: 'md',
  type: 'button',
  block: false,
})

const variantClasses: Record<Variant, string> = {
  cream: 'bg-cream text-white hover:bg-cream-light',
  'cream-light': 'bg-cream-light text-white hover:bg-cream',
  ink: 'bg-ink text-white hover:bg-black',
  brand: 'bg-brand text-white hover:bg-brand-dark',
  white: 'bg-white text-ink hover:bg-neutral-100',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-sm',
}

const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2'

const classes = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.block ? 'w-full' : '',
])

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :class="classes"
  >
    <slot />
    <Icon v-if="icon" :name="icon" size="18" />
  </component>
</template>
