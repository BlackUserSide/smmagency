import React, { useState } from "react";
import axios from "axios";
import instaIcon from "../../image/instaIcon.png";
import vkIcon from "../../image/vkIcon.png";
import faceIcon from "../../image/facebookIcon.png";
import TickTokIcon from "../../image/TikTokIcon.png";
import odnIcon from "../../image/odnIcon.png";
export const ItemOrder = ({ content }) => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "getOrderProd",
        id: content.idProduct,
      })
      .then(({ data }) => {
        data.map((val) => {
          setData(val);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let icon = null;
  switch (data.category) {
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
    <div className="item-order">
      <img src={icon} alt="" />
      <p>{content.id}</p>
      <p>{content.userLink}</p>
      <p>{data.name}</p>
      <p>{content.price}</p>
    </div>
  );
};
