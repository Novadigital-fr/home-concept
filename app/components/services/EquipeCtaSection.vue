<script setup lang="ts">
</script>

<template>
  <section class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="mx-auto max-w-3xl text-center text-lg sm:text-xl leading-relaxed text-ink/80">
        Chaque membre de l'équipe dispose de qualifications solides et d'un savoir-faire
        spécifique, avec un métier de prédilection qu'il maîtrise particulièrement.
        Cette spécialisation individuelle, associée à une vraie polyvalence, permet de
        couvrir l'ensemble des corps de métier avec rigueur et précision. Une synergie
        qui garantit des réalisations cohérentes, soignées et parfaitement maîtrisées
        à chaque étape du chantier.
      </p>

      <NuxtImg
        src="/img/services/team.jpg"
        alt="L'équipe Home Concept"
        class="mx-auto mt-12 w-full max-w-5xl"
        format="webp"
      />

      <div class="mt-10 text-center">
        <UiButton to="/qui-sommes-nous" variant="cream" size="lg">
          Découvrez notre équipe
        </UiButton>
      </div>
    </div>
  </section>
</template>
