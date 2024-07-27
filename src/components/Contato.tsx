"use client";

import React, { useEffect, useState } from "react";

import { Language } from "@/types/Languages";
import { useUserEmail } from "../hooks/useUserEmail";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import pt from "@/constants/pt.json";
import en from "@/constants/en.json";
import es from "@/constants/es.json";

interface ContatoProps {
  LanguageType: string;
}

export default function Contato({ LanguageType }: ContatoProps) {
  const [login, setLogin] = useState(false);
  const [optionlogin, setoptionlogin] = useState(false);
  const [controlLanguage, setControlLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const handlerLanguageType = (LanguageType: string) => {
      if (LanguageType === "pt") {
        setControlLanguage(pt);
      } else if (LanguageType === "en") {
        setControlLanguage(en);
      } else if (LanguageType === "es") {
        setControlLanguage(es);
      }
    };
    handlerLanguageType(LanguageType);
  }, [LanguageType]);

  const email = useUserEmail();

  useEffect(() => {
    if (email === null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [email]);

  return (
    <div className='py-[50px] bg-black text-white'>
      <div className='text-7xl font-semibold text-center'>
        {controlLanguage?.Contato.title}
      </div>
      <div className='text-2xl pt-4 text-center text-white/40 w-1/3 mx-auto  '>
        {controlLanguage?.Contato.description}
      </div>
      {/* <form
        action=''
        className='py-12 flex flex-col justify-center items-center'
      > */}
      <div className='py-12 flex flex-col justify-center items-center'>
        {login && (
          <>
            <div className='mb-3 w-1/3'>
              <div className='rounded-lg flex space-x-3'>
                <div
                  onClick={() => setoptionlogin(!optionlogin)}
                  className={`w-[100px] h-[45px] ${
                    optionlogin ? "bg-white" : "bg-zinc-200"
                  } hover:bg-zinc-200 rounded-t-lg text-black font-bold flex items-center justify-center cursor-pointer text-xl`}
                >
                  {controlLanguage?.Contato.option1}
                </div>
                <div
                  onClick={() => setoptionlogin(!optionlogin)}
                  className={`w-[100px] h-[45px] ${
                    optionlogin ? "bg-zinc-200" : "bg-white"
                  } hover:bg-zinc-200 rounded-t-lg text-black font-bold flex items-center justify-center cursor-pointer text-xl`}
                >
                  {controlLanguage?.Contato.option2}
                </div>
              </div>
              <hr className=' border bg-white border-white rounded' />
            </div>
            {optionlogin ? (
              <>
                <SignedOut>
                  <SignInButton mode='modal'>
                    <button className='my-2 p-[0.8rem] bg-white border-none rounded-xl  w-1/3 text-black font-bold text-xl'>
                      {controlLanguage?.Contato.btnlogin}
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </>
            ) : (
              <>
                <input
                  type='text'
                  placeholder={controlLanguage?.Contato.placeholder1}
                  className='mb-4 p-[1rem] bg-white/15 border-none rounded-xl text-white w-1/3 placeholder:text-zinc-300'
                />
              </>
            )}
          </>
        )}
        {!optionlogin && (
          <div className='flex space-x-4 w-1/3 mx-auto'>
            <input
              type='text'
              placeholder={controlLanguage?.Contato.placeholder2}
              className='p-[1rem] bg-white/15 border-none rounded-xl text-white w-3/4 placeholder:text-zinc-300'
            />
            <button
              type='submit'
              className='p-[0.8rem] bg-white border-none rounded-xl  w-1/4 text-black font-bold text-xl'
            >
              {controlLanguage?.Contato.btnsend}
            </button>
          </div>
        )}
        {/* </form> */}
      </div>
    </div>
  );
}
