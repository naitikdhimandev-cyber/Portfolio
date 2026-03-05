import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const Hero = () => {
    const { currentTheme } = useTheme();
    const name = "Naitik Dhiman";
    const title = "Cybersecurity & Offensive Security Enthusiast & AI Systems Builderr";
    const subline = "2nd Year BTech CSE (Cyber Security) | Offensive Security Enthusiast | Hackathon Winner | CTF Competitor";

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with mask */}
            <motion.div
                key={currentTheme.bg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${currentTheme.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)'
                }}
            />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="hidden md:block" /> {/* Empty left spacer */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-widest font-bold">
                        System Initialized // {new Date().toLocaleDateString()}
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-none lowercase">
                        {name.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.05, duration: 0.1 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>

                    <div className="text-2xl md:text-4xl font-medium text-foreground/60 mb-6 flex items-center justify-center sm:justify-start gap-2">
                        <span className="text-primary font-mono">&gt;</span>
                        <span>{title}</span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-[2px] h-[1em] bg-primary align-middle"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-lg text-foreground/40 font-mono mb-10 max-w-2xl"
                    >
                        {subline}
                    </motion.p>

                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="flex flex-wrap gap-4 justify-center sm:justify-start"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-background font-bold rounded-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1"
                        >
                            Access_Operations
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-border bg-muted hover:border-primary/50 transition-all font-bold rounded-xl transform hover:-translate-y-1"
                        >
                            Contact_Interface
                        </a>
                    </motion.div> */}
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
