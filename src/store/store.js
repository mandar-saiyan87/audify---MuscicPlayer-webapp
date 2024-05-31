import { configureStore } from '@reduxjs/toolkit'
import { spotifyApi } from './services/spotifyApi'
import authReducer from './AuthSlice'

export const store = configureStore({
  reducer: {

  },
 
})