import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Cards from './components/cards'
import Footer from './components/Footer'

import reportWebVitals from './reportWebVitals';
import "./components/App.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
< Navbar/>
< About/>
< Cards/>
< Footer/>

</>


);

reportWebVitals();

