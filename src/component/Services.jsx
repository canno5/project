import React from 'react'
import Service from './Service'
import { serArr } from '../arronObj/serviceArr'
import Heading from './Heading';
import Para from './Para';
import Button from './Button';
import { linesArrtwo } from '../arronObj/linesArr';
import Line from './Line';
const Services = () => {
    return (
        <>
            <div className="service-section">
                <Heading conditionhead="servicehead" />
                <Para para="We stay upto date with latest technology trends and offer innovative solutions. that help you stay ahead in competetion" />
                <div className='services-boxs container'>
                    {serArr.map((val) => <Service key={val.id} title={val.title} description={val.description} />)}
                </div>
                <div className="dot-line flex-box">
                    <Button clsName="colr-green" btnCondition="btn-back" />
                    {linesArrtwo.map((val) => <Line key={val.id} clsName={val.className} />)}
                    <Button clsName="colr-green" btnCondition="btn-forward" />
                </div>
            </div>

        </>
    )
}
export default Services