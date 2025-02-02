<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { z } from 'zod';

const schema = z.object({
  email: z
    .string({ required_error: 'To pole jest wymagane' })
    .email('Nieprawidłowy adres e-mail'),
  password: z
    .string({ required_error: 'To pole jest wymagane' })
    .min(8, 'Hasło musi składać się z min. 8 znaków'),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}
</script>

<template>
  <div
    class="relative min-h-screen max-w-full overflow-x-hidden bg-gradient-to-b from-card from-0% to-background to-[50vh] dark:bg-gray-950/75"
  >
    <div
      class="absolute left-1/2 -z-10 ml-[-500px] h-[500px] w-[1000px] rounded-full bg-gradient-to-r from-primary via-background to-highlight opacity-70 blur-[100px]"
    />
    <div
      class="absolute bottom-0 right-0 -z-10 ml-[-500px] h-[500px] w-[1000px] rounded-full bg-gradient-to-r from-primary via-background to-highlight opacity-25 blur-[150px]"
    />

    <main class="flex justify-center items-center h-screen">
      <div class="w-full max-w-md">
        <UCard
          :ui="{ background: 'dark:bg-primary/5' }"
          class="rounded-xl backdrop-blur-3xl"
        >
          <template #header>
            <div class="flex flex-col justify-center items-center">
              <Icon
                name="i-heroicons:lock-closed"
                class="w-8 h-8 bg-white text-white"
              />
              <h1 class="text-2xl font-bold">Witaj ponownie</h1>

              <div class="text-gray-500 dark:text-gray-400 mt-1">
                Nie masz konta?
                <a href="#" class="text-primary font-medium">Zarejestruj się</a
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
            <UFormGroup label="E-mail" name="email">
              <UInput
                size="lg"
                icon="lucide:at-sign"
                placeholder="np. account@gmail.com"
                v-model="state.email"
                variant="none"
                class="border border-gray-700/50 rounded"
              />
            </UFormGroup>

            <UFormGroup label="Hasło" name="password">
              <UInput
                size="lg"
                icon="lucide:lock-keyhole"
                placeholder="********"
                v-model="state.password"
                type="password"
                variant="none"
                class="border border-gray-700/50 rounded"
              />
            </UFormGroup>

            <UButton block size="lg" class="font-semibold" type="submit">
              Kontynuuj <Icon name="lucide:chevron-right" />
            </UButton>

            <div
              class="flex items-center align-center text-center w-full flex-row"
            >
              <div
                class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"
              ></div>
              <div
                class="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap"
              >
                <span class="text-sm">lub</span>
              </div>
              <div
                class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"
              ></div>
            </div>

            <div class="space-y-3">
              <UButton
                size="lg"
                block
                icon="i-simple-icons:discord"
                variant="outline"
                >Zaloguj się przez Discord</UButton
              >
            </div>
          </UForm>
        </UCard>
      </div>
    </main>
  </div>
</template>
