import React from "react";

export default TicketSorting = () => {
    return (
        <section classNamw="ticket-sorting">
            <button className="ticket-sorting__button ticket-sorting__button--pressed">Самый дешевый</button>
            <button className="ticket-sorting__button">Самый быстрый</button>
            <button className="ticket-sorting__button">Оптимальный</button>
        </section>
    )
}