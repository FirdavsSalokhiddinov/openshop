import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown, Row, Col, Button, DropdownDivider, Carousel, Image, ButtonGroup, Form} from 'react-bootstrap';
import carousel1 from '../assets/Carousel1.svg';
import carousel2 from '../assets/Carousel2.svg';
import carousel3 from '../assets/Carousel3.svg';
import xbox from '../assets/xbox.png';

import NavigationBar from './NavigationBar';

import db from '../assets/db/ProductDB.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// State
// controlled vs uncontrolled components
// Render {component} life cycle

const ProductCategoryPage = () => {

    const { categoryId, manufacturerId } = useParams();
    const [SelectedProductId, setSelectedProductId] = useState(-1);
    const [amountToBuy, setAmountToBuy] = useState(0)
    const [address, setAddress] = useState("");

    const selectProduct = (productId) => {
        console.log('Product selected: ', productId);
        setSelectedProductId(productId);
    }

    const BuyItems = () => {
        console.log('Buying items...', SelectedProductId);

    }
 
    return (
        <div className='ProductCategoryPage'>
            <div>
                <h3>{db.categories.find(x => x.id == categoryId).name}</h3>
                <p>{db.manufacturers.find(x => x.id == manufacturerId).name}</p>
            </div>
            <NavigationBar />

            <Carousel data-bs-theme="dark">
                {db.products.filter(x => x.category_id == categoryId && x.manufacturer_id == manufacturerId).map((product, index) => (
                    <Carousel.Item key={"carousel-" + product.product_id} onClick={() => selectProduct(product.id)}>
                        <img className="d-block w-20" src={require("../assets/" + product.imageSrc)} alt={product.name} />
                        <Carousel.Caption>
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            {SelectedProductId !== -1 && <div>
                <h1>{"Product Selected: " + db.products.find(x => x.id === SelectedProductId).name}</h1>
                <img src={require("../assets/" + db.products.find(x => x.id === SelectedProductId).imageSrc)} />
                <div>
                    {/* <h5>{"Product Id: " + SelectedProductId}</h5> */}
                    <h5>Description</h5>
                    <p> How many do you want to buy?</p>
                    <Form.Select value={amountToBuy} aria-label="Default select example" onChange={(e) => setAmountToBuy(e.target.value)}>
                        <option value="0">Select number of phones to buy</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select> 
                     
                    <p>Please enter Billing Address: </p>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

                    <div>{"Amount to buy: " + amountToBuy}</div>

                    <Button onClick={() => BuyItems()}>Buy</Button>
                </div>
            </div>    }

            {SelectedProductId === -1 && <div>
                <h1>Select a product to buy from the carousel above</h1>   
            </div>}

            </div>);}

export default ProductCategoryPage;
