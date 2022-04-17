import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ width: "50px" }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home#home">HOME</Nav.Link>
                            <Nav.Link href="home#services">SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT ME</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;