import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Code, Database, ExternalLink, Sparkles, Layers } from 'lucide-react';

// Import certification assets
import certML from '../assets/Machine Learning Using Python.pdf';
import certAnthropic from '../assets/Anthropic Claude 101.pdf';
import certJS from '../assets/Namaste JavaScript.webp';
import certSQL from '../assets/SQL Certificate.pdf';
import certJava from '../assets/FullStack Java Simplilearn.pdf';

const Certifications = () => {
    const aiCerts = [
        { 
            title: 'Machine Learning using Python', 
            issuer: 'Simplilearn SkillUp', 
            icon: <Award size={28} />,
            desc: 'Machine learning fundamentals, predictive algorithms, model training, and evaluation with Python.',
            link: certML
        },
        { 
            title: 'Anthropic AI Fundamentals', 
            issuer: 'Anthropic', 
            icon: <Shield size={28} />,
            desc: 'Advanced prompt engineering, Claude architecture, and LLM application integration strategies.',
            link: certAnthropic
        }
    ];

    const techCerts = [
        { 
            title: 'JavaScript — NamasteDev', 
            issuer: 'NamasteDev', 
            icon: <Code size={28} />,
            desc: 'In-depth mastery of core JavaScript execution, closures, asynchronous patterns, and modern ES6+.',
            link: certJS
        },
        { 
            title: 'MySQL', 
            issuer: 'Scaler Topics', 
            icon: <Database size={28} />,
            desc: 'Relational database schema design, complex SQL querying, indexing, and data management.',
            link: certSQL
        },
        { 
            title: 'Full Stack Java Development', 
            issuer: 'Simplilearn', 
            icon: <Layers size={28} />,
            desc: 'Enterprise architecture fundamentals, Java backend services, and full-stack software development.',
            link: certJava
        }
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
                    Professional <span className="highlight">Certifications</span>
                </motion.h2>

                {/* Group 1: AI-Related Certifications */}
                <div style={{ marginBottom: '48px' }}>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        marginBottom: '24px' 
                    }}>
                        <Sparkles className="highlight" size={22} />
                        <h3 style={{ fontSize: '1.35rem', letterSpacing: '0.5px' }}>
                            AI & Machine Learning Certifications
                        </h3>
                    </div>

                    <div className="skills-grid">
                        {aiCerts.map((cert, index) => (
                            <motion.a
                                key={`ai-${index}`}
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
                                <span className="highlight" style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {cert.issuer}
                                </span>
                                <h3 style={{ margin: '8px 0', fontSize: '1.25rem' }}>{cert.title}</h3>
                                <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '16px' }}>{cert.desc}</p>
                                
                                <div className="cert-link-hint" style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    fontSize: '0.8rem', 
                                    fontWeight: '600',
                                    color: 'var(--accent-gold)'
                                }}>
                                    View Certificate <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Group 2: Full Stack Development & Other Technical Certifications */}
                <div>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        marginBottom: '24px' 
                    }}>
                        <Layers className="highlight" size={22} />
                        <h3 style={{ fontSize: '1.35rem', letterSpacing: '0.5px' }}>
                            Full-Stack Development & Technical Certifications
                        </h3>
                    </div>

                    <div className="skills-grid">
                        {techCerts.map((cert, index) => (
                            <motion.a
                                key={`tech-${index}`}
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
                                <span className="highlight" style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {cert.issuer}
                                </span>
                                <h3 style={{ margin: '8px 0', fontSize: '1.25rem' }}>{cert.title}</h3>
                                <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '16px' }}>{cert.desc}</p>
                                
                                <div className="cert-link-hint" style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    fontSize: '0.8rem', 
                                    fontWeight: '600',
                                    color: 'var(--accent-gold)'
                                }}>
                                    View Certificate <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
