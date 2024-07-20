import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import ThemeIcon from "./ThemeIcon";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import BurgerMenuIdioma from "./BurgerMenuIdioma";

interface BurguerMenuProps {
  handlerclose: () => void;
}

export default function BurguerMenu({ handlerclose }: BurguerMenuProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [OpenLanguage, setOpenLanguage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timer); // Limpeza do timer quando o componente for desmontado
  }, []);

  const handlerLanguage = () => {
    setOpenLanguage(!OpenLanguage);
  };
  return (
    <>
      {isVisible && (
        <motion.div
          className='absolute rounded-[100%] top-0 left-0 w-[300%] h-[2330px] bg-white dark:bg-zinc-700'
          style={{ translateX: "-19%", translateY: "-48%", zIndex: 2 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className='flex items-center justify-center h-full'>
            {/* oque eu quiser por dentro */}
          </div>
        </motion.div>
      )}

      <motion.div
        className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-white dark:bg-zinc-700 overflow-hidden'
        style={{ zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className='absolute top-2 left-5'>
          <ThemeIcon cor='black' tamanho={38} />
        </div>
        <div className='flex flex-col items-center justify-center h-full '>
          <button
            className='p-4 focus:outline-none text-black '
            onClick={handlerclose}
          >
            <a href='#'>Home</a>
          </button>
          <hr className='w-full h-3 bg-white dark:bg-zinc-700 border-black  rounded' />
          <button
            className='p-4 focus:outline-none text-black '
            onClick={handlerclose}
          >
            <a href='#'>Sobre</a>
          </button>
          <hr className='w-full h-3 bg-white dark:bg-zinc-700 border-black  rounded' />
          <button
            className='p-4 focus:outline-none text-black '
            onClick={handlerclose}
          >
            <a href='#'>Contato</a>
          </button>
          <hr className='w-full h-3 bg-white dark:bg-zinc-700 border-black  rounded' />
          <button
            className=' p-4 focus:outline-none text-black flex space-x-1 items-center relative'
            onClick={handlerLanguage}
          >
            Idioma{" "}
            <span
              className={` ${OpenLanguage ? "rotate-180" : ""} transition-all`}
            >
              <CaretRight size={16} />
            </span>
            {OpenLanguage && (
              <div className='absolute right-0 top-4 translate-x-[95%]'>
                <BurgerMenuIdioma />
              </div>
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}
