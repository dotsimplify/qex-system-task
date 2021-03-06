import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import DashNav from "./DashNav";
import Modal from "react-modal";
import Verification from "./verification";
const Dashboard = (props) => {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const logOut = async (e) => {
    try {
      setError("");
      await logout();
      router.push("/login");
    } catch (error) {
      setError("Error while logging out , Try again");
    }
  };
  Modal.setAppElement("#__next");
  return (
    <>
      {currentUser ? (
        <>
          <DashNav />
          <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
              <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                  <div className="flex items-center justify-center pt-6">
                    <svg
                      width="35"
                      height="30"
                      viewBox="0 0 256 366"
                      version="1.1"
                      preserveAspectRatio="xMidYMid"
                    >
                      <defs>
                        <linearGradient
                          x1="12.5189534%"
                          y1="85.2128611%"
                          x2="88.2282959%"
                          y2="10.0225497%"
                          id="linearGradient-1"
                        >
                          <stop
                            stopColor="#FF0057"
                            stopOpacity="0.16"
                            offset="0%"
                          ></stop>
                          <stop stopColor="#FF0057" offset="86.1354%"></stop>
                        </linearGradient>
                      </defs>
                      <g>
                        <path
                          d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                          fill="#001B38"
                        ></path>
                        <circle
                          fill="url(#linearGradient-1)"
                          transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                          cx="147.013244"
                          cy="147.014675"
                          r="78.9933938"
                        ></circle>
                        <circle
                          fill="url(#linearGradient-1)"
                          opacity="0.5"
                          transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                          cx="147.013244"
                          cy="147.014675"
                          r="78.9933938"
                        ></circle>
                      </g>
                    </svg>
                  </div>
                  <nav className="mt-6">
                    <div>
                      <a
                        className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
                        href="#"
                      >
                        <span className="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                          </svg>
                        </span>
                        <span className="mx-4 text-sm font-normal">
                          ?????????????????? ????????????
                        </span>
                      </a>
                      <a
                        className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                        href="#"
                        onClick={() => {
                          setOpenModal(true);
                        }}
                      >
                        <span className="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="m-auto"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                          </svg>
                        </span>
                        <span className="mx-4 text-sm font-normal">
                          ??????????????
                        </span>
                      </a>
                      <Modal
                        style={{
                          overlay: {
                            backgroundColor: "#000",
                          },
                        }}
                        isOpen={openModal}
                        onRequestClose={() => {
                          setOpenModal(false);
                        }}
                      >
                        <div className="flex">
                          <div className="m-auto">
                            <div className=" lg:text-5xl text-2xl font-bold text-red-800">
                              ???????????? ??????????????
                            </div>
                          </div>
                        </div>

                        <div className="flex mt-8">
                          <div className="m-auto text-xl text-blue-700 font-bold">
                            ?????????? ?????????????????????? ?????????? :{" "}
                            {currentUser && currentUser.email}
                          </div>
                        </div>
                        <div className="flex m-24">
                          <p className="m-auto text-xl text-gray-500 font-bold">
                            ?????????????? ?????????????? ??Esc??, ?????????? ?????????????????? ???? ????????????????
                            ???????????? ????????????????????, ?????? ???????????????? ?????? ??????????????
                            ??????????????????.
                          </p>
                        </div>
                      </Modal>

                      <button
                        className="w-full font-thin uppercase text-gray-500 cursor-pointer dark:text-gray-200 flex items-center p-4 my-2 focus:outline-none transition-colors duration-200 justify-start hover:text-blue-500"
                        onClick={logOut}
                      >
                        <span className="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="m-auto"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
                          </svg>
                        </span>
                        <span className="mx-4 text-sm font-normal">??????????</span>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-0">
                  <div className="relative z-0 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                      <div className="container relative left-0 z-0 flex w-3/4 h-auto h-full">
                        <div className="relative flex items-center w-full lg:w-64 h-full group">
                          <div className="absolute z-0 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                            <svg
                              fill="none"
                              className="relative w-5 h-5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <svg
                            className="absolute left-0 z-0 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                          </svg>
                          <input
                            type="text"
                            className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                            placeholder="??????????"
                          />
                          <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                            +
                          </div>
                        </div>
                      </div>
                      <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                        <span className="text-blue-700 font-semibold">
                          {currentUser && currentUser.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                  <div className="flex flex-col flex-wrap sm:flex-row ">
                    {props.data.news.articles.map((news) => (
                      <div key={news.url} className="w-full sm:w-1/2 xl:w-1/3">
                        <div className="m-2">
                          <div className="shadow-lg m-2 rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                            <img
                              className="rounded-lg"
                              src={news.urlToImage}
                              alt={news.title}
                            />
                            <a href={news.url} target="_blank">
                              <p className="break-words font-semibold text-xl hover:text-blue-600">
                                {news.title}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <Verification />
      )}
    </>
  );
};

export default Dashboard;
