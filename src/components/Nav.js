import React from 'react';

function Nav() {
    return(
        <div className="header">
      <section>
        <nav className="navbar">
          <div className="container-navbar">
            <a className="navbar-logo" src="#">
              <img
                src='./logo.png'
                alt="logo"
                width={50}
                style={{ filter: "brightness(10000%)" }}
              />
            </a>
            <div className="navbar__menu" id="navbarNav">
              <ul className="navbar-items">
                <li className="nav__item">
                  <a className="nav__link active" src="/">
                    Мероприятия
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link active" src="/">
                    Подборки
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link active" src="/">
                    Подобрать мероприятие
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
    )
}

export default Nav;