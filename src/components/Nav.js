import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import logo from '../logo.svg';

function Nav() {
    return(
        <div className="header">
            <nav className="navbar">
              <div className="container-navbar">
                <a className="navbar-logo" href="/">
                  <img
                    src={logo}
                    alt="logo"
                    width={50}
                    style={{ filter: "brightness(10000%)" }}
                  />
                </a>                
                <ul>
                  {/* временно */}
                  <li className='nav__item'><a href='/events'>Мероприятия</a></li>
                  <li className='nav__item'><a href='/sets'>Подборки</a></li>
                  <li className='nav__item'><a href='/find'>Подбор мероприятия</a></li>
                  <li className='nav__item'><a href='/login'>Войти</a></li>
                  <li className='nav__item'><a href='/register'>Зарегистрироваться</a></li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Nav;