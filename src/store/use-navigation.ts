import { create } from 'zustand'

type State = {
  isOpen?: boolean
  toggleMenu: () => void
}

export const useNavigation = create<State>((set) => ({
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}))
