<script setup>
const { setLocale } = useI18n();
</script>

<template>
  <div class="fixed right-10 top-0 z-50">
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('pl')">pl</button>
  </div>
</template>
