import React from 'react'
import { MdArrowForward } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const Button = ({ title, btnCondition, clsName}) => {
    return (
        btnCondition === "title" ? <button className={clsName}>{title}</button> :
        clsName === "sub" ?  <button className={clsName}> {title} <MdArrowForward className='ms-5' /></button> :  btnCondition === "btn-back" ?
        <button><IoChevronBackOutline className='colr-green' /></button> : 
        btnCondition === "btn-forward" ?  <button><IoChevronForward className='colr-green' /></button> :
        <button className={clsName}><MdArrowForward className='rotate' /> {title}</button>
        
       
    )
}
export default Button
// {/* <button className={clsName}>{title} {iconsArr.map((val)=>{
//     return val.condition === "foward-cond" ? <MdArrowForward/> : val.condition === "left-cond" ? <IoChevronBackOutline/> : val.condition === "right-cond"  ? <IoChevronForward/> : null 
    
// })}</button> :  */}
