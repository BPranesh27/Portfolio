import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, GraduationCap } from 'lucide-react';
import profilePic from '../assets/Pranesh B Image.png';


const Hero = () => {
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
                        <h2 className="hero-role">AI & Full-Stack Developer</h2>
                        <p className="hero-desc">
                            Aspiring AI and Full-Stack Developer with hands-on experience building intelligent applications 
                            and web platforms using Python, LLMs, RAG, React.js, and Spring Boot. Focused on engineering practical 
                            AI solutions, robust REST APIs, and scalable software systems.
                        </p>
                        
                        <div className="hero-highlights">
                            <div className="highlight-item">
                                <span className="highlight-val"><GraduationCap size={20} style={{ marginRight: '8px' }} /> 8.14</span>
                                <span className="highlight-label">Current CGPA</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-val"><Award size={20} style={{ marginRight: '8px' }} /> AI & Full-Stack</span>
                                <span className="highlight-label">Core Focus</span>
                            </div>
                        </div>

                        <div className="hero-btns">
                            <a href="#projects" className="btn btn-primary">
                                Explore Projects <ArrowRight size={18} />
                            </a>
                            <a 
                                href="./PRANESH_B_AI_Resume.pdf" 
                                download="PRANESH_B_AI_Resume.pdf"
                                className="btn btn-outline" 
                                style={{ marginLeft: '16px' }}
                            >
                                Download Resume <Download size={18} />
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
