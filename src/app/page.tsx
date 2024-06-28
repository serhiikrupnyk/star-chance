"use client";
import { Carousel, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="fixed flex flex-col items-center z-10">
        <Navbar className="bg-[#271248] py-2.5 w-screen pl-2 pr-2 shadow-lg shadow-purple-900/50">
          <Navbar.Brand as={Link} href="/">
            <img
              src="https://t4.ftcdn.net/jpg/05/30/89/65/360_F_530896520_khHbcG5ytp7gJcWiZG8lPLNbcCRAWjEI.webp"
              className="mr-3 h-6 sm:h-12"
              alt="Star Chance Casino Logo"
            />
            <span className="self-center text-white whitespace-nowrap text-xl font-semibold dark:text-white">
              Star Chance
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <button
              type="button"
              className="text-white bg-gradient-to-r border border-blue-700 hover:bg-blue-800 from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Регистрация
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r border border-blue-700 hover:bg-blue-800 from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Вход
            </button>
          </Navbar.Collapse>
        </Navbar>
        <div className="bg-[#361c60] h-[60px] p-2 w-3/5 flex flex-col items-center shadow-lg shadow-purple-900/50 rounded">
          <div className="flex flex-row space-arround">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#361c60] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase"
            >
              слоты
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#361c60] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase"
            >
              LIVE CASINO
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#361c60] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase"
            >
              Настольные
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#361c60] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase"
            >
              Правила Казино
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#361c60] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase"
            >
              касса
            </button>
          </div>
        </div>
      </div>
      <div className="relative pt-[79px]">
        <div className="h-[480px] block">
          <Carousel className="" slideInterval={2000} indicators={false} leftControl=" " rightControl=" ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/525/156/non_2x/online-casino-banner-with-smartphone-shine-neon-casino-roulette-wheel-playing-cards-blue-neon-shine-slot-machine-and-poker-chips-in-dark-scene-with-hologram-of-digital-rings-vector.jpg"
              alt="..."
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/332/122/original/pink-shine-neon-casino-roulette-wheel-with-playing-cards-vector.jpg"
              alt="..."
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/010/338/non_2x/neon-casino-playing-cards-with-poker-chips-in-hologram-of-digital-rings-in-dark-empty-scene-vector.jpg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-row pl-2 pr-2 space-between pt-[20px]">
        <div className="mx-auto flex flex-row items-center container bg-[#271248]">
          <div className="w-4/6">
            <div className="m-[30px] flex flex-col items-center">
              <div className="flex flex-wrap w-full">
                <div className="w-[250px] inline-block m-auto border-box">
                  <img
                    className="w-[250px] h-[250px] rounded-lg"
                    src="https://media.pinkcasino.co.uk/images/games/sweet-bonanza/sweet-bonanza-square.jpg"
                    alt=""
                  />
                  <p className="text-center text-lg text-white">Sweet Bonanza</p>
                </div>
                <div className="w-[250px] inline-block m-auto border-box">
                  <img
                    className="w-[250px] h-[250px] rounded-lg"
                    src="https://media.pinkcasino.co.uk/images/games/sweet-bonanza/sweet-bonanza-square.jpg"
                    alt=""
                  />
                  <p className="text-center text-lg text-white">Sweet Bonanza</p>
                </div>
                <div className="w-[250px] inline-block m-auto border-box">
                  <img
                    className="w-[250px] h-[250px] rounded-lg"
                    src="https://media.pinkcasino.co.uk/images/games/sweet-bonanza/sweet-bonanza-square.jpg"
                    alt=""
                  />
                  <p className="text-center text-lg text-white">Sweet Bonanza</p>
                </div>
                <div className="w-[250px] inline-block m-auto border-box">
                  <img
                    className="w-[250px] h-[250px] rounded-lg"
                    src="https://media.pinkcasino.co.uk/images/games/sweet-bonanza/sweet-bonanza-square.jpg"
                    alt=""
                  />
                  <p className="text-center text-lg text-white">Sweet Bonanza</p>
                </div>
                <div className="w-[250px] inline-block m-auto border-box">
                  <img
                    className="w-[250px] h-[250px] rounded-lg"
                    src="https://media.pinkcasino.co.uk/images/games/sweet-bonanza/sweet-bonanza-square.jpg"
                    alt=""
                  />
                  <p className="text-center text-lg text-white">Sweet Bonanza</p>
                </div>
                <div className="w-[250px] inline-block m-auto border-box">
                  <img
                    className="w-[250px] h-[250px] rounded-lg"
                    src="https://media.pinkcasino.co.uk/images/games/sweet-bonanza/sweet-bonanza-square.jpg"
                    alt=""
                  />
                  <p className="text-center text-lg text-white">Sweet Bonanza</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[700px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
          <div className="w-2/6 h-[700px]">
            <div className="m-[30px]">
              <p className="text-center text-white uppercase text-lg">СЕЙЧАС ВЫИГРЫВАЮТ</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
