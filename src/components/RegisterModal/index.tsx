import { GoogleIcon } from "@/icons/svgIcons";
import { Modal, Checkbox, Label } from "flowbite-react";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

interface RegisterModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  openLoginModal: () => void;
}

function RegisterModal({
  openModal,
  setOpenModal,
  openLoginModal,
}: RegisterModalProps): JSX.Element {
  function onCloseModal() {
    setOpenModal(false);
  }

  function handleOpenLoginModal() {
    setOpenModal(false);
    openLoginModal();
  }

  return (
    <Modal
      className="rounded-[50px]"
      show={openModal}
      size="md"
      onClose={onCloseModal}
      popup
    >
      <Modal.Header className="bg-[#200F39]"></Modal.Header>
      <Modal.Body className="bg-[#200F39]">
        <h3 className="text-bold uppercase text-xl text-white text-center mb-5">
          Регистрация
        </h3>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <input
              type="text"
              id="login"
              className="bg-[#271248] text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите логин"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              id="email"
              className="bg-[#271248] text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите почту"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              id="firstName"
              className="bg-[#271248] text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите имя"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              id="lastName"
              className="bg-[#271248] text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите фимилию"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Введите дату рождения
            </label>
            <input
              type="date"
              id="date"
              className="bg-[#271248] text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите дату рождения"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              id="phone"
              className="bg-[#271248] text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите номер телефона"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              className="bg-[#271248] text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите пароль"
              required
            />
          </div>
          <div className="flex justify-between mb-[20px]">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-white">
                Мне есть 18 лет
              </Label>
            </div>
          </div>
          <div className="flext flex-col items-center">
            <button
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Зарегистрироваться
            </button>
            <p className="text-white text-sm w-full text-center mt-[10px] mb-[10px]">
              или
            </p>
            <button
              type="submit"
              className="text-white mb-5 border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Зарегистрироваться через <GoogleIcon />
            </button>
            <p
              onClick={handleOpenLoginModal}
              className="text-sm w-full cursor-pointer text-center text-cyan-700 hover:underline dark:text-cyan-500"
            >
              Уже есть аккаунт?
            </p>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-[#200F39] b-rounded"></Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;
