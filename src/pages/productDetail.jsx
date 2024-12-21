import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Row, Col, Button, Container, Tab, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const productDetail = () => {
    const { productId } = useParams(); 
    const [selectedImage, setSelectedImage] = useState(0); 
    const [product, setProduct] = useState(null); 
    const [showAlert, setShowAlert] = useState(false); 

    useEffect(() => {
        getProduct();
    }, [productId]);

    const getProduct = async () => {
        try {
            const response = await fetch(`https://openshop-api.onrender.com/api/products/${productId}`);
            const data = await response.json();
            setProduct(data); 
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };
    if (!product) {
        return <div>Loading...</div>;
    }

    const descriptionList = product.description.split(',').map((item, index) => (
        <li key={index}>{item.trim()}</li>
    ));

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            imageSrc: product.image_src,
            quantity: 1, 
        };

        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(newProduct);
        }
        localStorage.setItem('cart', JSON.stringify(cart));

        setShowAlert(true);

        
        setTimeout(() => {
            setShowAlert(false);
        }, 7500); 
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
                                                        src={`https://openshop-api.onrender.com${imageSrc}`} 
                                                        alt={`Related Product ${index + 1}`}
                                                        style={{
                                                            width: '100%', 
                                                            padding: '5px',
                                                        }}
                                                        onClick={() => setSelectedImage(index)} 
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
                                            src={`https://openshop-api.onrender.com${[product.image_src, product.image_src1, product.image_src2, product.image_src3][selectedImage]}`} 
                                            alt={`Selected Product`}
                                            style={{
                                                width: '100%',  
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

export default productDetail;
