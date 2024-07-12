"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import useUserData from "@/hooks/useUserData";
import { setUser } from "@/utils/user";
import { CustomFlowbiteTheme, Label, TextInput } from "flowbite-react";
import { redirect } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Page(): JSX.Element {
  const { user, userData } = useUserData();
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, [user]);

  const [login, setLogin] = useState(userData?.login || "");
  const [firstName, setFirstName] = useState(userData?.firstName || "");
  const [lastName, setLastName] = useState(userData?.lastName || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber || "");

  const saveUserInfo = async () => {
    const notification = toast.loading("Подождите...");
    if (user) {
      try {
        const newUserData = {
          login,
          firstName,
          lastName,
          email,
          phoneNumber,
        };

        await setUser(user.uid, newUserData);
        toast.success("Данные успешно обновлены!", {
          id: notification,
        });
        setIsChanged(false);
      } catch (error) {
        toast.error("Произошла ошибка!", {
          id: notification,
        });
        console.error("Error saving user info:", error);
      }
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
      setIsChanged(true);
    };

  useEffect(() => {
    setLogin(userData?.login || "");
    setFirstName(userData?.firstName || "");
    setLastName(userData?.lastName || "");
    setEmail(userData?.email || "");
    setPhoneNumber(userData?.phoneNumber || "");
    setIsChanged(false);
  }, [userData]);

  return (
    <>
      <Toaster position="top-right" />
      <NavBar />
      <div className="relative pt-[79px] flex flex-row flex-[1] pl-2 pr-2 space-between pt-[20px] pb-[5px]">
        <div className="mx-auto flex flex-row container">
          <div className="w-full p-6 bg-[#301F49] text-[#DFDFDF] border border-[#200F39] rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl text-center uppercase font-bold tracking-tight text-[#DFDFDF] dark:text-white">
              личный кабинет
            </h5>
            <div className="dark grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Логин" />
                </div>
                <TextInput
                  value={login}
                  onChange={handleInputChange(setLogin)}
                  id="base"
                  type="text"
                  sizing="md"
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Имя" />
                </div>
                <TextInput
                  value={firstName}
                  onChange={handleInputChange(setFirstName)}
                  id="base"
                  type="text"
                  sizing="md"
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Фамилия" />
                </div>
                <TextInput
                  value={lastName}
                  onChange={handleInputChange(setLastName)}
                  id="base"
                  type="text"
                  sizing="md"
                />
              </div>
            </div>
            <div className="dark grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Почта" />
                </div>
                <TextInput
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  id="base"
                  type="text"
                  sizing="md"
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Телефон" />
                </div>
                <TextInput
                  value={phoneNumber}
                  onChange={handleInputChange(setPhoneNumber)}
                  id="base"
                  type="text"
                  sizing="md"
                />
              </div>
            </div>
            <button
              onClick={() => {
                setLogin(userData?.login || "");
                setFirstName(userData?.firstName || "");
                setLastName(userData?.lastName || "");
                setEmail(userData?.email || "");
                setPhoneNumber(userData?.phoneNumber || "");
                setIsChanged(false);
              }}
              disabled={!isChanged}
              type="button"
              className="py-2.5 px-5 me-2 mb-2 w-full sm:w-auto text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-100 disabled"
            >
              Сбросить
            </button>
            <button
              onClick={saveUserInfo}
              disabled={!isChanged}
              type="button"
              className="focus:outline-none w-full sm:w-auto text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
