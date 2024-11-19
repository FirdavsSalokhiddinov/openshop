import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Row, Col, Button} from 'react-bootstrap';
import db from '../assets/db/ProductDB.json';

const MyCarousel = () => {
    return (
        <div className="carousel" style={{ minHeight: '65vh'}}>
            <Carousel data-bs-theme="dark">
                {db.carousel.map((carousel) => (
                    <Carousel.Item key={carousel.id}>
                        <Row className="align-items-center">
                            <Col md={6} className="image">
                                <img className="d-block w-100" src={require('../assets/' + carousel.srcImage)} alt="Colorful phone" />
                            </Col>

                            <Col md={6} className="text text-center d-flex flex-column align-items-center">
                                <p className="display-5 fw-semibold">
                                    Color your days with
                                    <br /> small joy
                                </p>
                                <Button variant="dark" size="lg" className="mt-5">
                                    Shop Now
                                </Button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
             </Carousel>
        </div>
    );
}

export default MyCarousel;