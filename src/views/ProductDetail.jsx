import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Row, Col, Button, Image, Container, Tab} from 'react-bootstrap';
import vr from '../assets/others/vr.svg';
import NavigationBar from './NavigationBar';
import db from '../assets/db/ProductDB.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className='ProductDetailPage'>

            <NavigationBar />

            <Container>
            {db.products
            .filter((x) => x.id === productId)
            .map((product) => (
                <Row className="mt-5">
                    <Col md={6}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                           
                                <Row key={'column-' + product.id}>
                                <Col sm={3}>
                                    <Nav className="flex-column">
                                    {product.RelatedImagesSrc.map((imagePath, index) => (
                                        <Nav.Item key={`nav-item-${index}`}>
                                        <Nav.Link>
                                            <img
                                            src={require(`../assets/${imagePath}`)}
                                            alt={`Related Product ${index + 1}`}
                                            style={{
                                                width: '115px',
                                                padding: '5px 7.5px 5px 7.5px',
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
                                        src={require(`../assets/${product.RelatedImagesSrc[selectedImage]}`)}
                                        alt={`Selected Product`}
                                        style={{
                                        width: '400px',
                                        padding: '5px 7.5px 5px 7.5px',
                                        }}
                                        className="productdetailimg"
                                    />
                                    </div>
                                </Col>
                                </Row>
                            
                        </Tab.Container>
                    </Col>

                    <Col md={6}>
                        <h1>{product.name}</h1>
                        <h2>{product.price}$</h2>
                        <h3>Product Highlights</h3>
                        <ul>
                            {product.Highlights.map((highlight, index) => (
                                <li>{highlight}</li>
                            ))}
                        </ul>
                        <div className="d-flex mt-3">
                            <Button variant="dark" size="lg" href="/cart" style={{width: "175px"}}>
                                <span>🛒 ADD CART</span>
                            </Button>
                            <Button variant="dark" size="lg" href="/cart" className="ms-3" style={{width: "175px"}}>
                            BUY NOW
                            </Button>
                        </div>
                    </Col>
                </Row>
            ))}
            </Container>

            <Container style={{margin: '100px auto auto auto'}}>
                <Row className="mt-5">
                    <Col md={6}>
                        <Image src={vr} style={{width: '1250px'}}/>
                    </Col>
                    <Col md={6}>
                        <h4 style={{ fontSize: '2.5rem', color: '#000' }}>Plastation VR</h4>
                        <p style={{ fontSize: '1rem', color: '#333',margin: "40px 0 0 75px", width: '350px' }}>Over 500 games and experiences and counting. See them all</p>
                        <Button variant='dark'   href="/cart" style={{margin: "50px 0 0 150px",width: '250px', height: "50px", textDecoration: 'none', fontSize: '1.25rem', padding: 'auto'}}>ADD TO CART</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductDetailPage;