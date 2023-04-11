import { configureStore } from "@reduxjs/toolkit";
import sortTicketsSlice from "./sortTicketsSlice";
import sideFilterSlice from "./sideFilterSlice";
import ticketsDataSlice from "./ticketsDataSlice";

const store = configureStore({
    reducer: {
      sideFilter: sideFilterSlice,
      ticketSorting: sortTicketsSlice,
      ticketsData: ticketsDataSlice
    }
})
// store.subscribe(() => {
//   console.log(store.getState().ticketsData)
// })
export default store