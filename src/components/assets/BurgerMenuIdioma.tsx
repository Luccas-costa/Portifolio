import React from "react";

export default function BurgerMenuIdioma() {
  return (
    <div className='w-28 h-30 bg-zinc-500 dark:bg-neutral-700 border border-neutral-700 dark:border-neutral-600 rounded-lg shadow-lg'>
      <div className='flex flex-col justify-center items-center p-1'>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          Portugues
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          English
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          Español
        </div>
      </div>
    </div>
  );
}
