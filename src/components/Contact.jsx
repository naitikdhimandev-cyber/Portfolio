import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Terminal, ExternalLink } from 'lucide-react';

const Contact = () => {
    const links = [
        { icon: <Mail size={24} />, label: "Email", value: "naitikdhiman.dev@gmail.com", href: "mailto:naitikdhiman.dev@gmail.com" },
        { icon: <Linkedin size={24} />, label: "LinkedIn", value: "linkedin.com/in/naitikdhiman", href: "https://www.linkedin.com/in/naitik-dhiman-85798b323/" },
        { icon: <Github size={24} />, label: "GitHub", value: "github.com/naitikdhiman", href: "https://github.com/naitikdhimandev-cyber" },

    ];

    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden">
            <div className="section-divider mb-32 opacity-20" />
            {/* Decorative Matrix-like patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-10">
                        <Terminal size={14} /> Open_Socket_Connection
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 italic lowercase leading-none">
                        Ready to <span className="text-primary not-italic">Collaborate?</span>
                    </h2>
                    <p className="text-foreground/40 text-xl mb-16 max-w-2xl mx-auto font-medium">
                        Currently looking for internship opportunities and security research collaborations.
                        Send a signal to establish a secure link.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {links.map((link, idx) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-muted border border-border flex flex-col items-center gap-6 hover:border-primary/50 transition-all hover:bg-muted/80"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-foreground/20 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                                    {link.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/30 mb-2">{link.label}</div>
                                    <div className="font-mono text-sm text-foreground/80 group-hover:text-primary transition-colors flex items-center gap-2">
                                        {link.value} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <a
                            href="/resume/naitik-dhiman-cybersecurity-resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-background font-black text-lg rounded-2xl hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 uppercase tracking-widest"
                        >
                            <FileText size={24} /> Download_Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
