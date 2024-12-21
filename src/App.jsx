import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

// page imports
import Home from './pages/home';
import ProductCategory from './pages/productCategory';
import ProductDetail from './pages/productDetail';
import Checkout from './pages/checkout';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart';
// component imports
import NavbarComp from './components/navbar';
import FooterComp from './components/footer';

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the orderConfirmed flag exists in localStorage
    const orderConfirmed = localStorage.getItem('orderConfirmed');

    if (orderConfirmed === 'true' && location.pathname === '/') {
      // Show the alert if orderConfirmed is true and we're on the home page
      setShowAlert(true);

      // After 10 seconds, hide the alert
      setTimeout(() => {
        setShowAlert(false);
        localStorage.removeItem('orderConfirmed'); 
      }, 10000); // 10 seconds
    }
  }, [location]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        {/* Show alert only on the homepage */}
        {showAlert && location.pathname === '/' && (
          <Alert variant="success" style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 9999,
          }}>
            Order confirmed successfully!
          </Alert>
        )}

        <NavbarComp />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/productcategory/:categoryName/:manufacturerId" element={<ProductCategory/>}/>
          <Route path="/productdetail/:productId" element={<ProductDetail/>}/>
        </Routes>
      </div>
      <FooterComp />
    </div>
  )
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;