import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const MyCarousel = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const ids = [3, 6, 9];
            const fetchProduct = async (id) => {
                const response = await fetch(`https://openshop-api.onrender.com/api/products/${id}/`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product with ID: ${id}`);
                }
                return await response.json();
            };

            const productData = await Promise.all(ids.map(fetchProduct));
            setProducts(productData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const styles = {
        container: {
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '1200px',
        },
        image: {
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
        text: {
            padding: '20px',
            textAlign: 'center',
        },
        description: {
            fontSize: '2rem',
            color: '#333',
            marginBottom: '20px',
            fontWeight: 'bold',
        },
        button: {
            backgroundColor: '#333',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        loading: {
            textAlign: 'center',
            padding: '50px',
            fontSize: '1.2rem',
            color: '#6c757d',
        },
    };

    return (
        <div style={styles.container}>
            <Carousel>
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <Carousel.Item key={index}>
                            <Row className="align-items-center g-4">
                                <Col md={6}>
                                    <img
                                        className="d-block w-100"
                                        style={styles.image}
                                        src={`https://openshop-api.onrender.com${product.image_src}`} 
                                        alt={product.name}
                                    />
                                </Col>
                                <Col md={6} style={styles.text}>
                                    <p style={styles.description}>
                                          Color your days with <br/>small joy
                                    </p>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        href={`/productdetail/${product.id}`}
                                        style={styles.button}
                                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                                    >
                                        Shop Now
                                    </Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))
                ) : (
                    <Carousel.Item>
                        <div style={styles.loading}>Loading products...</div>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
};

export default MyCarousel;
