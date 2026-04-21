import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface AppState {
  theme: Theme;
}

interface AppActions {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

// TODO: Внедрю позже.
export const useAppStore = create<AppState & AppActions>()(
  subscribeWithSelector(
    persist(
      (set) => ({
        theme: 'light',
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),
        setTheme: (theme) => set({ theme }),
      }),
      {
        name: 'app-storage',
        onRehydrateStorage: () => (state) => {
          if (state) applyTheme(state.theme);
        },
      },
    ),
  ),
);

useAppStore.subscribe((state) => state.theme, applyTheme);
