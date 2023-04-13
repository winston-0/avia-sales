import React from 'react'

import TicketSorting from '../TicketSorting/TicketSorting'
import TicketsList from '../TicketsList/TicketsList'

const MainContent = () => {
  return (
    <section className="avia-sales__main-content">
      <TicketSorting />
      <TicketsList />
    </section>
  )
}

export default MainContent
