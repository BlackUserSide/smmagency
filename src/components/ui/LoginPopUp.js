import React, { useState } from "react";
import axios from "axios";
export const LoginPopUp = ({ popUp, closePop }) => {
  const [formData, setFormData] = useState({
    message: "",
    login: "",
    password: "",
  });
  const formatingHandler = (e, val) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    if (name === "login") {
      setFormData((prev) => ({
        ...prev,
        login: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        password: value,
      }));
    }
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (formData.login !== "" || formData.password !== "") {
      const url = "https://newsitetesting.ru/test";
      axios
        .post(url, {
          method: "login",
          login: formData.login,
          password: formData.password,
        })
        .then((response) => {
          //console.log(response.data);
          if (response.data.status === "success") {
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("login", response.data.login);
            window.location.href = "/cabinet";
          } else {
            setFormData((prev) => ({
              ...prev,
              message: "Неправильный логин или пароль",
            }));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div
        className={`login-form ${popUp ? "pop-active" : ""}`}
        onClick={() => closePop(false)}
      ></div>
      <form
        className={`login-wrapper ${popUp ? "popForm-active" : ""}`}
        onSubmit={loginHandler}
      >
        <div className="form-err">
          <p>{formData.message}</p>
        </div>
        <label>Логин</label>
        <br />
        <input
          type="text"
          onChange={(e, val) => formatingHandler(e, val)}
          name="login"
        />{" "}
        <br />
        <label>Пароль</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={(e, val) => formatingHandler(e, val)}
        />
        <br />
        <button type="submit">Войти</button>
      </form>
    </>
  );
};
