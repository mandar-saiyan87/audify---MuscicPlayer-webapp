import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discover: [],
  albums: [],
  artists: [],
  tracks: [],
  currentPlaylist: [],
  currentTrackIndex: 0,
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
  },
})

export const { setAlbums, setTracks, setArtists, setcurrentPlaylist, clearPlayer, setCurrentTrackIndex } = dataSlice.actions
export default dataSlice.reducer