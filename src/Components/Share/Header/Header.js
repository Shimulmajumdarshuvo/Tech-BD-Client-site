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
                    <Navbar.Brand className='tech-head' as={Link} to="/">
                        <h2 className='title'><span>T</span>E<span>C</span>H </h2>
                        <img height={45} width={100} src="https://thumbs.dreamstime.com/b/bd-b-d-alphabet-letter-logo-icon-combination-creative-design-company-business-blue-pink-colours-206324936.jpg" alt="" />

                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav text-white">
                        <Nav className="me-auto">
                        </Nav>

                        <Nav.Link as={Link} className='text-white' to="home">Home</Nav.Link>
                        <Nav.Link as={Link} className='text-white' to="inventory">Inventory</Nav.Link>



                        <Nav>
                            <NavDropdown title="Features" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Laptop</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Desktop</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Monitor</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Usp</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Lablet</NavDropdown.Item>
                            </NavDropdown>




                            <Nav.Link as={Link} className='text-white' to="blog">Blog</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link className='text-white' as={Link} to="allinventory">Manage Inventory</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="addItem">Add Item</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="myItem">My Item</Nav.Link>

                                </>
                            }

                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link className='text-white' as={Link} to="login">
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