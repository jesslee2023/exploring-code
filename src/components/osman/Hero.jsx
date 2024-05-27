import React from "react";
import "./Hero.css";
import bg3 from "../../assets/bg3.png"

const Hero = () => {
  return <>
  <header className="header">
    <a href="/" className="logo">Logo</a>

    <nav className="navbar">
    <a href="/">Osman</a>
    <a href="/">Moysis</a>
    <a href="/">Jess</a>
    <a href="/">Musab</a>
    <a href="/">Hifza</a>
    <a href="/">Samuel</a>
    </nav>
  </header>
  <body className="hero">
    <img src={bg3}></img>
  
  </body>
  </>;
};

export default Hero;
