import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Github, Share2 } from 'lucide-react';
import hackathonsData from '../data/hackathons.json';

const Hackathons = () => {
    const navigate = useNavigate();
    const [copiedId, setCopiedId] = useState(null);

    const handleShare = async (id) => {
        const url = `${window.location.origin}/#/details/hackathon/${id}`;
    
        try {
            await navigator.clipboard.writeText(url);
            setCopiedId(id);
    
            setTimeout(() => {
                setCopiedId(null);
            }, 1500);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };
    
    return (
        <section id="hackathons" className="py-32 bg-muted/30">
            <div className="section-divider mb-32 opacity-10" />
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2">Trophy_Room_</h2>
                    <div className="h-1 w-24 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {hackathonsData.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all group cursor-pointer"
                            onClick={() => navigate(`/details/hackathon/${item.id}`)}
                        >
                            <div className="p-8 flex flex-col md:flex-row gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-background transition-colors">
                                    <Trophy size={32} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-muted border border-border text-foreground/40">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">{item.event}</h3>
                                    <p className="text-primary font-mono text-sm mb-4 font-bold lowercase">{item.position}</p>
                                    <p className="text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-2">{item.description}</p>

                                    <div className="flex gap-4">
                                        {item.github && (
                                            <a
                                                href={item.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github
                                                    size={18}
                                                    className="text-foreground/40 hover:text-primary cursor-pointer"
                                                />
                                            </a>
                                        )}

                                        <div className="relative">
                                            <Share2
                                                size={18}
                                                className="text-foreground/40 hover:text-primary cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleShare(item.id);
                                                }}
                                            />

                                            {copiedId === item.id && (
                                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-primary text-background px-2 py-1 rounded-md font-bold tracking-wide">
                                                    Copied!
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;