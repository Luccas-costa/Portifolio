"use client";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Contato from "@/components/Contato";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";
import Languages from "@/components/Languages";
import { motion } from "framer-motion";

export default function Home() {
  const [isvisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='h-screen w-screen bg-white dark:bg-neutral-950'>
      {isvisible && (
        <motion.div
          className='h-screen w-screen'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3.5 }}
        >
          <Intro />
        </motion.div>
      )}

      <div>
        <div style={{ zIndex: 2, position: "relative" }}>
          <NavBar LanguageType='pt' />
        </div>
        <div style={{ zIndex: 1, position: "relative" }}>
          <Hero LanguageType='pt' />
        </div>
        <Languages LanguageType='pt' />
        <Projects LanguageType='pt' />
        <About LanguageType='pt' />
        <Questions LanguageType='pt' />
        <Contato LanguageType='pt' />
        <Footer />
      </div>
    </main>
  );
}
