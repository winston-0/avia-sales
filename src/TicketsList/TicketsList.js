import React, {useEffect, useRef, useState} from "react";
import Ticket from "../Ticket/Ticket";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../store/ticketsDataSlice";


 const TicketList = () => {
    const dispatch = useDispatch();
    const dataFetchingFulfilled = useSelector(state => state.ticketsData.fulfilled) 
    const ticketsData = useSelector(state => state.ticketsData.data)
    useEffect(() => {
     if(!dataFetchingFulfilled) {
        console.log(ticketsData)
        dispatch(fetchTickets())
     }
    }, [ticketsData, dataFetchingFulfilled])
    return (
        <ul className="tickets-list">
            <Ticket data={ticketsData}/>
            <Ticket/>
        </ul>
    )
}

export default TicketList