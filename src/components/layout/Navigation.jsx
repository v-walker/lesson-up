import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { FaClipboardList } from 'react-icons/fa';
import './header.css';

function Navigation() {
    return (
        <>
        
        <Navbar sticky="top" bg="light" expand="md">
            {/* <Container className="p-0"> */}
                <Navbar.Brand href="#home" className="ps-3"><FaClipboardList/>Lesson Up</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto pe-3">
                    <Link to="/" className="ps-3 ps-md-0">Home</Link>
                    <Link to="/create" className="ps-3 ">Create Plan</Link>
                    <Link to="/view_plans" className="ps-3 ">View Plans</Link>
                    <Link to="/about" className="ps-3 ">About</Link>
                    
                    </Nav>
                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
        </>
    )
}

export default Navigation;
