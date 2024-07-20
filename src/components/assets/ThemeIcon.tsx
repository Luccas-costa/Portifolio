"use client";
import React, { useState, useEffect } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";

interface ThemeIconProps {
  cor: string;
  tamanho: number;
}

export default function ThemeIcon({ cor, tamanho }: ThemeIconProps) {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDarkMode);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div>
      {theme ? (
        <button onClick={toggleTheme} className='mt-1'>
          <MoonStars size={tamanho} color={cor} />
        </button>
      ) : (
        <button onClick={toggleTheme} className='mt-1'>
          <Sun size={tamanho} color={cor} />
        </button>
      )}
    </div>
  );
}
