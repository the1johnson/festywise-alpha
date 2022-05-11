import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    is_active: false,
    venue: null,
    gig: null
  },
  reducers: {
    setActive: (state, action) => {
      state.is_active = action.payload
    },
    setVenue: (state, action) => {
      state.venue = action.payload
    },
    setGig: (state, action) => {
      state.gig = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActive, setVenue, setGig } = modalSlice.actions

export default modalSlice.reducer