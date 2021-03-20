import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Features from './components/Features';
import ImagesGrid from './components/ImagesGrid';
import PhoneSection from './components/PhoneSection';

import reportWebVitals from './reportWebVitals';

// import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode rtl>
    <p>
      سلام به کوک وایز خوش اومدین. با سایت ما خوشمزه ترین و سالم ترین غذاهای
      ایران رو پیدا کن. گروه ما برای سلامتی شما به شهر های مختلف ایران سفر کرده
      و بهترین کافه ها یا رستوران ها یا کافه رستوران ها رو پیدا کرده و قصد معرفی
      اونها رو به شما داریم. شعار ما عقل سالم در بدن سالم هست.
    </p>
    {/* <Header />
    <Features />
    <ImagesGrid />
    <PhoneSection /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
