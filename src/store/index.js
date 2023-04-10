import { configureStore } from "@reduxjs/toolkit";
import sortTicketsSlice from "./sortTicketsSlice";
import sideFilterSlice from "./sideFilterSlice";

const store = configureStore({
    reducer: {
      sideFilter: sideFilterSlice,
      ticketSorting: sortTicketsSlice
    }
})

export default store