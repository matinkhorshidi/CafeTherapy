import React from 'react';
import '../assets/css/style.css';
import i1 from '../assets/images/1.jpg';
import i2 from '../assets/images/2.jpg';
import i3 from '../assets/images/3.jpg';
import i4 from '../assets/images/4.jpg';
import i5 from '../assets/images/5.jpg';
import i6 from '../assets/images/6.jpg';
import i7 from '../assets/images/7.jpg';
import i8 from '../assets/images/8.jpg';

const ImagesGrid = (props) => {
  return (
    <div>
      <section class="section-meals clearfix">
        <ul class="meals-showcase clearfix">
          <li>
            <figure class="meal-photo">
              <img src={i1} alt="Korean bibimbap with egg and vegetables"></img>
            </figure>
          </li>
          <li>
            <figure class="meal-photo">
              <img
                src={i2}
                alt="Simple italian pizza with cherry tomatoes"
              ></img>
            </figure>
          </li>
          <li>
            <figure class="meal-photo">
              <img src={i3} alt="Chicken breast steak with vegetables"></img>
            </figure>
          </li>
          <li>
            <figure class="meal-photo">
              <img src={i4} alt="Autumn pumpkin soup"></img>
            </figure>
          </li>
        </ul>
        <ul class="meals-showcase clearfix">
          <li>
            <figure class="meal-photo">
              <img src={i5} alt="Paleo beef steak with vegetables"></img>
            </figure>
          </li>
          <li>
            <figure class="meal-photo">
              <img
                src={i6}
                alt="Healthy baguette with egg and vegetables"
              ></img>
            </figure>
          </li>
          <li>
            <figure class="meal-photo">
              <img src={i7} alt="Burger with cheddar and bacon"></img>
            </figure>
          </li>
          <li>
            <figure class="meal-photo">
              <img src={i8} alt="Granola with cherries and strawberries"></img>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ImagesGrid;
