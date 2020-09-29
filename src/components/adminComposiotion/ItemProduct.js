import React from "react";

export const ItemProduct = ({ content, setData }) => {
  const changeForm = (e) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      popUp: content,
    }));
  };
  return (
    <div className="item-product">
      <div className="top-line">
        <h3 className="h3">{content.name}</h3>
      </div>
      <div className="composition-product">
        <p>{content.price}</p>
        <a href="/#" onClick={(e) => changeForm(e)}>
          Редактировать
        </a>
      </div>
    </div>
  );
};
