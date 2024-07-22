import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import React from "react";

interface SubQuestionsFeedProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Question: string;
  Response: string;
}

export default function SubQuestionsFeed({
  open,
  setOpen,
  Question,
  Response,
}: SubQuestionsFeedProps) {
  return (
    <div
      className='w-full transition-all cursor-pointer mt-4 mb-4'
      onClick={() => setOpen(!open)}
    >
      <div className='w-full flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>{Question}</h1>
        {open ? <Minus size={32} /> : <Plus size={32} />}
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
        style={{ overflow: "hidden" }}
      >
        {open && (
          <div className='mb-4 px-6'>
            <p>{Response}</p>
          </div>
        )}
      </motion.div>
      <hr className='bg-black/30 border border-zinc-200/40' />
    </div>
  );
}
