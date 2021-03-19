import React from 'react';
import '../assets/css/style.css';

const LogoSection = (props) => {
  return (
    <div>
      <ion-icon name={props.logoName} class="icon-B"></ion-icon>
      <h3> {props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default LogoSection;
