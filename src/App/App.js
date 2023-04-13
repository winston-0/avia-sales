import React from 'react'
import { Provider } from 'react-redux'

import SideFilter from '../SideFilter/SideFilter'
import MainContent from '../MainContent/MainContent'
import store from '../store'
import Logo from '../Logo/Logo'

const App = () => {
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
