import React from "react";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="h-16 bg-blue-800 flex">
        <p className="m-auto font-semibold text-white">
          Сделано Субхаш Кумар Индия{" "}
          <a
            title="Github Link"
            href="https://github.com/dotsimplify"
            target="_blank"
          >
            <FaGithub className="inline text-3xl ml-4 hover:text-black" />
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
