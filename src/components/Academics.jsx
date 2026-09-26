import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, ShieldCheck, Cpu, Code2 } from 'lucide-react';

const Academics = () => {
    const academicsData = {
        degree: "BTech Computer Science (Cyber Security)",
        institution: "Graphic Era Deemed to be University, Dehradun",
        period: "2023 - 2027",
        description: "Currently a 3rd Year undergraduate student specializing in Cybersecurity, secure software engineering, and applied cryptography. Selected scholar at the campus iOS Development Centre (Apple x Infosys) and certified CEH practitioner.",
        cgpas: [
            { label: "Semester 1", value: "8.63 CGPA" },
            { label: "Semester 2", value: "8.81 CGPA" },
            { label: "Semester 3", value: "8.36 CGPA" },
        ],
        milestones: [
            { icon: ShieldCheck, title: "CEH (Certified Ethical Hacker)", tag: "CERTIFICATION" },
            { icon: Cpu, title: "iOS Development Centre Scholar", tag: "APPLE x INFOSYS" },
        ],
        pblProjects: [
            "SecureChain - Blockchain Secure Messaging",
            "DataTune - GTK C Music Player (Data Structures)",
            "Bus Reservation System (C Systems)"
        ]
    };

    return (
        <section id="academics" className="py-32 bg-muted/20 relative scroll-mt-28">
            <div className="section-divider mb-32 opacity-10" />
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2 italic">Knowledge_Acquisition</h2>
                    <div className="h-1 w-24 bg-primary rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-background border border-border p-8 md:p-12 rounded-[2.5rem] hover:border-primary/40 transition-all shadow-sm group relative"
                    >
                        {/* Period Tag */}
                        <div className="absolute top-8 right-8 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold uppercase tracking-widest">
                            [{academicsData.period}]
                        </div>

                        {/* Title Header */}
                        <div className="flex items-center gap-4 mb-6 pr-24">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors flex-shrink-0">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black tracking-tight">{academicsData.degree}</h3>
                                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/50 flex items-center gap-2 mt-1">
                                    <BookOpen size={14} className="text-primary" /> {academicsData.institution}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-10 font-medium">
                            {academicsData.description}
                        </p>

                        {/* Key Milestones (CEH & Apple x Infosys) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {academicsData.milestones.map((m, idx) => {
                                const IconComp = m.icon;
                                return (
                                    <div key={idx} className="p-4 rounded-2xl bg-muted/60 border border-border/80 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                            <IconComp size={20} />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 inline-block mb-1">
                                                {m.tag}
                                            </span>
                                            <h4 className="text-sm font-bold text-foreground">{m.title}</h4>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CGPA Grid */}
                        <div className="mb-10">
                            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-foreground/40 mb-4">
                                ACADEMIC_PERFORMANCE // TRANSCRIPT
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {academicsData.cgpas.map((cgpa, idx) => (
                                    <div key={idx} className="p-4 rounded-2xl bg-muted/40 border border-border/60 text-center font-mono">
                                        <span className="text-xl font-black text-primary block mb-1">{cgpa.value}</span>
                                        <span className="text-[10px] text-foreground/40 uppercase tracking-widest block">{cgpa.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Academic PBL Projects */}
                        <div>
                            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-foreground/40 mb-4">
                                CORE_ACADEMIC_PBL_PROJECTS
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {academicsData.pblProjects.map((pbl, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-muted/60 border border-border/70 text-xs font-mono font-medium text-foreground/80">
                                        <Code2 size={14} className="text-primary flex-shrink-0" />
                                        <span className="truncate">{pbl}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Academics;

