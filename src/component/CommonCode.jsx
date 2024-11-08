import React, { useEffect, useState } from 'react'
import { linkArr } from '../arronObj/linksArr';
import { MdOutlineMail } from "react-icons/md";
import Image from './Image';
import { boderLines, layerArr, linesArr, wavArr } from '../arronObj/linesArr';
import Line from './Line';
import Para from './Para';
import Button from './Button';
import Heading from './Heading';
import { arrImg } from '../arronObj/imgArr';
const CommonCode = () => {
    const [inputVal, setInputVal] = useState('');
    const classAddFunc = () => {
        setTimeout(() => {
            document.querySelector(".mobile-phone").classList.add("d-none")
            document.querySelector(".laptops").classList.add("d-block")
            setTimeout(() => {
                document.querySelector(".laptops").classList.remove("d-block")
                document.querySelector(".tablet").classList.add("d-block")
            }, 2000);

        }, 2000);        
    }

    useEffect(() => {
        classAddFunc();
    },[]);
    return (
        <div className="main-section background-eff background-mob-eff">
            <div className="bacg-imglayer">
                <Image imgSrc="images/imag (2).png" />
            </div>
            <div className='content-box'>
                <div className="container mainbox">
                    <div className="home-box">
                        <div className='info'>
                            <Image imgSrc="images/imag (1).png" className="headingshape" />
                            <Heading conditionhead="twoeff" />
                            <h2><span className='d-none laptops'> laptops</span>
                            </h2>
                            <h2><span className='d-none tablet'> Tablets</span>
                            </h2>
                            <Image imgSrc="images/headingbg.png" className="headingshape-two" />
                            <Para para='Supply that meets Demand. Get the Best wholesale prices of used  and refurbished Mobile Stocks.' />
                            <Button title={"Learn More"} />
                        </div>
                        <div className='mail-info'>
                            <div className='main-one'>
                                <div className="emailBox">
                                    <MdOutlineMail />
                                    <input type="text" name="email" id="email" placeholder='Email' onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
                                </div>
                                <Button clsName="sub" title='Subscribe' onClick={() => {
                                    !inputVal ? alert("Please value is required") : alert("User email is " + inputVal);
                                    setInputVal('');
                                }} />
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
                        <Image imgSrc='images/iphone.png' title="mainImg" />
                        <div className="box">
                            {wavArr.map((val) => <Line key={val.id} clsName={val.className} />)}
                        </div>
                    </div>
                    <div className="img-rotate-eff">
                        {layerArr.map((val) => <Line key={val.id} clsName={val.className} />)}
                    </div>
                    <div className="dot-line dotlinemar">
                        {linesArr.map((val) => <Line key={val.id} clsName={val.className} />)}
                    </div>
                </div>
                <div className="left-line">
                    {boderLines.map((val) => <Line key={val.id} clsName={val.className} />)}
                </div>
                <marquee>
                    <div className='image-box'>
                        {arrImg.map((val) => <Image key={val.id} imgSrc={val.imgSrc} />)}
                    </div>
                </marquee>
            </div>
        </div>
    )
}
export default CommonCode