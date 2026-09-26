import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Calendar, ShieldCheck, ChevronRight, Share2, Check } from 'lucide-react';
import eventsData from '../data/events.json';

const CATEGORIES = [
    { id: 'ALL', label: 'All Engagements', key: null },
    { id: 'cyber', label: '🛡️ Cybersecurity & CTFs', key: ['Cybersecurity', 'CTF', 'Ethical Hacking', 'Digital Forensics', 'Competitive Cyber'] },
    { id: 'workshop', label: '🎓 Workshops & Bootcamps', key: ['Workshop', 'Bootcamp', 'SIEM Tools', 'IEEE Event'] },
    { id: 'conference', label: '🌐 Conferences & Symposia', key: ['Conference', 'Symposium', 'AI Systems', 'Decentralized Web', 'OWASP', 'Seminar', 'Tech Conclave', 'IIT Event', 'Hacker League', 'Hackathon Sprint', 'Voice AI', 'IIT Guwahati'] },
];

const AllEvents = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');
    const [copiedId, setCopiedId] = useState(null);

    const handleEventClick = (eventId) => {
        navigate(`/details/event/${eventId}`);
    };

    const handleShare = async (id, e) => {
        e.stopPropagation();
        const url = `${window.location.origin}/#/details/event/${id}`;
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
            ALL: eventsData.length,
            cyber: eventsData.filter(e => e.tags && e.tags.some(t => CATEGORIES[1].key.includes(t))).length,
            workshop: eventsData.filter(e => e.tags && e.tags.some(t => CATEGORIES[2].key.includes(t))).length,
            conference: eventsData.filter(e => e.tags && e.tags.some(t => CATEGORIES[3].key.includes(t))).length,
        };
    }, []);

    const filteredEvents = useMemo(() => {
        return eventsData.filter((event) => {
            let matchesCategory = selectedCategory === 'ALL';
            if (!matchesCategory) {
                const targetCat = CATEGORIES.find(c => c.id === selectedCategory);
                if (targetCat && targetCat.key) {
                    matchesCategory = event.tags && event.tags.some(t => targetCat.key.includes(t));
                }
            }

            const matchesSearch =
                searchQuery.trim() === '' ||
                event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (event.tags && event.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="pt-24 pb-32 min-h-screen">
            <div className="container mx-auto px-6 relative z-10">
                {/* Back Link */}
                <Link
                    to="/"
                    state={{ scrollTo: 'events' }}
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:translate-x-[-4px] transition-transform"
                >
                    <ArrowLeft size={16} /> Return_to_Base
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-widest font-bold">
                        SYSTEM ARCHIVES // EVENT PARTICIPATION DIRECTORY
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                        Field_Operations<span className="text-primary">_</span>
                    </h1>
                    <p className="text-foreground/60 max-w-2xl text-base font-mono">
                        Complete directory of active security workshops, CTF competitions, tech conventions, and educational seminars.
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
                    <span>INDEXING RESULT: [{filteredEvents.length} EVENT LOGS FOUND]</span>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.04 }}
                            whileHover={{ y: -6 }}
                            className="bg-muted/40 border border-border rounded-3xl overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                            onClick={() => handleEventClick(item.id)}
                        >
                            {/* Card Top Visual */}
                            <div className="aspect-[4/3] overflow-hidden relative bg-black/80 flex items-center justify-center p-3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-contain rounded-xl transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-[2px]">
                                    Inspect Report <ChevronRight size={16} className="ml-1 text-primary animate-pulse" />
                                </div>
                            </div>

                            {/* Card Content Details */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-primary/20 bg-primary/5 text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* Role & Venue */}
                                    <div className="flex flex-col gap-1 text-xs font-mono text-foreground/50 mb-3">
                                        <span className="text-primary font-bold">{item.role}</span>
                                        <span className="flex items-center gap-1.5 text-foreground/70">
                                            <ShieldCheck size={13} className="text-primary/70" /> {item.organization}
                                        </span>
                                        <span className="flex items-center gap-1.5 opacity-60">
                                            <Calendar size={13} /> {item.date}
                                        </span>
                                    </div>

                                    <p className="text-foreground/60 text-xs leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
                                    <div className="flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Inspect Report <ChevronRight size={14} className="ml-1" />
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={(e) => handleShare(item.id, e)}
                                            className="p-1.5 rounded-full text-foreground/40 hover:text-primary transition-colors cursor-pointer"
                                            title="Copy link"
                                        >
                                            {copiedId === item.id ? <Check size={14} className="text-primary" /> : <Share2 size={14} />}
                                        </button>
                                        {copiedId === item.id && (
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

                {filteredEvents.length === 0 && (
                    <div className="py-20 text-center bg-muted/20 border border-dashed border-border rounded-3xl">
                        <p className="font-mono text-foreground/40 text-sm">NO EVENT LOGS MATCHED THE ACTIVE FILTERS</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllEvents;
