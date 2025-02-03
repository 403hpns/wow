<script setup lang="ts">
const { t } = useI18n();

const tabs = computed(() => [
  {
    id: "dashboard",
    name: t("dashboard.sidebar.tabs.dashboard"),
    icon: "lucide:home",
    href: "/dashboard",
  },
  {
    id: "dashboard-tactics",
    name: t("dashboard.sidebar.tabs.tactics"),
    icon: "lucide:sword",
    href: "/dashboard/tactics",
  },
  {
    id: "dashboard-raids",
    name: t("dashboard.sidebar.tabs.raids"),
    icon: "heroicons-user-group-20-solid",
    href: "/dashboard/raids",
  },
]);

const route = useRoute();

const currentRouteName = computed(() => route.name?.toString().split("__")[0]);
const isActive = (tabId: string) => currentRouteName.value === tabId;
</script>

<template>
  <aside
    class="border-primary/10 bg-primary/5 min-h-screen border-r backdrop-blur-3xl"
  >
    <div class="border-primary/10 border-b p-4">
      <div class="relative flex w-full items-center justify-center">
        <img
          src="https://i.imgur.com/AG717Ee.png"
          class="aspect-square size-28"
        />
      </div>
    </div>

    <nav class="space-y-2 p-4">
      <NuxtLink
        :to="tab.href"
        v-for="tab in tabs"
        class="flex items-center gap-4 rounded-lg px-4 py-2 font-semibold"
        :class="{
          'bg-primary/25 border-primary/50 hover:bg-primary/50 border':
            isActive(tab.id),
          'hover:bg-primary/5': !isActive(tab.id),
        }"
      >
        <Icon :name="tab.icon" /> {{ tab.name }}
      </NuxtLink>
    </nav>
  </aside>
</template>
