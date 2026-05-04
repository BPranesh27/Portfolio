import React from 'react';

const Footer = () => {
    return (
        <footer style={{ 
            padding: '48px 0', 
            borderTop: '1px solid var(--glass-border)',
            textAlign: 'center',
            background: 'var(--bg-dark)'
        }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} <span className="highlight">PRANESH B</span>. Engineered for Excellence.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '8px' }}>
                    Full Stack Developer & Enterprise Systems Engineer
                </p>
            </div>
        </footer>
    );
};

export default Footer;
