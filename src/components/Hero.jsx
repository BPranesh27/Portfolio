import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profilePic from '../assets/Pranesh Photo.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="name">PRANESH B</h1>
                    <h2 className="title">
                        Aspiring Full Stack Developer <br />
                        <span className="highlight">AI & Data Science Student</span>
                    </h2>
                    <p className="tagline">Driven B.Tech AI & DS student building scalable, user-centric web applications.</p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="Pranesh_B_Resume.pdf" className="btn btn-outline" download>Download Resume</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="avatar-container">
                        <div className="avatar-circle">
                            <img src={profilePic} alt="Pranesh B" className="profile-img" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                className="scroll-down"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown size={32} />
            </motion.a>
        </section>
    );
};

export default Hero;
