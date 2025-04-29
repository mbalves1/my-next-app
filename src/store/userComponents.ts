import { create } from 'zustand'

type State = {
  page: string;
  pageContent: (param: string) => void;
}

export const useComponents = create<State>((set) => ({
  page: 'home',
  pageContent: (param: string) => set((state) => ({ page: state.page = param })),
}))