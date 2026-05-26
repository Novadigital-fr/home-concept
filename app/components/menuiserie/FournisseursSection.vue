<script setup lang="ts">
const fournisseurs = [
  { name: 'K-LINE', img: '/img/menuiserie/fournisseurs/k-line/produit.webp', logo: '/img/menuiserie/fournisseurs/k-line/logo.png' },
  { name: 'MéO', img: '/img/menuiserie/fournisseurs/meo/produit.png', logo: '/img/menuiserie/fournisseurs/meo/logo.png' },
  { name: 'FIMA', img: '/img/menuiserie/fournisseurs/fima/produit.jpg', logo: '/img/menuiserie/fournisseurs/fima/logo.png' },
  { name: 'France Fermetures', img: '/img/menuiserie/fournisseurs/k-line/produit.webp', logo: '/img/menuiserie/fournisseurs/france-fermetures/logo.svg' },
  { name: 'Profalux', img: '/img/menuiserie/fournisseurs/profalux/produit.jpg', logo: '/img/menuiserie/fournisseurs/profalux/logo.jpg' },
  { name: 'Wibaie', img: '/img/menuiserie/fournisseurs/wibaie/produit.jpeg', logo: '/img/menuiserie/fournisseurs/wibaie/logo.jpg' },
  { name: 'Stores Marquises', img: '/img/menuiserie/fournisseurs/stores-marquises/produit.jpg', logo: '/img/menuiserie/fournisseurs/stores-marquises/logo.webp' },
  { name: 'Prefalu', img: '/img/menuiserie/fournisseurs/prefalu/produit.webp', logo: '/img/menuiserie/fournisseurs/prefalu/logo.webp' },
  { name: 'Escao', img: '/img/menuiserie/fournisseurs/escao/produit.webp', logo: '/img/menuiserie/fournisseurs/escao/logo.jpeg' },
  { name: 'Griesser', img: '/img/menuiserie/fournisseurs/griesser/produit.jpg', logo: '/img/menuiserie/fournisseurs/griesser/logo.png' },
  { name: 'Righini', img: '/img/menuiserie/fournisseurs/righini/produit.jpg', logo: '/img/menuiserie/fournisseurs/righini/logo.png' },
  { name: 'Rozière', img: '/img/menuiserie/fournisseurs/roziere/produit.jpg', logo: '/img/menuiserie/fournisseurs/roziere/logo.png' },
  { name: 'Sogal', img: '/img/menuiserie/fournisseurs/sogal/produit.jpg', logo: '/img/menuiserie/fournisseurs/sogal/logo.jpg' },
  { name: 'Atlantem', img: '/img/menuiserie/fournisseurs/atlantem/produit.webp', logo: '/img/menuiserie/fournisseurs/atlantem/logo.webp' },
]
</script>

<template>
  <section class="overflow-x-hidden bg-white py-20 sm:py-24">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-8">
      <div class="min-w-0">
        <h2 class="pointer-events-none relative z-10 text-5xl leading-[0.95] font-black tracking-tight text-white mix-blend-difference sm:text-6xl lg:text-7xl lg:whitespace-nowrap">
          Nos<br>fournisseurs
        </h2>
        <p class="mt-6 max-w-sm text-lg sm:text-xl leading-relaxed text-neutral-700">
          Nous travaillons avec des fabricants
          <strong class="font-bold">français</strong> et
          <strong class="font-bold">européens</strong> reconnus pour la
          <strong class="font-bold">qualité</strong>, la
          <strong class="font-bold">durabilité</strong> et la
          <strong class="font-bold">performance</strong> de leurs menuiseries.
        </p>
      </div>

      <div class="min-w-0 lg:-mr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <EdgeCarousel :items="fournisseurs">
          <template #card="{ item }">
            <NuxtImg
              :src="item.img"
              :alt="item.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              format="webp"
            />
            <div class="absolute inset-0 bg-white/55" />
            <div class="absolute inset-x-0 bottom-0 flex justify-center p-6">
              <NuxtImg
                :src="item.logo"
                :alt="item.name"
                class="max-h-20 w-auto max-w-[70%] object-contain"
                format="webp"
              />
            </div>
          </template>
        </EdgeCarousel>
      </div>
    </div>
  </section>
</template>
