import React from "react";

import click from "../../image/click.png";
import monitor from "../../image/monitor.png";
import donation from "../../image/donation.png";
import marketing from "../../image/marketing.png";
export const AboutComposition = () => {
  return (
    <div className="about-composition">
      <div className="item-composition">
        <img src={click} alt="" />
        <p>Выбираете вид накрутки и нажимаете "Купить"</p>
      </div>
      <div className="item-composition">
        <img src={monitor} alt="" />
        <p>
          В появившемся окне вводите ссылку на свой инстаграм аккаунт или пост
        </p>
      </div>
      <div className="item-composition">
        <img src={donation} alt="" />
        <p>
          В появившемся окне вводите ссылку на свой инстаграм аккаунт или пост
        </p>
      </div>
      <div className="item-composition">
        <img src={marketing} alt="" />
        <p>
          В появившемся окне вводите ссылку на свой инстаграм аккаунт или пост
        </p>
      </div>
    </div>
  );
};
