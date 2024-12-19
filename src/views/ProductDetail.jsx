import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Row, Col, Button, Container, Tab, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";

const ProductDetailPage = () => {
    const { productId } = useParams();  // Getting productId from URL params
    const [selectedImage, setSelectedImage] = useState(0);  // State to store selected image index
    const [product, setProduct] = useState(null);  // State to store product data
    const [showAlert, setShowAlert] = useState(false);  // State to manage alert visibility

    useEffect(() => {
        getProduct();
    }, [productId]);  // Re-run when productId changes

    const getProduct = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/products/${productId}`);
            const data = await response.json();
            setProduct(data);  // Set product data to state
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    // Check if the product is loaded
    if (!product) {
        return <div>Loading...</div>;
    }

    // Split the description into a list
    const descriptionList = product.description.split(',').map((item, index) => (
        <li key={index}>{item.trim()}</li>
    ));

    // Add to cart function using localStorage
    const addToCart = () => {
        // Get the existing cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Create the product object to add to cart
        const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            imageSrc: product.image_src,
            quantity: 1,  // Default quantity for new items
        };

        // Check if the product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex > -1) {
            // If product exists, update the quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // If product doesn't exist, add to the cart
            cart.push(newProduct);
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Trigger the alert
        setShowAlert(true);

        // Hide the alert after 10 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 7500); // 10 seconds
    };

    return (
        <div className="ProductDetailPage">
            <Container>
                <Row className="mt-5">
                    {/* Product Images Section */}
                    <Col xs={12} md={6}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav className="flex-column">
                                        {/* Render related images */}
                                        {[product.image_src, product.image_src1, product.image_src2, product.image_src3].map((imageSrc, index) => (
                                            <Nav.Item key={`nav-item-${index}`}>
                                                <Nav.Link>
                                                    <img
                                                        src={imageSrc}  // Use the image URL from the backend
                                                        alt={`Related Product ${index + 1}`}
                                                        style={{
                                                            width: '100%',  // Adjust image width for responsiveness
                                                            padding: '5px',
                                                        }}
                                                        onClick={() => setSelectedImage(index)}  // Set selected image index
                                                        className="productdetailimg"
                                                    />
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>

                                <Col sm={9}>
                                    <div>
                                        <img
                                            src={[product.image_src, product.image_src1, product.image_src2, product.image_src3][selectedImage]}  // Display the selected image based on the selected index
                                            alt={`Selected Product`}
                                            style={{
                                                width: '100%',  // Make image responsive
                                                padding: '5px',
                                            }}
                                            className="productdetailimg"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>

                    {/* Product Details Section */}
                    <Col xs={12} md={6}>
                        <h1>{product.name}</h1>
                        <h2>{product.price}$</h2>
                        <h3>Highlights</h3>
                        <ul>
                            {/* Render description as a list */}
                            {descriptionList}
                        </ul>
                        <div className="d-flex mt-3">
                            <Button variant="dark" size="lg" onClick={addToCart} style={{ width: '100%' }}>
                                ADD TO CART
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Alert when item is added to the cart */}
            {showAlert && (
                <Alert variant="success" style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 9999,
                }}>
                    {product.name} added to cart!
                </Alert>
            )}
            <br />
        </div>
    );
};

export default ProductDetailPage;
