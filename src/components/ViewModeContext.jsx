import React, { createContext, useContext, useState, useEffect } from 'react';

const ViewModeContext = createContext();

export const SECTIONS = [
    { id: 'hero', label: 'Overview', code: '00', title: 'SYSTEM_INITIALIZATION' },
    { id: 'about', label: 'About', code: '01', title: 'OPERATOR_PROFILE' },
    { id: 'skills', label: 'Skills', code: '02', title: 'ARSENAL_&_STACK' },
    { id: 'projects', label: 'Projects', code: '03', title: 'OPERATION_SHOWCASE' },
    { id: 'hackathons', label: 'Hackathons', code: '04', title: 'COMPETITION_LOGS' },
    { id: 'events', label: 'Field Ops', code: '05', title: 'FIELD_OPERATIONS' },
    { id: 'experience', label: 'Experience', code: '06', title: 'ENGAGEMENT_HISTORY' },
    { id: 'academics', label: 'Academics', code: '07', title: 'ACADEMIC_CREDENTIALS' },
    { id: 'contact', label: 'Contact', code: '08', title: 'TRANSMISSION_UPLINK' },
];

export const ViewModeProvider = ({ children }) => {
    // Determine initial view mode based on stored preference or screen width
    const [viewMode, setViewModeState] = useState(() => {
        const saved = localStorage.getItem('portfolio-view-mode');
        if (saved === 'horizontal' || saved === 'vertical') {
            return saved;
        }
        // Responsive default: Desktop (>= 1024px) -> horizontal, Mobile/Tablet (< 1024px) -> vertical
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 1024 ? 'horizontal' : 'vertical';
        }
        return 'vertical';
    });

    const [activeTab, setActiveTabState] = useState('hero');
    const [direction, setDirection] = useState(1); // 1 = forward (right), -1 = backward (left)

    const setViewMode = (mode) => {
        setViewModeState(mode);
        localStorage.setItem('portfolio-view-mode', mode);
    };

    const toggleViewMode = () => {
        const next = viewMode === 'horizontal' ? 'vertical' : 'horizontal';
        setViewMode(next);
    };

    const goToTab = (tabId) => {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeTab);
        const targetIndex = SECTIONS.findIndex((s) => s.id === tabId);
        if (targetIndex !== -1 && targetIndex !== currentIndex) {
            setDirection(targetIndex > currentIndex ? 1 : -1);
            setActiveTabState(tabId);
        }
    };

    const setActiveTab = (tabId) => {
        goToTab(tabId);
    };

    const nextTab = () => {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeTab);
        if (currentIndex < SECTIONS.length - 1) {
            setDirection(1);
            setActiveTabState(SECTIONS[currentIndex + 1].id);
        }
    };

    const prevTab = () => {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeTab);
        if (currentIndex > 0) {
            setDirection(-1);
            setActiveTabState(SECTIONS[currentIndex - 1].id);
        }
    };

    return (
        <ViewModeContext.Provider
            value={{
                viewMode,
                setViewMode,
                toggleViewMode,
                activeTab,
                setActiveTab,
                goToTab,
                direction,
                nextTab,
                prevTab,
                sections: SECTIONS,
            }}
        >
            {children}
        </ViewModeContext.Provider>
    );
};

export const useViewMode = () => {
    const context = useContext(ViewModeContext);
    if (!context) {
        throw new Error('useViewMode must be used within a ViewModeProvider');
    }
    return context;
};

