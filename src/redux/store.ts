import { configureStore } from '@reduxjs/toolkit'
import defaultSlice from './defaultSlice'

export const store = configureStore({
  reducer: {
    default: defaultSlice
  },
  middleware: []
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
