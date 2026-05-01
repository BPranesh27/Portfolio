import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layers, Layout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'BuildTrack',
            role: 'Enterprise Construction Resource Management',
            problem: 'Fragmented construction workflows lead to data silos and manual reconciliation errors in large-scale projects.',
            solution: 'Engineered a centralized Spring Boot & React platform to consolidate financial tracking and project resource data.',
            impact: 'Reduced month-end reporting time by streamlining data accessibility for project stakeholders.',
            tech: ['Java', 'Spring Boot', 'SQL', 'React.js'],
            github: 'https://github.com/BPranesh27/BuildTrack',
            color: 'color-1',
            featured: true
        },
        {
            title: 'Clientrix',
            role: 'Freelancer Project & Invoice Management System',
            problem: 'Freelancers often struggle with manual invoice tracking and fragmented client data management.',
            solution: 'Built a scalable full-stack SaaS platform with JWT authentication and a secure multi-tenant architecture.',
            impact: 'Implemented transactional invoice generation and strict data isolation, ensuring professional financial management.',
            tech: ['Spring Boot', 'MySQL', 'React (Vite)', 'Tailwind CSS', 'JWT', 'OpenPDF'],
            github: 'https://github.com/BPranesh27/Clientrix',
            color: 'color-3'
        },
        {
            title: 'VelvetMoments',
            role: 'Event Resource Optimization Platform',
            problem: 'Event management teams struggle with insecure data handling and static coordination tools that fail to scale.',
            solution: 'Developed a JWT-authenticated systems with dynamic content synchronization and automated guest management.',
            impact: 'Improved operational coordination and data integrity for high-value corporate events.',
            tech: ['React.js', 'Spring Boot', 'Spring Security', 'MySQL'],
            github: 'https://github.com/BPranesh27/VelvetMoments',
            color: 'color-2'
        },
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Strategic <span>Solutions</span>
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-info">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    {project.featured && <span className="featured-tag">Featured Case Study</span>}
                                </div>
                                <p className="project-role">{project.role}</p>
                                
                                <div className="enterprise-framework">
                                    <div className="framework-item">
                                        <strong>Problem:</strong> {project.problem}
                                    </div>
                                    <div className="framework-item">
                                        <strong>Solution:</strong> {project.solution}
                                    </div>
                                    <div className="framework-item">
                                        <strong>Impact:</strong> {project.impact}
                                    </div>
                                </div>

                                <div className="tech-stack">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                                        <Github size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Repository
                                    </a>
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
