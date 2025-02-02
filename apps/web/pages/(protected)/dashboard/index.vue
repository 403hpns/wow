<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});

const authStore = useAuthStore();
</script>

<template>
  <div>User: {{ JSON.stringify(authStore.user, null, 2) }}</div>
</template>
