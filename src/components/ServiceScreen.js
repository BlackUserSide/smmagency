import React, { useState } from "react";
import { NavbarService } from "./sercviceComposition/NavbarService";
import { InstagramService } from "./sercviceComposition/InstagramService";
import { TickTockService } from "./sercviceComposition/TickTokService";
import { FacebookService } from "./sercviceComposition/FacebookService";
import { ClassmatesService } from "./sercviceComposition/ClassmatesService";
import { VkService } from "./sercviceComposition/VkService";
import { BayPopUp } from "./ui/BayPopUp";

export const ServiceScreen = () => {
  const [link, setLink] = useState("0");
  const [popBay, setPopUp] = useState({
    active: false,
    data: {},
  });
  const bayHandler = (data) => {
    setPopUp({
      active: true,
      data: data,
    });
  };
  //React.useEffect(() => console.log(popBay));
  let content = null;
  switch (link) {
    case "0":
      content = <InstagramService setDataBay={(val) => bayHandler(val)} />;
      break;
    case "1":
      content = <TickTockService setDataBay={(val) => bayHandler(val)} />;
      break;
    case "2":
      content = <FacebookService setDataBay={(val) => bayHandler(val)} />;
      break;
    case "3":
      content = <ClassmatesService setDataBay={(val) => bayHandler(val)} />;
      break;
    case "4":
      content = <VkService setDataBay={(val) => bayHandler(val)} />;
      break;
    default:
      content = <InstagramService />;
      break;
  }
  return (
    <section className="s-service">
      <div className="top-line">
        <h1 className="h1">Услуги</h1>
      </div>
      <NavbarService setLink={setLink} link={link} />
      {content}
      <BayPopUp active={popBay} closeActive={setPopUp} />
    </section>
  );
};
