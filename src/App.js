import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Content from "./component/Content";
import Image from "./component/Image";

const App = () => {
  return (
    <>
      <Footer />
      <div className="img-shap">
        <Image imgSrc="images/imag (3).png" />
      </div>
      <Navbar />
      <Content />
    </>
  );
}

export default App;
