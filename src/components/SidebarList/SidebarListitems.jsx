import React from 'react'
import {NavLink} from "react-router-dom"

const SidebarListitems = ({text,link}) => {

  return (
    <li>
      <NavLink to={link}>{text}</NavLink>
    
  </li>
  )
}

export default SidebarListitems
