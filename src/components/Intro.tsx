import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-screen w-screen bg-white dark:bg-neutral-950 flex space-x-3 items-center justify-center'>
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src='/logos/logo-tranparente.png'
          width={76}
          height={76}
          alt='logo'
        />
      </motion.div>
      {isVisible && (
        <div className='overflow-hidden'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ type: "tween", duration: 0.6 }}
            className='inline-block whitespace-nowrap'
          >
            <h1 className='text-5xl text-white font-semibold'>Luccas</h1>
          </motion.div>
        </div>
      )}
    </div>
  );
}
