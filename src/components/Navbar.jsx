import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo from '../assets/Porfolio logo.jpg';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">PRANESH B</a>

                <div className="nav-controls">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} color="var(--accent-color)" /> : <Moon size={20} color="var(--accent-color)" />}
                    </button>

                    <div className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? <X color="var(--accent-color)" /> : <Menu color="var(--accent-color)" />}
                    </div>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-link" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="nav-link btn-cta" onClick={() => setIsOpen(false)}>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
