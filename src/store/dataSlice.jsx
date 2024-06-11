import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discover: [],
  albums: [],
  artists: [],
  tracks: [],
  currentPlaylist: [],
  currentTrackIndex: 0,
  isLyrics: false
}


export const dataSlice = createSlice({
  name: 'appdata',
  initialState,
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload
    },
    setTracks: (state, action) => {
      state.tracks = action.payload
    },
    setArtists: (state, action) => {
      state.artists = action.payload
    },
    setcurrentPlaylist: (state, action) => {
      // console.log(action.payload)
      state.currentPlaylist = action.payload
      state.currentTrackIndex = 0
    },
    clearPlayer: (state, action) => {
      state.currentPlaylist = []
      state.currentTrackIndex = 0
    },
    setCurrentTrackIndex: (state, action) => {
      state.currentTrackIndex = action.payload
    },
    setLyrics: (state) => {
      state.isLyrics = !state.isLyrics
    }
  },
})

export const { setAlbums, setTracks, setArtists, setcurrentPlaylist, clearPlayer, setCurrentTrackIndex, setLyrics } = dataSlice.actions
export default dataSlice.reducer