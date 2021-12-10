import React from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'


const App = () => {
  return (
    <>
    <Nav />
    <main>
      {/* //add route paths */}
      <Routes>
        <Route path="/"
          element={<Landing />}
        />
        <Route path="/burgers"
          element={<BurgerShop />}
        />
        <Route path="/market"
          element={<SuperMarket />}
        />
      </Routes>
    </main>
    </>
  )}

export default App