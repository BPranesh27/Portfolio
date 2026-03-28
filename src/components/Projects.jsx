import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'BuildTrack',
            role: 'Construction Project Expense Management System',
            desc: 'A full-stack construction expense management system featuring a real-time dashboard for tracking project status and financial summaries. Built with React.js and Spring Boot.',
            tech: ['React.js', 'Spring Boot', 'RESTful APIs', 'MySQL'],
            github: 'https://github.com/BPranesh27/BuildTrack',
            color: 'color-1'
        },
        {
            title: 'VelvetMoments',
            role: 'Full Stack Event Management Platform',
            desc: 'A secure full-stack event management application featuring JWT-based authentication and integrated dynamic content management for real-time updates.',
            tech: ['React.js', 'Spring Boot', 'Spring Security', 'MySQL'],
            github: 'https://github.com/BPranesh27/VelvetMoments',
            color: 'color-2'
        },
        {
            title: 'FashNova',
            role: 'Fashion E-Commerce Website',
            desc: 'A responsive e-commerce website featuring dynamic side navigation, smooth CSS animations, and transition effects to elevate user engagement.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
            github: 'https://github.com/BPranesh27/FashNova',
            color: 'color-3'
        }
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
                    Featured <span>Projects</span>
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-image">
                                <div className={`placeholder-img ${project.color}`}></div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p className="project-role">{project.role}</p>
                                <p className="project-desc">{project.desc}</p>
                                <div className="tech-stack">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                                <div className="project-links">
                                    {project.live && (
                                        <a href={project.live} className="btn-sm">
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                    <a href={project.github} className="btn-sm outline">
                                        <Github size={16} /> GitHub
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
