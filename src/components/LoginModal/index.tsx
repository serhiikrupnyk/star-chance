import signIn from "@/firebase/auth/signIn";
import signInWithGoogle from "@/firebase/auth/signInWithGoogle";
import { GoogleIcon } from "@/icons/svgIcons";
import { Modal } from "flowbite-react";
import * as React from "react";
import { useState } from "react";

interface LoginModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  openRegisterModal: () => void;
}

function LoginModal({ openModal, setOpenModal, openRegisterModal }: LoginModalProps): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Attempt to sign in with provided email and password
    const { result, error } = await signIn(email, password);
    setOpenModal(false);

    if (error) {
      // Display and log any sign-in errors
      console.log(error);
      return;
    }
  };

  const handleSignInWithGoogle = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    // Attempt to sign up with provided Google
    const { result, error } = await signInWithGoogle();
    setOpenModal(false);

    if (error) {
      // Display and log any sign-up errors
      console.log(error);
      return;
    }
  };

  function onCloseModal() {
    setOpenModal(false);
  }

  function handleOpenRegisterModal() {
    setOpenModal(false);
    openRegisterModal();
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
          Вход
        </h3>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              id="email"
              className="bg-[#271248] text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите почту"
              required
            />
          </div>
          <div className="mb-5">
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              className="bg-[#271248] text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo block w-full p-2.5"
              placeholder="Введите пароль"
              required
            />
          </div>
          <div className="flex justify-between mb-[20px]">
            <a
              href="#"
              className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
            >
              Забыли пароль?
            </a>
          </div>
          <div className="flext flex-col items-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Войти
            </button>
            <p className="text-white text-sm w-full text-center mt-[10px] mb-[10px]">
              или
            </p>
            <button
              onClick={handleSignInWithGoogle}
              type="submit"
              className="text-white mb-5 border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Войти через <GoogleIcon />
            </button>
              <p onClick={handleOpenRegisterModal} className="text-sm w-full cursor-pointer text-center text-cyan-700 hover:underline dark:text-cyan-500">
                Нет аккаунта?
              </p>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-[#200F39] b-rounded"></Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
