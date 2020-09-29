import React, { useState } from "react";
import axios from "axios";
export const FormRegister = ({ closeActive, active, setStage }) => {
  const [dataUser, setDataUser] = useState({
    login: "",
    password: "",
    message: "",
  });
  const registerHandler = (e) => {
    const nameInp = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (nameInp === "loginUser") {
      setDataUser((prev) => ({
        ...prev,
        login: value,
      }));
    } else {
      setDataUser((prev) => ({
        ...prev,
        password: value,
      }));
    }
  };
  const registerUser = (e) => {
    e.preventDefault();
    if (dataUser.login !== "" && dataUser.password) {
      const url = "https://newsitetesting.ru/test";
      axios
        .post(url, {
          method: "register",
          login: dataUser.login,
          password: dataUser.password,
        })
        .then((response) => {
          //console.log(response.data);
          if (response.data.status === "exist") {
            setDataUser((prev) => ({
              ...prev,
              message: "Логин занят",
            }));
          } else {
            setDataUser((prev) => ({
              ...prev,
              message: "Регистрация прошла успешно",
            }));
            setTimeout(() => {
              closeActive({
                active: false,
                data: {},
              });
            }, 3000);
            setStage({
              userLink: "",
              message: null,
              stage: "1",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  };
  return (
    <>
      <div
        className={`bg-pop-up ${active.active ? "is-bay-active" : ""}`}
        onClick={() =>
          closeActive({
            active: false,
            data: {},
          })
        }
      ></div>
      <form
        className={`register-form ${active.active ? "is-bay-active" : ""}`}
        onSubmit={(e) => registerUser(e)}
      >
        <div className="message-register">
          <p></p>
        </div>
        <div className="top-line-form">
          <h1 className="h1">Зарегистрироваться</h1>
        </div>
        <input
          type="text"
          name="loginUser"
          required
          placeholder="Введите ваш логин"
          onChange={(e) => registerHandler(e)}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Введите ваш пароль"
          onChange={(e) => registerHandler(e)}
        ></input>
        <button>Зарегистрироваться</button>
      </form>
    </>
  );
};
