import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Current CGPA', value: '8.21' },
        { label: 'Full Stack Projects', value: '3+' },
        { label: 'Certifications', value: '5+' },
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Professional <span className="highlight">Background</span>
                </motion.h2>

                <div className="about-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1.2fr 0.8fr', 
                    gap: '48px',
                    alignItems: 'center'
                }}>
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            I am a <strong className="highlight">Software Developer</strong> with a specialized focus on building robust enterprise applications. 
                            My engineering approach is centered on creating scalable architectures that bridge the gap between intelligent data systems 
                            and high-performance software.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            I specialize in <strong className="highlight">React, Spring Boot, and MySQL</strong>, with a strong commitment to writing clean, 
                            maintainable code and implementing advanced security protocols like JWT authentication.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            Currently pursuing B.Tech in AI & Data Science, I am dedicated to continuous learning, evidenced by my certifications in 
                            SAP Joule and multiple full-stack technologies.
                        </p>
                    </motion.div>

                    <div className="about-stats" style={{ 
                        display: 'grid', 
                        gap: '24px' 
                    }}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ textAlign: 'center' }}
                            >
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{stat.value}</h3>
                                <p className="text-secondary" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
