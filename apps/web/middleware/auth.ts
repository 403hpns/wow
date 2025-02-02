export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  const accessToken = authStore.token;

  if (accessToken == null) {
    return await navigateTo('/login');
  }

  const user = authStore.user;
  if (user == null) {
    const res = await authStore.fetchUser();

    if (res == null) {
      return await navigateTo('/login');
    }
  }
});
