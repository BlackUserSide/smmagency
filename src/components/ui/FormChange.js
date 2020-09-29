import React, { useState } from "react";

import axios from "axios";

export const FormChange = ({ data, setData }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    price: "",
    category: "",
  });
  React.useEffect(() => {
    console.log(dataForm);
    console.log(data);
  });
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
    if (
      dataForm.name !== "" &&
      dataForm.price !== "" &&
      dataForm.category !== ""
    ) {
      const url = "https://newsitetesting.ru/test";
      axios
        .post(url, {
          method: "changeProduct",
          id: data.id,
          name: dataForm.name,
          price: dataForm.price,
          category: dataForm.category,
        })
        .then(({ data }) => {
          setData();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (dataForm.name === "") {
        setDataForm((prev) => ({
          ...prev,
          name: data.name,
        }));
      }
      if (dataForm.price === "") {
        setDataForm((prev) => ({
          ...prev,
          price: data.price,
        }));
      }
      if (dataForm.category === "") {
        setDataForm((prev) => ({
          ...prev,
          category: data.category,
        }));
      }
    }
  };
  return (
    <>
      <div
        className="bg-pop-up is-bay-active"
        onClick={() =>
          setData((prev) => ({
            ...prev,
            popUp: false,
          }))
        }
      ></div>
      <form className="change-product" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="name"
          onChange={(e) => changeHandler(e)}
          defaultValue={data.name}
        />
        <input
          type="text"
          name="price"
          onChange={(e) => changeHandler(e)}
          defaultValue={data.price}
        />
        <br />
        <select
          name="category"
          onChange={(e) => changeHandler(e)}
          defaultValue={data.category}
        >
          <option value="1">Instagram</option>
          <option value="2">FaceBook</option>
          <option value="3">Tik-Tok</option>
          <option value="4">Одноклассники</option>
          <option value="5">ВКонтакте</option>
        </select>
        <br />
        <button type="submit">Изменить</button>
      </form>
    </>
  );
};
