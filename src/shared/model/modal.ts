import type { ModalName } from '../lib/constants';
import { create } from 'zustand';

interface Store {
  visibleModalName: ModalName | null;
  showModal: (modalName: ModalName) => void;
  closeModal: () => void;
}

export const useModalStore = create<Store>((set) => ({
  visibleModalName: null,

  showModal: (modalName) => set({ visibleModalName: modalName }),

  closeModal: () => set({ visibleModalName: null }),
}));
