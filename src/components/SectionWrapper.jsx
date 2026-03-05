import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative ${className}`}
        >
            {children}

            {/* Border Accents for Cyberpunk Technical feel */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-primary/30" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-primary/30" />
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-primary/30" />
            <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-primary/30" />
        </motion.section>
    );
};

export default SectionWrapper;
