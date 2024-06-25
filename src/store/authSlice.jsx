
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const initialState = {
  token: null,
  loggedinUser: null,
  dbUsermsg: null,
  loading: false,
  error: null,
  userPlaylist: []
}

export const createUser = createAsyncThunk('createUser', async (signupDetails) => {
  const req = await fetch(`${process.env.REACT_APP_API_URL}/usersignup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(signupDetails)
  })
  const response = req.json()
  return response
})


export const loginUser = createAsyncThunk('loginUser', async (loginDetails) => {
  const req = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginDetails)
  })
  const res = await req.json()
  if (res.code === 200) {
    Cookies.set('token', res.token, { expires: 1 })
  }
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


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetdbUsermsg: (state, action) => {
      state.dbUsermsg = null
    },
    resetUserLogout: (state, action) => {
      state.dbUsermsg = null
      state.loggedinUser = null
      state.token = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true
    })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false
        // console.log(action.payload)
        state.dbUsermsg = action.payload
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false
        state.dbUsermsg = action.error
      })
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true
    })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload.code === 200) {
          state.loggedinUser = action.payload.user
          state.token = action.payload.token
          state.userPlaylist = action.payload.userPlaylist
        } else {
          state.dbUsermsg = action.payload
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
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
  }
})

export const { resetdbUsermsg, resetUserLogout } = userSlice.actions
export default userSlice.reducer