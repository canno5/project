import React from 'react'
import { linkArr } from '../arronObj/linksArr';
import { MdOutlineMail } from "react-icons/md";
import Services from './Services';
import Image from './Image';
import { boderLines, layerArr, linesArr, wavArr } from '../arronObj/linesArr';
import Line from './Line';
import Para from './Para';
import Button from './Button';
import Heading from './Heading';
import { arrImg } from '../arronObj/imgArr';
const Content = () => {
    return (
        <>
            <div className="backgrounds">
                <div className="main-section background-eff background-mob-eff">
                    <div className='content-box'>
                        <div className="container mainbox">
                            <div className="home-box">
                                <div className='info'>
                                    <Image imgSrc="images/imag (1).png" className="headingshape" />
                                    <Heading conditionhead="twoeff" />
                                    <Para para='Supply that meets Demand. Get the Best wholesale prices of used  and refurbished Mobile Stocks.' />
                                    <Button title={"Learn More"} />
                                </div>
                                <div className='mail-info'>
                                    <div className='main-one'>
                                        <div className="emailBox">
                                            <MdOutlineMail />
                                            <input type="text" name="email" id="email" placeholder='Email' />
                                        </div>
                                        <Button clsName="sub" title='Subscribe' />
                                        <Button clsName="stock" title="Stock List" />
                                    </div>
                                    <div className="soc-links">
                                        <div className='me-5'>
                                            {linkArr.map((val) => <a key={val.id} href={val.link} target='_canan'>{val.icon}</a>)}
                                        </div>
                                        <Para clsName="color-grad" para="Registerd" title='400k people' />
                                    </div>
                                </div>
                            </div>
                            <div className="box-image">
                                <div className="box">
                                    {wavArr.map((val) => <Line key={val.id} clsName={val.className} />)}
                                </div>
                                <Image imgSrc='images/iphone.png' title="mainImg" />
                            </div>
                            <div className="img-rotate-eff">
                                {layerArr.map((val) => <Line key={val.id} clsName={val.className} />)}
                            </div>
                            <div className="dot-line">
                                {linesArr.map((val) => <Line key={val.id} clsName={val.className} />)}
                            </div>
                        </div>
                        <div className="left-line">
                            {boderLines.map((val) => <Line key={val.id} clsName={val.className} />)}
                        </div>
                        <marquee behavior="" direction="">
                            <div className='image-box'>
                                {arrImg.map((val) => <Image key={val.id} imgSrc={val.imgSrc} />)}
                            </div>
                        </marquee>
                    </div>
                </div>
            </div>
            <Services />
        </>
    )
}
export default Content