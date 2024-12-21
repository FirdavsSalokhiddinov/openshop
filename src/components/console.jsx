import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const ConsoleProduct = () => {
    const [consoleProduct, setConsoleProduct] = useState(null);

    const getConsoleProduct = async () => {
        try {
            const response = await fetch(`https://openshop-api.onrender.com/api/products/9/`);
            if (!response.ok) {
                throw new Error('Failed to fetch console product');
            }
            const data = await response.json();
            setConsoleProduct(data);
        } catch (error) {
            console.error('Error fetching console product:', error);
        }
    };

    useEffect(() => {
        getConsoleProduct();
    }, []);

    const styles = {
        container: {
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '800px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        },
        image: {
            borderRadius: '8px',
            width: '100%',
            height: 'auto',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
        text: {
            padding: '20px',
            textAlign: 'center',
        },
        title: {
            fontSize: '2rem',
            color: '#333',
            fontWeight: 'bold',
        },
        description: {
            fontSize: '1.2rem',
            color: '#555',
            marginBottom: '20px',
        },
        button: {
            backgroundColor: '#333',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#fff',
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
            {consoleProduct ? (
                <Row className="align-items-center g-4">
                    <Col md={6}>
                        <img
                            style={styles.image}
                            src={`https://openshop-api.onrender.com${consoleProduct.image_src}`}
                            alt={consoleProduct.name}
                        />
                    </Col>
                    <Col md={6} style={styles.text}>
                        <h2 style={styles.title}>{consoleProduct.name}</h2>
                        <p style={styles.description}>{consoleProduct.price}$</p>
                        <Button
                            variant="primary"
                            size="lg"
                            href={`/productdetail/${consoleProduct.id}`}
                            style={styles.button}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        >
                            Buy Now
                        </Button>
                    </Col>
                </Row>
            ) : (
                <div style={styles.loading}>Loading console product...</div>
            )}
        </div>
    );
};

export default ConsoleProduct;
