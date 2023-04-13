import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import aviaSalesApi from '../aviaSalesApi/aviaSalesApi'
const aviaSalesService = new aviaSalesApi()

const initialState = {
  data: [],
  fulfilled: false,
  amountOfTickets: 5,
  error: false,
}

export const fetchTickets = createAsyncThunk('fetchTickets', async function request() {
  const response = await aviaSalesService.getTickets()
  return response
})

const ticketsDataSlice = createSlice({
  name: 'ticketsData',
  initialState,
  reducers: {
    showMore: (state) => {
      state.amountOfTickets += 5
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.data.push(...action.payload.tickets)
        if (action.payload.stop) {
          state.fulfilled = true
        }
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.error += 1
      })
  },
})

export default ticketsDataSlice.reducer
export const { showMore } = ticketsDataSlice.actions

//сделать что бы при ошибке запрос отправлялся повтора некоторое кол-во раз
//
