<script setup lang="ts">
import { site, navLinks } from '~/utils/site'

const year = new Date().getFullYear()

const form = reactive({
  name: '',
  email: '',
  message: '',
})
const sent = ref(false)
const submit = () => {
  // TODO: brancher sur l'API/serveur d'envoi
  sent.value = true
  setTimeout(() => { sent.value = false }, 4000)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <footer class="bg-ink text-neutral-300">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      <!-- Col 1: identité -->
      <div>
        <NuxtLink to="/" class="flex items-center gap-3">
          <NuxtImg src="/img/logo.png" alt="Home Concept" class="h-12 w-auto" format="webp" />
          <span class="text-lg font-bold text-white">{{ site.name }}</span>
        </NuxtLink>
        <p class="mt-3 text-xs text-neutral-400">
          {{ site.metiers }}
        </p>
        <address class="mt-6 space-y-1 text-sm not-italic">
          <p>{{ site.address.street }}</p>
          <p>{{ site.address.city }}</p>
          <p class="mt-3">
            <a :href="site.phoneHref" class="hover:text-white">{{ site.phone }}</a>
          </p>
          <p>
            <a :href="`mailto:${site.email}`" class="hover:text-white">{{ site.email }}</a>
          </p>
        </address>
      </div>

      <!-- Col 2: form devis -->
      <div>
        <h3 class="text-2xl font-bold tracking-tight text-white">
          Demandez votre devis
        </h3>
        <form class="mt-5 space-y-3" @submit.prevent="submit">
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Nom Prénom"
            class="w-full rounded-md border border-neutral-700 bg-ink-soft px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-brand focus:outline-none"
          >
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="Adresse e-mail"
            class="w-full rounded-md border border-neutral-700 bg-ink-soft px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-brand focus:outline-none"
          >
          <textarea
            v-model="form.message"
            rows="4"
            required
            placeholder="Votre demande"
            class="w-full rounded-md border border-neutral-700 bg-ink-soft px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            class="w-full rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-neutral-100"
          >
            {{ sent ? 'Message envoyé ✓' : 'Envoyer' }}
          </button>
        </form>
      </div>

      <!-- Col 3: nav + social -->
      <div>
        <h3 class="text-2xl font-bold tracking-tight text-white">
          Suivez-nous
        </h3>
        <div class="mt-4 flex items-center gap-4">
          <a :href="site.social.instagram" aria-label="Instagram" class="hover:text-white">
            <Icon name="lucide:instagram" size="22" />
          </a>
          <a :href="site.social.facebook" aria-label="Facebook" class="hover:text-white">
            <Icon name="lucide:facebook" size="22" />
          </a>
          <a :href="site.social.linkedin" aria-label="LinkedIn" class="hover:text-white">
            <Icon name="lucide:linkedin" size="22" />
          </a>
        </div>

        <nav class="mt-8 flex flex-col gap-2 text-sm">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="mx-auto max-w-7xl px-4 py-5 text-xs text-neutral-500 sm:px-6 lg:px-8">
        © {{ year }} {{ site.name }}. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>
