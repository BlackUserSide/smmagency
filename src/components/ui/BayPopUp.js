import React, { useState } from "react";
import { FormBay } from "../../components/ui/formBau";
import { FormRegister } from "./FormRegister";
import axios from "axios";
export const BayPopUp = ({ active, closeActive }) => {
  const [userLink, setUserLink] = useState({
    userLink: "",
    message: null,
    stage: "1",
  });
  //React.useEffect(() => console.log(active));
  const submitHandler = (e) => {
    e.preventDefault();
    const int = Math.floor(Math.random() * (99999 - 0)) + 0;
    let id = null;
    if (localStorage.getItem("id") !== null) {
      id = localStorage.getItem("id");
    } else {
      id = "";
    }
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "setOrder",
        userLink: userLink.userLink,
        numberOrder: int,
        idProd: active.data.id,
        idUser: id,
        price: active.data.price,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    setUserLink((prev) => ({
      ...prev,
      message: "Заказ отправлен в обработку.",
    }));
    if (localStorage.getItem("login") !== null) {
      setTimeout(() => {
        closeActive({
          active: false,
          data: {},
        });
      }, 900);
    } else {
      setTimeout(() => {
        setUserLink((prev) => ({
          ...prev,
          message: null,
          stage: "2",
        }));
      }, 900);
    }
  };
  const changeHandler = (e) => {
    let value = e.currentTarget.value;
    setUserLink((prev) => ({
      ...prev,
      userLink: value,
    }));
  };
  let stages = "";
  if (userLink.stage === "1") {
    stages = (
      <FormBay
        change={changeHandler}
        active={active}
        closeActive={closeActive}
        submit={submitHandler}
        userLink={userLink}
      />
    );
  } else {
    stages = (
      <FormRegister
        closeActive={closeActive}
        active={active}
        setStage={setUserLink}
      />
    );
  }

  return <>{stages}</>;
};
