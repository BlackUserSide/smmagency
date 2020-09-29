import React, { useState } from "react";
import axios from "axios";
import { ItemOrder } from "./ItemOrder";
export const AdminOrders = () => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "getAllOrder",
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="orders-wrapper-admin">
      {data.map((e, i) => (
        <ItemOrder content={e} key={i} />
      ))}
    </div>
  );
};
