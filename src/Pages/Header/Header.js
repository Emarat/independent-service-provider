import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ width: "50px" }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">DENTARIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="home#home">HOME</Nav.Link>
                            <Nav.Link href="home#services">SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT ME</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button onClick={handleSignOut} className="btn btn-outline-light btn-lg">LOGOUT</button>
                                    :
                                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;