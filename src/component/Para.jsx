import React from 'react'
import { FaUserFriends } from "react-icons/fa";

const Para = ({ para, clsName, title }) => clsName === "color-grad" ? <p><FaUserFriends className='color-grad' /> <span>{title} </span> {para}</p>
    : <p>{para}</p>
export default Para