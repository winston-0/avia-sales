import React, {useEffect, useRef, useState} from "react";
import Ticket from "../Ticket/Ticket";
import useTicketList from "./TicketListLogic";


 const TicketList = () => {
    const tickets = useTicketList()
    return (
        <ul className="tickets-list">
            <Ticket/>
            <Ticket/>
        </ul>
    )
}

export default TicketList