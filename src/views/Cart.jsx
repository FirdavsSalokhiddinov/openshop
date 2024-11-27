import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      name: 'Iphone 12 pro',
      price: 1300,
      quantity: 1,
    },
    {
      name: 'Iphone 13',
      price: 1300,
      quantity: 1,
    },
    {
      name: 'Iphone 14pro',
      price: 1450,
      quantity: 1,
    },
  ]);

  const [cardDetails, setCardDetails] = useState({
    cardType: '',
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <Row className="mb-4">
        <Col md={8}>
          {cartItems.map((item, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  7 days delivery{' '}
                  <span className="float-right">
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleQuantityChange(index, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </Button>{' '}
                    {item.quantity}{' '}
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleQuantityChange(index, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </span>
                </Card.Text>
                <Card.Text>
                  Price: ${item.price}{' '}
                  <span className="float-right">
                    Total: ${item.price * item.quantity}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <Card.Text>
                Subtotal: ${calculateTotal()}
              </Card.Text>
              <Card.Text>
                Tax (8%): ${calculateTotal() * 0.08}
              </Card.Text>
              <Card.Text>
                Total: ${calculateTotal() + calculateTotal() * 0.08}
              </Card.Text>
              <Form>
                <Form.Group controlId="cardType">
                  <Form.Label>Card Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="cardType"
                    value={cardDetails.cardType}
                    onChange={handleCardInputChange}
                  >
                    <option value="">Select Card Type</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Amex">Amex</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="cardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="cardHolderName">
                  <Form.Label>Card Holder Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardHolderName"
                    value={cardDetails.cardHolderName}
                    onChange={handleCardInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="expiryDate">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="cvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Pay Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;