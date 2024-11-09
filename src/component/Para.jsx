import React from 'react'
import { FaUserFriends } from "react-icons/fa";

const Para = ({ para, clsName, title, clsNameTwo }) => clsName === "color-grad" ? <p><FaUserFriends className='color-grad' /> <span>{title} </span> {para}</p>
    : <p className={clsNameTwo}>{para}</p>
export default Para