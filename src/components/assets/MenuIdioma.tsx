import React from "react";

export default function MenuIdioma() {
  return (
    <div className='w-28 h-30 bg-neutral-950 rounded-lg shadow-lg'>
      <div className='flex flex-col justify-center items-center p-1'>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-800 py-2 px-3'>
          Portugues
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-800 py-2 px-3'>
          English
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-800 py-2 px-3'>
          Español
        </div>
      </div>
    </div>
  );
}
