import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Terminal, ExternalLink, Send, Check, AlertCircle, Loader2 } from 'lucide-react';

// SEPARATE GOOGLE APPS SCRIPT WEBAPP URL FOR MESSAGES
const CONTACT_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw2j_OdScREzpStVdFn3TkR4izL2O1lKeAmx5UIQpdNlNGuJFu3ZF301f0HKgI11z0OlA/exec";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        purpose: 'Internship Opportunity',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Input Sanitizer to neutralize Formula Injection (CSV Injection) & XSS payloads
    const sanitizeInput = (str) => {
        if (!str || typeof str !== 'string') return '';
        
        let cleaned = str.trim();

        // 1. Remove dangerous control characters & HTML tags (prevent XSS)
        cleaned = cleaned.replace(/<[^>]*>?/gm, '');

        // 2. Prevent Formula Injection in Google Sheets
        // If string starts with =, +, -, @, or TAB/CR, prefix with single quote `'`
        if (/^[=+\-@\t\r]/.test(cleaned)) {
            cleaned = "'" + cleaned;
        }

        return cleaned;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus('submitting');

        const cleanName = sanitizeInput(formData.name);
        const cleanEmail = sanitizeInput(formData.email);
        const cleanPhone = formData.phone ? sanitizeInput(formData.phone) : "Not Provided";
        const cleanPurpose = sanitizeInput(formData.purpose);
        const cleanMessage = sanitizeInput(formData.message);

        try {
            if (CONTACT_WEBHOOK_URL && CONTACT_WEBHOOK_URL.trim() !== "") {
                await fetch(CONTACT_WEBHOOK_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: cleanName,
                        email: cleanEmail,
                        phone: cleanPhone,
                        purpose: cleanPurpose,
                        message: cleanMessage,
                        timestamp: new Date().toISOString()
                    })
                });
            } else {
                // Fallback simulation if webhook URL is not set yet
                await new Promise(resolve => setTimeout(resolve, 1200));
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', purpose: 'Internship Opportunity', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (err) {
            console.error("Form submit error:", err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const links = [
        { icon: <Mail size={24} />, label: "Email", value: "naitikdhiman.dev@gmail.com", href: "mailto:naitikdhiman.dev@gmail.com" },
        { icon: <Linkedin size={24} />, label: "LinkedIn", value: "linkedin.com/in/naitikdhiman", href: "https://www.linkedin.com/in/naitik-dhiman-85798b323/" },
        { icon: <Github size={24} />, label: "GitHub", value: "github.com/naitikdhiman", href: "https://github.com/naitikdhimandev-cyber" },
    ];

    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden scroll-mt-28">
            <div className="section-divider mb-32 opacity-20" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                        <Terminal size={14} /> Open_Socket_Connection
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic lowercase leading-none">
                        Ready to <span className="text-primary not-italic">Collaborate?</span>
                    </h2>
                    <p className="text-foreground/50 text-lg mb-16 max-w-2xl mx-auto font-medium">
                        Currently open for internship opportunities, security research, and engineering collaborations.
                        Send an encrypted transmission to establish a direct link.
                    </p>

                    {/* Signal Transmission Contact Form */}
                    <div className="bg-muted/30 border border-border rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.2)] mb-20 text-left">
                        <div className="flex items-center gap-2 mb-8 border-b border-border/40 pb-4">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            <span className="font-mono text-xs text-foreground opacity-50 uppercase tracking-widest">
                                SECURE_TRANSMISSION_INTERFACE // INBOUND_COMMUNICATION
                            </span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-foreground opacity-70 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl font-mono text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-foreground opacity-70 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@company.com"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl font-mono text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                {/* Phone Input (Optional) */}
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-foreground opacity-70 mb-2">
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl font-mono text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Transmission Purpose */}
                            <div>
                                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-foreground opacity-70 mb-2">
                                    Subject / Purpose
                                </label>
                                <select
                                    name="purpose"
                                    value={formData.purpose}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-mono text-sm text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                                >
                                    <option value="Internship Opportunity">💼 Internship Opportunity / Hiring</option>
                                    <option value="Security Research & Audit">🛡️ Security Research & Audit</option>
                                    <option value="Project Collaboration">⚡️ Technical Project Collaboration</option>
                                    <option value="General Inquiry">💬 Professional Inquiry</option>
                                </select>
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-foreground opacity-70 mb-2">
                                    Message Content *
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message details here..."
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-mono text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`w-full py-4 rounded-xl font-mono text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-3 transition-all cursor-pointer ${status === 'success'
                                        ? 'bg-primary text-background'
                                        : status === 'error'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-primary text-background hover:shadow-[0_0_20px_var(--shadow-color)] transform hover:-translate-y-0.5'
                                    }`}
                            >
                                {status === 'submitting' && (
                                    <>
                                        <Loader2 size={16} className="animate-spin" /> Sending Message...
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        <Check size={16} /> Message Delivered Successfully!
                                    </>
                                )}
                                {status === 'error' && (
                                    <>
                                        <AlertCircle size={16} /> Delivery Failed. Please try again.
                                    </>
                                )}
                                {status === 'idle' && (
                                    <>
                                        <Send size={16} /> Send_Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Social & Direct Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
                                className="group p-6 rounded-2xl bg-muted border border-border flex flex-col items-center gap-4 hover:border-primary/50 transition-all hover:bg-muted/80"
                            >
                                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-foreground/30 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                                    {link.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/40 mb-1">{link.label}</div>
                                    <div className="font-mono text-xs text-foreground/80 group-hover:text-primary transition-colors flex items-center gap-1.5 justify-center">
                                        {link.value} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Download Resume Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <a
                            href="/resume/naitik-dhiman-cybersecurity-resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-muted border border-border text-foreground font-mono text-xs font-bold rounded-2xl hover:border-primary hover:text-primary transition-all transform hover:-translate-y-1 uppercase tracking-widest cursor-pointer"
                        >
                            <FileText size={18} /> Download_Resume.pdf
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

