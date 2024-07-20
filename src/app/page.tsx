"use client";
import { useState, useEffect } from "react";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import About from "@/components/About";
import BotaoIndicaScroll from "@/components/assets/BotaoIndicaScroll";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  // Função para verificar a posição do scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  // Adiciona o listener de scroll quando o componente é montado
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove o listener de scroll quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className='h-screen w-screen bg-white dark:bg-neutral-950'>
      <div style={{ zIndex: 2, position: "relative" }}>
        <NavBar />
      </div>
      <div style={{ zIndex: 1, position: "relative" }}>
        <Hero />
      </div>
      <Languages />
      <Projects />
      <About />

      {isVisible && <BotaoIndicaScroll />}
    </main>
  );
}
