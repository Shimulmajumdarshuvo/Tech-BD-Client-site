import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar className='navbar-part ' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={45} width={100} src="https://www.startech.com.bd/image/catalog/logo.png" alt="" />

                    </Navbar.Brand>
                    <h2 className='title'>Tech BD</h2>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav text-white">
                        <Nav className="me-auto">
                        </Nav>

                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>


                        <Nav.Link to='allinventory'>Manage Inventory</Nav.Link>
                        <Nav>
                            <NavDropdown title="Features" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Laptop</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Desktop</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Monitor</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Usp</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Lablet</NavDropdown.Item>
                            </NavDropdown>


                            <Nav.Link href="home#services">Services</Nav.Link>

                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>

                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;