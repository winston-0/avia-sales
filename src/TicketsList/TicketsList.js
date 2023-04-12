import React, {useEffect, useRef, useState} from "react";
import Ticket from "../Ticket/Ticket";
import useTicketList from "./TicketListLogic";
import { Alert } from "antd";
import { showMore } from "../store/ticketsDataSlice";
import { useDispatch, useSelector } from "react-redux";

 const TicketList = () => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.ticketsData.fulfilled.error)
    const dataFetchingFulfilled = useSelector(state => state.ticketsData.fulfilled)
    const tickets = useTicketList()
    const visibleTickets = tickets.map((item, index) => {
        return <Ticket key={index} data={item}/>
    })
    if(tickets.length === 0 && dataFetchingFulfilled) {
        return <Alert
        message='Рейсов, подходящих под заданные фильтры, не найдено'
        type="info"
        banner={true}
        />
    }
    if(tickets.length !== 0) {
    return (
        <ul className="tickets-list">
            {error ? <Alert
             message="Произошла непредвиденная ошбика, не все билеты будут отображены"
             type="error"
             banner={true}/> : null}
            {visibleTickets}
            <button onClick={() => dispatch(showMore())} className="show-more">Показать еще 5 билетов!</button>
        </ul>
    )
    }
}

export default TicketList