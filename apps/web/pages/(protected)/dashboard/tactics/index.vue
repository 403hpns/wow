<script setup lang="ts">
import { easeOutTransition } from "@/lib/transitions";
import { onMounted, ref } from "vue";

definePageMeta({
  layout: "dashboard-layout",
});

const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <Transition v-bind="easeOutTransition">
    <div v-if="isLoaded">tactics</div>
  </Transition>
</template>
