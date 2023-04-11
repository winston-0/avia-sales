import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import aviaSalesApi from "../aviaSalesApi/aviaSalesApi";
import { act } from "react-dom/test-utils";
const aviaSalesService = new aviaSalesApi();

const initialState = {
    data: [],
    fulfilled: false,
}

export const fetchTickets = createAsyncThunk('fetchTickets', async () => {
    try {
        const response = await aviaSalesService.getTickets();
        return response
    } catch (error) {
        const response = await aviaSalesService.getTickets();
        return response
    }
})

const ticketsDataSlice = createSlice({
    name: 'ticketsData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTickets.fulfilled, (state, action) => {
            state.data.push(...action.payload.tickets);
            if(action.payload.stop) {
                state.fulfilled = true
            }
        })
    }
})

export default ticketsDataSlice.reducer

//сделать что бы при ошибке запрос отправлялся повтора некоторое кол-во раз
//