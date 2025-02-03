<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";

const schema = z.object({
  username: z.string({ required_error: "To pole jest wymagane" }),

  password: z
    .string({ required_error: "To pole jest wymagane" })
    .min(8, "Hasło musi składać się z min. 8 znaków"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  username: undefined,
  password: undefined,
});

const authStore = useAuthStore();
const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const res = await authStore.login(event.data);

  if (res == null) {
    return;
  }

  toast.add({
    title: "Zalogowano pomyślnie",
    description: "Pomyślnie zalogowano się na konto.",
    icon: "lucide:check",
  });

  await navigateTo("/dashboard");
}
</script>

<template>
  <div
    class="from-card to-background relative min-h-screen max-w-full overflow-x-hidden bg-gradient-to-b from-0% to-[50vh] dark:bg-gray-950/75"
  >
    <div
      class="from-primary via-background to-highlight absolute left-1/2 -z-10 ml-[-500px] h-[500px] w-[1000px] rounded-full bg-gradient-to-r opacity-70 blur-[100px]"
    />
    <div
      class="from-primary via-background to-highlight absolute bottom-0 right-0 -z-10 ml-[-500px] h-[500px] w-[1000px] rounded-full bg-gradient-to-r opacity-25 blur-[150px]"
    />

    <main class="flex h-screen items-center justify-center">
      <div class="w-full max-w-md">
        <UCard
          :ui="{ background: 'dark:bg-primary/5' }"
          class="rounded-xl backdrop-blur-3xl"
        >
          <template #header>
            <div class="flex flex-col items-center justify-center">
              <Icon name="i-heroicons:lock-closed" class="h-8 w-8" />
              <h1 class="text-2xl font-bold">
                {{ $t("auth.login.header.title") }}
              </h1>

              <div class="mt-1 text-gray-500 dark:text-gray-400">
                {{ $t("auth.login.header.noAccount") }}
                <NuxtLink to="register" class="text-primary font-medium">
                  {{ $t("auth.login.header.register") }}</NuxtLink
                >.
              </div>
            </div>
          </template>
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormGroup
              :label="$t('auth.login.form.name.label')"
              name="username"
            >
              <UInput
                size="lg"
                icon="lucide:user"
                :placeholder="$t('auth.login.form.name.placeholder')"
                v-model="state.username"
                variant="none"
                class="rounded border border-gray-700/50"
              />
            </UFormGroup>

            <UFormGroup
              :label="$t('auth.login.form.password.label')"
              name="password"
            >
              <UInput
                size="lg"
                icon="lucide:lock-keyhole"
                placeholder="********"
                v-model="state.password"
                type="password"
                variant="none"
                class="rounded border border-gray-700/50"
              />
            </UFormGroup>

            <UButton block size="lg" class="font-semibold" type="submit">
              {{ $t("utils.continue") }} <Icon name="lucide:chevron-right" />
            </UButton>

            <div
              class="align-center flex w-full flex-row items-center text-center"
            >
              <div
                class="flex w-full border-t border-solid border-gray-200 dark:border-gray-800"
              ></div>
              <div
                class="mx-3 flex whitespace-nowrap font-medium text-gray-700 dark:text-gray-200"
              >
                <span class="text-sm"> {{ $t("utils.or") }} </span>
              </div>
              <div
                class="flex w-full border-t border-solid border-gray-200 dark:border-gray-800"
              ></div>
            </div>

            <UButton
              size="lg"
              block
              icon="i-simple-icons:battledotnet"
              variant="outline"
              >{{ $t("auth.login.footer.battleNet") }}</UButton
            >
          </UForm>
        </UCard>
      </div>
    </main>
  </div>
</template>
