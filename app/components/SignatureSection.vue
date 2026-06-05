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
            Spécialistes de la menuiserie <strong class="font-semibold text-white">sur mesure</strong>, nous accompagnons nos clients
            à <strong class="font-semibold text-white">chaque étape</strong> de leur projet, de la conception à la pose finale. Nous
            <strong class="font-semibold text-white">réalisons</strong> et <strong class="font-semibold text-white">installons</strong> des portes, fenêtres et aménagements alliant
            <strong class="font-semibold text-white">esthétisme</strong>, performance <strong class="font-semibold text-white">thermique</strong> et <strong class="font-semibold text-white">durabilité</strong>, afin d'améliorer le
            <strong class="font-semibold text-white">confort</strong> et de <strong class="font-semibold text-white">valoriser</strong> chaque habitat.
          </p>
          <p>
            Basés à Aix-les-Bains, nous intervenons également à Chambéry, Annecy et
            dans les communes environnantes, ce qui nous permet d'assurer un
            <strong class="font-semibold text-white">accompagnement de proximité</strong> et une <strong class="font-semibold text-white">grande réactivité</strong> sur chaque chantier.
          </p>
          <p>
            Soucieux de proposer des prestations <strong class="font-semibold text-white">haut de gamme</strong>, nous travaillons aux
            côtés de <strong class="font-semibold text-white">fournisseurs français reconnus</strong> et d'<strong class="font-semibold text-white">artisans qualifiés</strong>,
            sélectionnés avec <strong class="font-semibold text-white">exigence</strong> pour la <strong class="font-semibold text-white">qualité</strong> de leurs matériaux et le <strong class="font-semibold text-white">soin</strong>
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
