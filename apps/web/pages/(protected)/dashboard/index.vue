<script setup lang="ts">
import { easeOutTransition } from "@/lib/transitions";

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard-layout",
});

const authStore = useAuthStore();

const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <Transition v-bind="easeOutTransition">
    <div v-if="isLoaded" class="flex h-full flex-col gap-12">
      <div class="flex justify-between">
        <div class="flex flex-col gap-1.5">
          <span>Pages/Dashboard</span>
          <span class="text-3xl font-semibold">Main Dashboard</span>
        </div>

        <div
          class="bg-primary/5 backdrop-filter-3xl flex h-max w-max items-center gap-4 rounded-3xl px-3 py-2.5"
        >
          <UInput
            icon="lucide:search"
            placeholder="Szukaj"
            variant="none"
            class="rounded-3xl border border-gray-700/50"
          />

          <div class="flex items-center gap-4">
            <UChip>
              <Icon size="18" name="lucide:bell" />
            </UChip>

            <UToggle
              size="lg"
              on-icon="i-heroicons-sun-20-solid"
              off-icon="i-heroicons-moon-20-solid"
            />

            <div class="flex items-center gap-1.5">
              <UAvatar />
              <div class="leading-none">
                <p class="text-sm">403hpns</p>
                <p class="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex h-full gap-12">
        <div class="flex flex-1 gap-6">
          <DashboardStatsCard
            title="Nowych członków"
            icon="heroicons-user-plus-20-solid"
          >
            472
            <template #footer
              ><p class="text-sm text-gray-500">
                w przeciągu ostatnich 7 dni
              </p></template
            >
          </DashboardStatsCard>
        </div>

        <UCard class="flex h-full w-full max-w-xs flex-col justify-between">
          <template #header>
            <div class="w-full">Ostatnia aktywność</div>
          </template>

          <div>...</div>

          <template #footer> ... </template>
        </UCard>
      </div>
    </div>
  </Transition>
</template>
