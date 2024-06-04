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
    }
  }
})

export const { setAlbums } = dataSlice.actions
export default dataSlice.reducer