import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
export const Logo = ({ logo }) => {
  return (
    <div className={logo}>
      <Link to="/">
        <Image imgSrc="images/logo.png" />
        <i className="fa fa-wifi"></i>
      </Link>
    </div>
  )
}
