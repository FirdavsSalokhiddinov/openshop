import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown, Row, Col, Button, DropdownDivider, Image, Container, Tab} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import phone1 from '../assets/single-tabs/tab1.svg';
import phone2 from '../assets/single-tabs/tab2.png';
import phone3 from '../assets/single-tabs/tab3.png';
import vr from '../assets/others/vr.svg';

const ProductDetailPage = () => {
    return (
        <div className='ProductDetailPage'>
            
            <Nav className='justify-content-center'>
                <div className='d-flex align-items-center'>
                <NavDropdown id="nav-dropdown-dark-example" title="Cell Phones & Tablets">
                    <div className="d-flex justify-content-between navdropdown" id="navdropdown" style={{ width: '100%' }}>
                    <div>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Cell Phones</NavDropdown.Item>
                        <DropdownDivider/>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Xiaomi</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Apple</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Samsung</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Huawei</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>BQ</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Nokia</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Inoi</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Vivo</NavDropdown.Item>
                    </div>
                    <div className="ms-auto"> {/* 'ms-auto' pushes this div to the right */}
                        <NavDropdown.Item href="/productcategory" style={{textDecoration:'none', color:'#333'}}>Action</NavDropdown.Item>
                        <DropdownDivider/>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Xiami</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Apple</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Samsung</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Huawei</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>BQ</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>More...</NavDropdown.Item>
                    </div>
                    </div>
                </NavDropdown>

                <NavDropdown id="nav-dropdown-dark-example" title="Computers & Laptop">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="nav-dropdown-dark-example" title="TV & Video">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="nav-dropdown-dark-example" title="Accessories">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="nav-dropdown-dark-example" title="Home Appliance">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="nav-dropdown-dark-example" title="Video Games & Consoles">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                </div>
            </Nav>

            <Container>
                <Row className="mt-5">
                    <Col md={6}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <img src={phone1} alt="" style={{ 
                                                width: '115px',
                                                padding: '5px 7.5px 5px 7.5px'
                                                    }} className="productdetailimg"/>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <img src={phone2} alt="" style={{ 
                                                width: '115px',
                                                padding: '5px 7.5px 5px 7.5px'
                                                    }} className="productdetailimg"/>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <img src={phone3} alt="" style={{ 
                                                width: '115px',
                                                padding: '5px 7.5px 5px 7.5px'
                                                    }} className="productdetailimg"/>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <img src={phone1} alt="" style={{ 
                                                width: '400px',
                                                padding: '5px 7.5px 5px 7.5px'
                                                    }}/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <img src={phone2} alt="" style={{ 
                                                width: '400px',
                                                padding: '5px 7.5px 5px 7.5px'
                                                    }}/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <img src={phone3} alt="" style={{ 
                                                width: '400px',
                                                padding: '5px 7.5px 5px 7.5px'
                                                    }}/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                    <Col md={6}>
                        <h1>Apple iPhone 12 Pro Max 128GB (Gray)</h1>
                        <h2>1300$</h2>
                        <h3>Product Highlights</h3>
                        <ul>
                            <li>128 GB ROM</li>
                            <li>13.72 cm (5.4 inch) Super Retina XDR Display</li>
                            <li>12MP + 12MP | 12MP Front Camera</li>
                            <li>A14 Bionic Chip with Next Generation Neural Engine Processor</li>
                            <li>Ceramic Shield</li>
                            <li>IP68 Water Resistance</li>
                            <li>All Screen OLED Display</li>
                            <li>The shipment for this product will begin from 14th November 2020</li>
                        </ul>
                        <div className="d-flex mt-3">
                            <Button variant="dark" size="lg" href="/cart" style={{width: "175px"}}>
                                <span>🛒 CART</span>
                            </Button>
                            <Button variant="dark" size="lg" href="/cart" className="ms-3" style={{width: "175px"}}>
                            BUY NOW
                            </Button>
                        </div>
                    </Col>
                </Row>
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