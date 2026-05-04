import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Award, GraduationCap } from 'lucide-react';
import profilePic from '../assets/PRANESH B.jpeg';


const Hero = ({ theme }) => {
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=bpranesh594@gmail.com&su=Hiring%20Opportunity&body=Hi%20Pranesh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.";
    
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-grid">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">
                            PRANESH <span className="highlight">B</span>
                        </h1>
                        <h2 className="hero-role">Full Stack Developer & Software Engineer</h2>
                        <p className="hero-desc">
                            Specializing in building scalable, secure applications with React, Spring Boot, and MySQL. 
                            Focused on engineering robust systems and exploring enterprise-grade software development.
                        </p>
                        
                        <div className="hero-highlights">
                            <div className="highlight-item">
                                <span className="highlight-val"><GraduationCap size={20} style={{ marginRight: '8px' }} /> 8.21</span>
                                <span className="highlight-label">Current CGPA</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-val"><Award size={20} style={{ marginRight: '8px' }} /> Java & React</span>
                                <span className="highlight-label">Core Tech Stack</span>
                            </div>
                        </div>

                        <div className="hero-btns">
                            <a href="#projects" className="btn btn-primary">
                                Explore Projects <ArrowRight size={18} />
                            </a>
                            <a 
                                href={gmailLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-outline" 
                                style={{ marginLeft: '16px' }}
                            >
                                Let's Connect <Mail size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div className="profile-img-container">
                            <div className="profile-img-wrapper">
                                <img 
                                    src={profilePic} 
                                    alt="Pranesh B" 
                                    className="profile-img" 
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
