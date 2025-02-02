import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

interface LoginDto {
  username: string;
  password: string;
}

interface RegisterDto {
  username: string;
  email: string;
  password: string;
}

const toast = useToast();

export const useAuthStore = defineStore('auth', () => {
  const token = useStorage('token', '');
  const refreshToken = useStorage('refreshToken', '');

  const isAuthenticated = ref(false);
  const user = ref();

  console.log('%cuseAuth invoked', 'color:red');

  async function login(loginDto: LoginDto) {
    const config = useRuntimeConfig().public;

    try {
      const res = (await $fetch(`${config.apiBaseUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDto),
      })) as { accessToken: string; refreshToken: string };

      if (!res) {
        return null;
      }

      token.value = res.accessToken;
      refreshToken.value = res.refreshToken;

      return true;
    } catch (error: any) {
      const status = error.response?.status;

      switch (status) {
        case 404:
        case 400:
          toast.add({
            title: 'Wystąpił problem',
            description: 'Wprowadzone dane są nieprawidłowe.',
            icon: 'lucide:x',
          });
          break;
      }
    }
  }

  async function register(registerDto: RegisterDto) {
    const config = useRuntimeConfig().public;

    try {
      const res = await $fetch(`${config.apiBaseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerDto),
      });

      if (!res) {
        return null;
      }

      return true;
    } catch (error: any) {
      const status = error.response?.status;

      switch (status) {
        case 400:
          toast.add({
            title: 'Wystąpił problem',
            description:
              'Konto z podaną nazwą lub adresem e-mail już istnieje.',
            icon: 'lucide:x',
          });
          break;
      }
    }
  }

  async function fetchUser() {
    const config = useRuntimeConfig().public;

    try {
      const res = await $fetch(`${config.apiBaseUrl}/api/auth/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.value}`,
        },
      });

      user.value = res;
      return user.value;
    } catch (error: any) {
      token.value = null;
      user.value = null;
      return null;
    }
  }

  return { login, register, user, fetchUser, token };
});
