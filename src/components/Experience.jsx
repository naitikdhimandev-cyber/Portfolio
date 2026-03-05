import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Award, MapPin } from 'lucide-react';
import experienceData from '../data/experience.json';

const Experience = () => {
    const navigate = useNavigate();
    const experiences = experienceData.filter(i => i.type === 'internship');
    const certs = experienceData.filter(i => i.type === 'certification');

    return (
        <section id="experience" className="py-32 bg-background">
            <div className="section-divider mb-32 opacity-20" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Experience Column */}
                    <div className="w-full lg:w-3/5">
                        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-16 italic underline decoration-primary/20 underline-offset-8">Engagement_History_</h2>
                        <div className="space-y-12">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-10 border-l border-border hover:border-primary transition-colors pb-4 group cursor-pointer"
                                    onClick={() => navigate(`/details/experience/${exp.id}`)}
                                >
                                    <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-all duration-500" />
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <h3 className="text-2xl font-black tracking-tight">{exp.role}</h3>
                                        <span className="px-3 py-1 rounded-full bg-muted text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/10">{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-foreground/40 mb-6">
                                        <span className="flex items-center gap-1.5 font-bold"><Briefcase size={14} className="text-primary" /> {exp.company}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                    <p className="text-foreground/60 text-lg leading-relaxed font-medium line-clamp-2">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="w-full lg:w-2/5">
                        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-16 italic">Validation_Logs_</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {certs.map((cert, idx) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-3xl bg-muted border border-border flex items-start gap-6 hover:border-primary/30 transition-all group cursor-pointer"
                                    onClick={() => navigate(`/details/experience/${cert.id}`)}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                                        <Award size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">{cert.name}</h4>
                                        <p className="text-[10px] text-foreground/40 uppercase font-black tracking-[0.2em] flex items-center gap-2">
                                            {cert.issuer} <span className="opacity-20">|</span> {cert.date}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
