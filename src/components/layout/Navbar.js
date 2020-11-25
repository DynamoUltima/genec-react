import React from 'react';
import styled from 'styled-components';
import Logo from '../images/GENEC.jpeg'
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Styles = styled.div`
 .navbar {
     background-color:#222;
 }

 .navbar-brand, .navbar-nav, .nav-link, .nav-item {
     color:#bbb;

     &:hover {
        color:blue;
    }
 }

`;


const NavBar = () => {
    return (

        <>
            <Styles>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <img
                        alt=""
                        src={Logo}
                        width="70"
                        height="40"
                        href="#home"
                        className="d-inline-block align-top"
                    />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/contact"></Nav.Link>
                            <NavDropdown title="Contact"  id="basic-nav-dropdown">
                                <NavDropdown.Item href="/contact">Find Jobs</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        </>



    );
}

export default NavBar;