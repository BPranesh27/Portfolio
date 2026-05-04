import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

// Import workshop assets
import certUIUX from '../assets/PRANESH UI-UX certificates.pdf';

const Workshops = () => {
    const workshops = [
        { 
            title: 'UI/UX Design Workshop', 
            issuer: 'Industry Experts', 
            icon: <BookOpen size={28} />,
            desc: 'Comprehensive training on user-centered design, wireframing, and interactive prototyping using Figma. Mastered user flows and usability principles.',
            impact: 'Applied these concepts in a real project to improve user experience.',
            link: certUIUX
        }
    ];

    return (
        <section id="workshops" className="workshops" style={{ paddingTop: '0' }}>
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '1.75rem', textAlign: 'left', marginBottom: '32px' }}
                >
                    Workshops & <span className="highlight">Training</span>
                </motion.h2>

                <div className="skills-grid">
                    {workshops.map((workshop, index) => (
                        <motion.a
                            key={index}
                            href={workshop.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="skill-card certification-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block', position: 'relative' }}
                        >
                            <div className="highlight" style={{ marginBottom: '16px' }}>{workshop.icon}</div>
                            <span className="highlight" style={{ 
                                fontSize: '0.7rem', 
                                fontWeight: '800', 
                                textTransform: 'uppercase', 
                                letterSpacing: '1.5px',
                                background: 'rgba(201, 162, 74, 0.1)',
                                padding: '4px 8px',
                                borderRadius: '4px'
                            }}>
                                WORKSHOP
                            </span>
                            <h3 style={{ margin: '12px 0 8px 0', fontSize: '1.25rem' }}>{workshop.title}</h3>
                            <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '8px', lineHeight: '1.5' }}>{workshop.desc}</p>
                            <p className="highlight" style={{ fontSize: '0.85rem', fontWeight: '500', marginBottom: '16px', fontStyle: 'italic' }}>
                                "{workshop.impact}"
                            </p>
                            
                            <div className="cert-link-hint" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                fontSize: '0.8rem', 
                                fontWeight: '600',
                                color: 'var(--primary)'
                            }}>
                                View Certificate <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workshops;
