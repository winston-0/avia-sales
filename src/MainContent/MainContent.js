import React from "react";
import TicketSorting from "../TicketSorting/TicketSorting";
import TicketsList from "../TicketsList/TicketsList";

export default MainContent = () => {
    return (
        <section className="avia-sales__main-content">
            <TicketSorting/>
            <TicketsList/>
            <button className="show-more">Показать еще 5 билетов!</button>
        </section>
    )
}