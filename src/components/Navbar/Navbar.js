import './Navbar.css';
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [navbarFixed, setNavbarFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);


    return (
        <div className={`navbar ${navbarFixed ? 'fixed' : ''}`}>
            <NavLink
                className='nav-item'
                exact='true' to='/'
            >HOME
            </NavLink>

            <NavLink
                className='nav-item'
                to='/about'
            >
                ABOUT
            </NavLink>

            <NavLink
                className='nav-item'
                to='/portfolio'
            >PORTFOLIO
            </NavLink>

            <NavLink
                className='nav-item'
                to='/contact'
            >CONTACT
            </NavLink>
        </div>
    )
}