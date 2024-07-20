import React from "react";

export default function MenuIdioma() {
  return (
    <div className='w-28 h-30 bg-neutral-950 border border-neutral-700 rounded-lg shadow-lg'>
      <div className='flex flex-col justify-center items-center p-1'>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-800 py-2 px-3 cursor-pointer'>
          Portugues
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-800 py-2 px-3 cursor-pointer'>
          English
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-800 py-2 px-3 cursor-pointer'>
          Español
        </div>
      </div>
    </div>
  );
}
