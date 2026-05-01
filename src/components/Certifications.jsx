import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Code, FileSpreadsheet, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        { 
            title: 'Demonstrating SAP Joule in Finance', 
            issuer: 'SAP', 
            icon: <Briefcase size={28} />,
            desc: 'Leveraging AI-driven insights for financial operations.'
        },
        { 
            title: 'Anthropic AI Certification', 
            issuer: 'Anthropic', 
            icon: <Cpu size={28} />,
            desc: 'Advanced prompt engineering and AI integration strategies.'
        },
        { 
            title: 'JavaScript — NamasteDev', 
            issuer: 'NamasteDev', 
            icon: <Code size={28} />,
            desc: 'In-depth mastery of core JavaScript and modern ES6+ concepts.'
        },
        { 
            title: 'Microsoft Excel — Coursera', 
            issuer: 'Coursera', 
            icon: <FileSpreadsheet size={28} />,
            desc: 'Data analysis, visualization, and advanced spreadsheet modeling.'
        },
    ];

    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Professional <span>Validation</span></h2>
                    <p className="section-subtitle">Demonstrating technical expertise through industry-recognized certifications</p>
                </motion.div>

                <div className="certs-grid-premium">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            className="cert-card-premium"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="cert-icon-wrapper">
                                {cert.icon}
                            </div>
                            <div className="cert-content">
                                <span className="cert-issuer">{cert.issuer}</span>
                                <h3 className="cert-name">{cert.title}</h3>
                                <p className="cert-desc">{cert.desc}</p>
                            </div>
                            <div className="cert-decoration"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
