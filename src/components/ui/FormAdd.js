import React, { useState } from "react";
import axios from "axios";

export const FormAdd = ({ setData, addFunction }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    price: "",
    category: "",
  });
  React.useEffect(() => console.log(dataForm));
  const changeHandler = (e) => {
    let name = e.currentTarget.name;
    let val = e.currentTarget.value;
    if (name === "name") {
      setDataForm((prev) => ({
        ...prev,
        name: val,
      }));
    } else if (name === "price") {
      setDataForm((prev) => ({
        ...prev,
        price: val,
      }));
    } else {
      setDataForm((prev) => ({
        ...prev,
        category: val,
      }));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "addService",
        name: dataForm.name,
        price: dataForm.price,
        category: dataForm.category,
      })
      .then(({ data }) => {
        addFunction();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        className="bg-pop-up is-bay-active"
        onClick={() =>
          setData((prev) => ({
            ...prev,
            popUpAdd: false,
          }))
        }
      ></div>
      <form className="add-service" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="name"
          placeholder="Введите имя услуги"
          onChange={(e) => changeHandler(e)}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Введите цену"
          onChange={(e) => changeHandler(e)}
          required
        />
        <select name="category" onChange={(e) => changeHandler(e)}>
          <option value="1">Instagram</option>
          <option value="2">FaceBook</option>
          <option value="3">Tik-Tok</option>
          <option value="4">Одноклассники</option>
          <option value="5">ВКонтакте</option>
        </select>
        <br />
        <button type="submit">Добавить</button>
      </form>
    </>
  );
};
