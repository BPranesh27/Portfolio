import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layout, Settings } from 'lucide-react';

const ValueProposition = () => {
    const values = [
        {
            icon: <Shield size={32} />,
            title: "Security Focused",
            desc: "Implementing JWT authentication and secure API design in every enterprise project."
        },
        {
            icon: <Zap size={32} />,
            title: "Performance Driven",
            desc: "Optimizing database queries and frontend rendering for high-scale applications."
        },
        {
            icon: <Layout size={32} />,
            title: "User Centric",
            desc: "Designing intuitive interfaces that simplify complex enterprise workflows."
        },
        {
            icon: <Settings size={32} />,
            title: "System Thinking",
            desc: "Designing end-to-end solutions with a deep understanding of full-stack architecture."
        }
    ];

    return (
        <section id="value-prop" className="value-prop">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Value <span className="highlight">Proposition</span>
                </motion.h2>
                <div className="value-prop-grid">
                    {values.map((val, index) => (
                        <motion.div 
                            key={index}
                            className="value-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="highlight" style={{ marginBottom: '16px' }}>{val.icon}</div>
                            <h3>{val.title}</h3>
                            <p className="text-secondary">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
