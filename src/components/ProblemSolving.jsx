import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, CheckCircle } from 'lucide-react';

const ProblemSolving = () => {
    const skills = [
        {
            title: 'LeetCode Proficiency',
            icon: <Code size={24} />,
            desc: 'Actively solving problems on LeetCode using Java, maintaining a consistent daily practice as part of placement preparation.'
        },
        {
            title: 'Core Algorithms',
            icon: <Search size={24} />,
            desc: 'Focused on foundational patterns: Arrays, Prefix Sums, Sliding Window, and Recursion for efficient data processing.'
        },
        {
            title: 'Pattern Recognition',
            icon: <Lightbulb size={24} />,
            desc: 'Comfortable with identifying and implementing linear and two-pointer strategies to optimize time and space complexity.'
        },
        {
            title: 'Systematic Approach',
            icon: <CheckCircle size={24} />,
            desc: 'Breaking down complex algorithmic challenges into manageable sub-problems with a focus on edge cases and scalability.'
        }
    ];

    return (
        <section id="dsa" className="section approach" style={{ backgroundColor: 'var(--section-bg)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    DSA & <span>Problem Solving</span>
                </motion.h2>

                <div className="approach-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            className="approach-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="approach-icon">
                                {skill.icon}
                            </div>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
