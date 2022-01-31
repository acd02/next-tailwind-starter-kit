import create from 'zustand'

type SpringStatus = 'idle' | 'ready'
type Store = {
  springsStatus: SpringStatus
  setSpringsStatus: (s: SpringStatus) => void
}

export const useSpringStatus = create<Store>(set => ({
  springsStatus: 'idle',
  setSpringsStatus: s => set({ springsStatus: s }),
}))

export type { SpringStatus }
