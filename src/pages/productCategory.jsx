import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Carousel from '../components/carousel';

const productCategory = () => {
    const { categoryName, manufacturerId } = useParams();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [manufacturerName, setManufacturerName] = useState('');

    useEffect(() => {
        getProducts();
        getManufacturerName();
    }, [manufacturerId]);

    const getProducts = async () => {
        try {
            const response = await fetch('https://openshop-api.onrender.com/api/products/');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();

            const filteredProducts = data.filter(
                product => product.manufacturer === parseInt(manufacturerId, 10)
            );

            const otherProducts = data.filter(
                product => product.manufacturer !== parseInt(manufacturerId, 10)
            );

            const shuffledOtherProducts = otherProducts.sort(() => 0.5 - Math.random());
            const selectedFeaturedProducts = shuffledOtherProducts.slice(0, 4);

            setProducts(filteredProducts);
            setFeaturedProducts(selectedFeaturedProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getManufacturerName = async () => {
        try {
            const response = await fetch(`https://openshop-api.onrender.com/api/manufacturers/${manufacturerId}/`);
            if (!response.ok) {
                throw new Error('Failed to fetch manufacturer name');
            }
            const data = await response.json();
            setManufacturerName(data.name);
        } catch (error) {
            console.error('Error fetching manufacturer name:', error);
        }
    };

    return (
        <div className="ProductCategoryPage">
            <Carousel />

            {/* Products Section */}

            <section className="goods container my-4 contentmy">
    <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
            Products for {manufacturerName || 'Manufacturer'}
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
                                    maxWidth: "225px",
                                    minHeight: "200px",
                                    maxHeight: "200px"
                                }}
                            />
                        </div>
                        <div className="goods-card__content">
                            <h4 style={{ fontSize: '1rem', color: '#555' }}>{product.name}</h4>
                            <p style={{ fontSize: '0.9rem', color: '#777' }}>{product.price}$</p>
                        </div>
                        <a className="goods-card__btn" href={`/productdetail/${product.id}`}>
                            <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                </Col>
            ))
        ) : (
            <p>No products available.</p>
        )}
    </Row>
</section>


            {/* Featured Products Section */}
<section className="goods container my-4">
    <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
            Featured Products
        </h3>
    </div>
    <Row className="goods_list d-flex justify-content-center">
        {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4 text-center" key={product.id}>
                    <article className="goods-card">
                        <div className="goods-card__img">
                            <img
                                src={`https://openshop-api.onrender.com${product.image_src}`}
                                alt={product.name}
                                className="img-fluid"
                                style={{
                                    maxWidth: "225px",
                                    minHeight: "200px",
                                    maxHeight: "200px"
                                }}
                            />
                        </div>
                        <div className="goods-card__content">
                            <h4 style={{ fontSize: '1rem', color: '#555' }}>{product.name}</h4>
                            <p style={{ fontSize: '0.9rem', color: '#777' }}>{product.price}$</p>
                        </div>
                        <a className="goods-card__btn" href={`/productdetail/${product.id}`}>
                            <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                </Col>
            ))
        ) : (
            <p>No featured products available.</p>
        )}
    </Row>
</section>


            
        </div>
    );
};

export default productCategory;
