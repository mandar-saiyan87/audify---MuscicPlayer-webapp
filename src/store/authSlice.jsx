
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
  const { id, imgurl, playlistname, token } = playlistData
  const req = await fetch(`${process.env.REACT_APP_API_URL}/createnewplaylist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ id, imgurl, playlistname })
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
        console.log(action.payload)
        // state.userPlaylist.push(action.payload)
      })
      .addCase(createPlaylistApi.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

export const { resetdbUsermsg, resetUserLogout } = userSlice.actions
export default userSlice.reducer