import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'FashNova',
            role: 'Fashion E-Commerce Website',
            desc: 'A responsive e-commerce UI featuring dynamic side navigation, smooth CSS animations, and an interactive product display system.',
            tech: ['HTML', 'CSS', 'JS', 'Responsive UI'],
            live: 'https://github.com/BPranesh27/FashNova',
            github: 'https://github.com/BPranesh27/FashNova',
            color: 'color-1'
        },
        {
            title: 'Booksky',
            role: 'Frontend Web Application',
            desc: 'A responsive book showcase platform utilizing advanced DOM manipulation for dynamic content and interactive blog card popups.',
            tech: ['JavaScript', 'DOM', 'Clean UI/UX'],
            live: 'https://github.com/BPranesh27/BookSky-Web-Application',
            github: 'https://github.com/BPranesh27/BookSky-Web-Application',
            color: 'color-2'
        },
        {
            title: 'Quiz Game',
            role: 'Java Console Application',
            desc: 'A gamified console application featuring multiple quiz modules, strict input validation, and robust logic building.',
            tech: ['Java', 'OOP', 'Logic Building'],
            github: 'https://github.com/BPranesh27/Quiz-Game',
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
