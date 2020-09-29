import React from "react";
import instLog from "../../image/inst.png";
import bgPhone from "../../image/bglow.png";
export const MainComposition = () => {
  return (
    <div className="main-composition">
      <div className="text-composition">
        <h1 className="h1">Продвижение Социальных сетей</h1>
        <p>Привлечение живых подписчиков, новых лайков</p>
        <a href="/#">Подробнее</a>
        <div className="image-bg-wrapper">
          <img src={instLog} alt="" />
        </div>
      </div>
      <div className="image-wrapper-header">
        <img src={bgPhone} alt="" />
      </div>
    </div>
  );
};
