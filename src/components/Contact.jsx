import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=bpranesh594@gmail.com&su=Hiring%20Opportunity&body=Hi%20Pranesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.";

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let's <span className="highlight">Connect</span>
                </motion.h2>
                
                <div className="contact-container">
                    <motion.div 
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center' }}
                    >
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem' }}>
                            I'm currently looking for new opportunities in Full Stack Development and Enterprise Systems. 
                            Whether you have a question or just want to say hi, my inbox is always open!
                        </p>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <a 
                                href={gmailLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary"
                                style={{ padding: '16px 32px', fontSize: '1.1rem' }}
                            >
                                Let's Connect <Send size={20} />
                            </a>
                            <a 
                                href="mailto:bpranesh594@gmail.com" 
                                className="btn btn-outline"
                                style={{ padding: '16px 32px', fontSize: '1.1rem' }}
                            >
                                Send via App <Mail size={20} />
                            </a>
                        </div>

                        <div className="contact-socials" style={{ 
                            marginTop: '64px', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            gap: '32px' 
                        }}>
                            <a href="https://www.linkedin.com/in/pranesh27/" target="_blank" rel="noopener noreferrer" className="highlight" title="LinkedIn"><Linkedin size={28} /></a>
                            <a href="https://github.com/BPranesh27" target="_blank" rel="noopener noreferrer" className="highlight" title="GitHub"><Github size={28} /></a>
                            <a href="mailto:bpranesh594@gmail.com" className="highlight" title="Email"><Mail size={28} /></a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
