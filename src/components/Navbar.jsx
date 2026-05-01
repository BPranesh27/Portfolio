import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
                <a href="https://bpranesh27.github.io/Portfolio/#" className="logo">
                    PRANESH <span>B</span>
                </a>

                <div className="nav-controls">
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
                        <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }} onClick={() => setIsOpen(false)}>
                            Let's Connect
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
