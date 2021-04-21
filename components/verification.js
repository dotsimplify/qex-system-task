import React from "react";
import Link from "next/link";
const verification = () => {
  return (
    <>
      <div className="text-center min-h-screen flex justify-center items-center">
        <p className="font-semibold text-blue-700 text-2xl">
          Please Log in to visit this page
        </p>
        <Link href="/login">
          <a>
            <button className="m-2 p-2 border-2 border-black hover:bg-black hover:text-white">
              Log In
            </button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default verification;
