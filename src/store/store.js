import { configureStore } from '@reduxjs/toolkit'
import { songsApi } from './services/songsApi'
import dataReducer from './dataSlice'
import userReducer from './authSlice'

export const store = configureStore({
  reducer: {
    [songsApi.reducerPath]: songsApi.reducer,
    appdata: dataReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songsApi.middleware),
})