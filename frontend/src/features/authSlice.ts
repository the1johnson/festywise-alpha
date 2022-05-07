import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authorized: false,
    userId: 0
  },
  reducers: {
    setAuth: (state, action) => {
      state.authorized = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, setUserId } = authSlice.actions

export default authSlice.reducer