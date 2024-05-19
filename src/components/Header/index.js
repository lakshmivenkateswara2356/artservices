import React from 'react';
import uaplimage from "../../Assets/imageuapl.png";


const Header = () => (
  <header className="header">
    <p className="trackypurorder">Track your order</p>
    <img src={uaplimage} className="uaplimageedit" alt="imsge"/>
    <nav>
      <a className="topnakvs" href="/">Home</a>
      <a className="topnakvs" href="/service">Service</a>
      <a className="topnakvs" href="/about">About Us</a>
      <a className="topnakvs" href="/login">Login</a>
    </nav>
  </header>
);

export default Header;
