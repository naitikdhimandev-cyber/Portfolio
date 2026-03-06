import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Video } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import projectsData from '../data/projects.json';
import hackathonsData from '../data/hackathons.json';
import experienceData from '../data/experience.json';
import { useTheme } from './ThemeContext';
import ImageModal from './ImageModal';

const ItemDetails = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { currentTheme } = useTheme();
    const [item, setItem] = useState(null);
    const [markdownContent, setMarkdownContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        let foundItem = null;
        if (type === 'project') foundItem = projectsData.find(p => p.id === id);
        else if (type === 'hackathon') foundItem = hackathonsData.find(p => p.id === id);
        else if (type === 'experience') foundItem = experienceData.find(p => p.id === id);

        if (foundItem) {
            setItem(foundItem);
            loadMarkdown(foundItem.markdown);
        } else {
            console.error(`Item not found: type=${type}, id=${id}`);
            navigate('/');
        }
    }, [type, id, navigate]);

    const loadMarkdown = async (filename) => {
        if (!filename) {
            setMarkdownContent('# Detailed Log\nDocumentation for this operations is currently restricted or unavailable.');
            return;
        }
        try {
            // Using absolute path from public root for reliability
            const response = await fetch(`./markdown/${filename}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const text = await response.text();
            setMarkdownContent(text);
        } catch (err) {
            console.error('Failed to load markdown:', err);
            setMarkdownContent('# Access Denied\nFailed to retrieve detailed operational logs from the secure repository.');
        }
    };

    if (!item) return null;

    const title = item.title || item.event || item.role || item.name;
    const subtext = item.position || item.company || item.issuer || item.description;

    return (
        <div className="pt-24 pb-32 min-h-screen">
            <div className="container mx-auto px-6 relative z-10">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-12 hover:translate-x-[-4px] transition-transform"
                >
                    <ArrowLeft size={16} /> Return_to_Base
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left side: Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-wrap gap-3 mb-6">
                                {item.tags && item.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-tighter rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 lowercase leading-tight">
                                {title}_
                            </h1>

                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-12 w-1 bg-primary" />
                                <div>
                                    <p className="text-xl font-bold tracking-tight text-foreground/90">{subtext}</p>
                                    {item.period && <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest mt-1">{item.period}</p>}
                                    {item.date && <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest mt-1">{item.date}</p>}
                                </div>
                            </div>

                            <div className="prose prose-invert prose-emerald max-w-none mb-16 border-t border-border/20 pt-16">
                                <ReactMarkdown>{markdownContent}</ReactMarkdown>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Media & Gallery */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="sticky top-32"
                        >
                            <div className="bg-muted/30 border border-border rounded-3xl p-8 backdrop-blur-sm overflow-hidden relative">
                                {/* Primary Visual */}
                                <div className="w-full rounded-2xl overflow-hidden bg-black mb-8 border border-border p-4 flex items-center justify-center">
                                    {item.video ? (
                                        <iframe src={item.video} className="w-full aspect-video rounded-xl" allowFullScreen title={title} />
                                    ) : (
                                        <img
                                            src={item.image}
                                            alt={title}
                                            className="max-w-full max-h-[600px] object-contain cursor-zoom-in"
                                            onClick={() => setSelectedImage({ src: item.image, alt: title })}
                                        />
                                    )}
                                </div>

                                {/* Gallery */}
                                {item.gallery && item.gallery.length > 0 && (
                                    <div className="mb-8">
                                        <p className="text-[10px] uppercase font-bold text-foreground/40 mb-4 tracking-widest">Evidence_Visuals</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {item.gallery.map((img, idx) => (
                                                <div key={idx} className="bg-muted rounded-xl border border-border overflow-hidden p-2 flex items-center justify-center cursor-zoom-in" onClick={() => setSelectedImage({ src: img, alt: `Evidence ${idx}` })}>
                                                    <img
                                                        src={img}
                                                        alt={`Evidence ${idx}`}
                                                        className="max-w-full max-h-64 object-contain transition-transform duration-500 hover:scale-105"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Links */}
                                <div className="flex flex-col gap-4">
                                    {item.github && (
                                        <a
                                            href={item.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-bold rounded-2xl hover:opacity-90 transition-all text-sm uppercase tracking-widest"
                                        >
                                            <Github size={18} /> Retrieve_Source
                                        </a>
                                    )}
                                    {item.demo && (
                                        <a
                                            href={item.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-background font-bold rounded-2xl transition-all text-sm uppercase tracking-widest"
                                        >
                                            <ExternalLink size={18} /> Deploy_Interface
                                        </a>
                                    )}
                                    {item.videos && item.videos.length > 0 && (
                                        <div className="flex flex-col gap-3">
                                            {item.videos.map((video, index) => (
                                                <a
                                                    key={index}
                                                    href={video}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-muted text-foreground font-bold rounded-2xl hover:bg-primary hover:text-background transition-all text-sm uppercase tracking-widest"
                                                >
                                                    <Video size={18} />
                                                    {index === 0 ? "Watch_Intro" : `Watch_Demo_${index}`}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                    {!item.github && !item.demo && (
                                        <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl text-center">
                                            <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Verified_Operation</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 pt-8 border-t border-border/40 text-center">
                                    <p className="text-[10px] font-mono text-foreground/20 uppercase tracking-[0.2em]">
                                        Secure Transmission // {new Date().toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Image Viewer Modal */}
            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage?.src}
                altText={selectedImage?.alt}
            />
        </div>
    );
};

export default ItemDetails;
