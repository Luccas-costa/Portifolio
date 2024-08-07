import React from "react";
import Image from "next/image";
import { ShareFat } from "@phosphor-icons/react/dist/ssr";

export default function Card() {
  return (
    <div className='bg-zinc-100/30 w-[calc(32vw-40px)] h-[400px] border border-zinc-300/40 rounded-lg shadow-lg flex flex-col items-center'>
      <div className='w-[calc(32vw-80px)] h-[300px] rounded-lg bg-green-500 mt-4'></div>
      <div className='w-full flex justify-evenly my-auto'>
        <a href='#'>
          <div className='w-30 rounded-lg h-[50px] bg-zinc-100/50 border border-zinc-300/30 flex items-center justify-center'>
            <ShareFat size={80} color='#50525B' />
          </div>
        </a>
        <a href='#'>
          <div className='w-30 rounded-lg h-[50px] bg-zinc-100/50 border border-zinc-300/40 flex items-center justify-center'>
            <Image
              src='/assets/icons/github.png'
              width={80}
              height={80}
              alt='github logo'
            />
          </div>
        </a>
      </div>
    </div>
  );
}
