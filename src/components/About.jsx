import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Trophy, Cpu, Award } from 'lucide-react';
import projectsData from '../data/projects.json';
import eventsData from '../data/events.json';

const About = () => {
    const highlights = [
        {
            icon: Trophy,
            title: "2nd Position - ENCODE 2025",
            subtitle: "IIT Guwahati National Hackathon",
            tag: "HACKATHON"
        },
        {
            icon: Shield,
            title: "Global Rank 238",
            subtitle: "ICP World Computer Hacker League",
            tag: "GLOBAL RANK"
        },
        {
            icon: Award,
            title: "3rd Place - GEHU CTF",
            subtitle: "Capture The Flag Security Competition",
            tag: "SECURITY CTF"
        },
        {
            icon: Cpu,
            title: "AI & DecSec Specialist",
            subtitle: "GPT-4o Voice AI, Biometrics & Cryptography",
            tag: "CORE FOCUS"
        }
    ];

    const totalProjects = projectsData.length;
    const researchProjects = projectsData.filter(p => p.research === true).length;
    const totalEvents = eventsData.length;

    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden scroll-mt-28">
            <div className="section-divider mb-32 opacity-20" />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="mb-12">
                        <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-widest font-bold">
                            <Terminal size={12} /> IDENTITY_DOSSIER // NODE_01
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                            Executing <span className="text-primary italic">whoami</span>_
                        </h2>
                    </div>

                    {/* Terminal Window Box */}
                    <div className="bg-muted/30 border border-border rounded-3xl overflow-hidden backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)] mb-12">
                        {/* Terminal Header Bar */}
                        <div className="bg-muted/70 border-b border-border/60 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-3 text-xs font-mono text-foreground/40 tracking-wider hidden sm:inline">
                                    naitikdhiman@security-node:~/profile
                                </span>
                            </div>
                            <div className="flex items-center gap-3 font-mono text-[10px] text-foreground/40 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                STATUS: ONLINE
                            </div>
                        </div>

                        {/* Terminal Content Body */}
                        <div className="p-8 md:p-12 space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed font-sans">
                            <p>
                                I am a <span className="text-foreground font-bold">Third-Year BTech Computer Science (Cybersecurity) student</span> passionate 
                                about engineering practical systems where <span className="text-primary font-semibold">offensive security</span>, 
                                <span className="text-accent font-semibold"> artificial intelligence</span>, and <span className="text-foreground font-semibold">decentralized architecture</span> intersect.
                            </p>

                            <p>
                                Rather than building purely theoretical concepts, I focus on turning complex challenges into deployed, functional products — ranging from 
                                <span className="text-foreground font-semibold"> AI voice automation tools</span> and <span className="text-foreground font-semibold">biometric blockchain voting systems</span> to 
                                <span className="text-foreground font-semibold"> 3D physics engines</span> and <span className="text-foreground font-semibold">IoT Security & Hardware Systems</span>.
                            </p>

                            <p>
                                I actively compete in national hackathons (ranking <span className="text-primary font-bold">2nd at IIT Guwahati</span>), global cyber hacker leagues 
                                (<span className="text-primary font-bold">Rank 238 worldwide</span>), and hands-on CTF competitions. My vision is simple: <span className="text-primary italic font-bold">build robust, secure, and intuitive technology that solves real-world problems</span>.
                            </p>

                            {/* Quick Telemetry Stats */}
                            <div className="pt-6 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-center">
                                <div className="p-4 rounded-2xl bg-background/60 border border-border/60 flex flex-col justify-center">
                                    <span className="text-xl md:text-2xl font-black text-primary block mb-1">3rd Year</span>
                                    <span className="text-[10px] text-foreground/40 uppercase tracking-widest block font-bold">B.Tech CS - Cybersecurity</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-background/60 border border-border/60 flex flex-col justify-center">
                                    <span className="text-xl md:text-2xl font-black text-primary block mb-1">{totalProjects} Projects</span>
                                    <span className="text-[10px] text-foreground/40 uppercase tracking-widest block font-bold">Inc. {researchProjects} Research Papers</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-background/60 border border-border/60 flex flex-col justify-center">
                                    <span className="text-xl md:text-2xl font-black text-primary block mb-1">{totalEvents}+ Events</span>
                                    <span className="text-[10px] text-foreground/40 uppercase tracking-widest block font-bold">Field Participations</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-background/60 border border-border/60 flex flex-col justify-center">
                                    <span className="text-xl md:text-2xl font-black text-primary block mb-1">iOS Scholar</span>
                                    <span className="text-[10px] text-foreground/40 uppercase tracking-widest block font-bold">iOS Dev Centre (Apple x Infosys)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Highlight Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-muted/40 border border-border hover:border-primary/40 transition-all duration-300 flex items-start gap-4 group hover:shadow-[0_0_20px_var(--shadow-color)]"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300 flex-shrink-0">
                                        <IconComponent size={22} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 mb-2 inline-block">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-foreground/50 text-xs font-mono mt-1">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;