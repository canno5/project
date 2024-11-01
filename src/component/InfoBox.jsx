import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";
const InfoBox = () => {
    return (
        <>
            <div className='info-box'>
                <a href="#"><MdOutlineMail /><span>info@abc.com</span></a>
                <a href="#"><HiOutlinePhone /><span>+123 456 789</span></a>
            </div>
        </>
    )
}
export default InfoBox