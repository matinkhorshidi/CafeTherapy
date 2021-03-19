import '../assets/css/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import LogoSection from './LogoSection';
function Features() {
  return (
    <Container fluid>
      <section
        style={{ textAlign: 'center' }}
        class="section-features js--section-features clearfix"
        id="features"
      >
        <h2>غذای خود را به ما بسپارید ، پیدا کردن غذا در ۳ سوت</h2>

        <p class="long-line">
          سلام به کوک وایز خوش اومدین. با سایت ما خوشمزه ترین و سالم ترین غذاهای
          ایران رو پیدا کن. گروه ما برای سلامتی شما به شهر های مختلف ایران سفر
          کرده و بهترین کافه ها یا رستوران ها یا کافه رستوران ها رو پیدا کرده و
          قصد معرفی اونها رو به شما داریم. شعار ما عقل سالم در بدن سالم هست.
        </p>

        <Row xs={1} md={4} sm={2}>
          <Col>
            <LogoSection
              logoName="time-outline"
              title=" ۲۴ ساعته"
              text="با تماس با تیم ما مشاوره رایگان بگیرید و حتی ۱ ثانیه هم منتظر
              نشوید تیم ما ۲۴ ساعته در خدمت شماست"
            />
          </Col>
          <Col>
            <LogoSection
              logoName="infinite-outline"
              title=" هر ۳۶۵ روز سال"
              text="امکان سفارش آنلاین در هر ۳۶۵ روز سال پرداخت در محل و بدون معطلی
              غذا سفارش دهید"
            />
          </Col>
          <Col>
            <LogoSection
              logoName="nutrition-outline"
              title="سالم تر از همیشه "
              text="با تماس با تیم ما مشاوره رایگان بگیرید و حتی ۱ ثانیه هم منتظر
              نشوید تیم ما ۲۴ ساعته در خدمت شماست"
            />
          </Col>
          <Col>
            <LogoSection
              logoName="cart-outline"
              title=" تنوع در انتخاب"
              text="چه غذاهای سنتی و چه غذا های مدرن"
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Features;
