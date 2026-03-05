import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
        navigate(`/details/project/${projectId}`);
    };

    return (
        <section id="projects" className="py-32 bg-background">
            <div className="section-divider mb-32 opacity-20" />
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2">Operation_Showcase</h2>
                        <div className="h-1 w-24 bg-primary rounded-full" />
                    </div>
                    <p className="text-foreground/40 font-mono text-sm hidden md:block">
                        Scanning for active repositories... [DONE]
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative bg-muted/40 border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${project.highlight ? 'border-primary/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]' : 'border-border hover:border-primary/30'}`}
                            onClick={() => handleProjectClick(project.id)}
                        >
                            {/* Card Image */}
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />

                                {project.highlight && (
                                    <div className="absolute top-4 right-4 px-2 py-1 rounded bg-primary text-background text-[20px] font-bold uppercase tracking-widest animate-pulse">
                                        ⭐️
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border ${tag === 'Cybersecurity' ? 'text-primary border-primary/20 bg-primary/5' :
                                                tag === 'AI' ? 'text-accent border-accent/20 bg-accent/5' :
                                                    'text-foreground/40 border-border bg-muted'
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-foreground/60 text-sm line-clamp-2">{project.description}</p>

                                <div className="mt-6 flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    Decrypt Details <ChevronRight size={14} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
