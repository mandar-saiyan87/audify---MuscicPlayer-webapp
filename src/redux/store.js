import { configureStore } from '@reduxjs/toolkit'
import { spotifyApi } from './services/spotifyApi'

export const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
})