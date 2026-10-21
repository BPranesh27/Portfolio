import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Current CGPA', value: '8.14' },
        { label: 'Featured Projects', value: '5' },
        { label: 'Certifications', value: '5' },
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
                            I am an <strong className="highlight">AI and Full-Stack Developer</strong> with hands-on experience building intelligent systems and full-stack software applications. 
                            My engineering approach combines practical AI integration—working with LLMs, RAG, and prompt engineering—with robust full-stack web architectures.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            I build with <strong className="highlight">Python, Java, React.js, FastAPI, Spring Boot, and MySQL</strong>, with a strong focus on clean code, 
                            secure REST APIs (JWT), and efficient relational database management.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            Currently pursuing a B.Tech in Artificial Intelligence and Data Science at Rathinam Technical Campus, I am passionate about engineering 
                            practical AI solutions, data-driven applications, and continuously mastering modern technologies.
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
