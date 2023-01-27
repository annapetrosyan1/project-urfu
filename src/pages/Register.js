import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleUser = (key, value) => {
    const obj = { ...user };
    obj[key] = value;
    setUser(obj);
  };

  const onSubmit = async () => {
    const obj = { ...user };
    obj.sex = "sex";
    obj.last_name = obj.surname;
    obj.username = obj.email;
    console.log(obj);
    const response = await fetch("http://46.48.59.66:2222/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    });
    navigate("/login");
  };

  return (
    <div class="limiter">
      <div class="container__login">
        <div class="wrap__login">
          <div class="login__form validate-form p-l-55 p-r-55 p-t-178">
            <span class="login__title">Регистрация</span>

            <span class="login__text">Введите Имя</span>

            <div
              class="wrap__input validate__input m-b-16"
              data-validate="Введите Имя"
            >
              <input
                onChange={(e) => handleUser("name", e.target.value)}
                class="input"
                type="text"
                name="firstname"
                placeholder="Иван"
              ></input>
              <span class="focus__input"></span>
            </div>

            <span class="login__text">Введите Фамилию</span>

            <div
              class="wrap__input validate__input m-b-16"
              data-validate="Введите Фамилию"
            >
              <input
                onChange={(e) => handleUser("surname", e.target.value)}
                class="input"
                type="text"
                name="secondname"
                placeholder="Иванов"
              ></input>
              <span class="focus__input"></span>
            </div>

            <span class="login__text">
              Введите эл.почту или имя пользователя
            </span>

            <div
              class="wrap__input validate__input m-b-16"
              data-validate="Введите эл. почту"
            >
              <input
                onChange={(e) => handleUser("email", e.target.value)}
                class="input"
                type="text"
                name="login"
                placeholder="example@example.com"
              ></input>
              <span class="focus__input"></span>
            </div>

            <span class="login__text">Введите пароль</span>

            <div
              class="wrap__input validate__input"
              data-validate="Введите пароль"
            >
              <input
                onChange={(e) => handleUser("password", e.target.value)}
                class="input"
                type="password"
                name="pass"
                placeholder="***********"
              ></input>
              <span class="focus__input"></span>
            </div>

            <span class="login__text">Повторите пароль</span>

            <div
              class="wrap__input validate__input"
              data-validate="Введите пароль"
            >
              <input
                class="input"
                type="password"
                name="pass"
                placeholder="***********"
              ></input>
              <span class="focus__input"></span>
            </div>
            <div class="container__button">
              <button onClick={onSubmit} class="login__button">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
