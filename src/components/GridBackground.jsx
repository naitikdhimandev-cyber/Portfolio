import React from 'react';
import { motion } from 'framer-motion';

const GridBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
            {/* Base Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Larger Subtle Grid */}
            <div
                className="absolute inset-0 opacity-[0.01]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
                    `,
                    backgroundSize: '200px 200px'
                }}
            />

            {/* Radial Gradient Mask for Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_80%)]" />

            {/* Animated Scanline / Glitch Accent */}
            <motion.div
                initial={{ top: '-10%' }}
                animate={{ top: '110%' }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-primary/10 blur-[1px] shadow-[0_0_15px_var(--color-primary)]"
            />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.3)] pointer-events-none" />
        </div>
    );
};

export default GridBackground;
