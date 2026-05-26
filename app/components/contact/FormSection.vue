<script setup lang="ts">
const form = reactive({
  nom: '',
  prenom: '',
  adresse: '',
  codePostal: '',
  ville: '',
  telephone: '',
  email: '',
  message: '',
  botcheck: '',
})
const sent = ref(false)
const sending = ref(false)
const errorMsg = ref('')

const config = useRuntimeConfig()

const submit = async () => {
  if (sending.value) return
  errorMsg.value = ''
  sending.value = true

  try {
    const res = await $fetch<{ success: boolean; message?: string }>('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        access_key: config.public.web3formsAccessKey,
        subject: `Nouvelle demande de devis — ${form.prenom} ${form.nom}`.trim(),
        from_name: `${form.prenom} ${form.nom}`.trim() || 'Site Home Concept',
        replyto: form.email,
        nom: form.nom,
        prenom: form.prenom,
        adresse_travaux: form.adresse,
        code_postal: form.codePostal,
        ville: form.ville,
        telephone: form.telephone,
        email: form.email,
        message: form.message,
        botcheck: form.botcheck,
      },
    })

    if (!res.success) {
      errorMsg.value = res.message || "L'envoi a échoué. Merci de réessayer."
      return
    }

    sent.value = true
    setTimeout(() => { sent.value = false }, 6000)
    Object.assign(form, {
      nom: '', prenom: '', adresse: '', codePostal: '',
      ville: '', telephone: '', email: '', message: '', botcheck: '',
    })
  }
  catch {
    errorMsg.value = "L'envoi a échoué. Vérifiez votre connexion puis réessayez."
  }
  finally {
    sending.value = false
  }
}

const inputClasses = 'w-full rounded-full bg-white px-5 py-3 text-base text-ink placeholder:text-ink/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-ink/20'
const labelClasses = 'block text-base font-semibold text-white'
</script>

<template>
  <section class="bg-white pt-8 pb-20 sm:pb-24">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        Demande de devis gratuite
      </h2>

      <form class="mt-8 rounded-3xl bg-cream px-8 py-10 shadow-sm sm:px-14 sm:py-12" @submit.prevent="submit">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="nom" :class="labelClasses">Nom</label>
            <input
              id="nom"
              v-model="form.nom"
              type="text"
              required
              :class="['mt-1.5', inputClasses]"
            >
          </div>
          <div>
            <label for="prenom" :class="labelClasses">Prénom</label>
            <input
              id="prenom"
              v-model="form.prenom"
              type="text"
              required
              :class="['mt-1.5', inputClasses]"
            >
          </div>
        </div>

        <div class="mt-4">
          <label for="adresse" :class="labelClasses">Adresse des travaux</label>
          <input
            id="adresse"
            v-model="form.adresse"
            type="text"
            :class="['mt-1.5', inputClasses]"
          >
        </div>

        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="cp" :class="labelClasses">Code postal</label>
            <input
              id="cp"
              v-model="form.codePostal"
              type="text"
              inputmode="numeric"
              :class="['mt-1.5', inputClasses]"
            >
          </div>
          <div>
            <label for="ville" :class="labelClasses">Ville</label>
            <input
              id="ville"
              v-model="form.ville"
              type="text"
              :class="['mt-1.5', inputClasses]"
            >
          </div>
        </div>

        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="tel" :class="labelClasses">Téléphone</label>
            <input
              id="tel"
              v-model="form.telephone"
              type="tel"
              :class="['mt-1.5', inputClasses]"
            >
          </div>
          <div>
            <label for="email" :class="labelClasses">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              :class="['mt-1.5', inputClasses]"
            >
          </div>
        </div>

        <div class="mt-4">
          <label for="message" :class="labelClasses">Parlez-nous de votre projet</label>
          <p class="mt-0.5 text-sm italic text-white/80">
            (précisez les détails de votre projet&nbsp;: type de travaux, délai, …)
          </p>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="mt-1.5 w-full rounded-2xl bg-white px-5 py-3 text-base text-ink placeholder:text-ink/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-ink/20"
          />
        </div>

        <input
          v-model="form.botcheck"
          type="checkbox"
          name="botcheck"
          tabindex="-1"
          autocomplete="off"
          class="hidden"
        >

        <p v-if="errorMsg" class="mt-4 text-center text-sm font-medium text-red-100">
          {{ errorMsg }}
        </p>

        <div class="mt-6 text-center">
          <UiButton type="submit" variant="ink" size="lg" :disabled="sending">
            {{ sending ? 'ENVOI EN COURS…' : sent ? 'MESSAGE ENVOYÉ ✓' : 'DEMANDER VOTRE DEVIS' }}
          </UiButton>
        </div>
      </form>
    </div>
  </section>
</template>
