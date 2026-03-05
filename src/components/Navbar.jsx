import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Terminal, Moon, Sun, Zap, ChevronRight } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, themes, customColor, setCustomColor } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Hackathons', href: '#hackathons' },
        { name: 'Experience', href: '#experience' },
        { name: 'Academics', href: '#academics' },
        { name: 'Contact', href: '#contact' },
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

    const isHome = location.pathname === '/';

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-2' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-primary tracking-tighter">
                        ND<span className="animate-pulse">_</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Desktop Theme Selector - Only showing current icon */}
                        <div className="hidden md:flex items-center gap-2 mr-4">
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
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-xs bg-background border-l border-border z-[70] p-8 shadow-2xl flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="text-xl font-bold text-primary">NAV_</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-foreground/60 hover:text-primary transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 mb-12">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <button
                                            onClick={() => {
                                                setIsOpen(false);
                                                scrollToSection(link.href.replace('#', ''));
                                            }}
                                            className="group flex justify-between items-center text-xl font-medium text-foreground/80 hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                            <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4 font-bold">Switch Identity</p>
                                <div className="grid grid-cols-2 gap-2 mb-8">
                                    {themes.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setTheme(t.id)}
                                            className={`flex items-center gap-2 p-3 rounded-xl text-sm transition-all border ${theme === t.id ? 'bg-primary/10 border-primary text-primary' : 'bg-muted border-transparent text-foreground/60 hover:border-border'}`}
                                        >
                                            {getIcon(t.icon)}
                                            <span className="truncate">{t.name.split(' ')[0]}</span>
                                        </button>
                                    ))}
                                </div>

                                <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4 font-bold">Custom Signature</p>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted border border-border">
                                    <input
                                        type="color"
                                        value={customColor || '#22c55e'}
                                        onChange={(e) => setCustomColor(e.target.value)}
                                        className="w-8 h-8 rounded cursor-pointer bg-transparent"
                                    />
                                    <span className="text-xs font-mono uppercase tracking-widest text-foreground/60">
                                        {customColor || 'Default'}
                                    </span>
                                    {customColor && (
                                        <button
                                            onClick={() => setCustomColor('')}
                                            className="ml-auto text-[10px] text-primary hover:underline uppercase font-bold"
                                        >
                                            Reset
                                        </button>
                                    )}
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
