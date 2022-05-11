import { createSlice } from '@reduxjs/toolkit'

export const optionItemsSlice = createSlice({
  name: 'optionItems',
  initialState: {
    genre: [
      { id: 0, value: 'Any', label: 'Any' },
      { id: 1, value: 'Bluegrass', label: 'Bluegrass' },
      { id: 2, value: 'Folk', label: 'Folk' },
      { id: 3, value: 'Acoustic Rock', label: 'Acoustic Rock' }
    ],
    performance_type: [
      { id: 0, value: 'Live Music', label: 'Live Music' },
      { id: 1, value: 'DJ', label: 'DJ' }
    ],
    equipment: [
      { id: 0, value: 'Sound System', label: 'Sound System' },
      { id: 1, value: 'Microphone', label: 'Microphone' },
      { id: 2, value: 'Monitor', label: 'Monitor' },
      { id: 3, value: 'XLR Cable', label: 'XLR Cable' }
    ],
    performance_duration: [
      { id: 0, value: 30, label: '30 min' },
      { id: 1, value: 45, label: '45 min' },
      { id: 2, value: 60, label: '60 min' },
      { id: 3, value: 90, label: '90 min' },
      { id: 4, value: 120, label: '120 min' }
    ],
    location_preference: [
      { id: 0, value: 'San Francisco', label: 'San Francisco' },
      { id: 1, value: 'East Bay', label: 'East Bay' },
      { id: 2, value: 'South Bay', label: 'South Bay' },
      { id: 3, value: 'North Bay', label: 'North Bay' }
    ],
    application_status: [
      { id: 0, value: 'pending', label: 'Pending' },
      { id: 1, value: 'denied', label: 'Denied' },
      { id: 2, value: 'approved', label: 'Approved' }
    ]
  },
  reducers: {
    setGenreItems: (state, action) => {
      state.genre = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setGenreItems } = optionItemsSlice.actions

export default optionItemsSlice.reducer