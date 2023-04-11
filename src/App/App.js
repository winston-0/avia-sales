import React, {useEffect} from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import SideFilter from "../SideFilter/SideFilter";
import MainContent from "../MainContent/MainContent";
import store from "../store";
import aviaSalesApi from "../aviaSalesApi/aviaSalesApi";

const aviaSalesService = new aviaSalesApi();

const App = () => {
    useEffect(() => {
            aviaSalesService.getSearchId().then(res => localStorage.setItem('searchId', res))    
    }, [])
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


