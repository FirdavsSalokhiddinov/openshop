import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown, Row, Col, Button, DropdownDivider, Carousel, Image, ButtonGroup} from 'react-bootstrap';
import carousel1 from '../assets/Carousel1.svg';
import carousel2 from '../assets/Carousel2.svg';
import carousel3 from '../assets/Carousel3.svg';
import phone1 from '../assets/iphone/iphone1.png';
import phone2 from '../assets/iphone/iphone2.png';
import phone3 from '../assets/iphone/iphone3.png';
import phone4 from '../assets/iphone/iphone4.png';
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

const ProductCategoryPage = () => {

    const { categoryId, manufacturerId } = useParams();
 
    return (
        <div className='ProductCategoryPage'>
            <div>
                <div>{categoryId}</div>
                <div>{manufacturerId}</div>
            </div>
            <NavigationBar />

            <Carousel data-bs-theme="dark">
                {db.products.filter(x => x.category_id == categoryId && x.manufacturer_id == manufacturerId).map((product, index) => (
                    <Carousel.Item key={"carousel-" + index}>
                        <img className="d-block w-100" src={carousel1} alt={`Slide ${index + 1}`} />{/* require(product.imageSrc).default */}
                        <Carousel.Caption>
                            <h5>{product.name || "First slide label"}</h5>
                            <p>{product.description || "Des"}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>

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
                    Apple
                </h3>
                </div>
                <div className="goods__list">
                <Row className="justify-content-center">
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={phone1} alt="IPhone 12 Pro Max 128GB (Gray)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>IPhone 12 Pro Max 128GB (Gray)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>1300$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={phone2} alt="IPhone 11 Pro 128GB (Yellow)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>IPhone 11 Pro 128GB (Yellow)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>700$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={phone3} alt="IPhone 12 Pro 256 GB (Blue)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>IPhone 12 Pro 256 GB (Blue)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>1500$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={phone4} alt="IPhone 11 Pro 256 GB (Red)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>IPhone 11 Pro 256 GB (Red)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>850$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                </Row>
                </div>
                <div className="text-center mt-4">
                <Button variant="dark" className="learn-more-btn"  href="/productcategory">Learn more</Button>
                </div>
            </section>

            <section className="goods container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                    Samsung
                </h3>
                </div>
                <div className="goods__list">
                <Row className="justify-content-center">
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={samsung1} alt="IPhone 12 Pro Max 128GB (Gray)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Samsung Galaxy A51 4/64GB (Black)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>230$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={samsung2} alt="IPhone 11 Pro 128GB (Yellow)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Samsung Galaxy A21S 3/32GB (Blue)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>250$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={samsung3} alt="IPhone 12 Pro 256 GB (Blue)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Samsung Galaxy S10Lite 6/128GB (Blue)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>535$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={samsung4} alt="IPhone 11 Pro 256 GB (Red)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Samsung Galaxy A41 4/64GB (Blue)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>237$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                </Row>
                </div>
                <div className="text-center mt-4">
                <Button variant="dark" className="learn-more-btn" href="/productcategory">Learn more</Button>
                </div>
            </section>

            <section className="goods container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                    Xiaomi
                </h3>
                </div>
                <div className="goods__list">
                <Row className="justify-content-center">
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={xiaomi1} alt="IPhone 12 Pro Max 128GB (Gray)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Mi 10t Pro 8/256GB (Black)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>730$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={xiaomi2} alt="IPhone 11 Pro 128GB (Yellow)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Xiaomi mi 10t Pro 8/256GB (Silver)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>727$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={xiaomi3} alt="IPhone 12 Pro 256 GB (Blue)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Mi 10 Lite 6/64GB (Grey)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>337$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={xiaomi4} alt="IPhone 11 Pro 256 GB (Red)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Mi 10 Lite 6/64GB (Blue)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>325$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100" href="/productdetail">Buy</Button>
                        </a>
                    </article>
                    </Col>
                </Row>
                </div>
                <div className="text-center mt-4">
                <Button variant="dark" className="learn-more-btn" href="/productcategory">Learn more</Button>
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

            <div className="d-flex justify-content-center" style={{
                position: "relative",
                display: "inline-block",
                margin: '10px 0 10px 0',
            }}>
                <ButtonGroup aria-label="Pagination">
                    <div className="Button">
                        <Button variant="light">1</Button>
                        <span> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="Button">
                        <Button variant="light">2</Button>
                        <span> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="Button">
                        <Button variant="light">3</Button>
                        <span>&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="Button">
                        <Button variant="light">Next &nbsp;&gt;&gt;</Button>
                    </div>
                </ButtonGroup>
            </div>


        </div>
    );
}

export default ProductCategoryPage;