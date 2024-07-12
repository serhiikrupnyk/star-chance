"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import useAllUsersData from "@/hooks/useAllUsersData";
import useUserData from "@/hooks/useUserData";
import { Table, Pagination } from "flowbite-react";
import { redirect } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ITEMS_PER_PAGE = 6;

function Page(): JSX.Element {
  const { user, userData } = useUserData();
  const { allUsersData } = useAllUsersData();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, [user]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredUsers = allUsersData?.filter((user) =>
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = filteredUsers
    ? Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)
    : 1;

  const currentPageUsers = filteredUsers?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <Toaster position="top-right" />
      <NavBar />
      <div className="relative pt-[79px] flex flex-row flex-[1] pl-2 pr-2 space-between pt-[20px] pb-[5px]">
        <div className="mx-auto flex flex-row container">
          <div className="w-full p-6 bg-[#301F49] text-[#DFDFDF] border border-[#200F39] rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl text-center uppercase font-bold tracking-tight text-[#DFDFDF] dark:text-white">
              Все пользователи
            </h5>
            <form>
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative dark">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-indigo-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Поиск пользователя по логину"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </form>
            <div className="dark mt-10">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Логин</Table.HeadCell>
                  <Table.HeadCell>Имя</Table.HeadCell>
                  <Table.HeadCell>Фамилия</Table.HeadCell>
                  <Table.HeadCell>Почта</Table.HeadCell>
                  <Table.HeadCell>Номер</Table.HeadCell>
                  <Table.HeadCell>Баланс</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {currentPageUsers?.map((user) => (
                    <Table.Row
                      key={user.login}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {user.login}
                      </Table.Cell>
                      <Table.Cell>{user.firstName}</Table.Cell>
                      <Table.Cell>{user.lastName}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>{user.phoneNumber}</Table.Cell>
                      <Table.Cell>{user.balance}</Table.Cell>
                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Задать баланс
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
            <div className="dark flex overflow-x-auto sm:justify-center mt-5">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                showIcons
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
