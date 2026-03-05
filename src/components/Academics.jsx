import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Terminal } from 'lucide-react';

const Academics = () => {
    const steps = [
        {
            title: "BTech Computer Science (Cyber Security)",
            school: "Graphic Era Deemed to be University, Dehradun",
            period: "2024 - 2028",
            desc: "Currently a 2nd Year undergraduate student focusing on Cybersecurity, secure systems, and practical software development. Actively building projects related to AI systems, blockchain, and security-focused applications.",
            highlights: [
                "Semester 1 CGPA: 8.63",
                "Semester 2 CGPA: 8.81",
                "Semester 3 CGPA: 8.36",
                "Bus Reservation System",
                "DataTune - Advanced Music Player",
                "SecureChain - Blockchain Secure Messaging"
            ]
        }
    ];

    return (
        <section id="academics" className="py-32 bg-muted/20 relative">
            <div className="section-divider mb-32 opacity-10" />
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2 italic">Knowledge_Acquisition</h2>
                    <div className="h-1 w-24 bg-primary rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-12 relative"
                        >
                            <div className="flex-shrink-0 w-24 text-primary font-mono text-sm pt-6 font-bold">
                                [{step.period}]
                            </div>

                            <div className="flex-grow bg-background border border-border p-10 rounded-[2.5rem] hover:border-primary/40 transition-all shadow-sm group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                                        <p className="text-sm font-bold uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                                            <BookOpen size={14} /> {step.school}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-foreground/60 text-lg leading-relaxed mb-8">{step.desc}</p>

                                {step.highlights && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {step.highlights.map(item => (
                                            <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted border border-border/50 text-xs font-bold text-foreground/40 uppercase tracking-wider">
                                                <Terminal size={12} className="text-primary" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academics;
