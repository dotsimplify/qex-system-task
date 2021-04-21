import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
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
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/dashboard");
    } catch (error) {
      setError("не удалось войти");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row bg-gradient-to-r from-pink-50 via-purple-50 to-gray-50 ">
        <div className="flex ">
          <div className="m-auto">
            <img
              data-aos="fade-right"
              src="/news.svg"
              className="rounded-lg w-96"
              alt="News photo"
            />
          </div>
        </div>
        <div data-aos="fade-left" className="m-4 mt-4 mb-0 p-8">
          <div className="m-auto rounded-lg mt-2 p-4 mb-8">
            <h2 className="font-bold text-4xl m-4 mt-0 ml-0 text-blue-800 ">
              Авторизоваться
            </h2>
            {error && (
              <span className=" text-red-700 text-xl font-bold">{error}</span>
            )}
            <form onSubmit={handleSubmit}>
              <div className="m-2">
                <label
                  htmlFor="name"
                  className="text-lg m-2 ml-0 text-gray-700 font-semibold"
                >
                  Адрес электронной почты
                </label>
                <input
                  required
                  type="text"
                  placeholder="Введите ваш адрес электронной почты"
                  name="name"
                  ref={emailRef}
                  className="block focus:outline-none focus:border-blue-600 w-96 m-2 ml-0 p-4 h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>
              <div className="m-2">
                <label
                  htmlFor="name"
                  className="text-lg m-2 ml-0 text-gray-700 font-semibold"
                >
                  Пароль
                </label>
                <input
                  required
                  type="password"
                  name="passsword"
                  ref={passwordRef}
                  placeholder="Введите свой пароль"
                  className="block focus:outline-none focus:border-blue-600 w-96 m-2 ml-0 p-4 h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>
              <button
                disabled={loading}
                id="submit"
                type="submit"
                className="focus:outline-none p-2 m-4 border-2 border-blue-700 hover:bg-white hover:text-black bg-blue-700 font-semibold text-white rounded-lg"
              >
                Авторизоваться
              </button>
              <span>забыл пароль ?</span>
              <Link href="/reset">
                <a
                  id="login"
                  className=" m-4 hover:text-blue-800 text-blue-600 font-semibold t rounded-lg"
                >
                  Сброс пароля
                </a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
