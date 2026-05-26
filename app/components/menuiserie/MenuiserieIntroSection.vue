<script setup lang="ts">
const items = [
  { label: 'Porte d\'entrée', img: '/img/accueil/slider/porte.png' },
  { label: 'Fenêtres', img: '/img/accueil/slider/fenetre.png' },
  { label: 'Volets', img: '/img/accueil/slider/volet.png' },
  { label: 'Baie coulissante', img: '/img/accueil/slider/baie-coulissante.png' },
  { label: 'BSO', img: '/img/accueil/slider/bso.png' },
  { label: 'Garde-corps', img: '/img/accueil/slider/garde-corps.png' },
  { label: 'Vitrine', img: '/img/accueil/slider/vitrine.png' },
  { label: 'Escaliers', img: '/img/accueil/slider/escaliers.png' },
  { label: 'Stores', img: '/img/accueil/slider/stores.png' },
  { label: 'Clôture', img: '/img/accueil/slider/cloture.png' },
]
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="mx-auto max-w-2xl text-center text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
        Pour un habitat plus performant &amp; esthétique...
      </h2>

      <div class="mt-10">
        <CenterCarousel :items="items" />
      </div>

      <p class="mx-auto mt-10 max-w-3xl text-center text-lg sm:text-xl leading-relaxed text-neutral-700">
        Nous concevons vos menuiseries sur mesure en prenant en charge chaque étape
        en amont du projet&nbsp;: prise de côtes, mesures précises, conseils et choix
        des matériaux selon vos envies ou nos recommandations. Chaque réalisation est
        pensée pour s'intégrer parfaitement à votre intérieur comme à votre extérieur.
        Une fois la conception validée, nous assurons également la pose avec soin et
        précision pour un résultat durable et esthétique.
      </p>

      <div class="mt-8 text-center">
        <UiButton to="/votre-projet" variant="cream" size="lg">
          Demander votre devis menuiserie
        </UiButton>
      </div>
    </div>
  </section>
</template>
