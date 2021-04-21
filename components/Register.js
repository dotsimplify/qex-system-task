import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";
const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value.length < 7) {
      return setError("Пароль должен состоять не менее чем из 7 символов.");
    }
    if (passwordRef.current.value != confPasswordRef.current.value) {
      return setError("Пароль не подходит");
    }
    try {
      setError("");
      setMessage("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setMessage("Регистрация прошла успешно !! Пожалуйста, войдите");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confPasswordRef.current.value = "";
    } catch (error) {
      setError("не удалось создать пользователя");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row bg-gradient-to-r from-pink-50 via-purple-50 to-gray-50  ">
        <div className="flex ">
          <div data-aos="fade-right" className="p-4 m-8 mb-2">
            <h2 className="text-3xl  font-bold m-4 mb-2  p-2">
              Будьте в курсе последних новостей !!
            </h2>
            <div className="font-semibold text-lg  m-4 mt-0 p-2">
              Узнавайте все о событиях в мире, деловых новостях и всех
              обновлениях одним щелчком мыши.
              <p className="m-4 ml-0 text-gray-800 text-sm">
                <HiOutlineBadgeCheck className="inline m-2 text-green-600 text-2xl" />
                Получайте последние новости о политике, бизнесе и фондовой
                бирже.
              </p>
              <p className="m-4 ml-0 text-gray-800 text-sm">
                <HiOutlineBadgeCheck className="inline m-2 text-green-600 text-2xl" />
                Не пропустите важные обновления в нашей ленте .
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="m-4 mt-4 mb-0 p-8">
          <div className="m-auto rounded-lg mt-2 p-4 mb-8">
            <h2 className="font-bold text-3xl m-4 mt-0 ml-0 text-blue-800 ">
              Зарегистрироваться
            </h2>
            {error && (
              <span className=" text-red-700 text-xl font-semibold">
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
              <div className="m-2">
                <label
                  htmlFor="name"
                  className="text-lg m-2 ml-0 text-gray-700 font-semibold"
                >
                  Подтвердить Пароль
                </label>
                <input
                  required
                  type="password"
                  name="confirmPasssword"
                  ref={confPasswordRef}
                  placeholder="Еще раз введите свой пароль"
                  className="block focus:outline-none focus:border-blue-600 w-96 m-2 ml-0 p-4 h-12 border-2 border-gray-300 rounded-lg"
                />
              </div>
              <button
                disabled={loading}
                id="submit"
                type="submit"
                className="focus:outline-none p-2 m-4 border-2 border-blue-700 hover:bg-white hover:text-black bg-blue-700 font-semibold text-white rounded-lg"
              >
                Зарегистрироваться
              </button>
              <p className="m-4">
                <span>Уже зарегистрирован ?</span>
                <Link href="/login">
                  <a
                    id="login"
                    className=" m-4 hover:text-blue-800 text-blue-600 font-semibold t rounded-lg"
                  >
                    Авторизуйтесь здесь
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
