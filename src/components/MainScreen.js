import React from "react";
import { Header } from "./headerScreen/Header";
import { MainComposition } from "./headerScreen/MainComposition";

export const MainScreen = () => {
  return (
    <div className="main-screen-app">
      <Header />
      <MainComposition />
    </div>
  );
};
