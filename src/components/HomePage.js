import React from "react";
import { MainScreen } from "../components/MainScreen";
import { AdvantagesScreen } from "../components/AdvantagesScreen";
import { About } from "../components/About";
import { ServiceScreen } from "../components/ServiceScreen";
export const HomePage = () => {
  return (
    <main className="main-app">
      <MainScreen />
      <AdvantagesScreen />
      <About />
      <ServiceScreen />
    </main>
  );
};
