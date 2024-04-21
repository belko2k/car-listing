import { create } from 'zustand';

type AccDelModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useAccDelModal = create<AccDelModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
