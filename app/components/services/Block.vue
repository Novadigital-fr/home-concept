<script setup lang="ts">
type Variant = 'dark' | 'cream' | 'white'
type ImagePosition = 'left' | 'right'

const props = withDefaults(defineProps<{
  title: string
  description: string
  image: string
  variant?: Variant
  imagePosition?: ImagePosition
}>(), {
  variant: 'white',
  imagePosition: 'right',
})

const sectionBgClasses: Record<Variant, string> = {
  dark: 'bg-ink',
  cream: 'bg-cream',
  white: 'bg-white',
}

const titleColorClasses: Record<Variant, string> = {
  dark: 'text-white',
  cream: 'text-white',
  white: 'text-ink',
}

const bodyColorClasses: Record<Variant, string> = {
  dark: 'text-white/85',
  cream: 'text-white/90',
  white: 'text-ink/80',
}
</script>

<template>
  <section
    :class="[
      'grid md:grid-cols-2 md:items-stretch',
      sectionBgClasses[variant],
    ]"
  >
    <!-- Texte -->
    <div
      :class="[
        'flex items-center px-6 py-12 sm:px-10 lg:py-20',
        titleColorClasses[variant],
        imagePosition === 'left'
          ? 'md:order-2 lg:px-16'
          : 'md:order-1 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-16',
      ]"
    >
      <div class="max-w-md">
        <h2 class="text-4xl leading-[1.05] font-black tracking-tight break-words hyphens-auto sm:text-5xl lg:text-6xl">
          {{ title }}
        </h2>
        <p
          :class="[
            'mt-6 text-justify text-[0.95rem] leading-relaxed',
            bodyColorClasses[variant],
          ]"
        >
          {{ description }}
        </p>
      </div>
    </div>

    <!-- Image (avec padding autour, pas edge-to-edge) -->
    <div
      :class="[
        'flex items-center px-6 py-6 sm:px-10 lg:px-12 lg:py-12',
        imagePosition === 'left' ? 'md:order-1' : 'md:order-2',
      ]"
    >
      <div class="aspect-[4/3] w-full overflow-hidden rounded-md shadow-lg">
        <NuxtImg
          :src="image"
          :alt="title"
          class="h-full w-full object-cover"
          format="webp"
          quality="90"
          sizes="100vw md:50vw lg:640px"
        />
      </div>
    </div>
  </section>
</template>
