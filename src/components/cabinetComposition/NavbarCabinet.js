import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

export const NavbarCabinet = () => {
  const logOutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    window.location.href = "/";
  };
  return (
    <nav className="cabinet-nav">
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <a href="/#" onClick={(e) => logOutHandler(e)}>
            Выйти
          </a>
        </li>
      </ul>
    </nav>
  );
};
