import React from 'react';
import '../assets/css/style.css';
import { Container, Row, Col } from 'react-bootstrap';

import adroidD from '../assets/images/download-app-android.png';
import iosD from '../assets/images/download-app.svg';
import iPhone from '../assets/images/app-iPhone.png';

const PhoneSection = (props) => {
  return (
    <Container fluid class="section-phone clearfix">
      <section class="section-phone clearfix" id="phone">
        <h2>کوکوایز همیشه همراه شماست</h2>
        <Row class=" phone-container">
          <Col>
            <div class="col span-1-of-2 phone-content js--wp-2">
              <img src={iPhone} class="phone" alt="cookwise app in phone"></img>
            </div>
          </Col>
          <Col>
            <div class="phone-content">
              <div class="step">
                <div>۱</div>
                <p>بهترین گزینه برای وعده غذایی خودتو انتخاب کن</p>
              </div>
              <div class="step">
                <div>۲</div>
                <p>
                  ثبت نام کن و سفارش بده <br />
                  &nbsp;
                </p>
              </div>
              <div class="step">
                <div>۳</div>
                <p>از غذای خود لذت ببر</p>
              </div>
              <a href="#" class="btn-app google">
                <img src={adroidD} alt="android store Logo"></img>
              </a>
              <a href="#" class="btn-app">
                <img src={iosD} alt="app store Logo"></img>
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default PhoneSection;
