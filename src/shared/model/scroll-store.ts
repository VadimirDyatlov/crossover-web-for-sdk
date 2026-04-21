import { create } from 'zustand';

interface UseScrollRestorationStore {
  positions: Record<string, Record<string, number>>;
  setPosition: (scope: string, id: string, pos: number) => void;
  clearScope: (scope: string) => void;
}

export const useScrollRestorationStore = create<UseScrollRestorationStore>(
  (set) => ({
    positions: {},

    setPosition: (scope, id, pos) =>
      set((state) => ({
        positions: {
          ...state.positions,
          [scope]: { ...state.positions[scope], [id]: pos },
        },
      })),

    clearScope: (scope) =>
      set((state) => {
        const { [scope]: _, ...rest } = state.positions;
        return { positions: rest };
      }),
  }),
);
