import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <p>&copy; 2026 Pranesh B. All Rights Reserved.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/pranesh27/" target="_blank" rel="noreferrer">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/BPranesh27" target="_blank" rel="noreferrer">
                        <Github size={20} />
                    </a>
                    <a href="mailto:bpranesh594@gmail.com">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
