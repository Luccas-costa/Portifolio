"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ConfigModalAc";
import Image from "next/image";
import { redesSociais } from "@/lib/redesSociais";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface redesSociais {
  id: number;
  image: string | StaticImport;
  name: string;
  link: string;
  cor: string;
}

export default function AnimatedModalDemo() {
  return (
    <div className='flex items-center justify-center'>
      <Modal>
        <ModalTrigger className='bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn'>
          Contato
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-5'>
              Minhas{" "}
              <span className='px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200'>
                conexões!
              </span>{" "}
            </h4>
            <hr className='border border-white/10 mb-8 rounded w-3/4 mx-auto' />
            <div className='screen11:px-[10px] screen10:px-[20px] screen9:px-[60px] screen8:px-[0px] screen2:px-[30px] screen1:px-[50px] screen02:px-[100px] flex items-center justify-center gap-4 flex-wrap'>
              {redesSociais.map((redesSociais: redesSociais) => (
                <a
                  href={redesSociais.link}
                  target='_blank'
                  key={redesSociais.id}
                  className={`size-16 screen11_5:size-24 screen5:size-32  rounded-lg flex items-center justify-center`}
                  style={{ backgroundColor: redesSociais.cor }}
                >
                  <Image
                    src={redesSociais.image}
                    width={100}
                    height={100}
                    alt={redesSociais.name}
                  />
                </a>
              ))}
            </div>
            <div className='mt-8 text-white/15 w-full screen6:w-[70%] mx-auto text-center screen11_5:text-base text-sm'>
              Se prefere a praticidade e{" "}
              <span className='px-1 py-0.5  rounded-md bg-gray-100 dark:bg-white/20 dark:border-neutral-700 border border-gray-200'>
                Certeza!
              </span>{" "}
              de resposta{" "}
              <span className='px-1 py-0.5 rounded-md bg-gray-100 dark:bg-white/20 dark:border-neutral-700 border border-gray-200'>
                Rapida!
              </span>{" "}
              Me mande uma mensagem clicando no botão abaixo.
            </div>
          </ModalContent>
          <ModalFooter className='gap-4'>
            <button className='px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28'>
              Sair
            </button>
            <button className='bg-black text-white dark:bg-white dark:text-black screen11_5:text-sm text-xs px-2 py-1 rounded-md border border-black w-48'>
              Mardar uma mensagem
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z' />
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M17.553 16.75a7.5 7.5 0 0 0 -10.606 0' />
      <path d='M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z' />
      <path d='M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196' />
      <path d='M15 9l-3 5.196' />
      <path d='M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25' />
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z' />
      <path d='M10 10l2 -2l2 2' />
      <path d='M10 14l2 2l2 -2' />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16' />
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 12.9a5 5 0 1 0 -3.902 -3.9' />
      <path d='M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z' />
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M22 12a10 10 0 1 0 -20 0' />
      <path d='M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3' />
      <path d='M2 12l10 10l-3.5 -10' />
      <path d='M15.5 12l-3.5 10l10 -10' />
    </svg>
  );
};
