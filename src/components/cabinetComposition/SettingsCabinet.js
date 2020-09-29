import React from "react";

export const SettingsCabinet = () => {
  const login = localStorage.getItem("login");
  return (
    <div className="settings-change">
      <h1 className="h1">Настройки</h1>
      <p className="logo-login">Логин</p>
      <p className="val-log">{login}</p>
    </div>
  );
};
