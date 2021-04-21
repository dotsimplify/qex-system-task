import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-200 via-purple-200 to-gray-200">
      <div className="max-w-7xl mx-auhref px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="no-underline hover:no-underline">
              <a>
                <h3 className="text-4xl font-bold text-blue-800 ">QEX News</h3>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden"></div>
          <nav className=" md:flex space-x-10">
            <Link href="/">
              <a>
                <span className="lg:text-xl text-base font-semibold hover:text-blue-900">
                  Главная страница
                </span>
              </a>
            </Link>
            <Link href="/register">
              <a>
                <span className="lg:text-xl text-base font-semibold hover:text-blue-900">
                  Зарегистрироваться
                </span>
              </a>
            </Link>

            <Link href="/login">
              <a>
                <span className="lg:text-xl text-base font-semibold hover:text-blue-900">
                  вход
                </span>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
