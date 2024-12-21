import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from '../assets/logo.png';

const FooterComp = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <img 
              src={Logo}
              alt="Open Shop Logo" 
              height={30} 
              style={{ marginRight: '100px' }}
            />
            <div className="d-flex">
              <a href="https://t.me/" className="text-light mx-2" style={{ fontSize: '1.5rem' }}>
                <FaTelegramPlane />
              </a>
              <a href="https://www.facebook.com/" className="text-light mx-2" style={{ fontSize: '1.5rem' }}>
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/" className="text-light mx-2" style={{ fontSize: '1.5rem' }}>
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComp;
