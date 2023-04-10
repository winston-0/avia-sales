import React from "react";
import Ticket from "../Ticket/Ticket";

 const TicketList = () => {
    return (
        <ul className="tickets-list">
            <Ticket/>
            <Ticket/>
        </ul>
    )
}

export default TicketList