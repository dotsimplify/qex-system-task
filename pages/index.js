import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-hero bg-cover min-h-screen">
        <p className="lg:text-5xl text-xl py-2  font-bold text-blue-900 flex flex-row-reverse lg:p-12 content-end">
          Нет времени читать новости?
        </p>
        <p className="text-xl px-4 font-bold text-red-900 flex flex-row-reverse lg:px-24 pb-4 content-end">
          Читайте новости одним щелчком мыши.
        </p>
        <p className="text-xl font-bold text-red-900 flex flex-row-reverse lg:px-20s px-4 content-end">
          Или во время прогулки, или во время чаепития.
        </p>
        <div className="flex flex-row-reverse lg:px-28 px-4 content-end py-4">
          <Link href="/register">
            <a>
              <button className="text-xl font-bold p-4 bg-blue-700 rounded-lg text-white border-2 border-blue-700 hover:bg-white hover:text-black focus:outline-none">
                нажмите, чтобы посмотреть
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
