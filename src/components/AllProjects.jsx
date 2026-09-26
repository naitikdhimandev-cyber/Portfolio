import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Search, Trophy, GraduationCap, Lightbulb, Layers, Briefcase, FlaskConical, Share2, Check } from 'lucide-react';
import projectsData from '../data/projects.json';

const CATEGORIES = [
    { id: 'ALL', label: 'All Operations', icon: Layers },
    { id: 'hackathon', label: '🏆 Hackathon & Competitive Projects', icon: Trophy },
    { id: 'academic', label: '🎓 Academic & PBL Projects', icon: GraduationCap },
    { id: 'personal', label: '💡 Personal & Innovative Projects', icon: Lightbulb },
    { id: 'internship', label: '💼 Internship Projects', icon: Briefcase },
    { id: 'research', label: '🔬 Research Projects', icon: FlaskConical },
];

const AllProjects = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');
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

    const categoryCounts = useMemo(() => {
        return {
            ALL: projectsData.length,
            hackathon: projectsData.filter((p) => p.category === 'hackathon').length,
            academic: projectsData.filter((p) => p.category === 'academic').length,
            personal: projectsData.filter((p) => p.category === 'personal').length,
            internship: projectsData.filter((p) => p.category === 'internship').length,
            research: projectsData.filter((p) => p.research === true).length,
        };
    }, []);

    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            let matchesCategory;
            if (selectedCategory === 'ALL') {
                matchesCategory = true;
            } else if (selectedCategory === 'research') {
                matchesCategory = project.research === true;
            } else {
                matchesCategory = project.category === selectedCategory;
            }
            const matchesSearch =
                searchQuery.trim() === '' ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (project.tags && project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="pt-24 pb-32 min-h-screen">
            <div className="container mx-auto px-6 relative z-10">
                {/* Back Link */}
                <Link
                    to="/"
                    state={{ scrollTo: 'projects' }}
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:translate-x-[-4px] transition-transform"
                >
                    <ArrowLeft size={16} /> Return_to_Base
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-widest font-bold">
                        SYSTEM ARCHIVES // PROJECT REPOSITORY DIRECTORY
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                        All_Operations<span className="text-primary">_</span>
                    </h1>
                    <p className="text-foreground/60 max-w-2xl text-base font-mono">
                        Comprehensive list of all hackathon entries, competitive challenges, academic engineering projects, and independent builds.
                    </p>
                </div>

                {/* Search & Category Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-12 bg-muted/30 border border-border rounded-2xl p-4 backdrop-blur-sm">
                    {/* Filter Pills with Badge Counters */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => {
                            const isActive = selectedCategory === cat.id;
                            const count = categoryCounts[cat.id] || 0;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 border flex items-center gap-2 cursor-pointer ${
                                        isActive
                                            ? 'bg-primary text-background border-primary shadow-[0_0_15px_var(--shadow-color)]'
                                            : 'bg-background/60 border-border/60 text-foreground/70 hover:border-primary/40 hover:text-foreground'
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                            isActive
                                                ? 'bg-background/20 text-background'
                                                : 'bg-primary/10 text-primary border border-primary/20'
                                        }`}
                                    >
                                        [{count}]
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full lg:w-72">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40" />
                        <input
                            type="text"
                            placeholder="Filter by keyword or tag..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-background border border-border/70 rounded-xl text-xs font-mono text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                {/* Counter Tag */}
                <div className="mb-6 flex justify-between items-center text-xs font-mono text-foreground/40">
                    <span>INDEXING RESULT: [{filteredProjects.length} OPERATIONS FOUND]</span>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.04 }}
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
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />

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

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center bg-muted/20 border border-dashed border-border rounded-3xl">
                        <p className="font-mono text-foreground/40 text-sm">NO UNITS MATCHED THE ACTIVE FILTERS</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProjects;
