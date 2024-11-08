import React from 'react'
import Image from './Image'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const ErroPage = () => {
  return (
    <>    <Footer />
      <div className="err-section">
        <div className="errImg">
          <Image imgSrc='images/404errImg.png' />
        </div>
        <div className="err-info">
          <h1>404 Error Page does not found</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita officiis sequi</p>
          <button><NavLink to='/'>Go Back</NavLink></button>

        </div>
      </div>
    </>

  )
}

export default ErroPage