export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pl",
  fallbackLocale: "en",
  messages: {
    en: {
      auth: {
        login: {
          header: {
            title: "Welcome back",
            noAccount: "Don't have an account?",
            register: "Sign up",
          },
          form: {
            name: {
              label: "Username",
              placeholder: "e.g. 403hpns",
            },
            password: {
              label: "Password",
            },
          },
          footer: {
            battleNet: "Continue with Battle.net",
          },
        },
      },
      dashboard: {
        sidebar: {
          tabs: {
            dashboard: "Dashboard",
            tactics: "Tactics",
            raids: "Raids",
          },
        },
      },

      // Keys that are repeated
      utils: {
        continue: "Continue",
        or: "or",
      },
    },
    pl: {
      auth: {
        login: {
          header: {
            title: "Witaj ponownie",
            noAccount: "Nie masz konta?",
            register: "Zarejestruj się",
          },
          form: {
            name: {
              label: "Nazwa użytkownika",
              placeholder: "np. 403hpns",
            },
            password: {
              label: "Hasło",
            },
          },
          footer: {
            battleNet: "Kontynuuj przez Battle.net",
          },
        },
      },
      dashboard: {
        sidebar: {
          tabs: {
            dashboard: "Dashboard",
            tactics: "Taktyki",
            raids: "Rajdy",
          },
        },
      },

      // Keys that are repeated
      utils: {
        continue: "Kontynuuj",
        or: "lub",
      },
    },
  },
}));
