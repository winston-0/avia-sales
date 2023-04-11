import React from "react";
import format from 'date-fns/format';
import add from 'date-fns/add';

const Ticket = ({data}) => {
    const formatedDate = (index) => {
        let data = new Date(data.segments[index].date);
        let secondData = add(data, {
            minutes: data.segments[index].duration
        })
    const formateDuration = (index) => {

    }
        return format(secondData, 'HH:mm');
    }
    return (
        <li className="ticket">
            <div className="ticket__head">
                <span className="ticket__head-price">{data.price} Р</span>
                    <div className="ticket__head-logo">
                        <img src="./S7 Logo.png" alt="logo"/>
                    </div>
            </div>
            <div className="ticket__body">
                            <div className="ticket__body-block">
                                <div>
                                    <span>MOW – HKT</span>
                                    <span>10:45 – 08:00</span>
                                </div>
                                <div>         
                                    <span>В ПУТИ</span>
                                    <span>21ч 15м</span>
                                </div>
                                <div>
                                    <span>2 ПЕРЕСАДКИ</span> 
                                    <span>HKG, JNB</span>
                                </div>                      
                            </div>

                            <div className="ticket__body-block">
                                <div>
                                    <span>MOW – HKT</span>
                                    <span>10:45 – 08:00</span>
                                </div>
                                <div>         
                                    <span>В ПУТИ</span>
                                    <span>21ч 15м</span>
                                </div>
                                <div>
                                    <span>2 ПЕРЕСАДКИ</span> 
                                    <span>HKG, JNB</span>
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