import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import facebook from "./../assets/facebook.svg";
import instagram from "./../assets/instagram.jpg";
import twitter from "./../assets/twitter.svg";
import linkedin from "./../assets/linkedin.svg";
import logo from "./../assets/logo.svg";
import "./footer.css";

const Footer = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbotron-container footer-web">
        <Container className="footer">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="icons-footer">
            <img src={twitter} alt="twitter"></img>
            <img src={facebook} alt="facebook"></img>
            <img src={instagram} alt="instagram"></img>
          </div>
          <span>Copywright 2020 Bella Onojie.com</span>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="jumbotron-container footer-mob">
        <Container className="footer">
          <div className="icons-footer-mb">
            <img src={twitter} alt="twitter"></img>
            <img src={facebook} alt="facebook"></img>
            <img src={linkedin} alt="linkedin"></img>
          </div>
          <span>Just type what's on your mind and we'll</span>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
