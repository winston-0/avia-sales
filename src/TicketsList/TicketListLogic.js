import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTickets } from '../store/ticketsDataSlice'

const useTicketList = () => {
  const dispatch = useDispatch()
  const dataFetchingFulfilled = useSelector((state) => state.ticketsData.fulfilled)
  const ticketsData = useSelector((state) => state.ticketsData.data)
  const sideFilterState = useSelector((state) => state.sideFilter)
  const sortingOptions = useSelector((state) => state.ticketSorting)
  const amountOfTickets = useSelector((state) => state.ticketsData.amountOfTickets)
  const error = useSelector((state) => state.ticketsData.error)

  const [visibleTickets, setVisibleTickets] = useState([])

  const filterTickets = (tickets, sideFilterState) => {
    const activeFilters = sideFilterState
      .filter((item) => {
        return item.enabled === true && item.id !== 'all' ? true : false
      })
      .map((item) => item.value)
    const filtredTickets = tickets.filter((item) => {
      const stopsTo = item.segments[0].stops.length
      const stopsFrom = item.segments[1].stops.length
      if (activeFilters.includes(stopsTo) && activeFilters.includes(stopsFrom)) {
        return true
      }
    })
    return filtredTickets
  }
  const sortTickets = (tickets, sortingOptions) => {
    let activeSorting = sortingOptions.filter((item) => (item.enabled ? true : false))
    activeSorting = activeSorting[0].value
    if (activeSorting === 'cheapest') {
      return tickets.sort((a, b) => {
        if (a.price > b.price) return 1
        if (a.price == b.price) return 0
        if (a.price < b.price) return -1
      })
    } else if (activeSorting === 'fastest') {
      return tickets.sort((a, b) => {
        const firsFlightDuration = a.segments[0].duration + a.segments[1].duration
        const secondFlightDuration = b.segments[0].duration + b.segments[1].duration
        if (firsFlightDuration > secondFlightDuration) return 1
        if (firsFlightDuration == secondFlightDuration) return 0
        if (firsFlightDuration < secondFlightDuration) return -1
      })
    } else if (activeSorting === 'optimal') {
      return tickets.sort((a, b) => {
        const firsFlightDuration = a.segments[0].duration + a.segments[1].duration
        const secondFlightDuration = b.segments[0].duration + b.segments[1].duration
        const firstFlightPrice = a.price
        const secondFlightPrice = b.price
        if (firstFlightPrice < secondFlightPrice && firsFlightDuration < secondFlightDuration) {
          return -1
        } else if (firstFlightPrice > secondFlightPrice) {
          const priceDiff = firstFlightPrice / secondFlightPrice
          const timeDiff = secondFlightDuration / firsFlightDuration
          if (timeDiff >= priceDiff * 1.1) {
            return -1
          } else {
            return 1
          }
        } else if (firstFlightPrice < secondFlightPrice) {
          const priceDiff = secondFlightPrice / firstFlightPrice
          const timeDiff = firsFlightDuration / secondFlightDuration
          if (timeDiff < priceDiff * 0.9) {
            return -1
          } else {
            return 1
          }
        }
      })
    }
  }
  const prepareVisibleTickets = () => {
    let visibleTickets = filterTickets(ticketsData, sideFilterState)
    visibleTickets = sortTickets(visibleTickets, sortingOptions)
    visibleTickets = visibleTickets.slice(0, amountOfTickets)
    setVisibleTickets(visibleTickets)
  }

  useEffect(() => {
    if (!dataFetchingFulfilled) {
      // console.log(ticketsData)
      dispatch(fetchTickets())
    }

    if (ticketsData.length !== 0) {
      prepareVisibleTickets()
    }
  }, [ticketsData, dataFetchingFulfilled, error])

  useEffect(() => {
    prepareVisibleTickets()
  }, [sideFilterState, sortingOptions, amountOfTickets])

  // console.log(visibleTickets)
  return visibleTickets
}
export default useTicketList
