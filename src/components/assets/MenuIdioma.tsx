import React from "react";

export default function MenuIdioma() {
  return (
    <div className='w-36 h-30 bg-zinc-900 rounded-lg shadow-lg p-4'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-full h-1/3 flex justify-center items-center'>
          Pt-br
        </div>
        <div className='w-full h-1/3 flex justify-center items-center'>En</div>
        <div className='w-full h-1/3 flex justify-center items-center'>Es</div>
      </div>
    </div>
  );
}
