<script setup lang="ts">
useHead({
  title: "WoW!",
  meta: [{ name: "description", content: "Generated by create turbo" }],
});
</script>

<template>
  <NuxtLayout>
    <ThemeSwitcher />
    <LocaleSwitcher />
    <NuxtPage />

    <UNotifications />
  </NuxtLayout>
</template>
