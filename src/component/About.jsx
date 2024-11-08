import React from 'react'
import Image from './Image';
import Para from './Para';
import Button from './Button';
import Heading from './Heading';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Footer/>
    <Navbar/>
    <div className="backgrounds">
    <div className="main-section background-eff background-mob-eff">
        <div className='content-box'>
            <div className="container mainbox">
                <div className="home-box">
                    <div className='info'>
                        <Heading heading="I Phone 14 Pro Max" />
                        <Para para='Supply that meets Demand. Get the Best wholesale prices of used  and refurbished Mobile Stocks.' />
                        <Para para='Supply that meets Demand. Get the Best wholesale prices of used  and refurbished Mobile Stocks.' />
                        <Para para='Supply that meets Demand. Get the Best wholesale prices of used  and refurbished Mobile Stocks.' />
                        <Para para='Supply that meets Demand. Get the Best wholesale prices of used  and refurbished Mobile Stocks.' />
                    </div>
                    <div className="mail-info">
                    <Button clsName="stock" title="Stock List" />
                    </div>
                </div>
                <div className="box-image iphone14img">
                    <Image imgSrc='images/iphone_14pro.png' title="mainImg" />
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default About