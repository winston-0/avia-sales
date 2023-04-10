import React from "react";

const Ticket = () => {
    return (
        <li className="ticket">
            <div className="ticket__head">
                <span className="ticket__head-price">13 400 Р</span>
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