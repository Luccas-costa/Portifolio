"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ThemeIcon from "./assets/ThemeIcon";
import styles from "@/styles/border.module.css";
import CloseMenu from "./assets/CloseMenu";
import BurguerMenu from "./assets/BurguerMenu";

export default function NavBar() {
  const [Itmenuopen, setItmenuopen] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handlemenu = () => {
    setItmenuopen(!Itmenuopen);
    console.log("mudei");
  };

  const closeMenu = () => {
    setItmenuopen(false);
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  useEffect(() => {
    if (!Itmenuopen) {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    }
  }, [Itmenuopen]);

  return (
    <div className='w-full h-16 bg-neutral-950 px-8 py-2 flex items-center justify-between'>
      <div>
        <Image
          src='/logos/logo-tranparente.png'
          alt='logo'
          width={50}
          height={50}
        />
      </div>
      <div>
        <ul className='hidden menuburger:flex items-center gap-4'>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Sobre</li>
          <li className={styles.navItem}>Contato</li>
          <li>
            <ThemeIcon />
          </li>
          <li>
            <button className='bg-white rounded-lg py-2 px-3 font-semibold'>
              Login
            </button>
          </li>
        </ul>
        <div className='flex menuburger:hidden items-center gap-4'>
          <CloseMenu handlermenu={handlemenu} checkboxRef={checkboxRef} />
          {Itmenuopen &&
            (console.log("abriu"),
            (
              <>
                <BurguerMenu handlerclose={closeMenu} />
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
