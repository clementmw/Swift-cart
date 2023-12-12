import React from 'react'
import { NavLink } from 'react-router-dom'


function Nav() {
  return (
    <div>
     <NavLink to={"/home"}>home</NavLink>
    </div>
  )
}

export default Nav