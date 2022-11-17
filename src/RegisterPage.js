import React from "react";
import './login.css';

function RegisterPage() {
    return (
    <div class="limiter">
		<div class="container__login">
			<div class="wrap__login">
				<form class="login__form validate-form p-l-55 p-r-55 p-t-178">
					<span class="login__title">
						Регистрация
					</span>

					<span class="login__text">
						Введите Имя
					</span>

					<div class="wrap__input validate__input m-b-16" data-validate="Введите Имя">
						<input class="input" type="text" name="firstname" placeholder="Иван"></input>
						<span class="focus__input"></span>
					</div>

					<span class="login__text">
						Введите Фамилию
					</span>

					<div class="wrap__input validate__input m-b-16" data-validate="Введите Фамилию">
						<input class="input" type="text" name="secondname" placeholder="Иванов"></input>
						<span class="focus__input"></span>
					</div>

                    <span class="login__text">
						Введите эл.почту или имя пользователя
					</span>

					<div class="wrap__input validate__input m-b-16" data-validate="Введите эл. почту или имя пользователя">
						<input class="input" type="text" name="login" placeholder="example@example.com"></input>
						<span class="focus__input"></span>
					</div>

                    <span class="login__text">
						Введите пароль
					</span>

					<div class="wrap__input validate__input" data-validate = "Введите пароль">
						<input class="input" type="password" name="pass" placeholder="***********"></input>
						<span class="focus__input"></span>
					</div>

					<span class="login__text">
						Повторите пароль
					</span>

					<div class="wrap__input validate__input" data-validate = "Введите пароль">
						<input class="input" type="password" name="pass" placeholder="***********"></input>
						<span class="focus__input"></span>
					</div>

					{/* <div class="text-right p-t-13 p-b-23">
						<a href="#" class="txt1">
                            Забыли пароль?
						</a>
					</div> */}

					<div class="container__button">
						<button class="login__button">
							Зарегистрироваться
						</button>
					</div>

					{/* <div class="container__signIn">
						<a href="#" class="txt2">
							Зарегистрироваться
						</a>
					</div> */}
				</form>
			</div>
		</div>
	</div>
    );
}

export default RegisterPage;