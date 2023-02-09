import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className=' text-light'>
    <NavbarComponent />
    <App />
    <FooterComponent />
  </div>
);

