import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash, state } = useLocation();
    const prevPathnameRef = useRef(pathname);

    useEffect(() => {
        // 1. If opening an item details modal, NEVER alter background page scroll
        if (pathname.startsWith('/details/')) {
            prevPathnameRef.current = pathname;
            return;
        }

        // 2. Track if returning from a modal overlay
        const wasModalOpen = prevPathnameRef.current.startsWith('/details/');
        prevPathnameRef.current = pathname;

        const targetId = state?.scrollTo || (hash ? hash.replace('#', '') : null);

        if (targetId) {
            const performScroll = () => {
                const element = document.getElementById(targetId);
                if (element) {
                    let top = 0;
                    let curr = element;
                    while (curr) {
                        top += curr.offsetTop;
                        curr = curr.offsetParent;
                    }
                    const targetY = Math.max(0, top - 90);
                    window.scrollTo({ top: targetY, behavior: 'smooth' });
                }
            };

            const t1 = setTimeout(performScroll, 50);
            const t2 = setTimeout(performScroll, 250);

            // Clear state from browser history so stale scrollTo state never persists
            window.history.replaceState({}, document.title);

            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
            };
        }

        // 3. Only reset scroll to top (0, 0) on genuine new top-level page navigation
        if (!wasModalOpen && !targetId) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, state]);

    return null;
};

export default ScrollToTop;
