import React from 'react';
import { motion } from 'framer-motion';
import { 
    Code2, 
    Bot, 
    ShieldAlert, 
    KeyRound, 
    Terminal, 
    Cpu, 
    Globe 
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages & Runtimes",
            icon: Code2,
            skills: [
                "C",
                "C++",
                "Python",
                "JavaScript (ES6+)",
                "Swift (SwiftUI)"
            ]
        },
        {
            title: "AI Systems & Automation",
            icon: Bot,
            skills: [
                "OpenAI GPT-4o APIs",
                "Conversational Voice AI",
                "OCR & Document Intelligence",
                "Prompt Engineering"
            ]
        },
        {
            title: "Cybersecurity & Pen-Testing",
            icon: ShieldAlert,
            skills: [
                "Web Vulnerability Assessment",
                "SQL Injection Testing",
                "Network Traffic Analysis",
                "Packet Exploitation (CTF)",
                "MITM Analysis"
            ]
        },
        {
            title: "Applied Cryptography",
            icon: KeyRound,
            skills: [
                "Symmetric & Asymmetric (AES / RSA)",
                "Cryptographic Hashing (SHA-256)",
                "End-to-End Encryption (E2EE)",
                "Custom Blockchain Protocols"
            ]
        },
        {
            title: "Security Toolset & OS",
            icon: Terminal,
            skills: [
                "Kali Linux",
                "Burp Suite",
                "Wireshark",
                "Nmap Scanner",
                "Metasploit Framework",
                "Hashcat"
            ]
        },
        {
            title: "Hardware & IoT Security",
            icon: Cpu,
            skills: [
                "ESP32 Microcontrollers",
                "WiFi Security Auditing",
                "Network Monitoring",
                "IoT Firmware Analysis"
            ]
        },
        {
            title: "Web & Graphics Engineering",
            icon: Globe,
            skills: [
                "React.js & Hooks",
                "Three.js & WebGL",
                "Vite & Build Tooling",
                "Tailwind CSS & Motion",
                "REST & WebSocket Architecture"
            ]
        }
    ];

    return (
        <section id="skills" className="py-32 bg-muted/30 relative scroll-mt-28">
            <div className="section-divider mb-32 opacity-10" />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2 italic">Capabilities_Map</h2>
                        <div className="h-1 w-24 bg-primary rounded-full" />
                    </div>
                    <p className="text-foreground/40 font-mono text-xs uppercase tracking-widest">
                        // 07 Technical Modules Online
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => {
                        const IconComponent = category.icon;
                        const formattedIndex = String(idx + 1).padStart(2, '0');

                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-[0_0_20px_var(--shadow-color)] group flex flex-col justify-between"
                            >
                                <div>
                                    {/* Header with Icon, Index & Node count */}
                                    <div className="flex items-center justify-between mb-6 border-b border-border/40 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                                                <IconComponent size={18} />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-mono text-foreground/40 tracking-widest block uppercase">
                                                    Module_{formattedIndex}
                                                </span>
                                                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                                                    {category.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-muted border border-border text-foreground/50">
                                            [{category.skills.length}]
                                        </span>
                                    </div>

                                    {/* Skill Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-muted/60 border border-border/80 text-foreground/75 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default flex items-center gap-1.5"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-primary/60" />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;

