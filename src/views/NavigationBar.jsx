import {Navbar, NavDropdown} from 'react-bootstrap';
import db from '../assets/db/ProductDB.json';

const NavigationBar = () => {
    return (
        <Navbar className="justify-content-center">
            <div className="d-flex align-items-center">
                {db.categories.map((category) => (
                    <NavDropdown key={"category-" + category.id} title={category.name} id="nav-dropdown-example" className="mx-3">
                        {db.manufacturers.map((manufacturer) => {
                            if (manufacturer.category_id === category.id) {
                                return (
                                    <NavDropdown.Item className="nav-item-margin" key={'manufacturer-' + category.id + "-" + manufacturer.id} href={"/productcategory/" + category.id + "/" + manufacturer.id}>
                                        {manufacturer.name}
                                    </NavDropdown.Item>
                                );} 
                            else {return null;}
                        })}
                    </NavDropdown>
                ))}
            </div>
        </Navbar>

      );
}

export default NavigationBar;