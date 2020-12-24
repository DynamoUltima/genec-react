import React from 'react';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import Logo from '../images/GENEC.jpeg'
import './Navbar.css'


// const Styles = styled.div`
//  .navbar {
//      background-color:#222;
//  }

//  .navbar-material .nav-wrapper .brand-logo img {
//     height: 64px;
// }

//  .navbar-brand, .navbar-nav, .nav-link, .nav-item {
//      color:#bbb;

//      &:hover {
//         color:blue;
//     }
//  }

// `;


const NavBar = () => {
    return (
        <nav className="red accent-4 naver transparent " role="navigation">
            <div className="container  ">
                <div className="nav-wrapper   ">
                    <NavLink to="/" className="brand-logo right"><img className="btn btn-floating pink lighten-1" src={Logo} alt="" /></NavLink>
                    <ul className="left hide-on-med-and-down">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact" >Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;