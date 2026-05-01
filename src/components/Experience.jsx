import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section split-section">
            <div className="container">
                <div className="split-container">

                    {/* Professional Development */}
                    <motion.div
                        className="split-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="col-title"><Briefcase className="highlight" /> Experience</h2>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>Web Development Intern</h3>
                                <span className="timeline-date">InternBoot | Sept 2025</span>
                                <ul>
                                    <li>Architected responsive frontend modules for enterprise-grade applications.</li>
                                    <li>Implemented interactive data visualization components using CSS & JavaScript.</li>
                                    <li>Streamlined version control workflows and collaborative development practices.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Academic Foundation */}
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
                                <p className="gpa">Academic Performance: <strong>8.21 CGPA</strong></p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>HSC (Science & Mathematics)</h3>
                                <span className="timeline-date">SRI.A Ramasamy Matric Higher Secondary School | 2022 - 2023</span>
                                <p className="gpa">Academic Performance: <strong>84.67%</strong></p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
