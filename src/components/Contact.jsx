import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let's <span>Connect</span>
                </motion.h2>
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>Recruitment & Partnerships</h3>
                        <p>
                            I am currently seeking opportunities to apply my engineering skills in an enterprise setting. 
                            Whether you are looking for a dedicated <strong>Software Developer</strong> or a <strong>Solution Engineer</strong> for SAP/ERP projects, 
                            I'd love to discuss how I can contribute to your team's success.
                        </p>

                        <div className="contact-links">
                            <a href="mailto:bpranesh594@gmail.com" className="contact-card-link">
                                <Mail size={24} />
                                <span>Email</span>
                            </a>
                            <a href="https://www.linkedin.com/in/pranesh27/" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                                <Linkedin size={24} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/BPranesh27" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                                <Github size={24} />
                                <span>GitHub</span>
                            </a>
                        </div>
                        
                        <div className="direct-cta">
                            <a href="mailto:bpranesh594@gmail.com" className="btn btn-primary">
                                Schedule a Technical Discussion <MessageSquare size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
