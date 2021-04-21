import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage(
        "Пожалуйста, проверьте свою электронную почту, чтобы сбросить пароль"
      );
      emailRef.current.value = "";
    } catch (error) {
      setError("не удалось сбросить пароль");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 grid-flow-row bg-gradient-to-r from-pink-50 via-purple-50 to-gray-50  ">
        <div className="flex ">
          <div className="m-auto">
            <img
              data-aos="fade-right"
              src="/pass.svg"
              className="rounded-lg w-96"
              alt="News photo"
            />
          </div>
        </div>
        <div data-aos="fade-left" className="m-4 mt-4 mb-0 p-8">
          <div className="m-auto rounded-lg mt-2 p-4 mb-8">
            <h2 className="font-bold text-4xl m-8 mt-0 ml-2 text-blue-800 ">
              Сброс пароля
            </h2>
            {error && (
              <span className=" text-blue-500 text-xl font-semibold">
                {error}
              </span>
            )}
            {message && (
              <span className=" text-green-600 text-xl font-semibold">
                {message}
              </span>
            )}
            <form onSubmit={handleSubmit}>
              <div className="m-2">
                <label
                  htmlFor="name"
                  className="text-lg m-2 ml-0 text-gray-500 font-semibold"
                >
                  Адрес электронной почты
                </label>
                <input
                  required
                  type="text"
                  placeholder="Введите ваш адрес электронной почты"
                  name="name"
                  ref={emailRef}
                  className="block focus:outline-none focus:border-gray-600 w-96 m-2 ml-0 p-4 h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>
              <button
                disabled={loading}
                id="submit"
                type="submit"
                className="focus:outline-none p-2 m-4 border-2 border-red-700 hover:bg-white hover:text-black bg-red-700 font-semibold text-white rounded-lg"
              >
                Сброс пароля
              </button>
              <span>Есть пароль?</span>
              <Link href="/login">
                <a
                  id="login"
                  className=" m-4 hover:text-blue-800 text-blue-600 font-semibold t rounded-lg"
                >
                  Авторизуйтесь здесь
                </a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
