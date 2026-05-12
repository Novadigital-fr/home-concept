<script setup lang="ts">
type Variant = 'cream' | 'dark'
withDefaults(defineProps<{ variant?: Variant }>(), { variant: 'cream' })
</script>

<template>
  <section :class="[
    'py-20 sm:py-24',
    variant === 'dark' ? 'bg-ink text-white' : 'bg-cream text-white',
  ]">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
      <div>
        <h2 class="text-3xl leading-none font-bold tracking-tight sm:text-4xl lg:text-5xl">
          La menuiserie est notre
        </h2>
        <p class="font-display text-5xl leading-none font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          signature.
        </p>
        <div class="mt-8 max-w-xl space-y-5 text-lg sm:text-xl leading-relaxed text-white/90">
          <p>
            Spécialistes de la menuiserie sur mesure, nous accompagnons nos clients
            à chaque étape de leur projet, de la conception à la pose finale. Nous
            réalisons et installons des portes, fenêtres et aménagements alliant
            esthétisme, performance thermique et durabilité, afin d'améliorer le
            confort et de valoriser chaque habitat.
          </p>
          <p>
            Basés à Aix-les-Bains, nous intervenons également à Chambéry, Annecy et
            dans les communes environnantes, ce qui nous permet d'assurer un
            accompagnement de proximité et une grande réactivité sur chaque chantier.
          </p>
          <p>
            Soucieux de proposer des prestations haut de gamme, nous travaillons aux
            côtés de fournisseurs français reconnus et d'artisans qualifiés,
            sélectionnés avec exigence pour la qualité de leurs matériaux et le soin
            apporté aux finitions.
          </p>
        </div>
      </div>

      <div class="relative h-[24rem] sm:h-[44rem]">
        <div class="absolute top-0 left-0 h-[68%] w-[82%] overflow-hidden rounded-md shadow-2xl sm:w-[70%]">
          <NuxtImg
            src="/img/accueil/interieur-1.jpg"
            alt="Intérieur menuiserie sur mesure"
            class="h-full w-full object-cover"
            format="webp"
          />
        </div>
        <div class="absolute top-[42%] right-[4%] bottom-0 w-[64%] overflow-hidden rounded-md shadow-2xl ring-1 ring-black/10 sm:w-[52%]">
          <NuxtImg
            src="/img/accueil/interieur-2.jpg"
            alt="Détail menuiserie"
            class="h-full w-full object-cover"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
