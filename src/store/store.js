import { configureStore } from '@reduxjs/toolkit'
import { songsApi } from './services/songsApi'
import dataReducer from './dataSlice'
import userReducer from './authSlice'
import playlistReducer from './userPlaylistSlice'

export const store = configureStore({
  reducer: {
    [songsApi.reducerPath]: songsApi.reducer,
    appdata: dataReducer,
    user: userReducer,
    playlist: playlistReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songsApi.middleware),
})