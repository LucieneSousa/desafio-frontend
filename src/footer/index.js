import React from "react";
import facebook from "./../assets/facebook.png";
import instagram from "./../assets/instagram.jpg";
import twitter from "./../assets/twitter.png";
import logo from "./../assets/logo.png";
import { FooterBase, Icons } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <div>
        <img src={logo} alt="logo"></img>
      </div>
      <Icons>
        <img src={twitter} alt="twitter"></img>
        <img src={facebook} alt="facebook"></img>
        <img src={instagram} alt="instagram"></img>
      </Icons>
      <span>Copywright 2020 Bella Onojie.com</span>
    </FooterBase>
  );
}

export default Footer;
