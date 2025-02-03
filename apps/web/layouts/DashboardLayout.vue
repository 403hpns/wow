<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div
    class="from-card to-background relative min-h-screen w-full overflow-hidden overflow-x-hidden bg-gradient-to-b from-0% to-[50vh] dark:bg-gray-950/75"
  >
    <div
      class="from-primary via-background to-primary absolute left-2 z-10 h-[100px] w-[150px] rounded-full bg-gradient-to-r opacity-50 blur-[100px]"
    />

    <div class="grid grid-cols-[250px_1fr]">
      <DashboardSidebar />

      <main class="p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
