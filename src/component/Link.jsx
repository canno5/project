import React from 'react'
import { NavLink } from 'react-router-dom';
const Link = ({title, link, className, classNametwo}) => {
  return <li><NavLink className={className} to={link}>{title}</NavLink>
  <span className={classNametwo}></span>
  </li>
}
export default Link;