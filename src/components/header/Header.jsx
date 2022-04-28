import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/02.jpg";


import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>RAMESH GUDIVADA</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <div className="me">
        <img src={ME}/>
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;