import React, { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState(false)
    const changeNavbarColor = () => {
        if(window.scrollY >= 100) {
            setNavbarColor(true)
        }else {
            setNavbarColor(false)
        }
    }
    window.addEventListener('scroll', changeNavbarColor)
    return (
        <div className='pt-3'>
            <nav className={navbarColor ? `navbar navbar-expand-lg fixed-top navbar-light bg-light ${styles.navStyle}` : "navbar navbar-expand-lg navbar-light"}>
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">Travelerz</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({isActive}) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/'>Home</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({isActive}) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/about'>About</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({isActive}) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/tour'>Tour</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({isActive}) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/blog'>Blog</NavLink>                                   
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({isActive}) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/dashboard'>Dashboard</NavLink>                                   
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({isActive}) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                        <div>
                            <NavLink to="/signin" className={`btn ${styles.inBtn}`} >SignIn</NavLink>
                            {/* <button className={`btn ${styles.outBtn}`} >SignOut</button> */}
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Navbar;