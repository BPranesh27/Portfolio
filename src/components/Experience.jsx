import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section split-section">
            <div className="container">
                <div className="split-container">

                    {/* Internship */}
                    <motion.div
                        className="split-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="col-title"><Briefcase className="highlight" /> Internship</h2>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Web Development Intern</h3>
                                <span className="timeline-date">InternBoot | Sept 2025</span>
                                <ul>
                                    <li>Developed responsive frontend UI components.</li>
                                    <li>Implemented smooth animations and interactivity using CSS & JS.</li>
                                    <li>Collaborated on version control workflows using Git.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        className="split-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="col-title"><GraduationCap className="highlight" /> Education</h2>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>B.Tech - AI & Data Science</h3>
                                <span className="timeline-date">Rathinam Technical Campus | 2023 - Present</span>
                                <p className="gpa">CGPA: <strong>8.46</strong></p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>HSC</h3>
                                <span className="timeline-date">SRI.A Ramasamy Matric Higher Secondary School | 2022 - 2023</span>
                                <p className="gpa">Percentage: <strong>84.67%</strong></p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
