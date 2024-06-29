import { VisaIcon, MasterCardIcon, PiastrixIcon, EthereumIcon, BitcoinLogo } from "@/icons/svgIcons";
import * as React from "react";

function Footer(): JSX.Element {
  return (
    <footer className="bg-[#12081e] text-white mx-auto shadow pl-8 pr-8 dark:bg-gray-900">
      <div className="w-full  p-4 md:py-8">
        <div className="flex flex-col sm:flex items-center sm:justify-between pb-[30px]">
          <p className="text-1xl font-semibold whitespace-nowrap dark:text-white pb-[15px]">
            Платежные методы
          </p>
          <div className="flex">
            <div className="inline-block mr-[20px]">
              <VisaIcon />
            </div>
            <div className="inline-block mr-[20px]">
              <MasterCardIcon />
            </div>
            <div className="inline-block mr-[20px]">
              <PiastrixIcon />
            </div>
            <div className="inline-block mr-[20px]">
              <EthereumIcon />
            </div>
            <div className="inline-block mr-[20px]">
              <BitcoinLogo />
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="./favicon.ico" className="h-8" alt="Star Chance Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Star Chance
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Политика конфиденциальности
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Политика ответственной игры
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Правила и условия
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Star Chance™
          </a>
          . Все права защищены.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
