import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                "C",
                "C++",
                "Python",
                "JavaScript"
            ]
        },
        {
            title: "AI Tools",
            skills: [
                "OpenAI GPT-4o APIs",
                "Voice AI Integration",
                "OCR-based Analysis",
                "Prompt Engineering"
            ]
        },
        {
            title: "Cybersecurity",
            skills: [
                "Web Vulnerability Testing",
                "SQL Injection Testing",
                "MITM Testing (Lab)",
                "Network Scanning",
                "CTF Challenges"
            ]
        },
        {
            title: "Cryptography",
            skills: [
                "RSA & AES",
                "MD5 & SHA-1 ",
                "Encryption Systems",
                "Secure Messaging Concepts",
                "Blockcahin Development (Custom Algorithums)"
            ]
        },
        {
            title: "Tools",
            skills: [
                "Kali Linux",
                "Burp Suite",
                "Wireshark",
                "Nmap",
                "Metasploit",
                "Hashcat"
            ]
        },
        {
            title: "IoT & Hardware",
            skills: [
                "ESP32 Projects",
                "WiFi Auditing",
                "Network Monitoring",
                "IoT Security Testing",
            ]
        },
        {
            title: "Web Development",
            skills: [
                "React Basics",
                "Vite",
                "Tailwind CSS",
                "Static Websites"
            ]
        }
        ];

    return (
        <section id="skills" className="py-32 bg-muted/30 relative">
            <div className="section-divider mb-32 opacity-10" />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2 italic">Capabilities_Map</h2>
                    <div className="h-1 w-24 bg-primary rounded-full transition-all duration-1000 group-hover:w-40" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.05)]"
                        >
                            <h3 className="text-sm font-bold mb-6 text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                                <span className="opacity-30 text-[10px]">0{idx + 1}</span>
                                {category.title}
                            </h3>

                            <div className="flex flex-col gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="text-sm font-medium text-foreground/60 flex items-center gap-2"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
