import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useViewMode } from './ViewModeContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Hackathons from './Hackathons';
import Events from './Events';
import Experience from './Experience';
import Academics from './Academics';
import Contact from './Contact';

const componentsMap = {
    hero: Hero,
    about: About,
    skills: Skills,
    projects: Projects,
    hackathons: Hackathons,
    events: Events,
    experience: Experience,
    academics: Academics,
    contact: Contact,
};

const slideVariants = {
    enter: (dir) => ({
        x: dir > 0 ? 60 : -60,
        opacity: 0,
        scale: 0.99,
        filter: 'blur(3px)',
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            x: { type: 'spring', stiffness: 320, damping: 32 },
            opacity: { duration: 0.25 },
            filter: { duration: 0.25 },
        },
    },
    exit: (dir) => ({
        x: dir > 0 ? -60 : 60,
        opacity: 0,
        scale: 0.99,
        filter: 'blur(3px)',
        transition: {
            x: { type: 'spring', stiffness: 320, damping: 32 },
            opacity: { duration: 0.2 },
            filter: { duration: 0.2 },
        },
    }),
};

const HorizontalDeck = () => {
    const { activeTab, setActiveTab, nextTab, prevTab, direction, sections } = useViewMode();
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);

    const activeIndex = sections.findIndex((s) => s.id === activeTab);
    const prevSection = activeIndex > 0 ? sections[activeIndex - 1] : null;
    const nextSection = activeIndex < sections.length - 1 ? sections[activeIndex + 1] : null;

    // Progress percentage
    const progressPercent = ((activeIndex + 1) / sections.length) * 100;

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

            if (e.key === 'ArrowRight') {
                nextTab();
            } else if (e.key === 'ArrowLeft') {
                prevTab();
            } else if (e.key >= '1' && e.key <= '9') {
                const num = parseInt(e.key, 10) - 1;
                if (sections[num]) {
                    setActiveTab(sections[num].id);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, sections]);

    // Scroll smoothly to top on tab change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeTab]);

    const ActiveComponent = componentsMap[activeTab] || Hero;

    return (
        <div className="pt-[48px] min-h-screen flex flex-col justify-between relative overflow-x-hidden">
            {/* Top Clean Deck Tab Bar */}
            <div className="sticky top-[44px] z-40 bg-background/90 backdrop-blur-xl border-b border-border/50">
                {/* Thin Progress Indicator Line */}
                <div className="w-full h-[2px] bg-border/40 relative overflow-hidden">
                    <motion.div
                        className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.7)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
                    />
                </div>

                <div className="container mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-center">
                    {/* Clean Horizontal Tab Strip */}
                    <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 justify-center w-full">
                        {sections.map((sec) => {
                            const isActive = sec.id === activeTab;
                            return (
                                <button
                                    key={sec.id}
                                    onClick={() => setActiveTab(sec.id)}
                                    className={`relative px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                                        isActive
                                            ? 'text-primary font-bold'
                                            : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                                    }`}
                                >
                                    <span>{sec.label}</span>

                                    {isActive && (
                                        <motion.div
                                            layoutId="activeDeckTabGlow"
                                            className="absolute inset-0 bg-primary/15 border border-primary/40 rounded-lg -z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.2)]"
                                            transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Floating Left Edge Navigation */}
            {prevSection && (
                <div
                    className="fixed left-3 top-1/2 -translate-y-1/2 z-30 hidden xl:flex items-center"
                    onMouseEnter={() => setHoverLeft(true)}
                    onMouseLeave={() => setHoverLeft(false)}
                >
                    <button
                        onClick={prevTab}
                        className="group relative p-3 rounded-2xl bg-background/80 hover:bg-primary/10 border border-border/80 hover:border-primary/50 text-foreground/60 hover:text-primary transition-all backdrop-blur-xl shadow-xl hover:scale-105 active:scale-95"
                        title={`Go to ${prevSection.label} (←)`}
                    >
                        <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                        <AnimatePresence>
                            {hoverLeft && (
                                <motion.div
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -8 }}
                                    className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-background/95 border border-primary/40 text-primary text-xs font-medium whitespace-nowrap backdrop-blur-xl shadow-xl"
                                >
                                    {prevSection.label}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            )}

            {/* Floating Right Edge Navigation */}
            {nextSection && (
                <div
                    className="fixed right-3 top-1/2 -translate-y-1/2 z-30 hidden xl:flex items-center"
                    onMouseEnter={() => setHoverRight(true)}
                    onMouseLeave={() => setHoverRight(false)}
                >
                    <button
                        onClick={nextTab}
                        className="group relative p-3 rounded-2xl bg-background/80 hover:bg-primary/10 border border-border/80 hover:border-primary/50 text-foreground/60 hover:text-primary transition-all backdrop-blur-xl shadow-xl hover:scale-105 active:scale-95"
                        title={`Go to ${nextSection.label} (→)`}
                    >
                        <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
                        <AnimatePresence>
                            {hoverRight && (
                                <motion.div
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 8 }}
                                    className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-background/95 border border-primary/40 text-primary text-xs font-medium whitespace-nowrap backdrop-blur-xl shadow-xl"
                                >
                                    {nextSection.label}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            )}

            {/* Active Deck Content Area */}
            <div className="container mx-auto px-4 sm:px-6 py-6 flex-1 min-h-[70vh]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={activeTab}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="relative w-full"
                    >
                        <ActiveComponent />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HorizontalDeck;
