import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            const sections = ['about', 'skills', 'projects', 'experience', 'certifications', 'workshops', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Workshops', href: '#workshops' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <a href="#" className="logo">
                        PRANESH <span className="highlight">B</span>
                    </a>
                    <button 
                        onClick={toggleTheme}
                        className="theme-toggle"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                            borderRadius: '50%',
                            transition: 'var(--transition)'
                        }}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <div className="nav-links-desktop">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href} 
                                    className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu glass-effect" style={{
                        position: 'fixed',
                        top: '80px',
                        left: '0',
                        width: '100%',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        zIndex: '999'
                    }}>
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href} 
                                className="nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
