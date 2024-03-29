import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";
import "../App.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ minWidth: "310px", background: "#799DE4" }}
    >
      <Container>
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              width={70}
              style={{ filter: "brightness(10000%)", marginTop: "-4.5px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link active" to="/events">
              Мероприятия
            </Link>
            <Link className="nav-link active" to="/sets">
              Подборки
            </Link>
            <Link className="nav-link active" to="/find">
              Подбор мероприятия
            </Link>
            <Link className="nav-link active" to="/my">
              Управление мероприятиями
            </Link>
          </Nav>
          <Nav>
            {sessionStorage.getItem("token") ? (
              <Link className="nav-link active" to="/profile">
                Профиль
              </Link>
            ) : (
              <>
                <Link className="nav-link active" to="/login">
                  Войти
                </Link>
                <Link className="nav-link active" to="/register">
                  Зарегистрироваться
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
