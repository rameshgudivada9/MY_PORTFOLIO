import React from "react";
import { BsLinkedin, BsMedium } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/gudivada-ramesh9"
        target="__blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/rameshgudivada9" target="__blank">
        <FaGithub />
      </a>
      <a href="https://medium.com/@rameshgudivada9" target="__blank">
        <BsMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
