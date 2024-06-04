import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discover: [],
  albums: [],
  artists: [],
  tracks: []
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
    }
  },
})

export const { setAlbums, setTracks, setArtists } = dataSlice.actions
export default dataSlice.reducer