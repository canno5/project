import React from 'react'
import Heading from './Heading'
import Para from './Para'
import Image from './Image'

const Service = () => {
  return (
    <>
      <div className='service-box'>
        <div className="service-img">
          <Image imgSrc="images/iphone_14pro.png" />
        </div>
        <Heading heading="iphone 14 Pro Max" />
        <Para para="Apple iPhone 14 Pro 512GB Gold (MQ233)" />
      </div>
    </>
  )
}

export default Service