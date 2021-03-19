import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Features from './components/Features';
import ImagesGrid from './components/ImagesGrid';
import reportWebVitals from './reportWebVitals';
import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Features />
    <ImagesGrid />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
