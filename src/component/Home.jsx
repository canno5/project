import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./Content";
const Home = () => {
    return (
        <>
            <Footer />
            <div class="box-layer">
                <Navbar />
                <Content />
                <div class="wav-layer -ones"></div>
                <div class="wav-layer "></div>
            </div>
        </>
    )
}
export default Home