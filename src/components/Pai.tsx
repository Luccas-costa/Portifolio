"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import About from "./About";
import Contato from "./Contato";
import Footer from "./Footer";
import Hero from "./Hero";
import Intro from "./Intro";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Questions from "./Questions";
import Languages from "./Languages";

export default function Pai() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <motion.div
        className='h-screen w-screen bg-white dark:bg-neutral-950 absolute z-50'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {isVisible && <Intro />}
      </motion.div>
    </div>
  );
}
