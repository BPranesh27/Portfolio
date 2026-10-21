import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'DeedCraft AI',
            subtitle: 'Automated Legal Deed Generation',
            tech: ['Python', 'Open-Source LLMs', 'Semantic RAG', 'Knowledge Graph'],
            points: [
                'Built an AI-powered legal deed generation system to automate verification of multi-decade parent deeds and Encumbrance Certificates, reducing manual document analysis.',
                'Engineered a semantic RAG pipeline using open-source LLMs, clause-aware document chunking, and a legal knowledge graph to retrieve and map ownership history and encumbrances.',
                'Reduced deed generation time from ~8 hours to under 3 minutes, achieving 98.2% extraction accuracy across 5+ records.'
            ],
            github: 'https://github.com/BPranesh27/DeedCraft-AI'
        },
        {
            title: 'SpareHub',
            subtitle: 'Peer-to-Peer Item Rental Platform',
            tech: ['React.js', 'Spring Boot', 'Java', 'Python', 'FastAPI', 'MySQL', 'JWT', 'REST APIs'],
            points: [
                'Developed a full-stack peer-to-peer rental platform using React.js, Spring Boot, and MySQL for item listing, discovery, booking, and rental management.',
                'Implemented JWT authentication and role-based access control to secure user workflows and backend API access.',
                'Built REST APIs with Spring Boot for item CRUD operations, availability validation, booking, cancellation, and rental status tracking.',
                'Integrated a Python/FastAPI AI service with the Spring Boot backend to provide personalized item recommendations based on user preferences and rental activity.'
            ],
            github: 'https://github.com/BPranesh27/SpareHub'
        },
        {
            title: 'BuildTrack',
            subtitle: 'Construction Project Expense Management System',
            tech: ['Spring Boot', 'MySQL', 'React', 'JWT'],
            points: [
                'Developed a real-world expense tracking system for construction workflows',
                'Built dashboard and expense ledger with categorized cost tracking',
                'Implemented file/image upload for invoices and documentation'
            ],
            github: 'https://github.com/BPranesh27/BuildTrack'
        },
        {
            title: 'Clientrix',
            subtitle: 'Freelancer Project & Invoice Management System',
            tech: ['Spring Boot', 'MySQL', 'React (Vite)', 'Tailwind CSS', 'JWT'],
            points: [
                'Built a scalable SaaS platform with multi-tenant architecture',
                'Implemented secure JWT authentication and invoice generation',
                'Designed transactional system for handling invoices and time logs'
            ],
            github: 'https://github.com/BPranesh27/Clientrix'
        },
        {
            title: 'VelvetMoments',
            subtitle: 'Event Management Platform',
            tech: ['React', 'Spring Boot', 'MySQL', 'JPA', 'JWT'],
            points: [
                'Developed a secure full-stack event management platform using React and Spring Boot',
                'Designed and implemented RESTful APIs with MySQL and JPA for efficient data handling',
                'Built a responsive user interface with real-time gallery and event updates'
            ],
            github: 'https://github.com/BPranesh27/VelvetMoments'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured <span className="highlight">Projects</span>
                </motion.h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-role" style={{ marginBottom: '16px' }}>{project.subtitle}</p>
                                
                                <div className="project-tech" style={{ marginBottom: '20px' }}>
                                    {project.tech.map((t, ti) => (
                                        <span key={ti} className="tech-pill">{t}</span>
                                    ))}
                                </div>

                                <ul style={{ 
                                    paddingLeft: '18px', 
                                    color: 'var(--text-secondary)', 
                                    fontSize: '0.9rem',
                                    marginBottom: '24px',
                                    flex: '1'
                                }}>
                                    {project.points.map((point, pi) => (
                                        <li key={pi} style={{ marginBottom: '8px' }}>{point}</li>
                                    ))}
                                </ul>

                                <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                                            <Github size={16} /> Repository
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
