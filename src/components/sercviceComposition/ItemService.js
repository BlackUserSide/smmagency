import React from "react";
export const ItemService = ({ content, bg, bgtop, setDataBay }) => {
  const bayHandler = (e, data) => {
    e.preventDefault();
    setDataBay(data);
  };
  return (
    <div className="item-wrapper">
      <div
        className="top-line"
        style={{
          background: `${bgtop}`,
        }}
      >
        <h3 className="h3">{content.name}</h3>
      </div>
      <div
        className="composition-item-wrapper"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p>{content.price} рублей</p>
        <a href="/#" onClick={(e) => bayHandler(e, content)}>
          Купить
        </a>
      </div>
    </div>
  );
};
