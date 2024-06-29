import { GoogleIcon } from "@/icons/svgIcons";
import { Checkbox, Label, Modal, Navbar } from "flowbite-react";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import RegisterModal from "../RegisterModal";
import LoginModal from "../LoginModal";

function NavBar(): JSX.Element {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  function handleOpenRegisterModal() {
    setOpenRegisterModal(true);
  }

  function handleOpenLoginModal() {
    setOpenLoginModal(true);
  }

  return (
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
            onClick={handleOpenRegisterModal}
            type="button"
            className="text-white bg-gradient-to-r border border-blue-700 hover:bg-blue-800 from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Регистрация
          </button>
          <button
            onClick={handleOpenLoginModal}
            type="button"
            className="text-white bg-gradient-to-r border border-blue-700 hover:bg-blue-800 from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Вход
          </button>
        </Navbar.Collapse>
      </Navbar>
      <RegisterModal openModal={openRegisterModal} setOpenModal={setOpenRegisterModal} openLoginModal={handleOpenLoginModal} />
      <LoginModal openModal={openLoginModal} setOpenModal={setOpenLoginModal} openRegisterModal={handleOpenRegisterModal} />
    </div>
  );
}

export default NavBar;
