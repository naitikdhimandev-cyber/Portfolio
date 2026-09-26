import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        return savedTheme || 'hacker';
    });

    const [customColor, setCustomColor] = useState(() => {
        return localStorage.getItem('portfolio-custom-color') || '';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);

        if (customColor) {
            document.documentElement.style.setProperty('--primary', customColor);
            localStorage.setItem('portfolio-custom-color', customColor);

            // Convert hex to rgb format for rgba CSS variable usage
            let hex = customColor.replace('#', '');
            if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
            if (hex.length === 6) {
                const r = parseInt(hex.substring(0, 2), 16);
                const g = parseInt(hex.substring(2, 4), 16);
                const b = parseInt(hex.substring(4, 6), 16);
                document.documentElement.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`);
            }
        } else {
            document.documentElement.style.removeProperty('--primary');
            document.documentElement.style.removeProperty('--primary-rgb');
        }
    }, [theme, customColor]);

    const themes = [
        {
            id: 'hacker',
            name: 'Hacker Terminal',
            icon: 'Terminal',
            bg: "images/bg1.png"
        },
        {
            id: 'dark',
            name: 'Dark Professional',
            icon: 'Moon',
            bg: "images/bg2.png"
        },
        {
            id: 'light',
            name: 'Light Minimal',
            icon: 'Sun',
            bg: "images/bg4.png"
        },
        {
            id: 'modern',
            name: 'Modern Accent',
            icon: 'Zap',
            bg: "images/bg3.png"
        },
    ];

    const currentTheme = themes.find(t => t.id === theme) || themes[0];

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes, currentTheme, customColor, setCustomColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
