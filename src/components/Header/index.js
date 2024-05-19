import React from 'react';
import uaplimage from "../../Assets/imageuapl.png";
import trackorder from "../../Assets/trackorder.png"
import { Link } from 'react-router-dom';
import './index.css'


const Header = () => (
  <header className="header">
    <img src={trackorder} alt="trackimg" className="trackimageadjust"/>
    <img src={uaplimage} className="uaplimageedit" alt="imsge"/>
    <nav>
      <a className="topnakvs" href="/">Home</a>
      <a className="topnakvs" href="/service">Service</a>
      <a className="topnakvs" href="/aboutus">About Us</a>
      <a className="topnakvs" href="/login">Login</a>
    </nav>
  </header>
);

export default Header;
