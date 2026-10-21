import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'AI & Machine Learning',
            skills: ['LLMs', 'Prompt Engineering', 'RAG', 'LangChain', 'LangGraph']
        },
        {
            title: 'Programming Languages',
            skills: ['Python', 'Java']
        },
        {
            title: 'Frontend Development',
            skills: ['React.js', 'JavaScript', 'HTML', 'CSS']
        },
        {
            title: 'Backend Development & APIs',
            skills: ['FastAPI', 'Spring Boot', 'REST APIs', 'JWT']
        },
        {
            title: 'Databases',
            skills: ['MySQL', 'SQL']
        },
        {
            title: 'Developer Tools & Platforms',
            skills: ['Git', 'GitHub', 'Postman', 'VS Code']
        },
        {
            title: 'Automation & AI Tools',
            skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'n8n', 'Cursor']
        },
        {
            title: 'Core Concepts',
            skills: ['OOP', 'DSA', 'DBMS']
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
