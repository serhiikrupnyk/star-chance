"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import * as React from "react";

function Page(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="relative pt-[79px] flex flex-row pl-2 pr-2 space-between pt-[20px] pb-[5px]">
        <div className="mx-auto flex flex-row container">
          <div className="w-full p-6 bg-[#301F49] text-[#DFDFDF] border border-[#200F39] rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-[#DFDFDF] dark:text-white">
              КОНТАКТЫ
            </h5>
            <p className="mb-3 font-normal text-[#DFDFDF] dark:text-gray-400">
            AllianceJet Ltd.
            </p>
            <p className="mb-3 font-normal text-[#DFDFDF] dark:text-gray-400">
            Portomaso Marina The Quay, Unit 5 St. Julians,
            </p>
            <p className="mb-3 font-normal text-[#DFDFDF] dark:text-gray-400">
            STJ 4011, MALTA
            </p>
            <p className="mb-3 font-normal text-[#DFDFDF] dark:text-gray-400">
            Компания полностью лицензируется и регулируется GJV Tradegroup Ltd, номер лицензии: 8051/QRZ2017-040, действительна до 15 августа 2025 года.
            </p>
            <p className="mb-3 font-normal cursor-pointer text-[#DFDFDF] dark:text-gray-400">
            gjvtradegroup@gmail.com
            </p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <p className="mb-3 font-normal cursor-pointer text-[#D4B044] dark:text-gray-400">
            Платежный провайдер iBSJ Limited,
            </p>
            <p className="mb-3 font-normal cursor-pointer text-[#D4B044] dark:text-gray-400">
            регистрационный номер: HE 4562841
            </p>
            <p className="mb-3 font-normal cursor-pointer text-[#D4B044] dark:text-gray-400">
            21 Scharlooweg,
            </p>
            <p className="mb-[300px] font-normal cursor-pointer text-[#D4B044] dark:text-gray-400">
            Willemstad, Curaçao
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
