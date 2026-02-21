import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

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
                    Contact <span>Me</span>
                </motion.h2>
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>Let’s Build Something Exceptional</h3>
                        <p>I'm currently available for full-time opportunities and internships. If you have a project in mind or just want to say hi, feel free to reach out!</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="highlight" size={20} />
                                <span>bpranesh594@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="highlight" size={20} />
                                <span>9751838476</span>
                            </div>
                            <div className="contact-item">
                                <Linkedin className="highlight" size={20} />
                                <a href="https://www.linkedin.com/in/pranesh27/">linkedin.com/in/pranesh27</a>
                            </div>
                            <div className="contact-item">
                                <Github className="highlight" size={20} />
                                <a href="https://github.com/BPranesh27">github.com/BPranesh27</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
