import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Table, Layout } from 'lucide-react';

const Certifications = () => {
    const certs = [
        { title: 'Innovation Through Design', issuer: 'Coursera', icon: <Layout /> },
        { title: 'Building RAG Apps', issuer: 'MongoDB', icon: <Server /> },
        { title: 'Microsoft Excel', issuer: 'Coursera', icon: <Table /> },
    ];

    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Certifications
                </motion.h2>
                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            className="cert-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="cert-icon highlight">{cert.icon}</div>
                            <h3>{cert.title}</h3>
                            <span>{cert.issuer}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
