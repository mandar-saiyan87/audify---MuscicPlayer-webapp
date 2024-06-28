import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: null,
  error: null,
  userPlaylist: [],
  playlistData: []
}

export const getUserPlaylistApi = createAsyncThunk('getUserPlaylistApi', async (userdata) => {
  const { userid, token } = userdata
  const req = await fetch(`${process.env.REACT_APP_API_URL}/getUserPlaylists/${userid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const res = await req.json()
  return res
})

export const createPlaylistApi = createAsyncThunk('createPlaylistApi', async (playlistData) => {
  const { id, description, imgurl, playlistname, token } = playlistData
  const req = await fetch(`${process.env.REACT_APP_API_URL}/createnewplaylist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ id, description, imgurl, playlistname })
  })
  const res = await req.json()
  return res
})

export const deletePlaylistApi = createAsyncThunk('deletePlaylistApi', async (playlistdata) => {
  // console.log(playlistdata)
  const req = await fetch(`${process.env.REACT_APP_API_URL}/deletePlaylist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${playlistdata.token}`
    },
    body: JSON.stringify({ id: playlistdata.id })
  })
  const res = await req.json()
  return res
})



export const getplaylisttracksApi = createAsyncThunk('getplaylisttracksApi', async (playlist) => {
  const req = await fetch(`${process.env.REACT_APP_API_URL}/getplaylisttracks/${playlist.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${playlist.token}`
    },
  })
  const res = await req.json()
  return res
})

export const addtracktoplaylistApi = createAsyncThunk('addtracktoplaylistApi', async (addtoplaylistdata) => {
  const req = await fetch(`${process.env.REACT_APP_API_URL}/addtracktoplaylist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${addtoplaylistdata.token}`
    },
    body: JSON.stringify({ id: addtoplaylistdata.trackid, selectedplaylists: addtoplaylistdata.selectedPlaylists })
  })
  const res = await req.json()
  return res
})

export const deletetrackfromplaylistApi = createAsyncThunk('deletetrackfromplaylistApi', async (trackdata) => {
  // console.log(trackdata)
  const req = await fetch(`${process.env.REACT_APP_API_URL}/removetrackfromplaylist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${trackdata.token}`
    },
    body: JSON.stringify({ songid: trackdata.songid, playlistid: trackdata.playlistid })
  })
  const res = await req.json()
  return res
})

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylistData: (state, action) => {
      state.playlistData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserPlaylistApi.pending, (state) => {
      state.loading = true
    })
      .addCase(getUserPlaylistApi.fulfilled, (state, action) => {
        state.loading = false
        state.userPlaylist = action.payload.playlists
        // console.log({ 'userplaylist': action.payload.playlists })
      })
      .addCase(getUserPlaylistApi.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
    builder.addCase(createPlaylistApi.pending, (state) => {
      state.loading = true
    })
      .addCase(createPlaylistApi.fulfilled, (state, action) => {
        state.loading = false
        // console.log(action.payload.newPlaylist[0])
        state.userPlaylist.push(action.payload.newPlaylist[0])
      })
      .addCase(createPlaylistApi.rejected, (state, action) => {
        state.error = action.error
      })
    builder.addCase(deletePlaylistApi.pending, (state, action) => {
      state.loading = true
    })
      .addCase(deletePlaylistApi.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload.code === 200) {
          const newPlaylist = state.userPlaylist.filter((playlist) => playlist.playlistid !== action.payload.deleted)
          state.userPlaylist = newPlaylist
        }
      })
      .addCase(deletePlaylistApi.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
    builder.addCase(addtracktoplaylistApi.pending, (state) => {
      state.loading = true
    })
      .addCase(addtracktoplaylistApi.fulfilled, (state, action) => {
        state.loading = false
        // console.log(action.payload)
        state.success = action.payload
      })
      .addCase(addtracktoplaylistApi.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
    builder.addCase(getplaylisttracksApi.pending, (state) => {
      state.loading = true
    })
      .addCase(getplaylisttracksApi.fulfilled, (state, action) => {
        state.loading = false
        // console.log(action.payload)
        state.playlistData = action.payload.tracklist
      })
      .addCase(getplaylisttracksApi.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
    builder.addCase(deletetrackfromplaylistApi.pending, (state) => {
      state.loading = true
    })
      .addCase(deletetrackfromplaylistApi.fulfilled, (state, action) => {
        state.loading = false
        const { playlistid, songid } = action.payload.removedtrack[0]
        const updatedPlaylist = state.userPlaylist.map((playlist) => {
          if (playlist.playlistid === playlistid) {
            return {
              ...playlist,
              songs: playlist.songs.filter(song => song.songid !== songid)
            }
          }
          return playlist
        })
        state.userPlaylist = updatedPlaylist
      })
      .addCase(deletetrackfromplaylistApi.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  }
})

export const { setPlaylistData } = playlistSlice.actions
export default playlistSlice.reducer
