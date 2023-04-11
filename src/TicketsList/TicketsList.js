import React, {useEffect, useRef, useState} from "react";
import Ticket from "../Ticket/Ticket";
import useTicketList from "./TicketListLogic";


 const TicketList = () => {
    const tickets = useTicketList()
    const VisibleTickets = tickets.map((item, index) => {
        return <Ticket key={index} data={item}/>
    })
    return (
        <ul className="tickets-list">
            
        </ul>
    )
}

export default TicketList