import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Code, Terminal, GitBranch, Monitor } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            items: [
                { name: 'Java', icon: <i className="devicon-java-plain colored"></i> },
                { name: 'Python', icon: <i className="devicon-python-plain colored"></i> },
                { name: 'C', icon: <i className="devicon-c-plain colored"></i> },
            ]
        },
        {
            title: 'Web Tech',
            items: [
                { name: 'HTML5', icon: <i className="devicon-html5-plain colored"></i> },
                { name: 'CSS3', icon: <i className="devicon-css3-plain colored"></i> },
                { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored"></i> },
                { name: 'React', icon: <i className="devicon-react-original colored"></i> },
            ]
        },
        {
            title: 'Databases & Tools',
            items: [
                { name: 'SQL', icon: <i className="devicon-mysql-plain colored"></i> },
                { name: 'MongoDB', icon: <i className="devicon-mongodb-plain colored"></i> },
                { name: 'Git', icon: <i className="devicon-git-plain colored"></i> },
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
                    My <span>Skills</span>
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
