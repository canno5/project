import React from 'react'
const Link = ({title, link, className, classNametwo}) => {
  return <li><a className={className} href={link}>{title}</a>
  <span className={classNametwo}></span>
  </li>
}
export default Link;