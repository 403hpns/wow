<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { z } from 'zod';

const schema = z.object({
  username: z.string({ required_error: 'To pole jest wymagane' }),
  email: z
    .string({ required_error: 'To pole jest wymagane' })
    .email({ message: 'Wprowadź prawidłowy adres e-mail' }),

  password: z
    .string({ required_error: 'To pole jest wymagane' })
    .min(8, 'Hasło musi składać się z min. 8 znaków'),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  username: undefined,
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);

  const response = await $fetch('http://localhost:5013/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(event.data),
  });

  if (response) {
    console.log('Yupi ', response);
  }
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
              <Icon name="i-heroicons:user-plus" class="w-8 h-8" />

              <h1 class="text-2xl font-bold">Załóż nowe konto</h1>

              <div class="text-gray-500 dark:text-gray-400 mt-1">
                Posiadasz już konto?
                <NuxtLink to="/login" class="text-primary font-medium"
                  >Zaloguj się</NuxtLink
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
            <UFormGroup label="Nazwa użytkownika" name="username">
              <UInput
                required
                size="lg"
                icon="lucide:user"
                placeholder="RandomUser44"
                v-model="state.username"
                variant="none"
                class="border border-gray-700/50 rounded"
              />
            </UFormGroup>

            <UFormGroup label="E-mail" name="email">
              <UInput
                size="lg"
                icon="lucide:at-sign"
                placeholder="user@wow.com"
                v-model="state.username"
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

            <UFormGroup label="Powtórz hasło" name="password">
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

            <UFormGroup>
              <UCheckbox required>
                <template #label>
                  Akceptuję
                  <span class="font-bold underline cursor-pointer"
                    >regulamin serwisu</span
                  >.
                </template>
              </UCheckbox>
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

            <UButton
              size="lg"
              block
              icon="i-simple-icons:battledotnet"
              variant="outline"
              >Kontynuuj przez Battle.net</UButton
            >
          </UForm>
        </UCard>
      </div>
    </main>
  </div>
</template>
