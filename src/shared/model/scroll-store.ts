import { create } from 'zustand';

interface UseScrollRestorationStore {
  // Растёт неограниченно — в долгоживущем webview стоит очищать при выходе из страницы
  positions: Record<string, Record<string, number>>;
  setPosition: (scope: string, id: string, pos: number) => void;
}

export const useScrollRestorationStore = create<UseScrollRestorationStore>((set) => ({
  positions: {}, 
  
  setPosition: (scope, id, pos) => set((state) => ({
    positions: {
      ...state.positions,
      [scope]: { ...state.positions[scope], [id]: pos }
    }
  }))
}));
