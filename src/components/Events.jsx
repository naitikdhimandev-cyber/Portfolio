import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, ShieldCheck, ChevronLeft, ChevronRight, ArrowRight, ExternalLink, Share2, Check } from 'lucide-react';
import eventsData from '../data/events.json';

const Events = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [copiedId, setCopiedId] = useState(null);

    // Home page slider shows events with highlight:true (up to 5)
    // Fallback: first 5 if none are highlighted
    const featuredEvents = useMemo(() => {
        const highlighted = eventsData.filter(e => e.highlight === true);
        return highlighted.length > 0 ? highlighted.slice(0, 5) : eventsData.slice(0, 5);
    }, []);

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

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.75;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="events" className="py-32 bg-background scroll-mt-28">
            <div className="section-divider mb-32 opacity-20" />
            <div className="container mx-auto px-6">
                {/* Section Header with Slider Navigation Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2">
                            Field_Operations<span className="text-primary">_</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary rounded-full" />
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="text-foreground/40 font-mono text-sm hidden md:block mr-4">
                            Event Engagements [Showing 5 of {eventsData.length} total]
                        </p>

                        {/* Slider Navigation Arrows */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="p-3 rounded-2xl bg-muted border border-border text-foreground/70 hover:text-primary hover:border-primary/50 transition-all cursor-pointer hover:scale-105 active:scale-95"
                                title="Scroll Left"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3 rounded-2xl bg-muted border border-border text-foreground/70 hover:text-primary hover:border-primary/50 transition-all cursor-pointer hover:scale-105 active:scale-95"
                                title="Scroll Right"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Horizontal Slider Track (Max 5 items) */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {featuredEvents.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            whileHover={{ y: -6 }}
                            className="w-[320px] sm:w-[360px] flex-shrink-0 snap-start bg-muted/40 border border-border rounded-3xl overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                            onClick={() => handleEventClick(item.id)}
                        >
                            {/* Card Top Visual - Cover/Certificate Image */}
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
                                    <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
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

                                    <p className="text-foreground/60 text-xs leading-relaxed line-clamp-3 font-normal">
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

                    {/* Directory End Card */}
                    <div
                        onClick={() => navigate('/events')}
                        className="w-[280px] flex-shrink-0 snap-start bg-muted/20 border border-dashed border-border rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-colors cursor-pointer"
                    >
                        <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <ArrowRight size={24} />
                        </div>
                        <h4 className="text-base font-bold uppercase tracking-wider mb-2">Complete Directory</h4>
                        <p className="text-xs font-mono text-foreground/40 mb-6">
                            View all {eventsData.length} event participations & certificates
                        </p>
                        <span className="px-4 py-2 bg-primary text-background font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_15px_var(--shadow-color)] transition-all">
                            Explore Directory
                        </span>
                    </div>
                </div>

                {/* Explore All Events Directory Button */}
                <div className="mt-10 text-center">
                    <button
                        onClick={() => navigate('/events')}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-mono text-xs uppercase font-bold tracking-widest rounded-2xl hover:shadow-[0_10px_25px_var(--shadow-color)] transition-all transform hover:-translate-y-1 cursor-pointer"
                    >
                        Explore All Events Directory ({eventsData.length}) <ExternalLink size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Events;
