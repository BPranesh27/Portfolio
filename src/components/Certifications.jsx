import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Code, Database, ExternalLink } from 'lucide-react';

// Import certification assets
import certSAP from '../assets/SAP Joule in Finance certificate.pdf';
import certAnthropic from '../assets/Anthropic Claude 101.pdf';
import certJS from '../assets/Namaste JavaScript.webp';
import certExcel from '../assets/PRANESH Coursera MS Excel.pdf';

const Certifications = () => {
    const certs = [
        { 
            title: 'Demonstrating SAP Joule in Finance', 
            issuer: 'SAP', 
            icon: <Award size={28} />,
            desc: 'Leveraging AI-driven insights for financial operations.',
            link: certSAP
        },
        { 
            title: 'Anthropic AI Certification', 
            issuer: 'Anthropic', 
            icon: <Shield size={28} />,
            desc: 'Advanced prompt engineering and AI integration strategies.',
            link: certAnthropic
        },
        { 
            title: 'JavaScript — NamasteDev', 
            issuer: 'NamasteDev', 
            icon: <Code size={28} />,
            desc: 'In-depth mastery of core JavaScript and modern ES6+ concepts.',
            link: certJS
        },
        { 
            title: 'Microsoft Excel — Coursera', 
            issuer: 'Coursera', 
            icon: <Database size={28} />,
            desc: 'Data analysis, visualization, and advanced spreadsheet modeling.',
            link: certExcel
        },
    ];

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Industry <span className="highlight">Certifications</span>
                </motion.h2>

                <div className="skills-grid">
                    {certs.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="skill-card certification-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block', position: 'relative' }}
                        >
                            <div className="highlight" style={{ marginBottom: '16px' }}>{cert.icon}</div>
                            <span className="highlight" style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{cert.issuer}</span>
                            <h3 style={{ margin: '8px 0', fontSize: '1.25rem' }}>{cert.title}</h3>
                            <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>{cert.desc}</p>
                            
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

export default Certifications;

