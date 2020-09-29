import React from "react";

export const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a href="/#" className="nav-link">
            Преимущества
          </a>
        </li>
        <li>
          <a href="/#" className="nav-link">
            Услуги
          </a>
        </li>
        <li>
          <a href="/#" className="nav-link">
            Автолайки
          </a>
        </li>
        <li>
          <a href="/#" className="nav-link">
            Как это работает?
          </a>
        </li>
        <li>
          <a href="/#" className="nav-link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
