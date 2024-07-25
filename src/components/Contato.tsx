"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useUserEmail } from "./useUserEmail";
import React, { useEffect, useState } from "react";

export default function Contato() {
  const [login, setLogin] = useState(false);
  const [optionlogin, setoptionlogin] = useState(false);

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
        Envie uma mensagem
      </div>
      <div className='text-2xl pt-4 text-center text-white/40 w-1/3 mx-auto  '>
        Quer me conectar? Me mande uma mensagem pelo formulário abaixo.
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
                  Email
                </div>
                <div
                  onClick={() => setoptionlogin(!optionlogin)}
                  className={`w-[100px] h-[45px] ${
                    optionlogin ? "bg-zinc-200" : "bg-white"
                  } hover:bg-zinc-200 rounded-t-lg text-black font-bold flex items-center justify-center cursor-pointer text-xl`}
                >
                  Google
                </div>
              </div>
              <hr className=' border bg-white border-white rounded' />
            </div>
            {optionlogin ? (
              <>
                <SignedOut>
                  <SignInButton mode='modal'>
                    <button className='my-2 p-[0.8rem] bg-white border-none rounded-xl  w-1/3 text-black font-bold text-xl'>
                      Login
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
                  placeholder='name@email.com'
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
              placeholder='Conteudo de sua mensagem'
              className='p-[1rem] bg-white/15 border-none rounded-xl text-white w-3/4 placeholder:text-zinc-300'
            />
            <button
              type='submit'
              className='p-[0.8rem] bg-white border-none rounded-xl  w-1/4 text-black font-bold text-xl'
            >
              Enviar
            </button>
          </div>
        )}
        {/* </form> */}
      </div>
    </div>
  );
}
