import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

// Pages
import Home from './views/Home';
import ProductCategoryPage from './views/ProductCategory';
import ProductDetailPage from './views/ProductDetail';
import CheckoutPage from './views/Checkout';
import Login from './views/Login';
import Register from './views/Register';
import Cart from './views/Cart';

// Components
import NavbarComp from './views/components/navbar';
import FooterComp from './views/components/footer';

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation(); // Track the current location (route)

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
  }, [location]); // Re-run the effect whenever the route changes
  

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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productcategory/:categoryName/:manufacturerId" element={<ProductCategoryPage />} />
          <Route path="/productdetail/:productId" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
      <FooterComp />
    </div>
  );
}


function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
