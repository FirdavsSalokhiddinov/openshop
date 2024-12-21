import React, { useState, useEffect } from 'react';
import Carousel from '../components/carousel';
import { Row, Col, Button } from 'react-bootstrap';
import Console from '../components/console';

const Home = () => {
    const [mobileProducts, setMobileProducts] = useState([]);
    const [laptopProducts, setLaptopProducts] = useState([]);
    const [consoleProducts, setConsoleProducts] = useState([]);

    const fetchProductsByManufacturer = async (manufacturerId, setProducts) => {
        try {
            const response = await fetch('https://openshop-api.onrender.com/api/products/');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            const filteredProducts = data.filter(
                (product) => product.manufacturer === manufacturerId
            );
            setProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        // Replace IDs with actual manufacturer IDs from your backend
        fetchProductsByManufacturer(1, setMobileProducts); // Manufacturer = Mobile
        fetchProductsByManufacturer(2, setLaptopProducts); // Manufacturer = Laptop
        fetchProductsByManufacturer(3, setConsoleProducts); // Manufactu
    }, []);

    const renderProductSection = (title, products) => (
        <section className="goods container my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                    {title}
                </h3>
            </div>
            <Row className="goods_list d-flex justify-content-center">
                {products.length > 0 ? (
                    products.map((product) => (
                        <Col xs={12} sm={6} md={4} lg={3} className="mb-4 text-center" key={product.id}>
                            <article className="goods-card">
                                <div className="goods-card__img">
                                    <img
                                        src={`https://openshop-api.onrender.com${product.image_src}`}
                                        alt={product.name}
                                        className="img-fluid"
                                        style={{
                                            maxWidth: '225px',
                                            minHeight: '200px',
                                            maxHeight: '200px',
                                        }}
                                    />
                                </div>
                                <div className="goods-card__content">
                                    <h4 style={{ fontSize: '1rem', color: '#555' }}>{product.name}</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#777' }}>{product.price}$</p>
                                </div>
                                <a className="goods-card__btn" href={`/productdetail/${product.id}`}>
                                    <Button variant="dark" className="w-100">
                                        Buy
                                    </Button>
                                </a>
                            </article>
                        </Col>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </Row>
        </section>
    );

    return (
        <div>
            <Carousel />
            {renderProductSection('Mobile Products', mobileProducts)}
            {renderProductSection('Laptop Products', laptopProducts)}
            <Console/>
            {renderProductSection('Console Products', consoleProducts)}
        </div>
    );
};

export default Home;
