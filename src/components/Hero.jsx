import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import profilePic from '../assets/Pranesh Photo.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="greeting">Software Developer & Systems Engineer</p>
                    <h1 className="name">PRANESH B</h1>
                    <h2 className="title">
                        Engineering Solutions for <br />
                        <span className="highlight">Enterprise Efficiency</span>
                    </h2>
                    <p className="tagline">
                        B.Tech AI & Data Science student at Rathinam Technical Campus. 
                        Focused on building robust, scalable software that solves complex business problems 
                        and streamlines organizational workflows.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">
                            Explore Case Studies <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                        </a>
                        <a href="PRANESH B Resume.pdf" className="btn btn-outline" download>
                            Download Professional Profile
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="avatar-container">
                        <div className="avatar-circle">
                            <img src={profilePic} alt="Pranesh B - Software Developer" className="profile-img" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
