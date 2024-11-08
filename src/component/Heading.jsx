import React from 'react'
const Heading = ({ conditionhead, heading }) => {
    return (
        conditionhead === "twoeff" ? <>
            <h2>Large <span>WholeSalers </span>of  <span className='mobile-phone'> Mobile Phones</span>
            </h2>
        </> : conditionhead ===  "servicehead" ?  <h1><span>Mobile</span> Stock</h1>
        : <h2>{heading}</h2>
    )
}
export default Heading