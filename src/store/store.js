import { configureStore } from '@reduxjs/toolkit'
import { songsApi } from './services/songsApi'
import dataReducer from './dataSlice'

export const store = configureStore({
  reducer: {
    [songsApi.reducerPath]: songsApi.reducer,
    appdata: dataReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songsApi.middleware),
})