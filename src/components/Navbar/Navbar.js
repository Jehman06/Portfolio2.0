import './Navbar.css';
import React, { useState, useEffect } from "react";
import Hamburger from './Hamburger';

export default function Navbar() {
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];

            // Find the section that is currently in the viewport
            const active = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
                }
                return false;
            });

            if (active && active !== activeSection) {
                setActiveSection(active);
            }

            // Update the fixed navbar state
            const isFixed = window.scrollY >= window.innerHeight;
            if (isFixed !== navbarFixed) {
                setNavbarFixed(isFixed);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navbarFixed, activeSection]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
        console.log(!hamburgerOpen)
    };

    return (
        <div className={`navbar ${navbarFixed ? 'fixed' : ''}`}>
            <div className='hamburger' onClick={toggleHamburger}>
                <Hamburger />
            </div>

            <ul className={`nav-items ${hamburgerOpen ? 'open' : ''}`}>
                <li
                    className={`nav-item ${activeSection === 'home' ? 'active-nav-item' : ''}`}
                    onClick={() => scrollToSection("home")}
                >
                    HOME
                </li>

                <li
                    className={`nav-item ${activeSection === 'about' ? 'active-nav-item' : ''}`}
                    onClick={() => scrollToSection("about")}
                >
                    ABOUT
                </li>

                <li
                    className={`nav-item ${activeSection === 'projects' ? 'active-nav-item' : ''}`}
                    onClick={() => scrollToSection("projects")}
                >
                    PORTFOLIO
                </li>
            </ul>
        </div>
    );
}