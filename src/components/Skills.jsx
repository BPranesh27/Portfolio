import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Terminal, Server, Cpu, Globe, Zap } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Core Engineering',
            items: [
                { name: 'Java (OOP)', icon: <i className="devicon-java-plain colored"></i> },
                { name: 'SQL & RDBMS', icon: <i className="devicon-mysql-plain colored"></i> },
                { name: 'C Programming', icon: <i className="devicon-c-plain colored"></i> },
                { name: 'Data Structures', icon: <Cpu size={20} className="highlight" /> },
            ]
        },
        {
            title: 'Enterprise Stack',
            items: [
                { name: 'Spring Boot', icon: <i className="devicon-spring-plain colored"></i> },
                { name: 'RESTful APIs', icon: <Server size={20} className="highlight" /> },
                { name: 'JWT Security', icon: <Zap size={20} className="highlight" /> },
                { name: 'React.js', icon: <i className="devicon-react-original colored"></i> },
            ]
        },
        {
            title: 'Analytical & Intelligence',
            items: [
                { name: 'Python', icon: <i className="devicon-python-plain colored"></i> },
            ]
        },
        {
            title: 'Professional Workflow',
            items: [
                { name: 'Git / Version Control', icon: <i className="devicon-git-plain colored"></i> },
                { name: 'Postman (API Testing)', icon: <Globe size={20} className="highlight" /> },
                { name: 'VS Code', icon: <i className="devicon-vscode-plain colored"></i> },
            ]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Engineering <span>Capabilities</span>
                </motion.h2>

                <div className="skills-grid">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{category.title}</h3>
                            <div className="skill-items">
                                {category.items.map((item) => (
                                    <div key={item.name} className="skill-item">
                                        <span className="skill-icon">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
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
