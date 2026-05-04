import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Framer Motion']
        },
        {
            title: 'Backend Development',
            skills: ['Spring Boot', 'Java', 'RESTful APIs', 'JWT Authentication']
        },
        {
            title: 'Database',
            skills: ['MySQL', 'Database Design', 'CRUD Operations']
        },
        {
            title: 'Tools & Platforms',
            skills: ['Git & GitHub', 'MySQL Workbench', 'Postman', 'VS Code']
        },
        {
            title: 'Enterprise & SAP',
            skills: ['SAP Joule (Finance & Enterprise AI)', 'SAP Basics (ERP fundamentals)', 'Business Process Optimization']
        },
        {
            title: 'Core Concepts',
            skills: ['Data Structures', 'Object-Oriented Programming (OOP)', 'DBMS']
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Engineering <span className="highlight">Capabilities</span>
                </motion.h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, sIndex) => (
                                    <span key={sIndex} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
