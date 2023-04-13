import React from 'react'
import { useSelector } from 'react-redux'

import SortButton from '../SortButton/SortButton'

const TicketSorting = () => {
  const ticketSortingState = useSelector((state) => state.ticketSorting)
  const buttons = ticketSortingState.map((item, index) => {
    return <SortButton key={index} data={item} />
  })
  return <section className="ticket-sorting">{buttons}</section>
}

export default TicketSorting
