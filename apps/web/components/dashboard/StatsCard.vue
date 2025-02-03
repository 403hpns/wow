<script setup lang="ts">
const { title, icon } = defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <UCard class="h-max w-max">
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <span
          class="bg-primary/65 flex items-center justify-center rounded-full p-2.5"
        >
          <Icon :name="icon" class="size-4" />
        </span>
        <p class="font-semibold">{{ title }}</p>
        <Icon name="heroicons-arrow-up-right-20-solid" class="ml-4 size-5" />
      </div>

      <div class="leading-none">
        <div class="text-4xl font-bold">
          <slot />
        </div>

        <div>
          <slot name="footer" />
        </div>
      </div>
    </div>
  </UCard>
</template>
