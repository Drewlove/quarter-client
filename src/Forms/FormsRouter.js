import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemForm from "./LineItemForm/LineItemForm";
import CogsForm from "./CogsForm/CogsForm";

function FormsRouter() {
  return (
    <Switch>
      {/* <Route path="/form/cogs/">
        <CogsForm />
      </Route> */}
      <Route path="/form/:category/:lineItem">
        <LineItemForm />
      </Route>
    </Switch>
  );
}

export default FormsRouter;
