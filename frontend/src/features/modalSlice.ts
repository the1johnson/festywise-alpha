import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    is_active: false
  },
  reducers: {
    setActive: (state, action) => {
      state.is_active = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setActive } = modalSlice.actions

export default modalSlice.reducer