import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Award, MapPin, Share2, Check, ShieldCheck, ArrowUpRight, Calendar } from 'lucide-react';
import experienceData from '../data/experience.json';

const Experience = () => {
    const navigate = useNavigate();
    const [copiedId, setCopiedId] = useState(null);
    const experiences = experienceData.filter(i => i.type === 'internship');
    const certs = experienceData.filter(i => i.type === 'certification');

    const handleShare = async (id, e) => {
        e.stopPropagation();
        const url = `${window.location.origin}/#/details/experience/${id}`;
        try {
            await navigator.clipboard.writeText(url);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 1500);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <section id="experience" className="py-28 bg-background scroll-mt-24">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* ============================================================ */}
                {/* 1. ENGAGEMENT HISTORY (WORK EXPERIENCE & INTERNSHIPS) */}
                {/* ============================================================ */}
                <div className="mb-28">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-mono font-bold uppercase tracking-wider border border-primary/20">
                                    Work Experience
                                </span>
                                <span className="text-foreground/30 text-xs font-mono">
                                    [{experiences.length} Deployments]
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                                Engagement_History_
                            </h2>
                        </div>
                        <p className="text-foreground/50 text-sm font-mono max-w-md md:text-right">
                            Hands-on research internships, security prototyping & industry engagements.
                        </p>
                    </div>

                    {/* Work Experience Grid (2 columns on medium/large screens) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="group relative bg-muted/40 hover:bg-muted/70 border border-border hover:border-primary/40 rounded-2xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md"
                                onClick={() => navigate(`/details/experience/${exp.id}`)}
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-4 mb-5">
                                        <div className="w-13 h-13 rounded-xl bg-background border border-border group-hover:border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                                            <Briefcase size={24} />
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="px-2.5 py-1 rounded-full bg-background border border-border text-[11px] font-mono font-bold text-foreground/60 whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                            <div className="relative">
                                                <button
                                                    onClick={(e) => handleShare(exp.id, e)}
                                                    className="p-1.5 rounded-full bg-background border border-border hover:border-primary/40 text-foreground/40 hover:text-primary transition-all cursor-pointer"
                                                    title="Copy link"
                                                >
                                                    {copiedId === exp.id ? <Check size={13} className="text-primary" /> : <Share2 size={13} />}
                                                </button>
                                                {copiedId === exp.id && (
                                                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] bg-primary text-background px-2 py-0.5 rounded font-bold whitespace-nowrap shadow-lg">
                                                        Copied!
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors flex items-center gap-1.5">
                                        {exp.role}
                                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-foreground/60 mb-4">
                                        <span className="font-bold text-foreground/80">{exp.company}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1 text-foreground/50">
                                            <MapPin size={12} /> {exp.location}
                                        </span>
                                    </div>

                                    <p className="text-foreground/60 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {exp.description}
                                    </p>

                                    {exp.tags && exp.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {exp.tags.slice(0, 3).map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-md bg-background/80 border border-border text-foreground/50"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                            {exp.tags.length > 3 && (
                                                <span className="text-[10px] font-mono text-foreground/40 self-center">
                                                    +{exp.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-4 border-t border-border/50 flex items-center justify-end text-xs">
                                    <span className="text-foreground/40 font-mono group-hover:text-primary transition-colors text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                                        View Details <ArrowUpRight size={13} />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section Divider */}
                <div className="section-divider mb-28 opacity-15" />

                {/* ============================================================ */}
                {/* 2. VALIDATION LOGS (CERTIFICATIONS & CREDENTIALS) */}
                {/* ============================================================ */}
                <div id="validation-logs" className="scroll-mt-24">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-mono font-bold uppercase tracking-wider border border-primary/20">
                                    Certifications & Credentials
                                </span>
                                <span className="text-foreground/30 text-xs font-mono">
                                    [{certs.length} Records]
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                                Validation_Logs_
                            </h2>
                        </div>
                        <p className="text-foreground/50 text-sm font-mono max-w-md md:text-right">
                            Official cybersecurity accreditations, industry certifications & audited training.
                        </p>
                    </div>

                    {/* Certifications Grid (2 columns on medium/large screens) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certs.map((cert, idx) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="group relative bg-muted/40 hover:bg-muted/70 border border-border hover:border-primary/40 rounded-2xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md"
                                onClick={() => navigate(`/details/experience/${cert.id}`)}
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-4 mb-5">
                                        <div className="w-13 h-13 rounded-xl bg-background border border-border group-hover:border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                                            <Award size={26} />
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="px-2.5 py-1 rounded-full bg-background border border-border text-[11px] font-mono font-bold text-foreground/60">
                                                {cert.date}
                                            </span>
                                            <div className="relative">
                                                <button
                                                    onClick={(e) => handleShare(cert.id, e)}
                                                    className="p-1.5 rounded-full bg-background border border-border hover:border-primary/40 text-foreground/40 hover:text-primary transition-all cursor-pointer"
                                                    title="Copy link"
                                                >
                                                    {copiedId === cert.id ? <Check size={13} className="text-primary" /> : <Share2 size={13} />}
                                                </button>
                                                {copiedId === cert.id && (
                                                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] bg-primary text-background px-2 py-0.5 rounded font-bold whitespace-nowrap shadow-lg">
                                                        Copied!
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors flex items-center gap-1.5">
                                        {cert.name}
                                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
                                    </h3>

                                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-foreground/50 mb-4">
                                        <span className="font-bold text-foreground/70">{cert.issuer}</span>
                                        {cert.certificateId && (
                                            <>
                                                <span>•</span>
                                                <span className="text-primary font-semibold">ID: {cert.certificateId}</span>
                                            </>
                                        )}
                                    </div>

                                    {cert.description && (
                                        <p className="text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-2">
                                            {cert.description}
                                        </p>
                                    )}
                                </div>

                                <div className="pt-4 border-t border-border/50 flex items-center justify-end text-xs">
                                    <span className="text-foreground/40 font-mono group-hover:text-primary transition-colors text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                                        View Details <ArrowUpRight size={13} />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

