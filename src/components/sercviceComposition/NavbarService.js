import React from "react";

export const NavbarService = ({ setLink, link }) => {
  const changeHandler = React.useCallback(
    (e, val) => {
      e.preventDefault();
      setLink(val);
    },
    [setLink]
  );
  return (
    <nav className="service-nav">
      <ul>
        <li>
          <a
            href="/#"
            className={`service-link ${link === "0" ? "is-active" : ""}`}
            onClick={(e) => changeHandler(e, "0")}
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={`service-link ${link === "1" ? "is-active" : ""}`}
            onClick={(e) => changeHandler(e, "1")}
          >
            Tik-Tok
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={`service-link ${link === "2" ? "is-active" : ""}`}
            onClick={(e) => changeHandler(e, "2")}
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={`service-link ${link === "3" ? "is-active" : ""}`}
            onClick={(e) => changeHandler(e, "3")}
          >
            Одноклассники
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={`service-link ${link === "4" ? "is-active" : ""}`}
            onClick={(e) => changeHandler(e, "4")}
          >
            Вконтакте
          </a>
        </li>
      </ul>
    </nav>
  );
};
