import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const navigate = useNavigate();

    const handlePayment = (e) => {
        e.preventDefault(); 

        
        localStorage.removeItem('cart');

        
        localStorage.setItem('orderConfirmed', 'true');

        
        navigate('/');
    };

    return (
        <Container className="CheckoutPage py-4">
            <Form
                className="mx-auto p-4 shadow-sm rounded"
                style={{
                    maxWidth: '600px',
                    background: '#FCFCFC',
                }}
                onSubmit={handlePayment}
            >
                <h3 className="text-center mb-4">Payment Information</h3>

                <Form.Group className="mb-3" controlId="formGridCardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="1234 5678 9101 1121" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridExpirationDate">
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCVV">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" placeholder="123" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCardHolder">
                    <Form.Label>Cardholder Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridBillingAddress">
                    <Form.Label>Delivery Address</Form.Label>
                    <Form.Control type="text" placeholder="1234 Main St, City, State, Zip" />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" style={{ width: '150px', height: '40px' }}>
                        Pay Now
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default CheckoutPage;
