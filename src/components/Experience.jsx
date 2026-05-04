import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react';

import certInternship from '../assets/Pranesh InternBoot internship Certificate.pdf';


const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="experience-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '48px' 
                }}>
                    
                    {/* Professional Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.75rem', marginBottom: '32px' }}>
                            <Briefcase className="highlight" style={{ marginRight: '12px' }} /> Professional Experience
                        </h2>
                        
                        <div className="skill-card" style={{ marginBottom: '24px', borderLeft: '4px solid var(--accent-gold)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Web Development Intern</h3>
                            <p className="highlight" style={{ fontSize: '0.9rem', marginBottom: '16px', fontWeight: '500' }}>InternBoot | Sept 2025</p>
                            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', marginBottom: '16px' }}>
                                <li style={{ marginBottom: '8px' }}>Built 4+ responsive UI modules for enterprise web applications using React and JavaScript.</li>
                                <li style={{ marginBottom: '8px' }}>Developed interactive data visualization components reducing manual reporting steps.</li>
                                <li>Maintained clean Git commit history, improving team collaboration and review turnaround.</li>
                            </ul>
                            <a 
                                href={certInternship} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="highlight"
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    fontSize: '0.85rem', 
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    gap: '6px'
                                }}
                            >
                                View Internship Certificate <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Academic Foundation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.75rem', marginBottom: '32px' }}>
                            <GraduationCap className="highlight" style={{ marginRight: '12px' }} /> Academic Foundation
                        </h2>
                        
                        <div className="skill-card" style={{ marginBottom: '24px', borderLeft: '4px solid var(--accent-gold)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>B.Tech - AI & Data Science</h3>
                            <p className="highlight" style={{ fontSize: '0.9rem', marginBottom: '8px', fontWeight: '500' }}>Rathinam Technical Campus | 2023 - Present</p>
                            <p className="text-primary" style={{ fontWeight: '600' }}>Academic Performance: 8.21 CGPA</p>
                        </div>

                        <div className="skill-card" style={{ borderLeft: '4px solid var(--accent-gold)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>HSC (Science & Mathematics)</h3>
                            <p className="highlight" style={{ fontSize: '0.9rem', marginBottom: '8px', fontWeight: '500' }}>SRI.A Ramasamy Matric Higher Secondary School | 2022 - 2023</p>
                            <p className="text-primary" style={{ fontWeight: '600' }}>Academic Performance: 84.67%</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
