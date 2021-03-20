import logo from '../assets/images/logo-white.png';
import '../assets/css/style.css';
import '../assets/css/Header.css';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <p class="long-line">
        سلام به کوک وایز خوش اومدین. با سایت ما خوشمزه ترین و سالم ترین غذاهای
        ایران رو پیدا کن. گروه ما برای سلامتی شما به شهر های مختلف ایران سفر
        کرده و بهترین کافه ها یا رستوران ها یا کافه رستوران ها رو پیدا کرده و
        قصد معرفی اونها رو به شما داریم. شعار ما عقل سالم در بدن سالم هست.
      </p>
      <header className="js--Header" style={{ textAlign: 'center' }}>
        <nav>
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <a class="mobile-nav-icon js--nav-icon">
                <span class="burger-icon"></span>
              </a>
              <ul class="main-nav js--main-nav">
                <li>
                  <a class="js--scroll-to-features">ارسال غذا</a>
                </li>
                <li>
                  <a class="js--scroll-to-works">معرفی</a>
                </li>
                <li>
                  <a class="js--scroll-to-cities">شهرها</a>
                </li>
                <li>
                  <a class="js--scroll-to-plans">ورود</a>
                </li>
              </ul>
            </Col>
            <Col>
              <img
                src={logo}
                alt="cookwise logo "
                class="logo js--scroll-to-head"
              ></img>
            </Col>
          </Row>
        </nav>
        <Row
          style={{ textAlign: 'right', marginRight: '25%', paddingTop: '10%' }}
        >
          <h1>
            خدانگهدار غذای بیخود.
            <br /> سلام به وعده های سالم!!
          </h1>
        </Row>
        <Row
          style={{ textAlign: 'right', marginRight: '25%', paddingTop: '30px' }}
        >
          <a class="btn btn-full js--scroll-to-plans" href="#">
            شروع <br />
          </a>
          <a class="btn btn-ghost js--scroll-to-start" href="#">
            اطلاعات بیشتر
          </a>
        </Row>
      </header>
    </div>
  );
}

export default Header;
