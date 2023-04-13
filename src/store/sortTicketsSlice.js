import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    value: 'cheapest',
    name: 'самый дешевый',
    enabled: false,
  },
  {
    value: 'fastest',
    name: 'самый быстрый',
    enabled: false,
  },
  {
    value: 'optimal',
    name: 'оптимальный',
    enabled: true,
  },
]

const sortTicketSlice = createSlice({
  name: 'sortTickets',
  initialState,
  reducers: {
    switchSorting: (state, action) => {
      state.forEach((item) => {
        if (item.value === action.payload) {
          item.enabled = true
        } else {
          item.enabled = false
        }
      })
    },
  },
})
export const { switchSorting } = sortTicketSlice.actions
export default sortTicketSlice.reducer
