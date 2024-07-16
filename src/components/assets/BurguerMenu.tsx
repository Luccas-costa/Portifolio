import { motion } from 'framer-motion'
import React from 'react'

interface BurguerMenuProps {
    handlerclose: () => void
}

export default function BurguerMenu({ handlerclose } : BurguerMenuProps) {
  return (
    <>
     <motion.div
      className="absolute rounded-full top-0 left-0 w-[1590px] h-[1590px] bg-white"
      style={{ translateX: "-19%", translateY: "-48%", zIndex: -1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      >
      <div className="flex items-center justify-center h-full">
        {/* oque eu quiser por dentro */}
        teste
      </div>
     </motion.div>

     <motion.div
      className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white"
      style={{ zIndex: -1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center justify-center h-full mt-[70%]">
        <button
          className="p-4 focus:outline-none text-white"
          onClick={handlerclose}
          >
          <a href="#">home</a>
        </button>
        <hr className="w-full h-3 bg-white border-white rounded" />
        <button
          className="p-4 focus:outline-none text-white"
          onClick={handlerclose}
        >
          <a href="#">sobre</a>
        </button>
        <hr className="w-full h-3 bg-white border-white rounded" />
        <button
          className="p-4 focus:outline-none text-white"
          onClick={handlerclose}
        >
          <a href="#">contato</a>
        </button>
      </div>
     </motion.div>
    </>
  )
}
