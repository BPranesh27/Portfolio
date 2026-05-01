import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, CheckCircle } from 'lucide-react';

const ProblemSolving = () => {
    const steps = [
        {
            title: 'Analyze & Diagnose',
            icon: <Search size={24} />,
            desc: 'I deep-dive into business requirements to identify core pain points, edge cases, and scalability constraints before writing a single line of code.'
        },
        {
            title: 'Architect for Scalability',
            icon: <Lightbulb size={24} />,
            desc: 'I design solutions using industry-standard patterns (OOP, REST, RDBMS) ensuring the system is maintainable, secure, and ready for enterprise growth.'
        },
        {
            title: 'Iterative Development',
            icon: <Code size={24} />,
            desc: 'Implementation focus on clean code, robust data handling, and thorough unit testing to ensure high-quality, bug-resistant delivery.'
        },
        {
            title: 'Verify & Optimize',
            icon: <CheckCircle size={24} />,
            desc: 'Post-deployment analysis to verify impact, optimize performance, and ensure the solution delivers long-term business value.'
        }
    ];

    return (
        <section id="approach" className="section approach" style={{ backgroundColor: 'var(--section-bg)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Solving <span>Business Challenges</span>
                </motion.h2>

                <div className="approach-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="approach-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="approach-icon">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
