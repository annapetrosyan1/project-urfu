import React from 'react';
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Footer() {
    return(
        <footer  className="footer mt-5 minW"
            style={{
            width: "100%",
            height: "195px",
            overflow: "hidden",
            background: "#799DE4",
            }}
        >
        <Container>
            <nav className="navbar navbar-expand-lg navbar-dark d-block ">
                <ul
                    className="navbar-nav d-flex justify-content-between align-items-center "
                    style={{ height: "180px" }}
                >
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">
                        <img
                        src={logo}
                        alt="logo"
                        width={70}
                        style={{ filter: "brightness(10000%)" }}
                        />
                    </Link>
                    </li>
                </ul>
            </nav>
        </Container>
        </footer>
    );
}

export default Footer;
