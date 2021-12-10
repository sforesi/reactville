import React from 'react'
import { NavLink } from 'react-router-dom'
import Wallet from './Wallet'

// Components & Assets
import Logo from '../../assets/react-logo.png'

const Nav = () => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <NavLink to="/"><img src="logo192.png" alt="reactville logo" /></NavLink>
      <NavLink to="/burgers">BurgerShop</NavLink>
      <NavLink to="/market">SuperMarket</NavLink>
    </nav> 
  )
}

export default Nav