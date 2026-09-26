import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal, Moon, Sun, Zap, ChevronRight, Columns3, Rows3 } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useViewMode } from './ViewModeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, themes } = useTheme();
    const { viewMode, toggleViewMode, setViewMode, setActiveTab } = useViewMode();
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (viewMode === 'horizontal') {
                    setActiveTab(id);
                } else {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            if (viewMode === 'horizontal') {
                setActiveTab(id);
            } else {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const navLinks = [
        { name: 'Overview', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Hackathons', id: 'hackathons' },
        { name: 'Field Operations', id: 'events' },
        { name: 'Experience', id: 'experience' },
        { name: 'Academics', id: 'academics' },
        { name: 'Contact', id: 'contact' },
    ];

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Terminal': return <Terminal size={18} />;
            case 'Moon': return <Moon size={18} />;
            case 'Sun': return <Sun size={18} />;
            case 'Zap': return <Zap size={18} />;
            default: return <Sun size={18} />;
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-2' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-primary tracking-tighter">
                        ND<span className="animate-pulse">_</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        {/* View Mode Toggle Switch */}
                        <button
                            onClick={toggleViewMode}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-background/60 hover:border-primary/50 text-foreground/80 hover:text-primary transition-all text-xs font-mono shadow-sm"
                            title={viewMode === 'horizontal' ? 'Switch to Vertical Scroll (Stream)' : 'Switch to Horizontal Tabs (Deck)'}
                        >
                            {viewMode === 'horizontal' ? (
                                <>
                                    <Columns3 size={14} className="text-primary animate-pulse" />
                                    <span className="hidden sm:inline font-bold">DECK // HORIZONTAL</span>
                                </>
                            ) : (
                                <>
                                    <Rows3 size={14} className="text-primary animate-pulse" />
                                    <span className="hidden sm:inline font-bold">STREAM // VERTICAL</span>
                                </>
                            )}
                        </button>

                        {/* Desktop Theme Selector */}
                        <div className="hidden md:flex items-center gap-1.5 mr-2">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setTheme(t.id)}
                                    className={`p-2 rounded-full transition-all ${theme === t.id ? 'bg-primary text-background' : 'text-foreground/60 hover:text-primary hover:bg-primary/10'}`}
                                    title={t.name}
                                >
                                    {getIcon(t.icon)}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Dim Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />

                        {/* Solid Drawer Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                            style={{ backgroundColor: 'var(--background)' }}
                            className="fixed top-0 right-0 h-full w-full max-w-xs border-l border-border z-[70] p-6 shadow-2xl flex flex-col overflow-y-auto text-foreground"
                        >
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-border/50">
                                <span className="text-lg font-bold text-primary tracking-tight">NAV_INTERFACE</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-foreground/60 hover:text-primary rounded-lg transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Layout Mode Selector */}
                            <div className="mb-6 p-3 rounded-xl bg-foreground/[0.03] border border-border/60">
                                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-2.5 font-bold">Display Mode</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => setViewMode('horizontal')}
                                        className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-medium transition-all border ${
                                            viewMode === 'horizontal'
                                                ? 'bg-primary text-background border-primary font-bold shadow-sm'
                                                : 'bg-foreground/[0.04] border-border/50 text-foreground/70 hover:border-primary/40'
                                        }`}
                                    >
                                        <Columns3 size={13} />
                                        <span>Deck</span>
                                    </button>
                                    <button
                                        onClick={() => setViewMode('vertical')}
                                        className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-medium transition-all border ${
                                            viewMode === 'vertical'
                                                ? 'bg-primary text-background border-primary font-bold shadow-sm'
                                                : 'bg-foreground/[0.04] border-border/50 text-foreground/70 hover:border-primary/40'
                                        }`}
                                    >
                                        <Rows3 size={13} />
                                        <span>Stream</span>
                                    </button>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col gap-1.5 mb-8">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.03 }}
                                    >
                                        <button
                                            onClick={() => handleNavClick(link.id)}
                                            className="group w-full flex justify-between items-center text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-all"
                                        >
                                            <span>{link.name}</span>
                                            <ChevronRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Theme Switcher */}
                            <div className="mt-auto pt-6 border-t border-border/50">
                                <p className="text-[10px] uppercase tracking-widest text-foreground/50 mb-3 font-bold">Theme Identity</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {themes.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setTheme(t.id)}
                                            className={`flex items-center gap-2 p-2.5 rounded-xl text-xs transition-all border ${
                                                theme === t.id
                                                    ? 'bg-primary/15 border-primary text-primary font-bold shadow-sm'
                                                    : 'bg-foreground/[0.03] border-border/50 text-foreground/70 hover:border-border'
                                            }`}
                                        >
                                            {getIcon(t.icon)}
                                            <span className="truncate">{t.name.split(' ')[0]}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
