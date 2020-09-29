import React, { useState } from "react";
import instaIcon from "../../image/instaIcon.png";
import vkIcon from "../../image/vkIcon.png";
import faceIcon from "../../image/facebookIcon.png";
import TickTokIcon from "../../image/TikTokIcon.png";
import odnIcon from "../../image/odnIcon.png";
import axios from "axios";
export const HistoryItem = ({ data }) => {
  const [dataProd, setDataProd] = useState({});
  React.useEffect(() => {
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "getOrderProd",
        id: data.idProduct,
      })
      .then(({ data }) => {
        //setDataProd(data);'

        data.map((name) => {
          setDataProd(name);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //console.log(dataProd);
  let icon = "";
  switch (dataProd.category) {
    default:
      break;
    case "1":
      icon = instaIcon;
      break;
    case "2":
      icon = faceIcon;
      break;
    case "3":
      icon = TickTokIcon;
      break;
    case "4":
      icon = odnIcon;
      break;
    case "5":
      icon = vkIcon;
      break;
  }
  return (
    <div className="history-item">
      <img src={icon} alt="" />
      <p className="service-history">{dataProd.name}</p>
      <p className="date-order">{data.date}</p>
      <p className="price-hist">{dataProd.price}</p>
    </div>
  );
};
