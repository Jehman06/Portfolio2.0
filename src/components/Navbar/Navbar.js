import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isFixed = window.scrollY >= window.innerHeight;
            if (isFixed !== navbarFixed) {
                setNavbarFixed(isFixed);
            }
        };

        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 844);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkScreenSize);

        checkScreenSize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [navbarFixed]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            if (isSmallScreen) {
                setIsMenuOpen(false); // Close the menu after clicking a link on small screens
            }
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${navbarFixed ? 'fixed' : ''}`}>
            {isSmallScreen ? (
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            ) : (
                <>
                    <div
                        className={`nav-item ${activeSection === 'home' ? 'active-nav-item' : ''}`}
                        onClick={() => scrollToSection('home')}
                    >
                        HOME
                    </div>

                    <div
                        className={`nav-item ${activeSection === 'about' ? 'active-nav-item' : ''}`}
                        onClick={() => scrollToSection('about')}
                    >
                        ABOUT
                    </div>

                    <div
                        className={`nav-item ${activeSection === 'projects' ? 'active-nav-item' : ''}`}
                        onClick={() => scrollToSection('projects')}
                    >
                        PORTFOLIO
                    </div>
                </>
            )}

            {isSmallScreen && isMenuOpen && (
                <div className="dropdown-menu">
                    <button onClick={() => scrollToSection('home')}>HOME</button>
                    <button onClick={() => scrollToSection('about')}>ABOUT</button>
                    <button onClick={() => scrollToSection('projects')}>PORTFOLIO</button>
                </div>
            )}
        </div>
    );
}
