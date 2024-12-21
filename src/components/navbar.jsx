import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import '../App.css';

const navBarComp = () => {
    const [categories, setCategories] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchBarVisible, setSearchBarVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        getCategories();
        getManufacturers();
        getProducts();
        checkLoggedInUser();
    }, [location]);

    const getCategories = async () => {
        try {
            const response = await fetch('https://openshop-api.onrender.com/api/categories/');
            if (!response.ok) throw new Error('Failed to fetch categories');
            const data = await response.json();
            setCategories(data.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const getManufacturers = async () => {
        try {
            const response = await fetch('https://openshop-api.onrender.com/api/manufacturers/');
            if (!response.ok) throw new Error('Failed to fetch manufacturers');
            const data = await response.json();
            setManufacturers(data);
        } catch (error) {
            console.error('Error fetching manufacturers:', error);
        }
    };

    const getProducts = async () => {
        try {
            const response = await fetch('https://openshop-api.onrender.com/api/products/');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredProducts([]);
            return;
        }
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(results);
    };

    const toggleSearchBar = () => {
        setSearchBarVisible(!isSearchBarVisible);
        setSearchQuery('');
        setFilteredProducts([]);
    };

    const [username, setUsername] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);

    const checkLoggedInUser = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (token) {
                const response = await fetch("https://openshop-api.onrender.com/core/user/", {
                    method: 'GET',
                    headers: { "Authorization": `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    setLoggedIn(true);
                    setUsername(data.username);
                } else {
                    setLoggedIn(false);
                    setUsername("");
                }
            } else {
                setLoggedIn(false);
                setUsername("");
            }
        } catch (error) {
            setLoggedIn(false);
            setUsername("");
        }
    };

    const handleLogout = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const refreshToken = localStorage.getItem("refreshToken");

            if (accessToken && refreshToken) {
                const response = await fetch("https://openshop-api.onrender.com/core/logout/", {
                    method: 'POST',
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "refresh": refreshToken })
                });

                if (response.ok) {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    setLoggedIn(false);
                    setUsername("");
                }
            }
        } catch (error) {
            console.error("Failed to logout", error.message);
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        src={Logo}
                        width="auto"
                        height="auto"
                        className="d-inline-block align-top me-3 logo"
                        alt="Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {isSearchBarVisible ? (
                        <Form className="d-flex position-relative mx-auto">
                            <FormControl
                                type="search"
                                placeholder="Search products..."
                                className="me-2"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <Button variant="outline-light" style={{border: 'none'}}>
                                <FaSearch size={20} />
                            </Button>
                            {filteredProducts.length > 0 && (
    <ul
        className="dropdown-menu show search-dropdown w-100 mt-2 p-0"
        style={{ position: 'absolute', top: 'calc(100% + 10px)', zIndex: 1050 }}
    >
        {filteredProducts.map((product) => (
            <li key={product.id} className="dropdown-item">
                <Link to={`/productdetail/${product.id}`} onClick={() => setSearchBarVisible(false)}>
                    {product.name}
                </Link>
            </li>
        ))}
    </ul>
)}

                        </Form>
                    ) : (
                        <Nav className="mx-auto">
                            {categories.map((category) => (
                                <NavDropdown key={category.category} title={category.category} id={`nav-dropdown-${category.category}`} className="mx-3">
                                    {manufacturers
                                        .filter((manufacturer) => manufacturer.category === category.category)
                                        .map((manufacturer) => (
                                            <NavDropdown.Item key={manufacturer.id}>
                                                <Link to={`/productcategory/${category.category}/${manufacturer.id}/`} style={{textDecoration: 'none', color: '#333'}}>
                                                    {manufacturer.name}
                                                </Link>
                                            </NavDropdown.Item>
                                        ))}
                                </NavDropdown>
                            ))}
                        </Nav>
                    )}

                    <Nav className="d-flex align-items-center ms-auto">
                        <Nav.Link className="text-light d-flex align-items-center mx-2" onClick={toggleSearchBar}>
                            {isSearchBarVisible ? <IoIosClose size={20} /> : <FaSearch size={20} />}
                        </Nav.Link>

                        <Nav.Link href="/cart" className="text-light d-flex align-items-center mx-2">
                            <FaCartShopping className="me-1" />
                        </Nav.Link>

                        <NavDropdown title={<FaUser />} id="user-dropdown" align="end" menuVariant="dark" className="user-dropdown">
                            <NavDropdown.Item>{isLoggedIn ? `Hi, ${username}` : <Link to="/login" style={{textDecoration: 'none', color: '#fff'}}>Log in</Link>}</NavDropdown.Item>
                            <NavDropdown.Item>
                                {isLoggedIn ? <span onClick={handleLogout}>Logout</span> : <Link to="/register" style={{textDecoration: 'none', color: '#fff'}}>Register</Link>}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default navBarComp;

