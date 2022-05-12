import { createSlice } from '@reduxjs/toolkit'

export const bandsSlice = createSlice({
  name: 'bands',
  initialState: {
    band_list: [],
  },
  reducers: {
    setBands: (state, action) => {
      state.band_list = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBands } = bandsSlice.actions

export default bandsSlice.reducer