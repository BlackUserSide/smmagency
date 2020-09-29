import React from "react";
import "./App.sass";

import { BrowserRouter as Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CabinetScreen } from "./components/CabinetScreen";
import { AdminScreen } from "./components/adminComposiotion/AdminScreen";
import { AdminOrders } from "./components/adminComposiotion/AdminOrders";
import { AdminProduct } from "./components/adminComposiotion/AdminProduct";

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cabinet" component={CabinetScreen} />
      <Route path="/panel" component={AdminScreen} />
      <Route path="/panel/orders" component={AdminOrders} />
      <Route path="/panel/product" component={AdminProduct} />
    </Switch>
  );
};
