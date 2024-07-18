"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ThemeIcon from "./assets/ThemeIcon";
import styles from "@/styles/border.module.css";
import CloseMenu from "./assets/CloseMenu";
import BurguerMenu from "./assets/BurguerMenu";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import MenuIdioma from "./assets/MenuIdioma";

export default function NavBar() {
  const [Itmenuopen, setItmenuopen] = useState(false);
  const [OpenIdioma, setOpenIdioma] = useState(false);
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
    <div className='w-full'>
      <div className='w-full h-16 bg-black px-6 menuburger:px-8 py-2 flex items-center justify-between relative'>
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
            <li className={styles.navItem}>Projetos</li>
            <li className={styles.navItem}>Sobre</li>
            <li className={styles.navItem}>Contato</li>
            <li
              className={`${styles.navItem} relative flex gap-1 items-center`}
              onClick={() => setOpenIdioma(!OpenIdioma)}
            >
              Idioma{" "}
              <span
                className={`mt-1 transition-all ${OpenIdioma && "rotate-180"}`}
              >
                <CaretDown size={14} weight='bold' />
              </span>
              {OpenIdioma && (
                <div className='absolute top-5 right-0 z-20 mt-2'>
                  <MenuIdioma />
                </div>
              )}
            </li>
            <li>
              <ThemeIcon />
            </li>
            <li>
              <button className='bg-white rounded-lg py-2 px-3 font-semibold'>
                Login
              </button>
            </li>
          </ul>
          <div className='flex menuburger:hidden items-center'>
            <div style={{ zIndex: 10 }}>
              <CloseMenu
                handlermenu={handlemenu}
                checkboxRef={checkboxRef}
                cor={Itmenuopen}
              />
            </div>
            {Itmenuopen &&
              (console.log("abriu"),
              (
                <div style={{ zIndex: 1 }}>
                  <BurguerMenu handlerclose={closeMenu} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
