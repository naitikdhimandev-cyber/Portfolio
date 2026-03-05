import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const highlights = [
        "🎓 BTech Computer Science (Cybersecurity) - 2nd Year",
        "🏆 2nd Position - ENCODE Hackathon (IIT Guwahati)",
        "🌍 Global Rank 268 - ICP World Computer Hacker League",
        "🧪 Capture The Flag Competitor (3+ CTFs, 3rd Place GEHU CTF)",
        "🔐 Focus Areas: Web Security, IoT Security, Blockchain Systems",
        "🤖 AI Systems using OpenAI APIs (GPT-4o, Voice AI Automation)",
    ];

    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            <div className="section-divider mb-32 opacity-20" />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter uppercase underline decoration-primary/40 underline-offset-8">
                        Executing <span className="text-primary italic">whoami</span>...
                    </h2>

                    <div className="space-y-6 text-foreground/70 text-lg md:text-xl leading-relaxed font-medium">
                        <p>
                            I am a <span className="text-foreground">second-year BTech Computer Science student</span> specializing in 
                            <span className="text-primary italic"> Cybersecurity</span>. I focus on building real-world systems at the intersection 
                            of security engineering, artificial intelligence, and decentralized technologies.
                        </p>

                        <p>
                            I actively participate in national and international hackathons, capture-the-flag competitions, and 
                            research-driven development projects. My work includes AI-powered automation tools, secure system 
                            architectures, decentralized applications, and IoT-based security testing platforms.
                        </p>

                        <p>
                            My goal is simple: <span className="text-primary italic">build practical, secure systems that solve real problems</span>. 
                            I enjoy working on challenging engineering problems, experimenting with new technologies, and pushing 
                            ideas beyond theory into functioning products.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-all group"
                            >
                                <span className="text-foreground/80 font-mono text-sm md:text-base group-hover:text-primary transition-colors">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;