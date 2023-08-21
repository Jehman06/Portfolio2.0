import './Navbar.css';
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Default to 'home'

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects'];

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

    return (
        <div className={`navbar ${navbarFixed ? 'fixed' : ''}`}>
            <button
                className={`nav-item ${activeSection === 'home' ? 'active-nav-item' : ''}`}
                onClick={() => scrollToSection("home")}
            >
                HOME
            </button>

            <button
                className={`nav-item ${activeSection === 'about' ? 'active-nav-item' : ''}`}
                onClick={() => scrollToSection("about")}
            >
                ABOUT
            </button>

            <button
                className={`nav-item ${activeSection === 'projects' ? 'active-nav-item' : ''}`}
                onClick={() => scrollToSection("projects")}
            >
                PORTFOLIO
            </button>

        </div>
    );
}