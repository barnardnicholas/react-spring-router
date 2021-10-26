import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <NavLink className="nav-link" to="/">
        Arnie
      </NavLink>
      <NavLink className="nav-link" to="/bacon">
        Bacon
      </NavLink>
      <NavLink className="nav-link" to="/delorean">
        Delorean
      </NavLink>
    </header>
  )
}

export default Header
