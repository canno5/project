import React from 'react'
import InfoBox from './InfoBox';
import PrivacyBox from './PrivacyBox';
const Footer = () => {
    return (
        <>
            <footer className='footer-section'>
                <div className="container">
                    <div className='footer'>
                       <InfoBox/>
                        <PrivacyBox/>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer