import React from "react";
import icon1 from "../../image/icon1.png";
import icon2 from "../../image/icon2.png";
import icon3 from "../../image/icon3.png";
export const AdvantagesComposition = () => {
  return (
    <div className="advantages-composition">
      <div className="item-advantages">
        <img src={icon1} alt="" />
        <p>
          Запуск в работу в течение 2х минут после покупки лайков или
          подписчиков
        </p>
      </div>
      <div className="item-advantages">
        <img src={icon2} alt="" />
        <p>
          Для запуска накрутки лайков и подписчиков не требуются данные для
          входа в ваш аккаунт
        </p>
      </div>
      <div className="item-advantages">
        <img src={icon3} alt="" />
        <p>
          На сайте возможно накрутить любые показатели. Подписчики, лайки и
          автолайки для социальных сетей!
        </p>
      </div>
    </div>
  );
};
