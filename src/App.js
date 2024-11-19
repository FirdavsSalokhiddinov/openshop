// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav, NavDropdown, Form, Row, Col, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import logo from './assets/Logo.png';
import flogo from './assets/Logo-footer.png';
import HomePage from './views/Home';
import ProductCategoryPage from './views/ProductCategory';
import ProductDetailPage from './views/ProductDetail';
import CheckoutPage from './views/Checkout';
import OrderConfirmationPage from './views/OrderConfirmation';
import Login from './views/Login';
import Register from './views/Register';
import EmptyCart from './views/EmptyCart';
import Cart from './views/Cart';




function App() {
  return (
    <div className="MainApp ">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="ms-auto">
            <NavDropdown title="English" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Russian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Korean</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Chinese</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">
              <Icon.Telephone/> (907) 555-01-01
            </Nav.Link>
            <Nav.Link href="/login">
            <Icon.Person/> Sign-in
            </Nav.Link>
            <Nav.Link href="/cart">
              <Icon.Cart2/> Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar className="justify-content-center">
        <div className="d-flex align-items-center">
          <a href="/"><img src={logo} width="" height="" className="d-inline-block align-top me-5 logo" alt="" /></a>
          <Form inline>
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Control type="text" placeholder="What are you looking for?" className="me-0" style={{ width: '400px' }} />
              </Col>
              <Col xs="auto">
                <a href="/">
                  <Button type="submit" variant='dark' className="px-4">
                    <Icon.Search /> Search Our Store
                  </Button>
                </a>
              </Col>
            </Row>
          </Form>
        </div>
      </Navbar>
   
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/emptycart" element={<EmptyCart/>} />
            <Route path="/productcategory/:categoryId/:manufacturerId" element={<ProductCategoryPage/>} />
            <Route path="/productdetail" element={<ProductDetailPage/>} />{/* /product/:id    / /category/:id/product/:id*/}
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/orderconfirmation" element={<OrderConfirmationPage/>} />
          </Routes>
        </Router>
      </Container>

      <footer className="bg-dark text-light py-3">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <img 
                src={flogo} 
                alt="Open Shop Logo" 
                height={30} 
                style={{ marginRight: '100px' }} // Added margin here
              />
              <div className="d-flex">
                <a href="https://t.me/" className="text-light mx-2" style={{ fontSize: '1.5rem' }}>
                  <Icon.Telegram />
                </a>
                <a href="https://www.facebook.com/" className="text-light mx-2" style={{ fontSize: '1.5rem' }}>
                  <Icon.Facebook />
                </a>
                <a href="https://www.instagram.com/" className="text-light mx-2" style={{ fontSize: '1.5rem' }}>
                  <Icon.Instagram />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

    </div>
  );
}

export default App;