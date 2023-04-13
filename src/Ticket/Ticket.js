import React from 'react'
import format from 'date-fns/format'
import add from 'date-fns/add'

const Ticket = ({ data }) => {
  const amountOfStops = (index) => {
    const stopsAmount = data.segments[index].stops.length
    if (stopsAmount === 0) return `${stopsAmount} ПЕРЕСАДОК`
    if (stopsAmount === 1) return `${stopsAmount} ПЕРЕСАДКА`
    if (stopsAmount > 1) return `${stopsAmount} ПЕРЕСАДКИ`
  }
  const formatedDate = (index) => {
    let date = new Date(data.segments[index].date)
    let secondDate = add(date, {
      minutes: data.segments[index].duration,
    })
    return `${format(date, 'HH:mm')} - ${format(secondDate, 'HH:mm')}`
  }
  const formateDuration = (index) => {
    const minutes = data.segments[index].duration
    const m = minutes % 60
    const h = (minutes - m) / 60
    const travelDuration = `${h}ч ${m}м`
    return travelDuration
  }
  const showStops = (index) => {
    const stopsList = data.segments[index].stops
    return stopsList.join(', ')
  }

  return (
    <li className="ticket">
      <div className="ticket__head">
        <span className="ticket__head-price">{data.price} Р</span>
        <div className="ticket__head-logo">
          <img src={`//pics.avs.io/99/36/{${data.carrier}}.png`} alt="logo" />
        </div>
      </div>
      <div className="ticket__body">
        <div className="ticket__body-block">
          <div>
            <span>MOW – HKT</span>
            <span>{formatedDate(0)}</span>
          </div>
          <div>
            <span>В ПУТИ</span>
            <span>{formateDuration(0)}</span>
          </div>
          <div>
            <span>{amountOfStops(0)}</span>
            <span>{showStops(0)}</span>
          </div>
        </div>

        <div className="ticket__body-block">
          <div>
            <span>MOW – HKT</span>
            <span>{formatedDate(1)}</span>
          </div>
          <div>
            <span>В ПУТИ</span>
            <span>{formateDuration(1)}</span>
          </div>
          <div>
            <span>{amountOfStops(1)}</span>
            <span>{showStops(1)}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket

// .sort((a, b) => {
//     let aD = 0;
//     let bD = 0;
//     for (let s of a.segments) {
//       aD += s.duration;
//     }
//     for (let s of b.segments) {
//       bD += s.duration;
//     }
//     return aD + a.price - (bD + b.price);
//   });
