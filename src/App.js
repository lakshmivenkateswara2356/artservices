import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Service from './components/Service'
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import Login from './components/Login'
import ServiceForm from './components/ServiceForm';
import ServiceDescription from './components/ServiceDescription';

const App = () => (
  <BrowserRouter>
  <div className="app">
    <Header />
    
    <Routes>
    <Route exact path="/" element={<Home/>}/>
  <Route exact path="/service" element={<Service/>}/>
  <Route exact path="/aboutus" element={<AboutUs/>}/>
  <Route exact path="/login" element={<Login/>}/>
    </Routes>

  </div>
  </BrowserRouter>
  
);

export default App;
