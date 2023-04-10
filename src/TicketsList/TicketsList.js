import React from "react";
import Ticket from "../Ticket/Ticket";

export default TicketList = () => {
    return (
        <ul className="tickets-list">
            <Ticket/>
            <Ticket/>
        </ul>
    )
}