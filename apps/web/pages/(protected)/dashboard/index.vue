<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});

// <div
//       class="absolute bottom-0 right-0 -z-10 h-[800px] w-[2000px] rounded-full bg-gradient-to-r from-primary via-background to-highlight opacity-100 blur-[150px]"
//     />

const authStore = useAuthStore();
</script>

<template>
  <div
    class="overflow-hidden relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-card from-0% to-background to-[50vh] dark:bg-gray-950/75"
  >
    <div
      class="absolute left-2 z-10 h-[100px] w-[150px] rounded-full bg-gradient-to-r from-primary via-background to-primary opacity-50 blur-[100px]"
    />

    <div class="grid grid-cols-[250px_1fr]">
      <aside
        class="min-h-screen border-r border-primary/10 bg-primary/5 backdrop-blur-3xl"
      >
        <div class="p-4 border-b border-primary/10">
          <div class="relative w-full flex justify-center items-center">
            <img
              src="https://i.imgur.com/AG717Ee.png"
              class="size-28 aspect-square"
            />
          </div>
        </div>

        <nav class="p-4 space-y-2">
          <NuxtLink
            to="#"
            class="block px-4 py-2 rounded-lg hover:bg-primary/5 transition"
            >Dashboard</NuxtLink
          >
          <a href="#" class="block px-4 py-2 text-gray-600">Taktyki</a>
          <a href="#" class="block px-4 py-2 text-gray-600">Dupa</a>
          <a href="#" class="block px-4 py-2 text-gray-600">Dupa</a>
        </nav>
      </aside>

      <main class="p-8 flex flex-col gap-12 min-h-full">
        <div class="flex justify-between">
          <div class="flex flex-col gap-1.5">
            <span>Pages/Dashboard</span>
            <span class="text-3xl font-semibold">Main Dashboard</span>
          </div>

          <div
            class="rounded-3xl px-3 py-2.5 h-max bg-primary/5 backdrop-filter-3xl gap-4 flex items-center w-max"
          >
            <UInput
              icon="lucide:search"
              placeholder="Szukaj"
              variant="none"
              class="border border-gray-700/50 rounded-3xl"
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
                  <p class="text-gray-500 text-xs">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-12 h-full">
          <div class="flex gap-6">
            <DashboardStatsCard icon="lucide:user" />
            <DashboardStatsCard icon="lucide:bell" />
            <DashboardStatsCard icon="lucide:bell" />
            <DashboardStatsCard icon="lucide:bell" />
            <DashboardStatsCard icon="lucide:bell" />
          </div>

          <UCard class="w-full h-full flex flex-col justify-between">
            <template #header>
              <div class="w-full">Ostatnia aktywność</div>
            </template>

            <div>...</div>

            <template #footer> ... </template>
          </UCard>
        </div>
      </main>
    </div>
  </div>
</template>
