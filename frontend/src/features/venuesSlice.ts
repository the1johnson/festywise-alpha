import { createSlice } from '@reduxjs/toolkit'

export const venuesSlice = createSlice({
  name: 'venues',
  initialState: {
    venue_list: [],
  },
  reducers: {
    setVenues: (state, action) => {
      state.venue_list = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setVenues } = venuesSlice.actions

export default venuesSlice.reducer