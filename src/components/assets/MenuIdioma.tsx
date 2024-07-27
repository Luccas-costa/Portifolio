// MenuIdioma.tsx

import Link from "next/link";
import React from "react";

interface MenuIdiomaProps {
  textos: { label: string; href: string }[];
}

export default function MenuIdioma({ textos }: MenuIdiomaProps) {
  return (
    <div className='w-28 h-30 bg-neutral-950 border border-neutral-700 rounded-lg shadow-lg'>
      <div className='flex flex-col justify-center items-center p-1'>
        {textos.map((texto, index) => (
          <div
            key={index}
            className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-800 py-2 px-3 cursor-pointer'
          >
            <Link href={texto.href}>{texto.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
