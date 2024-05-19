import React from 'react';
import './App.css';
import Header from './components/Header';
import ServiceForm from './components/ServiceForm';
import ServiceDescription from './components/ServiceDescription';

const App = () => (
  <div className="app">
    <Header />
    <div className="main-content">
      <ServiceDescription />
      <ServiceForm />
    </div>
  </div>
);

export default App;
