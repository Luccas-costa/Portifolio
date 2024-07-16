import Image from 'next/image';
import React from 'react';
import ThemeIcon from './assets/ThemeIcon';
import styles from '@/styles/border.module.css'

export default function NavBar() {
  return (
    <div className='w-full h-16 bg-neutral-950 px-8 py-2 flex items-center justify-between'>
      <div>
        <Image src="/logos/logo-tranparente.png" alt="logo" width={50} height={50} />
      </div>
      <div>
        <ul className='flex items-center gap-4'>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Sobre</li>
          <li className={styles.navItem}>Contato</li>
          <li><ThemeIcon/></li>
          <li>
            <button className='bg-white rounded-lg py-2 px-3 font-semibold'>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
