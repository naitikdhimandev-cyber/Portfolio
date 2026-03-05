import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, Maximize, ExternalLink } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setScale(1); // Reset scale when opening a new image
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setScale(prev => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setScale(prev => Math.max(prev - 0.5, 0.5));
    };

    const handleResetZoom = (e) => {
        e.stopPropagation();
        setScale(1);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
                    onClick={onClose}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-black/50 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors z-50 cursor-pointer"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>

                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 z-50">
                        <button
                            onClick={handleZoomOut}
                            disabled={scale <= 0.5}
                            className={`p-2 rounded-full transition-colors ${scale <= 0.5 ? 'text-white/30 cursor-not-allowed' : 'text-white hover:bg-white/20'}`}
                        >
                            <ZoomOut size={20} />
                        </button>
                        <div className="w-12 text-center text-white/80 font-mono text-sm">
                            {Math.round(scale * 100)}%
                        </div>
                        <button
                            onClick={handleZoomIn}
                            disabled={scale >= 3}
                            className={`p-2 rounded-full transition-colors ${scale >= 3 ? 'text-white/30 cursor-not-allowed' : 'text-white hover:bg-white/20'}`}
                        >
                            <ZoomIn size={20} />
                        </button>
                        <div className="w-px h-6 bg-white/20 mx-2" />
                        <button
                            onClick={handleResetZoom}
                            className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                            title="Reset zoom"
                        >
                            <Maximize size={20} />
                        </button>
                        <div className="w-px h-6 bg-white/20 mx-2" />
                        <a
                            href={imageSrc}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-full text-white hover:bg-white/20 transition-colors flex items-center gap-2 text-sm"
                            title="Open original"
                        >
                            <ExternalLink size={18} />
                            <span className="hidden sm:inline">Open</span>
                        </a>
                    </div>

                    <div
                        className="relative max-w-full max-h-full flex items-center justify-center overflow-auto no-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.img
                            src={imageSrc}
                            alt={altText || 'Expanded view'}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: scale, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl origin-center"
                            style={{
                                cursor: scale > 1 ? 'grab' : 'zoom-in'
                            }}
                            drag={scale > 1}
                            dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                            whileTap={{ cursor: scale > 1 ? 'grabbing' : 'zoom-in' }}
                            onDoubleClick={handleZoomIn}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;
