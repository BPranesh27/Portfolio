import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Academic CGPA', value: '8.21' },
        { label: 'Enterprise Projects', value: '3+' },
        { label: 'Technical Proficiency', value: 'High' },
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Professional <span>Background</span>
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I am a <strong>Software Developer</strong> specializing in Artificial Intelligence and Data Science at Rathinam
                            Technical Campus. My engineering approach is centered on bridging the gap between intelligent data systems and 
                            robust enterprise software architectures.
                        </p>
                        <p>
                            I focus on building <strong>scalable, high-performance applications</strong> that prioritize data integrity and 
                            user efficiency. With a strong foundation in Java, SQL, and full-stack development, I aim to deliver solutions 
                            that solve tangible business challenges.
                        </p>
                        <p>
                            <strong>Professional Goal:</strong> To contribute to an innovative engineering team, specifically within the 
                            <strong>SAP/ERP</strong> ecosystem, where I can leverage my problem-solving skills to drive organizational impact.
                        </p>
                    </motion.div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
