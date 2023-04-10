import React from "react";
import { store } from './store';
import { Provider } from "react-redux";
import SideFilter from "../SideFilter/SideFilter";
import MainContent from "../MainContent/MainContent";

export default App = () => {
    return (
        <Provider store={store}>
            <section className="avia-sales">
                <SideFilter/>
                <MainContent/>
            </section>
        </Provider>
    )
}


