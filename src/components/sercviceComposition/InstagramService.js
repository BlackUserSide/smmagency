import React, { useState } from "react";
import { ItemService } from "./ItemService";
import instabg from "../../image/Vector.png";
import axios from "axios";
export const InstagramService = ({ setDataBay }) => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "getInst",
        id: "1",
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bgTol =
    "linear-gradient(138.73deg, #4F5BD5 0%, #962FBF 26.04%, #D62976 51.04%, #FA7E1E 72.92%, #FEDA75 100%)";
  return (
    <div className="service-wrapper">
      {data.map((e, i) => (
        <ItemService
          content={e}
          key={i}
          bg={instabg}
          bgtop={bgTol}
          setDataBay={setDataBay}
        />
      ))}
    </div>
  );
};
