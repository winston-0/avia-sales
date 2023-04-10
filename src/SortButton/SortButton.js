import React from "react";
import { useDispatch } from "react-redux";
import { switchSorting } from "../store/sortTicketsSlice";

const SortButton = ({data}) => {
    const dispatch = useDispatch()
    const className = !data.enabled ? 'ticket-sorting__button' : 'ticket-sorting__button ticket-sorting__button--pressed'
    return (
        <button onClick={() => dispatch(switchSorting(data.value))} className={className}>{data.name}</button>
    )
}

export default SortButton