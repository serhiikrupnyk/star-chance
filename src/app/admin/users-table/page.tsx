"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import useAllUsersData from "@/hooks/useAllUsersData";
import { UserData } from "@/types/users";
import { Table, Pagination, Modal, Button, TextInput } from "flowbite-react";
import { redirect } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiCurrencyDollar, HiOutlineExclamationCircle } from "react-icons/hi";

const Page = (): JSX.Element => {
  const {
    user,
    allUsersData,
    totalPages,
    currentPage,
    setPage,
    handleSearchChange,
    updateUserBalance,
  } = useAllUsersData();

  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, [user]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedModalUser, setSelectedModalUser] = useState<UserData | null>(
    null
  );
  const [newBalance, setNewBalance] = useState("");

  const onPageChange = (page: number) => setPage(page);

  const onOpenBalanceModal = (
    event: { preventDefault: () => void },
    user: UserData
  ) => {
    event.preventDefault();
    setSelectedModalUser(user);
    setNewBalance(user.balance.toString());
    setOpenModal(true);
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBalance(e.target.value);
  };

  const onSubmitNewBalance = async () => {
    if (selectedModalUser) {
      const parsedBalance = parseFloat(newBalance);
      if (!isNaN(parsedBalance)) {
        await updateUserBalance(selectedModalUser.login, parsedBalance);
        toast.success(
          `Баланс користувача ${selectedModalUser.login} оновлено!`
        );
      } else {
        toast.error("Введіть коректне значення балансу.");
      }
      setOpenModal(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <NavBar />
      <div className="bg-[#111827] relative pt-[79px] flex flex-row flex-[1] pl-2 pr-2 space-between pt-[20px] pb-[5px]">
        <div className="bg-[#111827] mx-auto flex flex-row container">
          <div className="w-full p-6 bg-[#111827] text-[#DFDFDF] border border-[#200F39] rounded-lg dark:bg-gray-800 dark:border-gray-700">
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
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
            </form>
            <div className="dark mt-10">
              <Modal
                className="dark"
                show={openModal}
                size="md"
                onClose={() => setOpenModal(false)}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Задать баланс пользователю {selectedModalUser?.login}
                    </h3>
                    <TextInput
                      className="mb-5"
                      type="text"
                      rightIcon={HiCurrencyDollar}
                      value={newBalance}
                      onChange={handleBalanceChange}
                    />
                    <div className="flex justify-center gap-4">
                      <Button onClick={onSubmitNewBalance}>{"Задать"}</Button>
                      <Button color="gray" onClick={() => setOpenModal(false)}>
                        Отмена
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
              {allUsersData === null ? (
                <p>Loading...</p>
              ) : (
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
                    {allUsersData?.map((user) => (
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
                            onClick={(e) => {
                              onOpenBalanceModal(e, user);
                            }}
                            className="cursor-pointer font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                          >
                            Задать баланс
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              )}
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
    </>
  );
};

export default Page;
