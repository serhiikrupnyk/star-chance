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
  const [activeTab, setActiveTab] = useState("withdraw");

  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, [user]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Toaster position="top-right" />
      <NavBar />
      <div className="relative pt-[79px] flex flex-row flex-[1] pl-2 pr-2 space-between pt-[20px] pb-[5px]">
        <div className="mx-auto flex flex-row container">
          <div className="w-full p-6 bg-[#301F49] text-[#DFDFDF] border border-[#200F39] rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-around">
              <h5
                className={`mb-2 text-2xl text-center uppercase cursor-pointer font-bold tracking-tight text-[#DFDFDF] dark:text-white ${activeTab === "withdraw" ? "underline" : ""}`}
                onClick={() => handleTabClick("withdraw")}
              >
                вывести средства
              </h5>
              <h5
                className={`mb-2 text-2xl text-center uppercase cursor-pointer font-bold tracking-tight text-[#DFDFDF] dark:text-white ${activeTab === "history" ? "underline" : ""}`}
                onClick={() => handleTabClick("history")}
              >
                история выводов
              </h5>
            </div>
            <div className="mt-4">
              {activeTab === "withdraw" && (
                <div>
                  <p className="text-center">Контент для вывода средств</p>
                </div>
              )}
              {activeTab === "history" && (
                <div>
                  <p className="text-center">Контент для истории вывода средств</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
