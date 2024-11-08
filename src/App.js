import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import ServicesBox from "./component/ServicesBox";
import News from "./component/News";
import Wholesale from "./component/Wholesale";
import Work from "./component/Work";
import ErroPage from "./component/ErroPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" Component={About} />
        <Route path="/wholesale" Component={Wholesale} />
        <Route path="/howitwork" Component={Work} />
        <Route path="/services" Component={ServicesBox} />
        <Route path="/news" Component={News} />
        <Route path="/*" Component={ErroPage} />
      </Routes>
    </>
  );
}

export default App;
