import { configureStore } from '@reduxjs/toolkit'
import { songsApi } from './services/songsApi'

export const store = configureStore({
  reducer: {
    [songsApi.reducerPath]: songsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songsApi.middleware),
})