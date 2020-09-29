import React from "react";
import { Link } from "react-router-dom";
export const AdminNavbar = () => {
  return (
    <div className="navbar-cabinet">
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/panel/orders">Заказы</Link>
          </li>
          <li>
            <Link to="/panel/product">Услуги</Link>
          </li>
          <li>
            <a href="/#">Выйти</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
