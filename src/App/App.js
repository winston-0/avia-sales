import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import SideFilter from '../SideFilter/SideFilter'
import MainContent from '../MainContent/MainContent'
import store from '../store'
import aviaSalesApi from '../aviaSalesApi/aviaSalesApi'
import Logo from '../Logo/Logo'

const aviaSalesService = new aviaSalesApi()

const App = () => {
  useEffect(() => {
    aviaSalesService.getSearchId().then((res) => localStorage.setItem('searchId', res))
  }, [])
  return (
    <Provider store={store}>
      <section className="avia-sales">
        <Logo />
        <SideFilter />
        <MainContent />
      </section>
    </Provider>
  )
}

export default App
