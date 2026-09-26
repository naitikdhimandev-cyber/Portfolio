import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Video, X, Share2, Check, FileText, FlaskConical, Linkedin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import projectsData from '../data/projects.json';
import hackathonsData from '../data/hackathons.json';
import experienceData from '../data/experience.json';
import eventsData from '../data/events.json';
import { useTheme } from './ThemeContext';
import ImageModal from './ImageModal';

const ItemDetails = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { currentTheme } = useTheme();
    const [item, setItem] = useState(null);
    const [markdownContent, setMarkdownContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = `${window.location.origin}/#/details/${type}/${id}`;
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    const handleClose = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            if (type === 'project') navigate('/projects');
            else if (type === 'event') navigate('/events');
            else navigate('/');
        }
    };

    // Body & HTML scroll lock and Esc key handler for modal behavior
    useEffect(() => {
        const origBody = document.body.style.overflow;
        const origHtml = document.documentElement.style.overflow;

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = origBody;
            document.documentElement.style.overflow = origHtml;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        let foundItem = null;
        if (type === 'project') foundItem = projectsData.find(p => p.id === id);
        else if (type === 'hackathon') foundItem = hackathonsData.find(p => p.id === id);
        else if (type === 'experience') foundItem = experienceData.find(p => p.id === id);
        else if (type === 'event') foundItem = eventsData.find(e => e.id === id);

        if (foundItem) {
            setItem(foundItem);
            loadMarkdown(foundItem.markdown);
        } else {
            console.error(`Item not found: type=${type}, id=${id}`);
            handleClose();
        }
    }, [type, id]);

    const loadMarkdown = async (filename) => {
        if (!filename) {
            setMarkdownContent('# Detailed Log\nDocumentation for this operations is currently restricted or unavailable.');
            return;
        }
        try {
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
                {/* Header Controls (Return to Base + Close X) */}
                <div className="flex justify-between items-center mb-12">
                    <button
                        onClick={handleClose}
                        className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:translate-x-[-4px] transition-transform cursor-pointer"
                    >
                        <ArrowLeft size={16} /> Return_to_Base
                    </button>

                    <div className="flex items-center gap-2">
                        {/* Share Button */}
                        <div className="relative">
                            <button
                                onClick={handleShare}
                                className={`p-2 rounded-full border transition-all cursor-pointer ${
                                    copied
                                        ? 'bg-primary border-primary text-background'
                                        : 'bg-muted border-border text-foreground/60 hover:text-primary hover:border-primary/40'
                                }`}
                                title="Copy link to share"
                            >
                                {copied ? <Check size={20} /> : <Share2 size={20} />}
                            </button>
                            {copied && (
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-primary text-background px-2 py-1 rounded-md font-bold tracking-wide whitespace-nowrap">
                                    Link Copied!
                                </span>
                            )}
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="p-2 rounded-full bg-muted border border-border text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
                            title="Close (Esc)"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left side: Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-wrap gap-3 mb-6">
                                {item.research && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/15 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-tighter rounded">
                                        <FlaskConical size={11} /> Research
                                    </span>
                                )}
                                {item.category === 'internship' && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-tighter rounded">
                                        Internship Project
                                    </span>
                                )}
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

                            <div className="mb-16 border-t border-border/20 pt-10">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h1: ({ children }) => (
                                            <h1 className="text-3xl font-black tracking-tight text-foreground mt-8 mb-4 border-b border-border/40 pb-3 flex items-center gap-2">
                                                {children}
                                            </h1>
                                        ),
                                        h2: ({ children }) => (
                                            <h2 className="text-2xl font-bold tracking-tight text-primary mt-8 mb-4 flex items-center gap-2">
                                                {children}
                                            </h2>
                                        ),
                                        h3: ({ children }) => (
                                            <h3 className="text-xl font-bold text-foreground/90 mt-6 mb-3">
                                                {children}
                                            </h3>
                                        ),
                                        h4: ({ children }) => (
                                            <h4 className="text-lg font-bold text-foreground/80 mt-4 mb-2">
                                                {children}
                                            </h4>
                                        ),
                                        p: ({ children }) => (
                                            <p className="text-base text-foreground/80 leading-relaxed mb-4 font-normal">
                                                {children}
                                            </p>
                                        ),
                                        ul: ({ children }) => (
                                            <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/80 pl-2">
                                                {children}
                                            </ul>
                                        ),
                                        ol: ({ children }) => (
                                            <ol className="list-decimal list-inside space-y-2 mb-6 text-foreground/80 pl-2">
                                                {children}
                                            </ol>
                                        ),
                                        li: ({ children }) => (
                                            <li className="text-base leading-relaxed text-foreground/85 mb-1.5">
                                                {children}
                                            </li>
                                        ),
                                        strong: ({ children }) => (
                                            <strong className="font-bold text-primary">{children}</strong>
                                        ),
                                        em: ({ children }) => (
                                            <em className="italic text-foreground/90">{children}</em>
                                        ),
                                        code: ({ inline, children }) =>
                                            inline ? (
                                                <code className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-xs">
                                                    {children}
                                                </code>
                                            ) : (
                                                <pre className="p-4 rounded-2xl bg-muted/80 border border-border text-foreground font-mono text-xs overflow-x-auto my-4">
                                                    <code>{children}</code>
                                                </pre>
                                            ),
                                        blockquote: ({ children }) => (
                                            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 my-4 bg-primary/5 py-3 pr-4 rounded-r-2xl border-y border-r border-primary/10">
                                                {children}
                                            </blockquote>
                                        ),
                                        hr: () => <hr className="my-8 border-border/40" />,
                                        a: ({ href, children }) => (
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
                                            >
                                                {children}
                                            </a>
                                        ),
                                        table: ({ children }) => (
                                            <div className="overflow-x-auto my-6 border border-border/60 rounded-2xl bg-muted/20 backdrop-blur-sm">
                                                <table className="w-full text-left border-collapse text-sm">
                                                    {children}
                                                </table>
                                            </div>
                                        ),
                                        thead: ({ children }) => (
                                            <thead className="bg-primary/10 border-b border-border/60 font-bold text-primary text-xs uppercase tracking-wider">
                                                {children}
                                            </thead>
                                        ),
                                        tbody: ({ children }) => (
                                            <tbody className="divide-y divide-border/30 text-foreground/85 text-xs font-normal">
                                                {children}
                                            </tbody>
                                        ),
                                        tr: ({ children }) => (
                                            <tr className="hover:bg-primary/5 transition-colors">
                                                {children}
                                            </tr>
                                        ),
                                        th: ({ children }) => (
                                            <th className="px-5 py-3.5 font-bold text-primary">
                                                {children}
                                            </th>
                                        ),
                                        td: ({ children }) => (
                                            <td className="px-5 py-3.5 leading-relaxed">
                                                {children}
                                            </td>
                                        ),
                                    }}
                                >
                                    {markdownContent}
                                </ReactMarkdown>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Media & Gallery */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="w-full"
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
                                            loading="lazy"
                                            decoding="async"
                                            className="max-w-full max-h-[600px] object-contain cursor-zoom-in opacity-80 brightness-90 hover:opacity-100 hover:brightness-100 transition-all duration-300"
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
                                                <div
                                                    key={idx}
                                                    className="bg-muted rounded-xl border border-border overflow-hidden p-2 flex items-center justify-center cursor-zoom-in hover:border-primary/50 transition-colors"
                                                    onClick={() => setSelectedImage({ src: img, alt: `Evidence ${idx + 1}` })}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`Evidence ${idx + 1}`}
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="max-w-full max-h-64 object-contain transition-transform duration-500 hover:scale-105"
                                                        onError={(e) => {
                                                            e.currentTarget.parentElement.style.display = 'none';
                                                        }}
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
                                    {item.buidl && (
                                        <a
                                            href={item.buidl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-8 py-4 bg-primary/10 border border-primary/30 text-primary font-bold rounded-2xl hover:bg-primary hover:text-background transition-all text-sm uppercase tracking-widest"
                                        >
                                            <ExternalLink size={18} /> DoraHacks_BUIDL_#31592
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
                                    {item.pdf && (
                                        <a
                                            href={item.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-8 py-4 bg-accent/10 border border-accent/30 text-accent font-bold rounded-2xl hover:bg-accent hover:text-background transition-all text-sm uppercase tracking-widest"
                                        >
                                            <FileText size={18} /> Read_Paper
                                        </a>
                                    )}
                                    {item.linkedin && (
                                        <a
                                            href={item.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 px-8 py-4 bg-muted border border-border text-foreground font-bold rounded-2xl hover:bg-primary hover:text-background hover:border-primary transition-all text-sm uppercase tracking-widest group"
                                        >
                                            <Linkedin size={18} className="text-primary group-hover:text-background transition-colors" /> LinkedIn_Briefing
                                        </a>
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
