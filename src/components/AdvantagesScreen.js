import React from "react";
import { AdvantagesComposition } from "./advantagesScreen/AdvantagesComposition";

export const AdvantagesScreen = () => {
  return (
    <section className="s-advantages">
      <div className="top-line">
        <h1 className="h1">Наши преимущества</h1>
      </div>
      <AdvantagesComposition />
    </section>
  );
};
