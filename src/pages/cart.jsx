import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap';
import { BsFillTrashFill, BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartItem = ({ item, updateQuantity, removeItem }) => {
    
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <Image src={`https://openshop-api.onrender.com${item.imageSrc}`} fluid rounded style={{ width: "65px" }} alt="Shopping item" />
                        <div className="ms-3">
                            <h5>{item.name}</h5>
                            <p className="small mb-0">{item.description}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                            <h5 className="fw-normal mb-0">
                                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                                    <p style={{ margin: 0, textAlign: "center" }}>{item.quantity}</p>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <BsCaretUpFill onClick={() => updateQuantity(item.id, item.quantity + 1)} />
                                        <BsCaretDownFill onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} />
                                    </div>
                                </div>
                            </h5>
                        </div>
                        <div style={{ width: "80px" }}>
                            <h5 className="mb-0">${(item.price * item.quantity).toFixed(2)}</h5>
                        </div>
                        <a href="#!" onClick={() => removeItem(item.id)} style={{ color: "#cecece" }}>
                            <BsFillTrashFill />
                        </a>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const checkLoggedInUser = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (token) {
                const response = await fetch("https://openshop-api.onrender.com/core/user/", {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setLoggedIn(true);
                } else {
                    setLoggedIn(false);
                }
            } else {
                setLoggedIn(false);
            }
        } catch (error) {
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        
        checkLoggedInUser();
    }, []);

    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <div className="EmptyCart">
                <Container className="py-5" style={{ minHeight: '100vh' }}>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8} lg={6}>
                            <Card className="mb-4" style={{ border: 'none' }}>
                                <Card.Body>
                                    <div className="cartEmpty text-center">
                                        <h4 className="py-4">Your cart is empty</h4>
                                        {isLoggedIn ? (
                                            <span></span>
                                        ) : ( 
                                            <p>Sign in to get notified for new off-sales</p>
                                        )}
                                        
                                        <div className="shop py-4">
                                        {isLoggedIn ? (
                                            <span></span>
                                        ) : ( 
                                            <Button variant="primary" href="/login" style={{ width: '180px', height: '45px', borderRadius: '25px' }}>
                                                Sign in
                                            </Button>
                                        )}
                                            
                                            <div className="pt-3">
                                                <a href="/" style={{ textDecoration: 'none' }}>
                                                    <p>Continue Shopping</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <section className="h-100">
            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                    <Col>
                        <Card>
                            <Card.Body className="p-4">
                                <Row>
                                    <Col lg="7">
                                        <h5>Your Shopping Cart</h5>
                                        <hr />
                                        {cart.map((item) => (
                                            <CartItem
                                                key={item.id}
                                                item={item}
                                                updateQuantity={updateQuantity}
                                                removeItem={removeItem}
                                            />
                                        ))}
                                    </Col>

                                    {/* Order Summary Section */}
                                    <Col lg="5" style={{ padding: '20px', borderRadius: '10px', marginTop: '25px' }}>
                                        <Card className="bg-white text-dark rounded-3">
                                            <Card.Body>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 className="mb-0">Order Summary</h5>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">${total.toFixed(2)}</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">$20.00</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Total (Incl. taxes)</p>
                                                    <p className="mb-2">${(total + 20).toFixed(2)}</p>
                                                </div>

                                                <div className="d-flex justify-content-end mt-4">
                                                    <Link to="/checkout">
                                                        <Button variant="primary" size="lg">Checkout</Button>
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            {/* Sign in prompt when cart is not empty */}
            <div className="signInPrompt text-center py-4">
                {isLoggedIn ? (
                    <span></span>
                ) : ( 
                    <div>
                        <p>Sign in to get notified for new off-sales</p>
                        <Button variant="primary" href="/login" style={{ width: '180px', height: '45px', borderRadius: '25px' }}>
                             Sign in
                        </Button>
                    </div>
                )}
            
            </div>
            
        </section>
    );
}
