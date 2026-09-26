import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, ExternalLink, Share2, Check } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isModalOpen = location.pathname.startsWith('/details/');
    const [copiedId, setCopiedId] = useState(null);

    const handleProjectClick = (projectId) => {
        navigate(`/details/project/${projectId}`);
    };

    const handleShare = async (id, e) => {
        e.stopPropagation();
        const url = `${window.location.origin}/#/details/project/${id}`;
        try {
            await navigator.clipboard.writeText(url);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 1500);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // Home page grid shows projects with showOnHome:true (up to 6)
    // Fallback to first 6 if showOnHome is not set on any
    const featuredProjects = useMemo(() => {
        const homeProjects = projectsData.filter(p => p.showOnHome === true);
        return homeProjects.length > 0 ? homeProjects.slice(0, 6) : projectsData.slice(0, 6);
    }, []);

    return (
        <section id="projects" className="py-32 bg-background scroll-mt-28">
            <div className="section-divider mb-32 opacity-20" />
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2">Operation_Showcase</h2>
                        <div className="h-1 w-24 bg-primary rounded-full" />
                    </div>
                    <p className="text-foreground/40 font-mono text-sm hidden md:block">
                        Scanning active repositories... [{projectsData.length} total units]
                    </p>
                </div>

                {/* Projects Grid (Ultra-performant, zero-lag CSS transitions) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            whileHover={{ y: -6 }}
                            className={`group relative bg-muted/40 border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                                project.highlight
                                    ? 'border-primary/50 shadow-[0_0_20px_var(--shadow-color)]'
                                    : 'border-border hover:border-primary/30'
                            }`}
                            onClick={() => handleProjectClick(project.id)}
                        >
                            {/* Card Image */}
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                                        isModalOpen
                                            ? 'grayscale opacity-25 brightness-40 contrast-125'
                                            : 'grayscale-0 opacity-100 brightness-100'
                                    }`}
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent transition-opacity duration-500 ${
                                        isModalOpen ? 'opacity-90 bg-black/60' : 'opacity-60'
                                    }`}
                                />

                                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
                                    {project.highlight && (
                                        <div className="px-3 py-1 rounded-lg bg-white text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-2xl border border-black/20">
                                            ⭐️ Featured
                                        </div>
                                    )}
                                    {project.research && (
                                        <div className="px-3 py-1 rounded-lg bg-white text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-2xl border border-black/20">
                                            🔬 Research
                                        </div>
                                    )}
                                    {project.category === 'internship' && (
                                        <div className="px-3 py-1 rounded-lg bg-white text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-2xl border border-black/20">
                                            💼 Internship
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border ${
                                                tag === 'Cybersecurity'
                                                    ? 'text-primary border-primary/20 bg-primary/5'
                                                    : tag === 'AI'
                                                    ? 'text-accent border-accent/20 bg-accent/5'
                                                    : 'text-foreground/40 border-border bg-muted'
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/60 text-sm line-clamp-2">{project.description}</p>

                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Decrypt Details <ChevronRight size={14} className="ml-1" />
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={(e) => handleShare(project.id, e)}
                                            className="p-1.5 rounded-full text-foreground/40 hover:text-primary transition-colors cursor-pointer"
                                            title="Copy link"
                                        >
                                            {copiedId === project.id ? <Check size={14} className="text-primary" /> : <Share2 size={14} />}
                                        </button>
                                        {copiedId === project.id && (
                                            <span className="absolute -top-7 right-0 text-[10px] bg-primary text-background px-2 py-1 rounded-md font-bold tracking-wide whitespace-nowrap">
                                                Copied!
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View Full Directory Button */}
                <div className="mt-14 text-center">
                    <button
                        onClick={() => navigate('/projects')}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-mono text-xs uppercase font-bold tracking-widest rounded-2xl hover:shadow-[0_10px_25px_var(--shadow-color)] transition-all transform hover:-translate-y-1 cursor-pointer"
                    >
                        Explore All Projects Directory ({projectsData.length}) <ExternalLink size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
