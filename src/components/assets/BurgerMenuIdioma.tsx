import Link from "next/link";
import React from "react";

interface BurgerMenuProps {
  texto1: string;
  href1: string;
  texto2: string;
  href2: string;
  texto3: string;
  href3: string;
}

export default function BurgerMenuIdioma({
  texto1,
  href1,
  texto2,
  href2,
  texto3,
  href3,
}: BurgerMenuProps) {
  return (
    <div className='w-28 h-30 bg-zinc-500 dark:bg-neutral-700 border border-neutral-700 dark:border-neutral-600 rounded-lg shadow-lg'>
      <div className='flex flex-col justify-center items-center p-1'>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          <Link href={href1}>{texto1}</Link>
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          <Link href={href2}>{texto2}</Link>
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          <Link href={href3}>{texto3}</Link>
        </div>
      </div>
    </div>
  );
}
