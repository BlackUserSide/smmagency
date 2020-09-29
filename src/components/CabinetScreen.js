import React, { useState } from "react";
import { SettingsCabinet } from "./cabinetComposition/SettingsCabinet";
import { HistoryCabinet } from "./cabinetComposition/HistoryCabinet";
import { NavbarCabinet } from "./cabinetComposition/NavbarCabinet";
import { AdminScreen } from "./adminComposiotion/AdminScreen";

export const CabinetScreen = () => {
  const [loged, setLoged] = useState(false);
  const status = localStorage.getItem("login");

  React.useEffect(() => {
    if (localStorage.getItem("login") === null) {
      window.location.href = "/";
    } else {
      setLoged(true);
    }
  });
  let content = (
    <>
      <NavbarCabinet />
      <main className="cabinet-main">
        <div className="settings-screen">
          <SettingsCabinet />
        </div>
        <div className="history-shop">
          <HistoryCabinet />
        </div>
      </main>
    </>
  );
  return <>{loged ? content : ""}</>;
};
