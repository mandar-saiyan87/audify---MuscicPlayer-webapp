import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  loggedinUser: null,
  dbUsermsg: null,
  loginstatus: null,
  loading: false,
  error: null
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


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetdbUsermsg: (state, action) => {
      state.dbUsermsg = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true
    })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false
        console.log(action.payload)
        state.dbUsermsg = action.payload
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false
        state.dbUsermsg = action.error
      })
  }
})

export const { resetdbUsermsg } = userSlice.actions
export default userSlice.reducer