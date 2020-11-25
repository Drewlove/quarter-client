import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemForm from "./LineItemForm/LineItemForm";

function FormsRouter() {
  return (
    <Switch>
      <Route path="/form/:category/:lineItem">
        <LineItemForm />
      </Route>
    </Switch>
  );
}

export default FormsRouter;
