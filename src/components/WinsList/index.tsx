import * as React from "react";
import { useState, useEffect } from "react";

function WinsList(): JSX.Element {
  const randomEmailDomains = ["gmail.com", "yahoo.com", "outlook.com", "mail.ru", "hotmail.com"];

  const getRandomEmail = () => {
    const prefixLength = Math.floor(Math.random() * 4) + 2;
    const domain = randomEmailDomains[Math.floor(Math.random() * randomEmailDomains.length)];
    const prefix = Array(prefixLength).fill(0).map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
    return `${prefix}***@${domain}`;
  };

  const getRandomAmount = () => {
    return Math.floor(Math.random() * 9901) + 100;
  };

  const generateWinners = () => {
    return Array.from({ length: 5 }, () => ({
      email: getRandomEmail(),
      amount: getRandomAmount()
    }));
  };

  const [winners, setWinners] = useState(generateWinners);

  useEffect(() => {
    const interval = setInterval(() => {
      setWinners(generateWinners());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block lg:w-2/6">
      <div className="m-[30px]">
        <p className="text-center text-white uppercase text-lg">
          СЕЙЧАС ВЫИГРЫВАЮТ
        </p>
      </div>
      <div className="flow-root pr-4 pl-4">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {winners.map((winner, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm text-white truncate dark:text-gray-400">
                    {winner.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-[#D4B044] dark:text-white">
                  ${winner.amount}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WinsList;
