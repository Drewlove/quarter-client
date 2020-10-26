import React from "react";
import { Switch, Route } from "react-router-dom";
import SalesForm from "./SalesForm";
import CogsForm from "./CogsForm";

function FormsRouter() {
  return (
    <Switch>
      <Route path="/form/sales"><SalesForm /></Route>
      <Route path="/form/cogs"><CogsForm /></Route>
    </Switch>
  );
}

export default FormsRouter;
