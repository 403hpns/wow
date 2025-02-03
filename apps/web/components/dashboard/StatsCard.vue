<script setup lang="ts">
const { title, description, icon } = defineProps<{
  title: string;
  icon: string;
  description: string;
}>();
</script>

<template>
  <UCard class="w-max h-max">
    <div class="flex gap-4 items-center">
      <span
        class="rounded-full flex items-center justify-center bg-primary p-3"
      >
        <Icon :name="icon" />
      </span>

      <div class="leading-5">
        <p class="text-gray-500">Nowych członków</p>
        <p class="font-semibold">+4 w tym tygodniu</p>
      </div>
    </div>
  </UCard>
</template>
