'use client';
import React, { useState, useEffect } from 'react';
import { MoonStars, Sun } from '@phosphor-icons/react/dist/ssr';

export default function ThemeIcon() {
    const [theme, setTheme] = useState(() => {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDarkMode;
    });

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme);
    };

    return (
        <div>
            {theme ? (
                <button onClick={toggleTheme} className='mt-1'>
                    <MoonStars size={24} color='white' />
                </button>
            ) : (
                <button onClick={toggleTheme} className='mt-1'>
                    <Sun size={24} color='white' />
                </button>
            )}
        </div>
    );
}
