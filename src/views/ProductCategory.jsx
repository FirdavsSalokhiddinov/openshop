import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown, Row, Col, Button, DropdownDivider, Carousel, Image, ButtonGroup, Form} from 'react-bootstrap';
import carousel1 from '../assets/Carousel1.svg';
import carousel2 from '../assets/Carousel2.svg';
import carousel3 from '../assets/Carousel3.svg';
import samsung1 from '../assets/samsung/phone1.png';
import samsung2 from '../assets/samsung/phone2.png';
import samsung3 from '../assets/samsung/phone3.png';
import samsung4 from '../assets/samsung/phone4.png';
import xiaomi1 from '../assets/xiaomi/phone1.png';
import xiaomi2 from '../assets/xiaomi/phone2.png';
import xiaomi3 from '../assets/xiaomi/phone3.png';
import xiaomi4 from '../assets/xiaomi/phone4.png';
import xbox from '../assets/xbox.png';

import NavigationBar from './NavigationBar';

import db from '../assets/db/ProductDB.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ProductCategoryPage = () => {

    const { categoryId, manufacturerId } = useParams();
    const anotherManufacturer = db.manufacturers.find(x => x.id !== manufacturerId && x.category_id == categoryId);
    const otherManufacturer = db.manufacturers.find(x => x.id !== manufacturerId && x.id !== anotherManufacturer.id && x.category_id == categoryId );
 
    return (
        <div className='ProductCategoryPage'>
            <NavigationBar />

            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                <img className="d-block w-100" src={carousel1} alt="First slide"/>
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={carousel2} alt="Second slide"/>
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={carousel3} alt="Third slide"/>
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className="goods container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                        {db.manufacturers.find(x => x.id == manufacturerId).name}
                    </h3>
                </div>
                <div className='goods_list'>
                    <Row className='justify-content-center'>
                        {db.products.filter(x => x.category_id == categoryId && x.manufacturer_id == manufacturerId).map((product, index) => (
                            <Col md={3} className='mb-4 text-center' key={'column-' + product.product_id}>
                                <article className="goods-card">
                                    <div className="goods-card__img">
                                        <img src={require("../assets/" + product.imageSrc)} alt={product.name} />
                                    </div>
                                    <div className="goods-card__content">
                                        <h4 style={{ fontSize: '1rem', color: '#555' }}>{product.name}</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#777' }}>{product.price}$</p>
                                    </div>
                                    <a className="goods-card__btn" href="productDetail.html">
                                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                                    </a>
                                </article>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            <div className="d-flex justify-content-center align-items-center" style={{ height: '30vh' }}>
                <h2 className="text-center">Featured Products</h2>
            </div>

            
            <section className="goods container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                        {otherManufacturer.name}
                    </h3>
                </div>
                <div className='goods_list'>
                    <Row className='justify-content-center'>
                        {db.products.filter(x => x.category_id == otherManufacturer.category_id && x.manufacturer_id == otherManufacturer.id).map((product, index) => (
                            <Col md={3} className='mb-4 text-center' key={'column-' + product.product_id}>
                                <article className="goods-card">
                                    <div className="goods-card__img">
                                        <img src={require("../assets/" + product.imageSrc)} alt={product.name} />
                                    </div>
                                    <div className="goods-card__content">
                                        <h4 style={{ fontSize: '1rem', color: '#555' }}>{product.name}</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#777' }}>{product.price}$</p>
                                    </div>
                                    <a className="goods-card__btn" href="productDetail.html">
                                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                                    </a>
                                </article>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            <section className="goods container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                        {anotherManufacturer.name}
                    </h3>
                </div>
                <div className='goods_list'>
                    <Row className='justify-content-center'>
                        {db.products.filter(x => x.category_id == anotherManufacturer.category_id && x.manufacturer_id == anotherManufacturer.id).map((product, index) => (
                            <Col md={3} className='mb-4 text-center' key={'column-' + product.product_id}>
                                <article className="goods-card">
                                    <div className="goods-card__img">
                                        <img src={require("../assets/" + product.imageSrc)} alt={product.name} />
                                    </div>
                                    <div className="goods-card__content">
                                        <h4 style={{ fontSize: '1rem', color: '#555' }}>{product.name}</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#777' }}>{product.price}$</p>
                                    </div>
                                    <a className="goods-card__btn" href="productDetail.html">
                                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                                    </a>
                                </article>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>


            <div className="text-center" style={{ position: "relative", display: "inline-block" }}>
                <div className="Xbox_content" style={{
                    position: "absolute",
                    top: "20%",
                    left: "250px",
                    transform: "translateY(-50%)",
                }}>
                    <h4 style={{ fontSize: '2.5rem', color: '#000' }}>Xbox Wireless Controller</h4>
                    <p style={{ fontSize: '1rem', color: '#333', width: '350px' }}>Textured triggers and bumpers I Hybrid D-pad I Button mapping I Bluetooth</p>
                </div>

                <Image src={xbox} fluid />
            
                <Button variant='dark' href='/productdetail' style={{
                    position: "absolute",
                    top: "90%",
                    left: "90px",
                    transform: "translateY(-50%)",
                    width: '150px'
                }}>ADD TO CART</Button>
            </div>

        </div>
    );
}

export default ProductCategoryPage;