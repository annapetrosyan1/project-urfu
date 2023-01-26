import React from "react";
import "./login.css";

function Login() {
  const onSubmit = async () => {
    const response = await fetch("http://46.48.59.66:2222/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ username: "test007@mail.ru", password: "blzrov" }),
    });
    const result = await response.json();
    sessionStorage.setItem("token", result.access_token[0]);
  };
  return (
    <div class="limiter">
      <div class="container__login">
        <div class="wrap__login">
          <div
            // action="http://46.48.59.66:2222/login"
            // method="POST"
            class="login__form validate-form p-l-55 p-r-55 p-t-178"
          >
            <span class="login__title">Вход</span>

            <span class="login__text">Введите эл.почту</span>

            <div
              class="wrap__input validate__input m-b-16"
              data-validate="Введите эл. почту или имя пользователя"
            >
              <input
                class="input"
                type="text"
                name="username"
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
                class="input"
                type="password"
                name="password"
                placeholder="***********"
              ></input>
              <span class="focus__input"></span>
            </div>

            <div class="text-right p-t-13 p-b-23">
              <a href="#" class="txt1">
                Забыли пароль?
              </a>
            </div>

            <div onClick={onSubmit} class="container__button">
              <button class="login__button">Войти</button>
            </div>

            <div class="container__signIn">
              <a href="#" class="txt2">
                Зарегистрироваться
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
