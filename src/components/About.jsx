import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'CGPA', value: '8.46' },
        { label: 'Major Projects', value: '3+' },
        { label: 'Internship', value: 'Exp.' },
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
                    About <span>Me</span>
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
                            I am a <strong>B.Tech Artificial Intelligence & Data Science</strong> student at Rathinam
                            Technical Campus with a strong passion for software development.
                            My journey involves bridging the gap between intelligent data systems and interactive user
                            experiences.
                        </p>
                        <p>
                            I focus on building <strong>responsive, scalable, and interactive web applications</strong>.
                            With a foundation in both AI concepts and full-stack development, I aim to create solutions that
                            are not only functional but also intuitive and engaging.
                        </p>
                        <p>
                            <strong>Goal:</strong> Seeking entry-level Software / Full-Stack Developer roles where I can
                            contribute to innovative projects and continue to grow as a developer.
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
