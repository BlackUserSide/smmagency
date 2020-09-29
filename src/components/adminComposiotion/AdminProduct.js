import React from "react";
import { useState } from "react";
import axios from "axios";
import { ItemProduct } from "./ItemProduct";
import { FormChange } from "../ui/FormChange";
import { FormAdd } from "../ui/FormAdd";
export const AdminProduct = () => {
  const [data, setData] = useState({
    dataProduct: [],
    popUp: false,
    popUpAdd: false,
  });
  const getData = () => {
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "getAppProduct",
      })
      .then(({ data }) => {
        setData((prev) => ({
          ...prev,
          dataProduct: data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const dataHandler = () => {
    setData((prev) => ({
      ...prev,
      popUp: false,
    }));
    getData();
  };
  React.useEffect(() => {
    getData();
  }, []);
  const addHandler = (e) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      popUpAdd: true,
    }));
  };
  const addFunction = () => {
    setData((prev) => ({
      ...prev,
      popUpAdd: false,
    }));
    getData();
  };
  //console.log(data);
  return (
    <>
      <div className="add-product">
        <a href="/#" onClick={(e) => addHandler(e)}>
          Добавить услугу
        </a>
      </div>
      <div className="admin-product-wrapper">
        {data.dataProduct.map((e, i) => (
          <ItemProduct content={e} key={i} setData={setData} />
        ))}
      </div>
      {data.popUp !== false ? (
        <FormChange data={data.popUp} setData={dataHandler} />
      ) : (
        ""
      )}
      {data.popUpAdd ? (
        <FormAdd setData={setData} addFunction={addFunction} />
      ) : (
        ""
      )}
    </>
  );
};
