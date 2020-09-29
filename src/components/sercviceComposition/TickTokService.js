import React, { useState } from "react";
import { ItemService } from "./ItemService";
import bg from "../../image/ticktok.png";
import axios from "axios";
export const TickTockService = ({ setDataBay }) => {
  const bgTol = "#000";
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "getInst",
        id: "3",
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="service-wrapper">
      {data.map((e, i) => (
        <ItemService
          content={e}
          key={i}
          bg={bg}
          bgtop={bgTol}
          setDataBay={setDataBay}
        />
      ))}
    </div>
  );
};
