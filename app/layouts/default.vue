<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <AppHeaderLegacy />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
