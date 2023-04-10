import React from "react";
import { Provider } from "react-redux";
import SideFilter from "../SideFilter/SideFilter";
import MainContent from "../MainContent/MainContent";
import store from "../store";

const App = () => {
    return (
        <Provider store={store}>
            <section className="avia-sales">
                <SideFilter/>
                <MainContent/>
            </section>
        </Provider>
    )
}

export default App


