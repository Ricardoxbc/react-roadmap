import { create } from 'zustand'

interface ZustandT {
  value: { name: string; time: number; count: number }
  update: () => void
}

export const useZustandStore = create<ZustandT>((set) => ({
  value: { name: '', time: 0, count: 0 },
  update: () => set((state) => ({ value: { name: 'updated', time: Date.now(), count: state.value.count + 1 } }))
}))
