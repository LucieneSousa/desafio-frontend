import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Footer from "./Footer";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
