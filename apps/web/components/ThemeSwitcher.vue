<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      class="fixed top-0 right-0 m-2 z-50 cursor-pointer hover:scale-110"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="w-12 h-12" />
    </template>
  </ClientOnly>
</template>
