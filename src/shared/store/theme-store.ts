import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemePreference = "system" | "light" | "dark";

type ResolvedTheme = "light" | "dark";

type ThemeState = {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;

  setPreference: (preference: ThemePreference) => void;
};

const STORAGE_KEY = "easy-starter:theme-preference";

const DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)";

function getSystemTheme(): ResolvedTheme {
  if (
    typeof window !== "undefined" &&
    window.matchMedia(DARK_MEDIA_QUERY).matches
  ) {
    return "dark";
  }

  return "light";
}

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? getSystemTheme() : preference;
}

function applyTheme(preference: ThemePreference): ResolvedTheme {
  const resolvedTheme = resolveTheme(preference);

  document.documentElement.dataset.theme = resolvedTheme;

  document.documentElement.style.colorScheme = resolvedTheme;

  return resolvedTheme;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      preference: "system",
      resolvedTheme: getSystemTheme(),

      setPreference: (preference) => {
        const resolvedTheme = applyTheme(preference);

        set({
          preference,
          resolvedTheme,
        });
      },
    }),
    {
      name: STORAGE_KEY,

      partialize: (state) => ({
        preference: state.preference,
      }),

      onRehydrateStorage: () => {
        return (state) => {
          if (!state) {
            return;
          }

          const resolvedTheme = applyTheme(state.preference);

          useThemeStore.setState({
            resolvedTheme,
          });
        };
      },
    },
  ),
);

export function initializeTheme(): () => void {
  const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);

  const applyCurrentTheme = () => {
    const { preference } = useThemeStore.getState();

    const resolvedTheme = applyTheme(preference);

    useThemeStore.setState({
      resolvedTheme,
    });
  };

  applyCurrentTheme();

  const handleSystemThemeChange = () => {
    if (useThemeStore.getState().preference !== "system") {
      return;
    }

    applyCurrentTheme();
  };

  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}
